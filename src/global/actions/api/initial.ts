import {addActionHandler, getGlobal, setGlobal,} from '../../index';

import {callApi, callApiLocal, initApi} from '../../../api/gramjs';

import {
  CUSTOM_BG_CACHE_NAME,
  IS_TEST,
  LANG_CACHE_NAME,
  LOCK_SCREEN_ANIMATION_DURATION_MS,
  MEDIA_CACHE_NAME,
  MEDIA_CACHE_NAME_AVATARS,
  MEDIA_PROGRESSIVE_CACHE_NAME, SESSION_TOKEN,
} from '../../../config';
import {IS_MOV_SUPPORTED, IS_WEBM_SUPPORTED, MAX_BUFFER_SIZE, PLATFORM_ENV,} from '../../../util/environment';
import {unsubscribe} from '../../../util/notifications';
import * as cacheApi from '../../../util/cacheApi';
import {updateAppBadge} from '../../../util/appBadge';
import {
  clearLegacySessions,
  clearStoredSession,
  importLegacySession,
  loadStoredSession,
  storeSession,
} from '../../../util/sessions';
import {forceWebsync} from '../../../util/websync';
import {addUsers, clearGlobalForLockScreen, updatePasscodeSettings} from '../../reducers';
import {clearEncryptedSession, encryptSession, forgetPasscode} from '../../../util/passcode';
import {serializeGlobal} from '../../cache';
import {parseInitialLocationHash} from '../../../util/routing';
import type {ActionReturnType} from '../../types';
import {getCurrentTabId} from '../../../util/establishMultitabRole';
import {buildCollectionByKey} from '../../../util/iteratees';
import MsgConn, {MsgClientState, MsgConnNotify, MsgConnNotifyAction} from "../../../lib/client/msgConn";
import parseMessageInput from "../../../util/parseMessageInput";



addActionHandler('updateGlobal', (global,action,payload): ActionReturnType => {
  return {
    ...global,
    ...payload,
  };
});


addActionHandler('updateMsg', (global,actions,payload): ActionReturnType => {
  console.log("[updateMsg]",payload.data);
  switch (payload.action){
    case "login":
      if(payload.err){
        return {
          ...global,
          authState:"authorizationStateWaitRegistration",
          connectionState:"connectionStateReady",
          currentUserId:undefined,
          users:{
            ...global.users,
            byId:{

            }
          }
        }
      }else{
        return {
          ...global,
          connectionState:"connectionStateReady",
          currentUserId:payload.data.currentUserId,
          users:{
            ...global.users,
            byId:{
              ...global.users.byId,
              [payload.data.currentUserId]:payload.data.currentUser
            }
          }
        }
      }

    case "newMessage":
    case "updateMessageSendSucceeded":
      handleRecvMsg(global,actions,payload.data)
      break
    default:
      const {action,...data} = payload;
      actions.apiUpdate({
        '@type': action,
        ...data
      });
      break
  }

});

const handleRecvMsg = (global,actions,data)=>{
  let {msg,localMsgId} = data;
  const {chatId,content} = msg;
  if(!content.text.entities){
    const { text, entities } = parseMessageInput(content.text.text);
    msg = {
      ...msg,
      content:{
        text:{
          text,
          entities
        }
      }
    }
  }

  actions.apiUpdate({
    '@type': 'updateMessageSendSucceeded',
    localId: localMsgId,
    chatId: chatId,
    message: {
      sendingState:undefined,
      ...msg
    },
  });
}

addActionHandler('initApi', async (global, actions): Promise<void> => {
  if (!IS_TEST) {
    await importLegacySession();
    void clearLegacySessions();
  }

  const initialLocationHash = parseInitialLocationHash();

  void initApi(actions.apiUpdate, {
    userAgent: navigator.userAgent,
    platform: PLATFORM_ENV,
    sessionData: loadStoredSession(),
    isTest: window.location.search.includes('test') || initialLocationHash?.tgWebAuthTest === '1',
    isMovSupported: IS_MOV_SUPPORTED,
    isWebmSupported: IS_WEBM_SUPPORTED,
    maxBufferSize: MAX_BUFFER_SIZE,
    webAuthToken: initialLocationHash?.tgWebAuthToken,
    dcId: initialLocationHash?.tgWebAuthDcId ? Number(initialLocationHash?.tgWebAuthDcId) : undefined,
    mockScenario: initialLocationHash?.mockScenario,
  });

  const msgConn = new MsgConn(1001);
  msgConn.setMsgHandler(async (accountId,notifys:MsgConnNotify[])=>{
    if(notifys && notifys.length > 0){
      for (let i = 0; i < notifys.length; i++) {
        const notify = notifys[i];
        switch (notify.action){
          case MsgConnNotifyAction.onData:
            const payload = notify.payload;
            console.log("onData",payload)
            actions.updateMsg(payload);
            break;
        }
      }
    }
  })
  await msgConn.connect();
  await msgConn.waitForMsgServerState(MsgClientState.connected);
});

addActionHandler('setAuthPhoneNumber', (global, actions, payload): ActionReturnType => {
  const { phoneNumber } = payload!;

  void callApi('provideAuthPhoneNumber', phoneNumber.replace(/[^\d]/g, ''));

  return {
    ...global,
    authIsLoading: true,
    authError: undefined,
  };
});

addActionHandler('setAuthCode', (global, actions, payload): ActionReturnType => {
  const { code } = payload!;

  void callApi('provideAuthCode', code);

  return {
    ...global,
    authIsLoading: true,
    authError: undefined,
  };
});

addActionHandler('setAuthPassword', (global, actions, payload): ActionReturnType => {
  const { password } = payload!;

  void callApi('provideAuthPassword', password);

  return {
    ...global,
    authIsLoading: true,
    authError: undefined,
  };
});

addActionHandler('uploadProfilePhoto', async (global, actions, payload): Promise<void> => {
  const {
    file, isFallback, isVideo, videoTs,
  } = payload!;

  const result = await callApi('uploadProfilePhoto', file, isFallback, isVideo, videoTs);
  if (!result) return;

  global = getGlobal();
  global = addUsers(global, buildCollectionByKey(result.users, 'id'));
  setGlobal(global);

  actions.loadFullUser({ userId: global.currentUserId! });
});

addActionHandler('signUp', (global, actions, payload): ActionReturnType => {
  const { firstName, lastName } = payload!;

  void callApi('provideAuthRegistration', { firstName, lastName });

  return {
    ...global,
    authIsLoading: true,
    authError: undefined,
  };
});

addActionHandler('returnToAuthPhoneNumber', (global): ActionReturnType => {
  void callApi('restartAuth');

  return {
    ...global,
    authError: undefined,
  };
});

addActionHandler('goToAuthQrCode', (global): ActionReturnType => {
  void callApi('restartAuthWithQr');

  return {
    ...global,
    authIsLoadingQrCode: true,
    authError: undefined,
  };
});

addActionHandler('saveSession', (global, actions, payload): ActionReturnType => {
  if (global.passcode.isScreenLocked) {
    return;
  }

  const { sessionData } = payload;
  if (sessionData) {
    storeSession(sessionData, global.currentUserId);
  } else {
    clearStoredSession();
  }
});

addActionHandler('signOut', async (global, actions, payload): Promise<void> => {
  // if ('hangUp' in actions) actions.hangUp({ tabId: getCurrentTabId() });
  // if ('leaveGroupCall' in actions) actions.leaveGroupCall({ tabId: getCurrentTabId() });
  //
  // try {
  //   await unsubscribe();
  //   await callApi('destroy');
  //   await forceWebsync(false);
  // } catch (err) {
  //   // Do nothing
  // }
  //
  // actions.reset();
  //
  // if (payload?.forceInitApi) {
  //   actions.initApi();
  // }
  window.localStorage.removeItem(SESSION_TOKEN);
  setGlobal({
    ...global,
    currentUserId:"",
    authState:"authorizationStateWaitRegistration",
  })
});

addActionHandler('reset', (global, actions): ActionReturnType => {
  clearStoredSession();
  clearEncryptedSession();

  void cacheApi.clear(MEDIA_CACHE_NAME);
  void cacheApi.clear(MEDIA_CACHE_NAME_AVATARS);
  void cacheApi.clear(MEDIA_PROGRESSIVE_CACHE_NAME);
  void cacheApi.clear(CUSTOM_BG_CACHE_NAME);

  const langCachePrefix = LANG_CACHE_NAME.replace(/\d+$/, '');
  const langCacheVersion = (LANG_CACHE_NAME.match(/\d+$/) || [0])[0];
  for (let i = 0; i < langCacheVersion; i++) {
    void cacheApi.clear(`${langCachePrefix}${i === 0 ? '' : i}`);
  }

  void clearLegacySessions();

  updateAppBadge(0);

  actions.initShared({ force: true });
  Object.values(global.byTabId).forEach(({ id: otherTabId, isMasterTab }) => {
    actions.init({ tabId: otherTabId, isMasterTab });
  });
});

addActionHandler('disconnect', (): ActionReturnType => {
  void callApiLocal('disconnect');
});

addActionHandler('destroyConnection', (): ActionReturnType => {
  void callApiLocal('destroy', true, true);
});

addActionHandler('loadNearestCountry', async (global): Promise<void> => {
  if (global.connectionState !== 'connectionStateReady') {
    return;
  }

  const authNearestCountry = await callApi('fetchNearestCountry');

  global = getGlobal();
  global = {
    ...global,
    authNearestCountry,
  };
  setGlobal(global);
});

addActionHandler('setDeviceToken', (global, actions, deviceToken): ActionReturnType => {
  return {
    ...global,
    push: {
      deviceToken,
      subscribedAt: Date.now(),
    },
  };
});

addActionHandler('deleteDeviceToken', (global): ActionReturnType => {
  return {
    ...global,
    push: undefined,
  };
});

addActionHandler('lockScreen', async (global): Promise<void> => {
  const sessionJson = JSON.stringify({ ...loadStoredSession(), userId: global.currentUserId });
  const globalJson = await serializeGlobal(global);

  await encryptSession(sessionJson, globalJson);
  forgetPasscode();
  clearStoredSession();
  updateAppBadge(0);

  global = getGlobal();
  global = updatePasscodeSettings(
    global,
    {
      isScreenLocked: true,
      invalidAttemptsCount: 0,
    },
  );
  setGlobal(global);

  setTimeout(() => {
    global = getGlobal();
    global = clearGlobalForLockScreen(global);
    setGlobal(global);
  }, LOCK_SCREEN_ANIMATION_DURATION_MS);

  try {
    await unsubscribe();
    await callApi('destroy', true);
  } catch (err) {
    // Do nothing
  }
});
