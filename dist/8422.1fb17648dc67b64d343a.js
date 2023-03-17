"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[8422],{2503:(t,e,a)=>{a.d(e,{X9:()=>Z,Co:()=>H,ft:()=>T});var s=a(33555),i=a(6137),o=a(91713),d=a(83716),n=a(71226),r=a(25260),c=a(11192),l=a(60782),h=a(69118),u=a(56112),I=a(53551),p=a(78958),V=a(42431),f=a(16974),C=a(50711),w=a(9211),b=a(44271),g=a(65054),m=a(78572),R=a(82752),y=a(44107);class A extends R.ZP{constructor(t){super("PTP.Chats.LoadChatsReq",t),this.setCommandId(y.Qx.CID_LoadChatsReq)}decode(t){return this.__D(t)}pack(){return this.__pack()}static parseMsg(t){return(new A).decode(t.getPbBody())}}class v extends R.ZP{constructor(t){super("PTP.Chats.LoadChatsRes",t),this.setCommandId(y.Qx.CID_LoadChatsRes)}decode(t){return this.__D(t)}pack(){return this.__pack()}static parseMsg(t){return(new v).decode(t.getPbBody())}}var M=a(37029);d.awM;const P=(0,h.P2)((t=>t()),3e3,!0),_=(0,h.Ds)((t=>t()),500,!1,!0);async function B(t,e,a,o,n=!1,h){t=(0,s.Rd)();let u=(0,c.VF)(t)?.message;try{const I=await(m.Z.getCurrentAccount()?.sendPduWithCallback(new A({limit:d.Ov0,offsetDate:o,archived:"archived"===e,withPinned:n}).pack()));if(!I)return;const p=v.parseMsg(I);if(!p||p.err!==M.w.NO_ERROR)return;const V=JSON.parse(p.payload),{chatIds:f}=V;if(f.length>0&&f[0]===a&&f.shift(),t=(0,s.Rd)(),u=(0,c.VF)(t)?.message,n&&"active"===e){const a=Object.values(t.byTabId),s=a.flatMap((({id:e})=>{const a=(0,c.jr)(t,e);return a?[a]:[]})),i=a.flatMap((({id:e})=>(0,c.P2)(t,e)||[]));t.currentUserId&&t.users.byId[t.currentUserId]&&i.push(t.users.byId[t.currentUserId]),t=(0,r.s5)(t,(0,l.ee)(i.concat(V.users),"id")),t=(0,r.ps)(t,V.userStatusesById),t=(0,r.SL)(t,(0,l.ee)(s.concat(V.chats),"id")),t=(0,r.B1)(t,e,f),t={...t,chatFolders:V.chatFolders}}else if(n&&"archived"===e)t=(0,r.Sh)(t,(0,l.ee)(V.users,"id")),t=(0,r.zn)(t,V.userStatusesById),t=(0,r.GL)(t,(0,l.ee)(V.chats,"id")),t=(0,r.Mg)(t,e,f);else{const a=(0,l.ee)(V.chats,"id");if(f.includes(d.awM)){const t=a[d.awM];t&&u&&(a[d.awM]={...t,lastMessage:u})}t=(0,r.Sh)(t,(0,l.ee)(V.users,"id")),t=(0,r.zn)(t,V.userStatusesById),t=(0,r.GL)(t,a),t=(0,r.B1)(t,e,f)}t=(0,r.vv)(t,e,V),(h?V.chatIds:Object.keys(V.draftsById)).forEach((e=>{const a=V.draftsById[e],s=(0,c.ci)(t,e,i._f);(a||s)&&((0,c.Ms)(t,e,i._f)?.isLocal||(t=(0,r.pf)(t,e,i._f,"draft",a)))})),(h?V.chatIds:Object.keys(V.replyingToById)).forEach((e=>{const a=V.replyingToById[e],s=(0,c.ci)(t,e,i._f);(a||s)&&(t=(0,r.pf)(t,e,i._f,"replyingToId",a))})),t={...t,chats:{...t.chats,isFullyLoaded:{...t.chats.isFullyLoaded,[e]:!0}}},(0,s.R3)(t)}catch(t){console.error(t)}}async function T(t,e,a,...[i=(0,g._w)()]){const o=await(0,n.t9)("fetchFullChat",a);if(!o)return;const{users:d,userStatusesById:c,fullInfo:h,groupCall:u,membersCount:I}=o;if(t=(0,s.Rd)(),d&&(t=(0,r.Sh)(t,(0,l.ee)(d,"id"))),c&&(t=(0,r.zn)(t,c)),u){const e=(0,V.$5)(t,u.id);t=(0,p.AH)(t,u.id,(0,l.CE)(u,["connectionState"]),void 0,e?void 0:u.participantsCount)}t=(0,r.a4)(t,a.id,{fullInfo:h,...I&&{membersCount:I}}),(0,s.R3)(t);const f=h.stickerSet;return f&&e.loadStickers({stickerSetInfo:{id:f.id,accessHash:f.accessHash},tabId:i}),o}async function H(t,e){t=(0,s.Rd)();const a=(0,c.DI)(t,e);if(a&&!a.isMin)return a;const{chat:i,user:o}=await(0,n.t9)("getChatByUsername",e)||{};return i?(t=(0,s.Rd)(),t=(0,r.a4)(t,i.id,i),o&&(t=(0,r.Nq)(t,o.id,o)),(0,s.R3)(t),i):void 0}async function F(t,e,a,...[i=(0,g._w)()]){const o=await H(t,a);if(!o)return;t=(0,s.Rd)();const d=(0,c.dy)(t,o.id);if(!d)return;if(!(0,u.cS)(d))return;const h=await(0,n.t9)("loadAttachBot",{bot:d});if(t=(0,s.Rd)(),h)return t=(0,r.Sh)(t,(0,l.ee)(h.users,"id")),(0,s.R3)(t),h.bot;e.showNotification({message:C.Iu("WebApp.AddToAttachmentUnavailableError"),tabId:i})}async function S(t,e,a,i,o,...[d=(0,g._w)()]){t=(0,s.Rd)();const n=await F(t,e,i,d);n&&e.callAttachBot({bot:n,chatId:a,..."string"==typeof o&&{startParam:o},tabId:d})}async function Z(t,e,a,...[s=(0,g._w)()]){const i=(0,c.Z1)(t,a);if(!i||!(0,u.G9)(i))return i;const o=await async function(t,e,a,...[s=(0,g._w)()]){try{return await(0,n.t9)("migrateChat",a)}catch(t){return void("CHANNELS_TOO_MUCH"===t.message?e.openLimitReachedModal({limit:"channels",tabId:s}):e.showDialog({data:{...t,hasErrorKey:!0},tabId:s}))}}(0,e,i,s);return o?(e.openChat({id:o.id,tabId:s}),o):void 0}(0,s.iw)("preloadTopChatMessages",(async(t,e)=>{const a=new Set;for(let o=0;o<d.ulj;o++){await(0,h.wO)(100),t=(0,s.Rd)();const o=Object.values(t.byTabId).map((({id:e})=>(0,c.Bt)(t,e)?.chatId)).filter(Boolean),n=(0,f.gO)(d.NfV)?.find((t=>!o.includes(t)&&!a.has(t)));if(!n)return;a.add(n),e.loadViewportMessages({chatId:n,threadId:i._f,tabId:(0,g._w)()})}})),(0,s.iw)("openChat",((t,e,a)=>{const{id:s,threadId:o=i._f}=a;if(!s)return;const{currentUserId:d}=t,r=(0,c.Z1)(t,s);if(r?.hasUnreadMark&&e.toggleChatUnread({id:s}),r)(0,u.Hp)(r)&&r.isMin;else if(s===d)(0,n.t9)("fetchChat",{type:"self"});else{const e=(0,c.dy)(t,s);e&&(0,n.t9)("fetchChat",{type:"user",user:e})}o!==i._f&&e.requestThreadInfoUpdate({chatId:s,threadId:o})})),(0,s.iw)("openComments",(async(t,e,a)=>{const{id:o,threadId:h,originChannelId:u,tabId:I=(0,g._w)()}=a;if(h!==i._f){const a=(0,c.qS)(t,o,h);if(a)e.openChat({id:o,threadId:a,tabId:I});else{const a=(0,c.Cm)(t,o,h);if(!a)return;e.openChat({id:d.mzl,tabId:I});const i=await(0,n.t9)("requestThreadInfoUpdate",{chat:a,threadId:h,originChannelId:u});if(!i)return void e.openPreviousChat({tabId:I});t=(0,s.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(i.users,"id")),(0,s.R3)(t),e.openChat({id:o,threadId:i.topMessageId,tabId:I})}}})),(0,s.iw)("openLinkedChat",(async(t,e,a)=>{const{id:s,tabId:i=(0,g._w)()}=a,o=(0,c.Z1)(t,s);if(!o)return;const d=await(0,n.t9)("fetchFullChat",o);d?.fullInfo?.linkedChatId&&e.openChat({id:d.fullInfo.linkedChatId,tabId:i})})),(0,s.iw)("focusMessageInComments",(async(t,e,a)=>{const{chatId:i,threadId:o,messageId:d,tabId:h=(0,g._w)()}=a,u=(0,c.Z1)(t,i);if(!u)return;const I=await(0,n.t9)("requestThreadInfoUpdate",{chat:u,threadId:o});I&&(t=(0,s.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(I.users,"id")),(0,s.R3)(t),e.focusMessage({chatId:i,threadId:o,messageId:d,tabId:h}))})),(0,s.iw)("openSupportChat",(async(t,e,a)=>{const{tabId:s=(0,g._w)()}=a||{},i=(0,c.P_)(t);if(i)return void e.openChat({id:i.id,shouldReplaceHistory:!0,tabId:s});e.openChat({id:d.mzl,shouldReplaceHistory:!0,tabId:s});const o=await(0,n.t9)("fetchChat",{type:"support"});o&&e.openChat({id:o.chatId,shouldReplaceHistory:!0,tabId:s})})),(0,s.iw)("loadAllChats",(async(t,e,a)=>{const i=a.listType;if("archived"===i)return;const{onReplace:o}=a;let{shouldReplace:n}=a,r=0;const l=t=>t.lastMessage?.date||t.joinDate;for(;n||!t.chats.isFullyLoaded[i];){if(r++>=100)return void(d.eMD&&console.error("`actions/loadAllChats`: Infinite loop detected"));if("connectionStateReady"!==(t=(0,s.Rd)()).connectionState)return;const e=!n&&t.chats.listIds[i],a=e?e.map((e=>t.chats.byId[e])).filter((e=>Boolean(e&&l(e))&&e.id!==d.awM&&!(0,c.ep)(t,e.id))).sort(((t,e)=>l(t)-l(e)))[0]:void 0;await B(t,i,a?.id,a?l(a):void 0,n,!0),n&&(o?.(),n=!1),t=(0,s.Rd)()}})),(0,s.iw)("loadFullChat",((t,e,a)=>{const{chatId:s,force:i,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,s);d&&(i?T(t,e,d,o):_((()=>T(t,e,d,o))))})),(0,s.iw)("loadTopChats",(t=>{P((()=>B(t,"active")))})),(0,s.iw)("requestChatUpdate",((t,e,a)=>{const{chatId:s}=a,i=(0,c.Z1)(t,s);i&&(0,n.t9)("requestChatUpdate",{chat:i,...s===d.awM&&{lastLocalMessage:(0,c.VF)(t)?.message}})})),(0,s.iw)("updateChatMutedState",((t,e,a)=>{const{chatId:i,isMuted:o}=a,d=(0,c.Z1)(t,i);d&&(t=(0,r.a4)(t,i,{isMuted:o}),(0,s.R3)(t),(0,n.t9)("updateChatMutedState",{chat:d,isMuted:o}))})),(0,s.iw)("updateTopicMutedState",((t,e,a)=>{const{chatId:i,isMuted:o,topicId:d}=a,l=(0,c.Z1)(t,i);l&&(t=(0,r.Cn)(t,i,d,{isMuted:o}),(0,s.R3)(t),(0,n.t9)("updateTopicMutedState",{chat:l,topicId:d,isMuted:o}))})),(0,s.iw)("createChannel",(async(t,e,a)=>{const{title:i,about:d,photo:l,memberIds:h,tabId:u=(0,g._w)()}=a,I=h.map((e=>(0,c.dy)(t,e))).filter(Boolean);let p;t=(0,b.i)(t,{chatCreation:{progress:o.Nh.InProgress}},u),(0,s.R3)(t);try{p=await(0,n.t9)("createChannel",{title:i,about:d,users:I})}catch(a){t=(0,s.Rd)(),t=(0,b.i)(t,{chatCreation:{progress:o.Nh.Error}},u),(0,s.R3)(t),"CHANNELS_TOO_MUCH"===a.message?e.openLimitReachedModal({limit:"channels",tabId:u}):e.showDialog({data:{...a,hasErrorKey:!0},tabId:u})}if(!p)return;const{id:V,accessHash:f}=p;t=(0,s.Rd)(),t=(0,r.a4)(t,V,p),t=(0,b.i)(t,{chatCreation:{...(0,c.jU)(t,u).chatCreation,progress:p?o.Nh.Complete:o.Nh.Error}},u),(0,s.R3)(t),e.openChat({id:V,shouldReplaceHistory:!0,tabId:u}),V&&f&&l&&await(0,n.t9)("editChatPhoto",{chatId:V,accessHash:f,photo:l})})),(0,s.iw)("joinChannel",(async(t,e,a)=>{const{chatId:s,tabId:i=(0,g._w)()}=a,o=(0,c.Z1)(t,s);if(!o)return;const{id:d,accessHash:r}=o;if(d&&r)try{await(0,n.t9)("joinChannel",{channelId:d,accessHash:r})}catch(t){"CHANNELS_TOO_MUCH"===t.message?e.openLimitReachedModal({limit:"channels",tabId:i}):e.showDialog({data:{...t,hasErrorKey:!0},tabId:i})}})),(0,s.iw)("deleteChatUser",((t,e,a)=>{const{chatId:i,userId:o,tabId:d=(0,g._w)()}=a,l=(0,c.Z1)(t,i),h=(0,c.dy)(t,o);l&&h&&(t=(0,r.Dd)(t,i),(0,s.R3)(t),(0,c.Bt)(t,d)?.chatId===i&&e.openChat({id:void 0,tabId:d}),(0,n.t9)("deleteChatUser",{chat:l,user:h}))})),(0,s.iw)("deleteChat",((t,e,a)=>{const{chatId:i,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,i);d&&(t=(0,r.Dd)(t,i),(0,s.R3)(t),(0,c.Bt)(t,o)?.chatId===i&&e.openChat({id:void 0,tabId:o}),(0,n.t9)("deleteChat",{chatId:d.id}))})),(0,s.iw)("leaveChannel",((t,e,a)=>{const{chatId:i,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,i);if(!d)return;t=(0,r.Dd)(t,i),(0,s.R3)(t),(0,c.Bt)(t,o)?.chatId===i&&e.openChat({id:void 0,tabId:o});const{id:l,accessHash:h}=d;l&&h&&(0,n.t9)("leaveChannel",{channelId:l,accessHash:h})})),(0,s.iw)("deleteChannel",((t,e,a)=>{const{chatId:i,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,i);if(!d)return;t=(0,r.Dd)(t,i),(0,s.R3)(t),(0,c.Bt)(t,o)?.chatId===i&&e.openChat({id:void 0,tabId:o});const{id:l,accessHash:h}=d;l&&h&&(0,n.t9)("deleteChannel",{channelId:l,accessHash:h})})),(0,s.iw)("createGroupChat",(async(t,e,a)=>{const{title:i,memberIds:d,photo:l,tabId:h=(0,g._w)()}=a,u=d.map((e=>(0,c.dy)(t,e))).filter(Boolean);t=(0,b.i)(t,{chatCreation:{progress:o.Nh.InProgress}},h),(0,s.R3)(t);try{const a=await(0,n.t9)("createGroupChat",{title:i,users:u});if(!a)return;const{id:d}=a;t=(0,s.Rd)(),t=(0,r.a4)(t,d,a),t=(0,b.i)(t,{chatCreation:{...(0,c.jU)(t,h).chatCreation,progress:a?o.Nh.Complete:o.Nh.Error}},h),(0,s.R3)(t),e.openChat({id:d,shouldReplaceHistory:!0,tabId:h}),d&&l&&await(0,n.t9)("editChatPhoto",{chatId:d,photo:l})}catch(e){"USERS_TOO_FEW"===e.message&&(t=(0,s.Rd)(),t=(0,b.i)(t,{chatCreation:{...(0,c.jU)(t,h).chatCreation,progress:o.Nh.Error,error:"CreateGroupError"}},h),(0,s.R3)(t))}})),(0,s.iw)("toggleChatPinned",((t,e,a)=>{const{id:s,folderId:i,tabId:o=(0,g._w)()}=a,r=(0,c.Z1)(t,s);if(!r)return;const l=(0,w.M)(t,"dialogFolderPinned");if(i){const e=(0,c.Mw)(t,i);if(e){const a=!(0,c.ep)(t,s,i),{pinnedChatIds:o,includedChatIds:d}=e,r=a?[s,...o||[]]:(o||[]).filter((t=>t!==s)),l=[s,...d];(0,n.t9)("editChatFolder",{id:i,folderUpdate:{...e,pinnedChatIds:r,includedChatIds:l}})}}else{const a=(0,c.Ek)(t,s),i=(0,c.ep)(t,s,"archived"===a?d.WSp:void 0);if((t.chats.orderedPinnedIds["archived"===a?"archived":"active"]?.length||0)>=l&&!i)return void e.openLimitReachedModal({limit:"dialogFolderPinned",tabId:o});(0,n.t9)("toggleChatPinned",{chat:r,shouldBePinned:!i})}})),(0,s.iw)("toggleChatArchived",((t,e,a)=>{const{id:s}=a,i=(0,c.Z1)(t,s);i&&(0,n.t9)("toggleChatArchived",{chat:i,folderId:(0,u.pE)(i)?0:d.WSp})})),(0,s.iw)("loadChatFolders",(async t=>{const e=await(0,n.t9)("fetchChatFolders");e&&(t=(0,s.Rd)(),t={...t,chatFolders:{...t.chatFolders,...e}},(0,s.R3)(t))})),(0,s.iw)("loadRecommendedChatFolders",(async t=>{const e=await(0,n.t9)("fetchRecommendedChatFolders");e&&(t=(0,s.Rd)(),t={...t,chatFolders:{...t.chatFolders,recommended:e}},(0,s.R3)(t))})),(0,s.iw)("editChatFolders",((t,e,a)=>{const{chatId:s,idsToRemove:i,idsToAdd:o,tabId:d=(0,g._w)()}=a,r=(0,w.M)(t,"dialogFiltersChats");o.some((e=>(0,c.Mw)(t,e).includedChatIds.length>=r))?e.openLimitReachedModal({limit:"dialogFiltersChats",tabId:d}):(i.forEach((async e=>{const a=(0,c.Mw)(t,e);a&&await(0,n.t9)("editChatFolder",{id:e,folderUpdate:{...a,pinnedChatIds:a.pinnedChatIds?.filter((t=>t!==s)),includedChatIds:a.includedChatIds.filter((t=>t!==s))}})})),o.forEach((async e=>{const a=(0,c.Mw)(t,e);a&&await(0,n.t9)("editChatFolder",{id:e,folderUpdate:{...a,includedChatIds:a.includedChatIds.concat(s)}})})))})),(0,s.iw)("editChatFolder",((t,e,a)=>{const{id:s,folderUpdate:i}=a,o=(0,c.Mw)(t,s);o&&(0,n.t9)("editChatFolder",{id:s,folderUpdate:{id:s,emoticon:o.emoticon,pinnedChatIds:o.pinnedChatIds,...i}})})),(0,s.iw)("addChatFolder",(async(t,e,a)=>{const{folder:i,tabId:o=(0,g._w)()}=a,{orderedIds:r,byId:c}=t.chatFolders,l=(0,w.M)(t,"dialogFilters");if(Object.keys(c).length>=l)return void e.openLimitReachedModal({limit:"dialogFilters",tabId:o});const h=Math.max(...r||[],d.WSp),{id:u,description:I,...p}=i;if(await(0,n.t9)("editChatFolder",{id:h+1,folderUpdate:{id:h+1,...p}}),!I)return;t=(0,s.Rd)();const{recommended:V}=t.chatFolders;V&&(t={...t,chatFolders:{...t.chatFolders,recommended:V.filter((({id:t})=>t!==u))}},(0,s.R3)(t))})),(0,s.iw)("sortChatFolders",(async(t,e,a)=>{const{folderIds:i}=a;await(0,n.t9)("sortChatFolders",i)&&(t=(0,s.Rd)(),t={...t,chatFolders:{...t.chatFolders,orderedIds:i}},(0,s.R3)(t))})),(0,s.iw)("deleteChatFolder",(async(t,e,a)=>{const{id:s}=a;(0,c.Mw)(t,s)&&await(0,n.t9)("deleteChatFolder",s)})),(0,s.iw)("toggleChatUnread",((t,e,a)=>{const{id:s}=a,o=(0,c.Z1)(t,s);o&&(o.unreadCount?(0,n.t9)("markMessageListRead",{chat:o,threadId:i._f}):(0,n.t9)("toggleDialogUnread",{chat:o,hasUnreadMark:!o.hasUnreadMark}))})),(0,s.iw)("markTopicRead",((t,e,a)=>{const{chatId:i,topicId:o}=a,d=(0,c.Z1)(t,i);if(!d)return;const l=d.topics?.[o]?.lastMessageId;l&&((0,n.t9)("markMessageListRead",{chat:d,threadId:o,maxId:l}),t=(0,s.Rd)(),t=(0,r.Cn)(t,i,o,{unreadCount:0}),t=(0,r.Xg)(t,i,o,{lastReadInboxMessageId:l}),(0,s.R3)(t))})),(0,s.iw)("openChatByInvite",(async(t,e,a)=>{const{hash:s,tabId:i=(0,g._w)()}=a,o=await(0,n.t9)("openChatByInvite",s);o&&e.openChat({id:o.chatId,tabId:i})})),(0,s.iw)("openChatByPhoneNumber",(async(t,e,a)=>{const{phoneNumber:i,startAttach:o,attach:l,tabId:h=(0,g._w)()}=a;e.openChat({id:d.mzl,tabId:h});const u=await async function(t,e){t=(0,s.Rd)();const a=(0,c.Bk)(t,e);if(a&&!a.isMin)return(0,c.Z1)(t,a.id);const{chat:i,user:o}=await(0,n.t9)("getChatByPhoneNumber",e)||{};return i?(t=(0,s.Rd)(),t=(0,r.a4)(t,i.id,i),(0,s.R3)(t),o&&(t=(0,r.Nq)(t,o.id,o),(0,s.R3)(t)),i):void 0}(t,i);if(!u)return e.openPreviousChat({tabId:h}),void e.showNotification({message:C.Iu("lng_username_by_phone_not_found").replace("{phone}",i),tabId:h});e.openChat({id:u.id,tabId:h}),l&&S(t=(0,s.Rd)(),e,u.id,l,o,h)})),(0,s.iw)("openTelegramLink",((t,e,a)=>{const{url:s,tabId:i=(0,g._w)()}=a,{openChatByPhoneNumber:o,openChatByInvite:n,openStickerSet:r,openChatWithDraft:l,joinVoiceChatByLink:h,showNotification:u,focusMessage:p,openInvoice:V,processAttachBotParameters:f,openChatByUsername:C}=e;if(s.match(d.g$l))return void(0,I.ou)(s);const w=new URL(s.toLowerCase().startsWith("http")?s:`https://${s}`);if(d.LBg.has(w.hostname)&&"/"===w.pathname)return void window.open(w.toString(),"_blank","noopener");const b=(d.LBg.has(w.hostname)?"t.me":w.hostname).split(".");if(b.length>3)return;const m=3===b.length?`${b[0]}/${w.pathname}`:w.pathname,[R,y,A]=m.split("/").filter(Boolean).map((t=>decodeURI(t))),v=Object.fromEntries(w.searchParams);let M;"joinchat"===R&&(M=y);const P=!(!v.hasOwnProperty("startattach")||v.startattach)||v.startattach,_=(0,I.GX)(v.choose);if(R.match(/^\+([0-9]+)(\?|$)/))return void o({phoneNumber:R.substr(1,R.length-1),startAttach:P,attach:v.attach,tabId:i});if((R.startsWith(" ")||R.startsWith("+"))&&(M=R.substr(1,R.length-1)),M)return void n({hash:M,tabId:i});if("addstickers"===R||"addemoji"===R)return void r({stickerSetInfo:{shortName:y},tabId:i});const B=y||void 0,T=A?Number(A):void 0,H=v.comment?Number(v.comment):void 0;if("share"===R)l({text:(0,I.QH)(v.url,v.text),tabId:i});else if(v.hasOwnProperty("voicechat")||v.hasOwnProperty("livestream"))h({username:R,inviteHash:v.voicechat||v.livestream,tabId:i});else if("c"===R&&B&&T){const e=`-${B}`;if(!(0,c.Z1)(t,e))return void u({message:"Chat does not exist",tabId:i});p({chatId:e,messageId:T,tabId:i})}else R.startsWith("$")?V({slug:R.substring(1),tabId:i}):"invoice"===R?V({slug:y,tabId:i}):P&&_?f({username:R,filter:_,..."string"==typeof P&&{startParam:P},tabId:i}):C({username:R,messageId:T||Number(B),threadId:T?Number(B):void 0,commentId:H,startParam:v.start,startAttach:P,attach:v.attach,tabId:i})})),(0,s.iw)("acceptInviteConfirmation",(async(t,e,a)=>{const{hash:s,tabId:i=(0,g._w)()}=a,o=await(0,n.t9)("importChatInvite",{hash:s});o&&e.openChat({id:o.id,tabId:i})})),(0,s.iw)("openChatByUsername",(async(t,e,a)=>{const{username:i,messageId:o,commentId:h,startParam:u,startAttach:I,attach:p,threadId:V,tabId:f=(0,g._w)()}=a,C=(0,c.jr)(t,f);if(!h)return!I&&o&&!u&&C?.usernames?.some((t=>t.username===i))?void e.focusMessage({chatId:C.id,threadId:V,messageId:o,tabId:f}):void await async function(t,e,a,i,o,n,r,l,...[h=(0,g._w)()]){t=(0,s.Rd)();const u=(0,c.jr)(t,h);if(r&&!l){const s=await F(t,e,a,h);if(!u||!s)return;return void e.callAttachBot({bot:s,chatId:u.id,..."string"==typeof r&&{startParam:r},tabId:h})}const I=u?.usernames?.some((t=>t.username===a));I||e.openChat({id:d.mzl,tabId:h});const p=await H(t,a);p?(o?e.focusMessage({chatId:p.id,threadId:i,messageId:o,tabId:h}):I||e.openChat({id:p.id,threadId:i,tabId:h}),n&&e.startBot({botId:p.id,param:n}),l&&S(t=(0,s.Rd)(),e,p.id,l,r,h)):I||(e.openPreviousChat({tabId:h}),e.showNotification({message:"User does not exist",tabId:h}))}(t,e,i,V,o,u,I,p,f);const{chatId:w,type:b}=(0,c.Bt)(t,f)||{},m=(0,c.DI)(t,i);if(w&&o&&m&&"thread"===b){const a=(0,c.tZ)(t,w,o);if(a&&a.chatId===w)return void e.focusMessage({chatId:a.chatId,threadId:a.threadId,messageId:h,tabId:f})}if(!o)return;e.openChat({id:d.mzl,tabId:f});const R=await H(t,i);if(!R)return;t=(0,s.Rd)();const y=(0,c.tZ)(t,R.id,o);let A;if(y)A=y.chatId;else{const e=await(0,n.t9)("requestThreadInfoUpdate",{chat:R,threadId:o});if(!e)return;t=(0,s.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(e.users,"id")),(0,s.R3)(t),A=e.discussionChatId}A&&e.focusMessage({chatId:A,threadId:o,messageId:Number(h),tabId:f})})),(0,s.iw)("togglePreHistoryHidden",(async(t,e,a)=>{const{chatId:i,isEnabled:o,tabId:d=(0,g._w)()}=a,c=await Z(t,e,i,d);c&&(t=(0,s.Rd)(),t=(0,r.a4)(t,c.id,{fullInfo:{...c.fullInfo,isPreHistoryHidden:o}}),(0,s.R3)(t),(0,n.t9)("togglePreHistoryHidden",{chat:c,isEnabled:o}))})),(0,s.iw)("updateChatDefaultBannedRights",((t,e,a)=>{const{chatId:s,bannedRights:i}=a,o=(0,c.Z1)(t,s);o&&(0,n.t9)("updateChatDefaultBannedRights",{chat:o,bannedRights:i})})),(0,s.iw)("updateChatMemberBannedRights",(async(t,e,a)=>{const{chatId:i,userId:o,bannedRights:d,tabId:l=(0,g._w)()}=a,h=(0,c.dy)(t,o);if(!h)return;const u=await Z(t,e,i,l);if(!u)return;await(0,n.t9)("updateChatMemberBannedRights",{chat:u,user:h,bannedRights:d}),t=(0,s.Rd)();const I=(0,c.Z1)(t,i);if(!I||!I.fullInfo)return;const{members:p,kickedMembers:V}=I.fullInfo,f=Boolean(d.viewMessages),C=!Object.keys(d).length;t=(0,r.a4)(t,i,{fullInfo:{...I.fullInfo,...p&&f&&{members:p.filter((t=>t.userId!==o))},...p&&!f&&{members:p.map((t=>t.userId===o?{...t,bannedRights:d}:t))},...C&&V&&{kickedMembers:V.filter((t=>t.userId!==o))}}}),(0,s.R3)(t)})),(0,s.iw)("updateChatAdmin",(async(t,e,a)=>{const{chatId:i,userId:o,adminRights:d,customTitle:l,tabId:h=(0,g._w)()}=a,u=(0,c.dy)(t,o);if(!u)return;const I=await Z(t,e,i,h);if(!I)return;await(0,n.t9)("updateChatAdmin",{chat:I,user:u,adminRights:d,customTitle:l});const p=await(0,n.t9)("fetchFullChat",I);if(!p?.fullInfo)return;const{adminMembersById:V}=p.fullInfo,f=!Object.keys(d).length;let C;if(V)if(f){const{[o]:t,...e}=V;C=e}else C={...V,[o]:{...V[o],adminRights:d,customTitle:l}};t=(0,s.Rd)(),t=(0,r.a4)(t,i,{fullInfo:{...p.fullInfo,...C&&{adminMembersById:C}}}),(0,s.R3)(t)})),(0,s.iw)("updateChat",(async(t,e,a)=>{const{chatId:i,title:d,about:l,photo:h,tabId:u=(0,g._w)()}=a,I=(0,c.Z1)(t,i);I&&(t=(0,s.Rd)(),t=(0,r.H9)(t,o.wv.InProgress,u),(0,s.R3)(t),await Promise.all([I.title!==d?(0,n.t9)("updateChatTitle",I,d):void 0,I.fullInfo&&I.fullInfo.about!==l?(0,n.t9)("updateChatAbout",I,l):void 0,h?(0,n.t9)("editChatPhoto",{chatId:i,accessHash:I.accessHash,photo:h}):void 0]),t=(0,s.Rd)(),t=(0,r.H9)(t,o.wv.Complete,u),(0,s.R3)(t))})),(0,s.iw)("updateChatPhoto",(async(t,e,a)=>{const{photo:i,chatId:o,tabId:d=(0,g._w)()}=a,l=(0,c.Z1)(t,o);l&&(t=(0,r.a4)(t,o,{avatarHash:void 0,fullInfo:{...l.fullInfo,profilePhoto:void 0}}),(0,s.R3)(t),await(0,n.t9)("editChatPhoto",{chatId:o,accessHash:l.accessHash,photo:i}),await(0,n.t9)("deleteProfilePhotos",[i]),e.loadFullChat({chatId:o,tabId:d}),e.loadProfilePhotos({profileId:o}))})),(0,s.iw)("deleteChatPhoto",(async(t,e,a)=>{const{photo:i,chatId:o,tabId:d=(0,g._w)()}=a,l=(0,c.Z1)(t,o);if(!l)return;const h=[i];if(l.avatarHash===i.id){const e=l.photos?.[1];e&&h.push(e),t=(0,r.a4)(t,o,{avatarHash:void 0,fullInfo:{...l.fullInfo,profilePhoto:void 0}}),(0,s.R3)(t),await(0,n.t9)("editChatPhoto",{chatId:o,accessHash:l.accessHash,photo:e})}await(0,n.t9)("deleteProfilePhotos",h)&&(e.loadFullChat({chatId:o,tabId:d}),e.loadProfilePhotos({profileId:o}))})),(0,s.iw)("toggleSignatures",((t,e,a)=>{const{chatId:s,isEnabled:i}=a,o=(0,c.Z1)(t,s);o&&(0,n.t9)("toggleSignatures",{chat:o,isEnabled:i})})),(0,s.iw)("loadGroupsForDiscussion",(async t=>{const e=await(0,n.t9)("fetchGroupsForDiscussion");if(!e)return;const a=e.reduce(((t,e)=>(e&&!e.isForum&&(t[e.id]=e),t)),{});t=(0,s.Rd)(),t=(0,r.fZ)(t,a),t={...t,chats:{...t.chats,forDiscussionIds:Object.keys(a)}},(0,s.R3)(t)})),(0,s.iw)("linkDiscussionGroup",(async(t,e,a)=>{const{channelId:i,chatId:o,tabId:d=(0,g._w)()}=a||{},l=(0,c.Z1)(t,i);if(!l)return;const h=await Z(t,e,o,d);if(!h)return;let{fullInfo:u}=h;if(!u){const t=await(0,n.t9)("fetchFullChat",h);if(!t)return;u=t.fullInfo}u.isPreHistoryHidden&&(t=(0,s.Rd)(),t=(0,r.a4)(t,h.id,{fullInfo:{...h.fullInfo,isPreHistoryHidden:!1}}),(0,s.R3)(t),await(0,n.t9)("togglePreHistoryHidden",{chat:h,isEnabled:!1})),(0,n.t9)("setDiscussionGroup",{channel:l,chat:h})})),(0,s.iw)("unlinkDiscussionGroup",(async(t,e,a)=>{const{channelId:i,tabId:o=(0,g._w)()}=a,d=(0,c.Z1)(t,i);if(!d)return;let r;d.fullInfo?.linkedChatId&&(r=(0,c.Z1)(t,d.fullInfo.linkedChatId)),await(0,n.t9)("setDiscussionGroup",{channel:d}),r&&T(t=(0,s.Rd)(),e,r,o)})),(0,s.iw)("setActiveChatFolder",((t,e,a)=>{const{activeChatFolder:s,tabId:i=(0,g._w)()}=a;if(!(s+1>(0,w.M)(t,"dialogFilters")))return(0,b.i)(t,{activeChatFolder:s},i);e.openLimitReachedModal({limit:"dialogFilters",tabId:i})})),(0,s.iw)("resetOpenChatWithDraft",((t,e,a)=>{const{tabId:s=(0,g._w)()}=a||{};return(0,b.i)(t,{requestedDraft:void 0},s)})),(0,s.iw)("loadMoreMembers",(async(t,e,a)=>{const{tabId:i=(0,g._w)()}=a||{},{chatId:o}=(0,c.Bt)(t,i)||{},d=o?(0,c.Z1)(t,o):void 0;if(!d||(0,u.G9)(d))return;const h=d.fullInfo?.members?.length||void 0;if(void 0!==h&&void 0!==d.membersCount&&h>=d.membersCount)return;const I=await(0,n.t9)("fetchMembers",d.id,d.accessHash,"recent",h);if(!I)return;const{members:p,users:V,userStatusesById:f}=I;p&&p.length&&(t=(0,s.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(V,"id")),t=(0,r.zn)(t,f),t=(0,r.iX)(t,d,p),(0,s.R3)(t))})),(0,s.iw)("addChatMembers",(async(t,e,a)=>{const{chatId:i,memberIds:d,tabId:r=(0,g._w)()}=a,l=(0,c.Z1)(t,i),h=d.map((e=>(0,c.dy)(t,e))).filter(Boolean);l&&h.length&&(e.setNewChatMembersDialogState({newChatMembersProgress:o.WB.Loading,tabId:r}),await(0,n.t9)("addChatMembers",l,h),e.setNewChatMembersDialogState({newChatMembersProgress:o.WB.Closed,tabId:r}),T(t=(0,s.Rd)(),e,l,r))})),(0,s.iw)("deleteChatMember",(async(t,e,a)=>{const{chatId:i,userId:o,tabId:d=(0,g._w)()}=a,r=(0,c.Z1)(t,i),l=(0,c.dy)(t,o);r&&l&&(await(0,n.t9)("deleteChatMember",r,l),T(t=(0,s.Rd)(),e,r,d))})),(0,s.iw)("toggleIsProtected",((t,e,a)=>{const{chatId:s,isProtected:i}=a,o=(0,c.Z1)(t,s);o&&(0,n.t9)("toggleIsProtected",{chat:o,isProtected:i})})),(0,s.iw)("setChatEnabledReactions",(async(t,e,a)=>{const{chatId:i,enabledReactions:o,tabId:d=(0,g._w)()}=a,r=(0,c.Z1)(t,i);r&&(await(0,n.t9)("setChatEnabledReactions",{chat:r,enabledReactions:o}),T(t=(0,s.Rd)(),e,r,d))})),(0,s.iw)("loadChatSettings",(async(t,e,a)=>{const{chatId:i}=a,o=(0,c.Z1)(t,i);if(!o)return;const d=await(0,n.t9)("fetchChatSettings",o);if(!d)return;const{settings:h,users:u}=d;t=(0,s.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(u,"id")),t=(0,r.a4)(t,o.id,{settings:h}),(0,s.R3)(t)})),(0,s.iw)("toggleJoinToSend",(async(t,e,a)=>{const{chatId:s,isEnabled:i}=a,o=(0,c.Z1)(t,s);o&&((0,u.ZV)(o)||(0,u.eA)(o))&&await(0,n.t9)("toggleJoinToSend",o,i)})),(0,s.iw)("toggleJoinRequest",(async(t,e,a)=>{const{chatId:s,isEnabled:i}=a,o=(0,c.Z1)(t,s);o&&((0,u.ZV)(o)||(0,u.eA)(o))&&await(0,n.t9)("toggleJoinRequest",o,i)})),(0,s.iw)("openForumPanel",((t,e,a)=>{const{chatId:s,tabId:i=(0,g._w)()}=a;return(0,b.i)(t,{forumPanelChatId:s},i)})),(0,s.iw)("closeForumPanel",((t,e,a)=>{const{tabId:s=(0,g._w)()}=a||{};return(0,b.i)(t,{forumPanelChatId:void 0},s)})),(0,s.iw)("processAttachBotParameters",(async(t,e,a)=>{const{username:i,filter:o,startParam:d,tabId:n=(0,g._w)()}=a,r=await F(t,e,i,n);if(!r)return;t=(0,s.Rd)();const{attachMenu:{bots:c}}=t;if(!c[r.id])return t=(0,b.i)(t,{requestedAttachBotInstall:{bot:r,onConfirm:{action:"requestAttachBotInChat",payload:{bot:r,filter:o,startParam:d}}}},n),void(0,s.R3)(t);e.requestAttachBotInChat({bot:r,filter:o,startParam:d,tabId:n})})),(0,s.iw)("loadTopics",(async(t,e,a)=>{const{chatId:i,force:o}=a,h=(0,c.Z1)(t,i);if(!h)return;if(!o&&h.listedTopicIds&&h.listedTopicIds.length===h.topicsCount)return;const u=!o&&h.listedTopicIds?h.listedTopicIds.reduce(((t,e)=>{const a=h.topics?.[e],s=h.topics?.[t];return a&&(!s||a.lastMessageId<s.lastMessageId)?e:t})):void 0,{id:I,date:p,lastMessageId:V}=u&&h.topics?.[u]||{},f=await(0,n.t9)("fetchTopics",{chat:h,offsetTopicId:I,offsetId:V,offsetDate:p,limit:I?d.C1M:d.SC4});f&&(t=(0,s.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(f.users,"id")),t=(0,r.fZ)(t,(0,l.ee)(f.chats,"id")),t=(0,r.m6)(t,f.messages),t=(0,r.XG)(t,i,f.count,f.topics),t=(0,r.Jr)(t,i,f.topics.map((t=>t.id))),Object.entries(f.draftsById||{}).forEach((([e,a])=>{t=(0,r.pf)(t,i,Number(e),"draft",a?.formattedText),t=(0,r.pf)(t,i,Number(e),"replyingToId",a?.replyingToId)})),Object.entries(f.readInboxMessageIdByTopicId||{}).forEach((([e,a])=>{t=(0,r.Xg)(t,i,Number(e),{lastReadInboxMessageId:a})})),(0,s.R3)(t))})),(0,s.iw)("loadTopicById",(async(t,e,a)=>{const{chatId:i,topicId:o}=a,d=(0,c.Z1)(t,i);if(!d)return;const h=await(0,n.t9)("fetchTopicById",{chat:d,topicId:o});if(h)t=(0,s.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(h.users,"id")),t=(0,r.fZ)(t,(0,l.ee)(h.chats,"id")),t=(0,r.m6)(t,h.messages),t=(0,r.Cn)(t,i,o,h.topic),(0,s.R3)(t);else if("tabId"in a&&a.shouldCloseChatOnError){const{tabId:t=(0,g._w)()}=a;e.openChat({id:void 0,tabId:t})}})),(0,s.iw)("toggleForum",(async(t,e,a)=>{const{chatId:i,isEnabled:o,tabId:d=(0,g._w)()}=a,c=await Z(t,e,i,d);if(!c)return;t=(0,s.Rd)();const l=c.isForum;t=(0,r.a4)(t,i,{isForum:o}),(0,s.R3)(t),await(0,n.t9)("toggleForum",{chat:c,isEnabled:o})||(t=(0,s.Rd)(),t=(0,r.a4)(t,i,{isForum:l}),(0,s.R3)(t))})),(0,s.iw)("toggleParticipantsHidden",(async(t,e,a)=>{const{chatId:i,isEnabled:o}=a,d=(0,c.Z1)(t,i);if(!d)return;const l=d.fullInfo?.areParticipantsHidden;t=(0,r.a4)(t,i,{fullInfo:{...d.fullInfo,areParticipantsHidden:o}}),(0,s.R3)(t),await(0,n.t9)("toggleParticipantsHidden",{chat:d,isEnabled:o})||void 0===l||(t=(0,s.Rd)(),t=(0,r.a4)(t,i,{fullInfo:{...d.fullInfo,areParticipantsHidden:l}}),(0,s.R3)(t))})),(0,s.iw)("createTopic",(async(t,e,a)=>{const{chatId:i,title:o,iconColor:d,iconEmojiId:r,tabId:l=(0,g._w)()}=a,h=(0,c.Z1)(t,i);if(!h)return;(0,c.jU)(t,l).createTopicPanel&&(t=(0,b.i)(t,{createTopicPanel:{chatId:i,isLoading:!0}},l),(0,s.R3)(t));const u=await(0,n.t9)("createTopic",{chat:h,title:o,iconColor:d,iconEmojiId:r});u&&e.openChat({id:i,threadId:u,shouldReplaceHistory:!0,tabId:l}),e.closeCreateTopicPanel({tabId:l})})),(0,s.iw)("deleteTopic",(async(t,e,a)=>{const{chatId:i,topicId:o}=a,d=(0,c.Z1)(t,i);d&&await(0,n.t9)("deleteTopic",{chat:d,topicId:o})&&(t=(0,s.Rd)(),t=(0,r.BK)(t,i,o),(0,s.R3)(t))})),(0,s.iw)("editTopic",(async(t,e,a)=>{const{chatId:i,topicId:o,tabId:d=(0,g._w)(),...l}=a,h=(0,c.Z1)(t,i),u=h?.topics?.[o];h&&u&&((0,c.jU)(t,d).editTopicPanel&&(t=(0,b.i)(t,{editTopicPanel:{chatId:i,topicId:o,isLoading:!0}},d),(0,s.R3)(t)),await(0,n.t9)("editTopic",{chat:h,topicId:o,...l})&&(t=(0,s.Rd)(),t=(0,r.Cn)(t,i,o,l),(0,s.R3)(t),e.closeEditTopicPanel({tabId:d})))})),(0,s.iw)("toggleTopicPinned",((t,e,a)=>{const{chatId:s,topicId:i,isPinned:o,tabId:d=(0,g._w)()}=a,{topicsPinnedLimit:r}=t.appConfig||{},l=(0,c.Z1)(t,s);l&&l.topics&&r&&(o&&Object.values(l.topics).filter((t=>t.isPinned)).length>=r?e.showNotification({message:C.Iu("LimitReachedPinnedTopics",r,"i"),tabId:d}):(0,n.t9)("togglePinnedTopic",{chat:l,topicId:i,isPinned:o}))}))},88422:(t,e,a)=>{a.d(e,{CW:()=>_,EP:()=>R,FF:()=>v,Mt:()=>P,NH:()=>M,o5:()=>m});var s=a(33555),i=a(71226),o=a(11192),d=a(64319),n=a(2503),r=a(25260),c=a(78958),l=a(42431),h=a(56112),u=a(60782),I=a(74753),p=a(77361),V=a(50711),f=a(44271),C=a(65054);let w,b,g;function m(){return R(),Promise.all(Object.values(g).map((t=>{const e=t.src;return t.src="data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",t.muted=!0,t.volume=1e-4,t.play().then((()=>{t.pause(),t.volume=1,t.currentTime=0,t.muted=!1,requestAnimationFrame((()=>{t.src=e}))}))})))}function R(){if(g)return;const t=new Audio("./voicechat_join.mp3"),e=new Audio("./voicechat_connecting.mp3");e.loop=!0;const a=new Audio("./voicechat_leave.mp3"),s=new Audio("./voicechat_onallowtalk.mp3"),i=new Audio("./call_busy.mp3"),o=new Audio("./call_connect.mp3"),d=new Audio("./call_end.mp3"),n=new Audio("./call_incoming.mp3");n.loop=!0;const r=new Audio("./call_ringing.mp3");r.loop=!0,g={join:t,allowTalk:s,leave:a,connecting:e,incoming:n,end:d,connect:o,busy:i,ringing:r}}async function y(t,e){const a=await(0,i.t9)("getGroupCall",{call:e});if(!a)return;t=(0,s.Rd)();const o=(0,l.$5)(t,e.id);return t=(0,c.AH)(t,e.id,(0,u.CE)(a.groupCall,["connectionState"]),void 0,o?.isLoaded?void 0:a.groupCall.participantsCount),t=(0,r.Sh)(t,(0,u.ee)(a.users,"id")),t=(0,r.fZ)(t,(0,u.ee)(a.chats,"id")),(0,s.R3)(t),a.groupCall}async function A(t,e,a){const o=await(0,i.t9)("fetchGroupCallParticipants",{call:e,offset:a});o&&(t=(0,s.Rd)(),t=(0,r.Sh)(t,(0,u.ee)(o.users,"id")),t=(0,r.fZ)(t,(0,u.ee)(o.chats,"id")),(0,s.R3)(t))}function v(){return w}function M(){return b}function P(){w?.pause(),b=void 0,w=void 0}function _(t,e,a,...[s=(0,C._w)()]){a?navigator.mediaDevices.getUserMedia({video:!0}).then((t=>{0===t.getVideoTracks().length?e.showNotification({message:V.Iu("Call.Camera.Error"),tabId:s}):B(0,e,s)})).catch((()=>{e.showNotification({message:V.Iu("Call.Camera.Error"),tabId:s})})):B(0,e,s)}function B(t,e,...[a=(0,C._w)()]){navigator.mediaDevices.getUserMedia({audio:!0}).then((t=>{0===t.getAudioTracks().length&&e.showNotification({message:V.Iu("RequestAcces.Error.HaveNotAccess.Call"),tabId:a})})).catch((()=>{e.showNotification({message:V.Iu("RequestAcces.Error.HaveNotAccess.Call"),tabId:a})}))}(0,s.iw)("toggleGroupCallPanel",((t,e,a)=>{const{force:s,tabId:i=(0,C._w)()}=a||{};return(0,f.i)(t,{isCallPanelVisible:"force"in(a||{})?s:!(0,o.jU)(t,i).isCallPanelVisible},i)})),(0,s.iw)("subscribeToGroupCallUpdates",(async(t,e,a)=>{const{subscribed:o,id:d}=a,n=(0,l.$5)(t,d);n&&(o&&(await y(t,n),t=(0,s.Rd)(),await A(t,n)),await(0,i.t9)("toggleGroupCallStartSubscription",{subscribed:o,call:n}))})),(0,s.iw)("createGroupCall",(async(t,e,a)=>{const{chatId:d,tabId:n=(0,C._w)()}=a,r=(0,o.Z1)(t,d);if(!r)return;const l=await(0,i.t9)("createGroupCall",{peer:r});l&&(t=(0,s.Rd)(),t=(0,c.AH)(t,l.id,{...l,chatId:d}),(0,s.R3)(t),e.requestMasterAndJoinGroupCall({id:l.id,accessHash:l.accessHash,tabId:n}))})),(0,s.iw)("createGroupCallInviteLink",(async(t,e,a)=>{const{tabId:s=(0,C._w)()}=a||{},n=(0,l.mU)(t);if(!n||!n.chatId)return;const r=(0,o.Z1)(t,n.chatId);if(!r)return;const c=Boolean((0,h.WS)(r));let{inviteLink:u}=r.fullInfo;c&&(u=await(0,i.t9)("exportGroupCallInvite",{call:n,canSelfUnmute:!1})),u&&((0,d.TE)(u),e.showNotification({message:"Link copied to clipboard",tabId:s}))})),(0,s.iw)("joinVoiceChatByLink",(async(t,e,a)=>{const{username:i,inviteHash:o,tabId:d=(0,C._w)()}=a,r=await(0,n.Co)(t,i);if(!r)return void e.showNotification({message:V.Iu("NoUsernameFound"),tabId:d});t=(0,s.Rd)();const c=await(0,n.ft)(t,e,r,d);c?.groupCall&&e.requestMasterAndJoinGroupCall({id:c.groupCall.id,accessHash:c.groupCall.accessHash,inviteHash:o,tabId:d})})),(0,s.iw)("requestMasterAndJoinGroupCall",((t,e,a)=>{e.requestMasterAndCallAction({action:"joinGroupCall",payload:a,tabId:a.tabId||(0,C._w)()})})),(0,s.iw)("requestMasterAndAcceptCall",((t,e,a)=>{e.requestMasterAndCallAction({action:"acceptCall",payload:void 0,tabId:a?.tabId||(0,C._w)()})})),(0,s.iw)("joinGroupCall",(async(t,e,a)=>{const{chatId:i,id:o,accessHash:d,inviteHash:n,tabId:r=(0,C._w)()}=a;if(!p.Bi)return;if(t.phoneCall)return void e.toggleGroupCallPanel({tabId:r});!function(){const t=new(window.AudioContext||window.webkitAudioContext);w=new Audio,b=t,w.srcObject=(t=>{const e=t.createOscillator(),a=e.connect(t.createMediaStreamDestination());return e.start(),new MediaStream([Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})])})(t),(0,I.Z)(w)}(),R(),_(t=(0,s.Rd)(),e,!0,r);const{groupCalls:{activeGroupCallId:h}}=t;let u=o?(0,l.$5)(t,o):(0,l.Bj)(t,i);u?.id!==h?h?"leaveGroupCall"in e&&e.leaveGroupCall({rejoin:a,tabId:r}):u&&h===u.id?e.toggleGroupCallPanel({tabId:r}):(u||o&&d||(u=await y(t,{id:o,accessHash:d})),u&&(t=(0,s.Rd)(),t=(0,c.AH)(t,u.id,{...u,inviteHash:n},void 0,u.participantsCount+1),t={...t,groupCalls:{...t.groupCalls,activeGroupCallId:u.id}},(0,s.R3)(t),e.toggleGroupCallPanel({force:!1,tabId:r}))):e.toggleGroupCallPanel({tabId:r})})),(0,s.iw)("playGroupCallSound",((t,e,a)=>{const{sound:s}=a;g[s]&&("connecting"!==s&&g.connecting.pause(),"incoming"!==s&&g.incoming.pause(),"ringing"!==s&&g.ringing.pause(),(0,I.Z)(g[s]))})),(0,s.iw)("loadMoreGroupCallParticipants",(t=>{const e=(0,l.mU)(t);e&&A(t,e,e.nextOffset)})),(0,s.iw)("requestMasterAndRequestCall",((t,e,a)=>{e.requestMasterAndCallAction({action:"requestCall",payload:a,tabId:a.tabId||(0,C._w)()})})),(0,s.iw)("requestCall",(async(t,e,a)=>{const{userId:i,isVideo:d,tabId:n=(0,C._w)()}=a;t.phoneCall?e.toggleGroupCallPanel({tabId:n}):(0,o.dy)(t,i)&&(R(),_(t=(0,s.Rd)(),e,d,n),t=(0,s.Rd)(),t={...t,phoneCall:{id:"",state:"requesting",participantId:i,isVideo:d,adminId:t.currentUserId}},(0,s.R3)(t),e.toggleGroupCallPanel({force:!1,tabId:n}))}))},78958:(t,e,a)=>{a.d(e,{AH:()=>n,B6:()=>l,Ic:()=>c,dc:()=>r});var s=a(42431),i=a(60782),o=a(53475),d=a(11192);function n(t,e,a,s,o){const d=Object.values({...t.groupCalls.byId[e]?.participants,...a.participants}).filter((({isLeft:t})=>!t)).reduce(((t,e)=>(t[e.id]=e,t)),{});return{...t,groupCalls:{...t.groupCalls,byId:{...t.groupCalls.byId,[e]:{...t.groupCalls.byId[e],...(0,i.CE)(a,["participantsCount"]),...s&&{participantsCount:t.groupCalls.byId[e].participantsCount+s},...void 0!==o&&{participantsCount:o},participants:d}}}}}function r(t,e){const a=(0,s.$5)(t,e);if(a&&a.chatId){const e=(0,d.Z1)(t,a.chatId);e&&(t=(0,o.a4)(t,a.chatId,{fullInfo:{...e.fullInfo,groupCallId:void 0}}))}return{...t,groupCalls:{...t.groupCalls,byId:{...(0,i.CE)(t.groupCalls.byId,[e.toString()])}}}}function c(t,e,a){return t.groupCalls.activeGroupCallId?n(t,t.groupCalls.activeGroupCallId,e,void 0,a):t}function l(t,e,a,i,o=!1){const d=(0,s.$5)(t,e);return d?n(t,e,{participants:{...d.participants,[a]:{...d.participants[a],...i}}},i.isLeft?o?0:-1:d.participants[a]||o?0:1):t}}}]);
//# sourceMappingURL=8422.1fb17648dc67b64d343a.js.map