"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[8422],{27225:(t,e,a)=>{a.d(e,{Co:()=>P,X9:()=>T,ft:()=>A});var i=a(33555),o=a(6137),s=a(91713),d=a(83716),n=a(71226),r=a(25260),c=a(11192),l=a(60782),h=a(69118),u=a(56112),I=a(53551),p=a(78958),f=a(42431),V=a(16974),C=a(50711),w=a(9211),b=a(44271),g=a(65054),m=a(42257);d.awM;const y=(0,h.P2)((t=>t()),3e3,!0),R=(0,h.Ds)((t=>t()),500,!1,!0);async function v(t,e,a,s){let n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],h=arguments.length>5?arguments[5]:void 0;t=(0,i.Rd)();let u=(0,c.VF)(t)?.message;try{const I=await(m.ZP.getMsgClient()?.sendJsonWithCallback({action:"loadChats",data:{limit:d.Ov0,offsetDate:s,archived:"archived"===e,withPinned:n,lastLocalServiceMessage:u}}));if(!I)return;const p=I.data,{chatIds:f}=p;if(f.length>0&&f[0]===a&&f.shift(),t=(0,i.Rd)(),u=(0,c.VF)(t)?.message,n&&"active"===e){const a=Object.values(t.byTabId),i=a.flatMap((e=>{let{id:a}=e;const i=(0,c.jr)(t,a);return i?[i]:[]})),o=a.flatMap((e=>{let{id:a}=e;return(0,c.P2)(t,a)||[]}));t.currentUserId&&t.users.byId[t.currentUserId]&&o.push(t.users.byId[t.currentUserId]),t=(0,r.s5)(t,(0,l.ee)(o.concat(p.users),"id")),t=(0,r.ps)(t,p.userStatusesById),t=(0,r.SL)(t,(0,l.ee)(i.concat(p.chats),"id")),t=(0,r.Mg)(t,e,f),t={...t,chatFolders:p.chatFolders}}else if(n&&"archived"===e)t=(0,r.Sh)(t,(0,l.ee)(p.users,"id")),t=(0,r.zn)(t,p.userStatusesById),t=(0,r.GL)(t,(0,l.ee)(p.chats,"id")),t=(0,r.Mg)(t,e,f);else{const a=(0,l.ee)(p.chats,"id");if(f.includes(d.awM)){const t=a[d.awM];t&&u&&(a[d.awM]={...t,lastMessage:u})}t=(0,r.Sh)(t,(0,l.ee)(p.users,"id")),t=(0,r.zn)(t,p.userStatusesById),t=(0,r.GL)(t,a),t=(0,r.B1)(t,e,f)}t=(0,r.vv)(t,e,p),(h?p.chatIds:Object.keys(p.draftsById)).forEach((e=>{const a=p.draftsById[e],i=(0,c.ci)(t,e,o._f);(a||i)&&((0,c.Ms)(t,e,o._f)?.isLocal||(t=(0,r.pf)(t,e,o._f,"draft",a)))})),(h?p.chatIds:Object.keys(p.replyingToById)).forEach((e=>{const a=p.replyingToById[e],i=(0,c.ci)(t,e,o._f);(a||i)&&(t=(0,r.pf)(t,e,o._f,"replyingToId",a))})),t={...t,chats:{...t.chats,isFullyLoaded:{...t.chats.isFullyLoaded,[e]:!0}}},(0,i.R3)(t)}catch(t){console.error(t)}}async function A(t,e,a){for(var o=arguments.length,s=new Array(o>3?o-3:0),d=3;d<o;d++)s[d-3]=arguments[d];let[c=(0,g._w)()]=s;const h=await(0,n.t9)("fetchFullChat",a);if(!h)return;const{users:u,userStatusesById:I,fullInfo:V,groupCall:C,membersCount:w}=h;if(t=(0,i.Rd)(),u&&(t=(0,r.Sh)(t,(0,l.ee)(u,"id"))),I&&(t=(0,r.zn)(t,I)),C){const e=(0,f.$5)(t,C.id);t=(0,p.AH)(t,C.id,(0,l.CE)(C,["connectionState"]),void 0,e?void 0:C.participantsCount)}t=(0,r.a4)(t,a.id,{fullInfo:V,...w&&{membersCount:w}}),(0,i.R3)(t);const b=V.stickerSet;return b&&e.loadStickers({stickerSetInfo:{id:b.id,accessHash:b.accessHash},tabId:c}),h}async function M(t,e,a){for(var i=arguments.length,o=new Array(i>3?i-3:0),s=3;s<i;s++)o[s-3]=arguments[s];let[d=(0,g._w)()]=o;try{return await(0,n.t9)("migrateChat",a)}catch(t){return void("CHANNELS_TOO_MUCH"===t.message?e.openLimitReachedModal({limit:"channels",tabId:d}):e.showDialog({data:{...t,hasErrorKey:!0},tabId:d}))}}async function P(t,e){t=(0,i.Rd)();const a=(0,c.DI)(t,e);if(a&&!a.isMin)return a;const{chat:o,user:s}=await(0,n.t9)("getChatByUsername",e)||{};return o?(t=(0,i.Rd)(),t=(0,r.a4)(t,o.id,o),s&&(t=(0,r.Nq)(t,s.id,s)),(0,i.R3)(t),o):void 0}async function _(t,e,a){for(var o=arguments.length,s=new Array(o>3?o-3:0),d=3;d<o;d++)s[d-3]=arguments[d];let[h=(0,g._w)()]=s;const I=await P(t,a);if(!I)return;t=(0,i.Rd)();const p=(0,c.dy)(t,I.id);if(!p)return;const f=(0,u.cS)(p);if(!f)return;const V=await(0,n.t9)("loadAttachBot",{bot:p});if(t=(0,i.Rd)(),V)return t=(0,r.Sh)(t,(0,l.ee)(V.users,"id")),(0,i.R3)(t),V.bot;e.showNotification({message:C.Iu("WebApp.AddToAttachmentUnavailableError"),tabId:h})}async function B(t,e,a,o,s){for(var d=arguments.length,n=new Array(d>5?d-5:0),r=5;r<d;r++)n[r-5]=arguments[r];let[c=(0,g._w)()]=n;t=(0,i.Rd)();const l=await _(t,e,o,c);l&&e.callAttachBot({bot:l,chatId:a,..."string"==typeof s&&{startParam:s},tabId:c})}async function T(t,e,a){for(var i=arguments.length,o=new Array(i>3?i-3:0),s=3;s<i;s++)o[s-3]=arguments[s];let[d=(0,g._w)()]=o;const n=(0,c.Z1)(t,a);if(!n||!(0,u.G9)(n))return n;const r=await M(t,e,n,d);return r?(e.openChat({id:r.id,tabId:d}),r):void 0}(0,i.iw)("preloadTopChatMessages",(async(t,e)=>{const a=new Set;for(let s=0;s<d.ulj;s++){await(0,h.wO)(100),t=(0,i.Rd)();const s=Object.values(t.byTabId).map((e=>{let{id:a}=e;return(0,c.Bt)(t,a)?.chatId})).filter(Boolean),n=(0,V.gO)(d.NfV)?.find((t=>!s.includes(t)&&!a.has(t)));if(!n)return;a.add(n),e.loadViewportMessages({chatId:n,threadId:o._f,tabId:(0,g._w)()})}})),(0,i.iw)("openChat",((t,e,a)=>{const{id:i,threadId:s=o._f}=a;if(!i)return;const{currentUserId:d}=t,r=(0,c.Z1)(t,i);if(r?.hasUnreadMark&&e.toggleChatUnread({id:i}),r)(0,u.Hp)(r)&&!r.isMin&&e.requestChatUpdate({chatId:i});else if(i===d)(0,n.t9)("fetchChat",{type:"self"});else{const e=(0,c.dy)(t,i);e&&(0,n.t9)("fetchChat",{type:"user",user:e})}s!==o._f&&e.requestThreadInfoUpdate({chatId:i,threadId:s})})),(0,i.iw)("openComments",(async(t,e,a)=>{const{id:s,threadId:h,originChannelId:u,tabId:I=(0,g._w)()}=a;if(h!==o._f){const a=(0,c.qS)(t,s,h);if(a)e.openChat({id:s,threadId:a,tabId:I});else{const a=(0,c.Cm)(t,s,h);if(!a)return;e.openChat({id:d.mzl,tabId:I});const o=await(0,n.t9)("requestThreadInfoUpdate",{chat:a,threadId:h,originChannelId:u});if(!o)return void e.openPreviousChat({tabId:I});t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(o.users,"id")),(0,i.R3)(t),e.openChat({id:s,threadId:o.topMessageId,tabId:I})}}})),(0,i.iw)("openLinkedChat",(async(t,e,a)=>{const{id:i,tabId:o=(0,g._w)()}=a,s=(0,c.Z1)(t,i);if(!s)return;const d=await(0,n.t9)("fetchFullChat",s);d?.fullInfo?.linkedChatId&&e.openChat({id:d.fullInfo.linkedChatId,tabId:o})})),(0,i.iw)("focusMessageInComments",(async(t,e,a)=>{const{chatId:o,threadId:s,messageId:d,tabId:h=(0,g._w)()}=a,u=(0,c.Z1)(t,o);if(!u)return;const I=await(0,n.t9)("requestThreadInfoUpdate",{chat:u,threadId:s});I&&(t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(I.users,"id")),(0,i.R3)(t),e.focusMessage({chatId:o,threadId:s,messageId:d,tabId:h}))})),(0,i.iw)("openSupportChat",(async(t,e,a)=>{const{tabId:i=(0,g._w)()}=a||{},o=(0,c.P_)(t);if(o)return void e.openChat({id:o.id,shouldReplaceHistory:!0,tabId:i});e.openChat({id:d.mzl,shouldReplaceHistory:!0,tabId:i});const s=await(0,n.t9)("fetchChat",{type:"support"});s&&e.openChat({id:s.chatId,shouldReplaceHistory:!0,tabId:i})})),(0,i.iw)("loadAllChats",(async(t,e,a)=>{const o=a.listType;if("archived"===o)return;const{onReplace:s}=a;let{shouldReplace:n}=a,r=0;const l=t=>t.lastMessage?.date||t.joinDate;for(;n||!t.chats.isFullyLoaded[o];){if(r++>=100)return void(d.eMD&&console.error("`actions/loadAllChats`: Infinite loop detected"));if("connectionStateReady"!==(t=(0,i.Rd)()).connectionState||"authorizationStateReady"!==t.authState)return;const e=!n&&t.chats.listIds[o],a=e?e.map((e=>t.chats.byId[e])).filter((e=>Boolean(e&&l(e))&&e.id!==d.awM&&!(0,c.ep)(t,e.id))).sort(((t,e)=>l(t)-l(e)))[0]:void 0;await v(t,o,a?.id,a?l(a):void 0,n,!0),n&&(s?.(),n=!1),t=(0,i.Rd)()}})),(0,i.iw)("loadFullChat",((t,e,a)=>{const{chatId:i,force:o,tabId:s=(0,g._w)()}=a,d=(0,c.Z1)(t,i);d&&(o?A(t,e,d,s):R((()=>A(t,e,d,s))))})),(0,i.iw)("loadTopChats",(t=>{y((()=>v(t,"active")))})),(0,i.iw)("requestChatUpdate",((t,e,a)=>{const{chatId:i}=a,o=(0,c.Z1)(t,i);o&&(0,n.t9)("requestChatUpdate",{chat:o,...i===d.awM&&{lastLocalMessage:(0,c.VF)(t)?.message}})})),(0,i.iw)("updateChatMutedState",((t,e,a)=>{const{chatId:o,isMuted:s}=a,d=(0,c.Z1)(t,o);d&&(t=(0,r.a4)(t,o,{isMuted:s}),(0,i.R3)(t),(0,n.t9)("updateChatMutedState",{chat:d,isMuted:s}))})),(0,i.iw)("updateTopicMutedState",((t,e,a)=>{const{chatId:o,isMuted:s,topicId:d}=a,l=(0,c.Z1)(t,o);l&&(t=(0,r.Cn)(t,o,d,{isMuted:s}),(0,i.R3)(t),(0,n.t9)("updateTopicMutedState",{chat:l,topicId:d,isMuted:s}))})),(0,i.iw)("createChannel",(async(t,e,a)=>{const{title:o,about:d,photo:l,memberIds:h,tabId:u=(0,g._w)()}=a,I=h.map((e=>(0,c.dy)(t,e))).filter(Boolean);let p;t=(0,b.i)(t,{chatCreation:{progress:s.Nh.InProgress}},u),(0,i.R3)(t);try{p=await(0,n.t9)("createChannel",{title:o,about:d,users:I})}catch(a){t=(0,i.Rd)(),t=(0,b.i)(t,{chatCreation:{progress:s.Nh.Error}},u),(0,i.R3)(t),"CHANNELS_TOO_MUCH"===a.message?e.openLimitReachedModal({limit:"channels",tabId:u}):e.showDialog({data:{...a,hasErrorKey:!0},tabId:u})}if(!p)return;const{id:f,accessHash:V}=p;t=(0,i.Rd)(),t=(0,r.a4)(t,f,p),t=(0,b.i)(t,{chatCreation:{...(0,c.jU)(t,u).chatCreation,progress:p?s.Nh.Complete:s.Nh.Error}},u),(0,i.R3)(t),e.openChat({id:f,shouldReplaceHistory:!0,tabId:u}),f&&V&&l&&await(0,n.t9)("editChatPhoto",{chatId:f,accessHash:V,photo:l})})),(0,i.iw)("joinChannel",(async(t,e,a)=>{const{chatId:i,tabId:o=(0,g._w)()}=a,s=(0,c.Z1)(t,i);if(!s)return;const{id:d,accessHash:r}=s;if(d&&r)try{await(0,n.t9)("joinChannel",{channelId:d,accessHash:r})}catch(t){"CHANNELS_TOO_MUCH"===t.message?e.openLimitReachedModal({limit:"channels",tabId:o}):e.showDialog({data:{...t,hasErrorKey:!0},tabId:o})}})),(0,i.iw)("deleteChatUser",((t,e,a)=>{const{chatId:o,userId:s,tabId:d=(0,g._w)()}=a,l=(0,c.Z1)(t,o),h=(0,c.dy)(t,s);l&&h&&(t=(0,r.Dd)(t,o),(0,i.R3)(t),(0,c.Bt)(t,d)?.chatId===o&&e.openChat({id:void 0,tabId:d}),(0,n.t9)("deleteChatUser",{chat:l,user:h}))})),(0,i.iw)("deleteChat",((t,e,a)=>{const{chatId:o,tabId:s=(0,g._w)()}=a,d=(0,c.Z1)(t,o);d&&(t=(0,r.Dd)(t,o),(0,i.R3)(t),(0,c.Bt)(t,s)?.chatId===o&&e.openChat({id:void 0,tabId:s}),(0,n.t9)("deleteChat",{chatId:d.id}))})),(0,i.iw)("leaveChannel",((t,e,a)=>{const{chatId:o,tabId:s=(0,g._w)()}=a,d=(0,c.Z1)(t,o);if(!d)return;t=(0,r.Dd)(t,o),(0,i.R3)(t),(0,c.Bt)(t,s)?.chatId===o&&e.openChat({id:void 0,tabId:s});const{id:l,accessHash:h}=d;l&&h&&(0,n.t9)("leaveChannel",{channelId:l,accessHash:h})})),(0,i.iw)("deleteChannel",((t,e,a)=>{const{chatId:o,tabId:s=(0,g._w)()}=a,d=(0,c.Z1)(t,o);if(!d)return;t=(0,r.Dd)(t,o),(0,i.R3)(t),(0,c.Bt)(t,s)?.chatId===o&&e.openChat({id:void 0,tabId:s});const{id:l,accessHash:h}=d;l&&h&&(0,n.t9)("deleteChannel",{channelId:l,accessHash:h})})),(0,i.iw)("createGroupChat",(async(t,e,a)=>{const{title:o,memberIds:d,photo:l,tabId:h=(0,g._w)()}=a,u=d.map((e=>(0,c.dy)(t,e))).filter(Boolean);t=(0,b.i)(t,{chatCreation:{progress:s.Nh.InProgress}},h),(0,i.R3)(t);try{const a=await(0,n.t9)("createGroupChat",{title:o,users:u});if(!a)return;const{id:d}=a;t=(0,i.Rd)(),t=(0,r.a4)(t,d,a),t=(0,b.i)(t,{chatCreation:{...(0,c.jU)(t,h).chatCreation,progress:a?s.Nh.Complete:s.Nh.Error}},h),(0,i.R3)(t),e.openChat({id:d,shouldReplaceHistory:!0,tabId:h}),d&&l&&await(0,n.t9)("editChatPhoto",{chatId:d,photo:l})}catch(e){"USERS_TOO_FEW"===e.message&&(t=(0,i.Rd)(),t=(0,b.i)(t,{chatCreation:{...(0,c.jU)(t,h).chatCreation,progress:s.Nh.Error,error:"CreateGroupError"}},h),(0,i.R3)(t))}})),(0,i.iw)("toggleChatPinned",((t,e,a)=>{const{id:i,folderId:o,tabId:s=(0,g._w)()}=a,r=(0,c.Z1)(t,i);if(!r)return;const l=(0,w.M)(t,"dialogFolderPinned");if(o){const e=(0,c.Mw)(t,o);if(e){const a=!(0,c.ep)(t,i,o),{pinnedChatIds:s,includedChatIds:d}=e,r=a?[i,...s||[]]:(s||[]).filter((t=>t!==i)),l=[i,...d];(0,n.t9)("editChatFolder",{id:o,folderUpdate:{...e,pinnedChatIds:r,includedChatIds:l}})}}else{const a=(0,c.Ek)(t,i),o=(0,c.ep)(t,i,"archived"===a?d.WSp:void 0);if((t.chats.orderedPinnedIds["archived"===a?"archived":"active"]?.length||0)>=l&&!o)return void e.openLimitReachedModal({limit:"dialogFolderPinned",tabId:s});(0,n.t9)("toggleChatPinned",{chat:r,shouldBePinned:!o})}})),(0,i.iw)("toggleChatArchived",((t,e,a)=>{const{id:i}=a,o=(0,c.Z1)(t,i);o&&(0,n.t9)("toggleChatArchived",{chat:o,folderId:(0,u.pE)(o)?0:d.WSp})})),(0,i.iw)("loadChatFolders",(async t=>{const e=await(0,n.t9)("fetchChatFolders");e&&(t=(0,i.Rd)(),t={...t,chatFolders:{...t.chatFolders,...e}},(0,i.R3)(t))})),(0,i.iw)("loadRecommendedChatFolders",(async t=>{const e=await(0,n.t9)("fetchRecommendedChatFolders");e&&(t=(0,i.Rd)(),t={...t,chatFolders:{...t.chatFolders,recommended:e}},(0,i.R3)(t))})),(0,i.iw)("editChatFolders",((t,e,a)=>{const{chatId:i,idsToRemove:o,idsToAdd:s,tabId:d=(0,g._w)()}=a,r=(0,w.M)(t,"dialogFiltersChats");s.some((e=>(0,c.Mw)(t,e).includedChatIds.length>=r))?e.openLimitReachedModal({limit:"dialogFiltersChats",tabId:d}):(o.forEach((async e=>{const a=(0,c.Mw)(t,e);a&&await(0,n.t9)("editChatFolder",{id:e,folderUpdate:{...a,pinnedChatIds:a.pinnedChatIds?.filter((t=>t!==i)),includedChatIds:a.includedChatIds.filter((t=>t!==i))}})})),s.forEach((async e=>{const a=(0,c.Mw)(t,e);a&&await(0,n.t9)("editChatFolder",{id:e,folderUpdate:{...a,includedChatIds:a.includedChatIds.concat(i)}})})))})),(0,i.iw)("editChatFolder",((t,e,a)=>{const{id:i,folderUpdate:o}=a,s=(0,c.Mw)(t,i);s&&(0,n.t9)("editChatFolder",{id:i,folderUpdate:{id:i,emoticon:s.emoticon,pinnedChatIds:s.pinnedChatIds,...o}})})),(0,i.iw)("addChatFolder",(async(t,e,a)=>{const{folder:o,tabId:s=(0,g._w)()}=a,{orderedIds:r,byId:c}=t.chatFolders,l=(0,w.M)(t,"dialogFilters");if(Object.keys(c).length>=l)return void e.openLimitReachedModal({limit:"dialogFilters",tabId:s});const h=Math.max(...r||[],d.WSp),{id:u,description:I,...p}=o;if(await(0,n.t9)("editChatFolder",{id:h+1,folderUpdate:{id:h+1,...p}}),!I)return;t=(0,i.Rd)();const{recommended:f}=t.chatFolders;f&&(t={...t,chatFolders:{...t.chatFolders,recommended:f.filter((t=>{let{id:e}=t;return e!==u}))}},(0,i.R3)(t))})),(0,i.iw)("sortChatFolders",(async(t,e,a)=>{const{folderIds:o}=a;await(0,n.t9)("sortChatFolders",o)&&(t=(0,i.Rd)(),t={...t,chatFolders:{...t.chatFolders,orderedIds:o}},(0,i.R3)(t))})),(0,i.iw)("deleteChatFolder",(async(t,e,a)=>{const{id:i}=a;(0,c.Mw)(t,i)&&await(0,n.t9)("deleteChatFolder",i)})),(0,i.iw)("toggleChatUnread",((t,e,a)=>{const{id:i}=a,s=(0,c.Z1)(t,i);s&&(s.unreadCount?(0,n.t9)("markMessageListRead",{chat:s,threadId:o._f}):(0,n.t9)("toggleDialogUnread",{chat:s,hasUnreadMark:!s.hasUnreadMark}))})),(0,i.iw)("markTopicRead",((t,e,a)=>{const{chatId:o,topicId:s}=a,d=(0,c.Z1)(t,o);if(!d)return;const l=d.topics?.[s]?.lastMessageId;l&&((0,n.t9)("markMessageListRead",{chat:d,threadId:s,maxId:l}),t=(0,i.Rd)(),t=(0,r.Cn)(t,o,s,{unreadCount:0}),t=(0,r.Xg)(t,o,s,{lastReadInboxMessageId:l}),(0,i.R3)(t))})),(0,i.iw)("openChatByInvite",(async(t,e,a)=>{const{hash:i,tabId:o=(0,g._w)()}=a,s=await(0,n.t9)("openChatByInvite",i);s&&e.openChat({id:s.chatId,tabId:o})})),(0,i.iw)("openChatByPhoneNumber",(async(t,e,a)=>{const{phoneNumber:o,startAttach:s,attach:l,tabId:h=(0,g._w)()}=a;e.openChat({id:d.mzl,tabId:h});const u=await async function(t,e){t=(0,i.Rd)();const a=(0,c.Bk)(t,e);if(a&&!a.isMin)return(0,c.Z1)(t,a.id);const{chat:o,user:s}=await(0,n.t9)("getChatByPhoneNumber",e)||{};return o?(t=(0,i.Rd)(),t=(0,r.a4)(t,o.id,o),(0,i.R3)(t),s&&(t=(0,r.Nq)(t,s.id,s),(0,i.R3)(t)),o):void 0}(t,o);if(!u)return e.openPreviousChat({tabId:h}),void e.showNotification({message:C.Iu("lng_username_by_phone_not_found").replace("{phone}",o),tabId:h});e.openChat({id:u.id,tabId:h}),l&&B(t=(0,i.Rd)(),e,u.id,l,s,h)})),(0,i.iw)("openTelegramLink",((t,e,a)=>{const{url:i,tabId:o=(0,g._w)()}=a,{openChatByPhoneNumber:s,openChatByInvite:n,openStickerSet:r,openChatWithDraft:l,joinVoiceChatByLink:h,showNotification:u,focusMessage:p,openInvoice:f,processAttachBotParameters:V,openChatByUsername:C}=e;if(i.match(d.g$l))return void(0,I.ou)(i);const w=new URL(i.toLowerCase().startsWith("http")?i:`https://${i}`);if(d.LBg.has(w.hostname)&&"/"===w.pathname)return void window.open(w.toString(),"_blank","noopener");const b=(d.LBg.has(w.hostname)?"t.me":w.hostname).split(".");if(b.length>3)return;const m=3===b.length?`${b[0]}/${w.pathname}`:w.pathname,[y,R,v]=m.split("/").filter(Boolean).map((t=>decodeURI(t))),A=Object.fromEntries(w.searchParams);let M;"joinchat"===y&&(M=R);const P=!(!A.hasOwnProperty("startattach")||A.startattach)||A.startattach,_=(0,I.GX)(A.choose);if(y.match(/^\+([0-9]+)(\?|$)/))return void s({phoneNumber:y.substr(1,y.length-1),startAttach:P,attach:A.attach,tabId:o});if((y.startsWith(" ")||y.startsWith("+"))&&(M=y.substr(1,y.length-1)),M)return void n({hash:M,tabId:o});if("addstickers"===y||"addemoji"===y)return void r({stickerSetInfo:{shortName:R},tabId:o});const B=R||void 0,T=v?Number(v):void 0,H=A.comment?Number(A.comment):void 0;if("share"===y)l({text:(0,I.QH)(A.url,A.text),tabId:o});else if(A.hasOwnProperty("voicechat")||A.hasOwnProperty("livestream"))h({username:y,inviteHash:A.voicechat||A.livestream,tabId:o});else if("c"===y&&B&&T){const e=`-${B}`;if(!(0,c.Z1)(t,e))return void u({message:"Chat does not exist",tabId:o});p({chatId:e,messageId:T,tabId:o})}else y.startsWith("$")?f({slug:y.substring(1),tabId:o}):"invoice"===y?f({slug:R,tabId:o}):P&&_?V({username:y,filter:_,..."string"==typeof P&&{startParam:P},tabId:o}):C({username:y,messageId:T||Number(B),threadId:T?Number(B):void 0,commentId:H,startParam:A.start,startAttach:P,attach:A.attach,tabId:o})})),(0,i.iw)("acceptInviteConfirmation",(async(t,e,a)=>{const{hash:i,tabId:o=(0,g._w)()}=a,s=await(0,n.t9)("importChatInvite",{hash:i});s&&e.openChat({id:s.id,tabId:o})})),(0,i.iw)("openChatByUsername",(async(t,e,a)=>{const{username:o,messageId:s,commentId:h,startParam:u,startAttach:I,attach:p,threadId:f,tabId:V=(0,g._w)()}=a,C=(0,c.jr)(t,V);if(!h)return!I&&s&&!u&&C?.usernames?.some((t=>t.username===o))?void e.focusMessage({chatId:C.id,threadId:f,messageId:s,tabId:V}):void await async function(t,e,a,o,s,n,r,l){for(var h=arguments.length,u=new Array(h>8?h-8:0),I=8;I<h;I++)u[I-8]=arguments[I];let[p=(0,g._w)()]=u;t=(0,i.Rd)();const f=(0,c.jr)(t,p);if(r&&!l){const i=await _(t,e,a,p);if(!f||!i)return;return void e.callAttachBot({bot:i,chatId:f.id,..."string"==typeof r&&{startParam:r},tabId:p})}const V=f?.usernames?.some((t=>t.username===a));V||e.openChat({id:d.mzl,tabId:p});const C=await P(t,a);C?(s?e.focusMessage({chatId:C.id,threadId:o,messageId:s,tabId:p}):V||e.openChat({id:C.id,threadId:o,tabId:p}),n&&e.startBot({botId:C.id,param:n}),l&&B(t=(0,i.Rd)(),e,C.id,l,r,p)):V||(e.openPreviousChat({tabId:p}),e.showNotification({message:"User does not exist",tabId:p}))}(t,e,o,f,s,u,I,p,V);const{chatId:w,type:b}=(0,c.Bt)(t,V)||{},m=(0,c.DI)(t,o);if(w&&s&&m&&"thread"===b){const a=(0,c.tZ)(t,w,s);if(a&&a.chatId===w)return void e.focusMessage({chatId:a.chatId,threadId:a.threadId,messageId:h,tabId:V})}if(!s)return;e.openChat({id:d.mzl,tabId:V});const y=await P(t,o);if(!y)return;t=(0,i.Rd)();const R=(0,c.tZ)(t,y.id,s);let v;if(R)v=R.chatId;else{const e=await(0,n.t9)("requestThreadInfoUpdate",{chat:y,threadId:s});if(!e)return;t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(e.users,"id")),(0,i.R3)(t),v=e.discussionChatId}v&&e.focusMessage({chatId:v,threadId:s,messageId:Number(h),tabId:V})})),(0,i.iw)("togglePreHistoryHidden",(async(t,e,a)=>{const{chatId:o,isEnabled:s,tabId:d=(0,g._w)()}=a,c=await T(t,e,o,d);c&&(t=(0,i.Rd)(),t=(0,r.a4)(t,c.id,{fullInfo:{...c.fullInfo,isPreHistoryHidden:s}}),(0,i.R3)(t),(0,n.t9)("togglePreHistoryHidden",{chat:c,isEnabled:s}))})),(0,i.iw)("updateChatDefaultBannedRights",((t,e,a)=>{const{chatId:i,bannedRights:o}=a,s=(0,c.Z1)(t,i);s&&(0,n.t9)("updateChatDefaultBannedRights",{chat:s,bannedRights:o})})),(0,i.iw)("updateChatMemberBannedRights",(async(t,e,a)=>{const{chatId:o,userId:s,bannedRights:d,tabId:l=(0,g._w)()}=a,h=(0,c.dy)(t,s);if(!h)return;const u=await T(t,e,o,l);if(!u)return;await(0,n.t9)("updateChatMemberBannedRights",{chat:u,user:h,bannedRights:d}),t=(0,i.Rd)();const I=(0,c.Z1)(t,o);if(!I||!I.fullInfo)return;const{members:p,kickedMembers:f}=I.fullInfo,V=Boolean(d.viewMessages),C=!Object.keys(d).length;t=(0,r.a4)(t,o,{fullInfo:{...I.fullInfo,...p&&V&&{members:p.filter((t=>t.userId!==s))},...p&&!V&&{members:p.map((t=>t.userId===s?{...t,bannedRights:d}:t))},...C&&f&&{kickedMembers:f.filter((t=>t.userId!==s))}}}),(0,i.R3)(t)})),(0,i.iw)("updateChatAdmin",(async(t,e,a)=>{const{chatId:o,userId:s,adminRights:d,customTitle:l,tabId:h=(0,g._w)()}=a,u=(0,c.dy)(t,s);if(!u)return;const I=await T(t,e,o,h);if(!I)return;await(0,n.t9)("updateChatAdmin",{chat:I,user:u,adminRights:d,customTitle:l});const p=await(0,n.t9)("fetchFullChat",I);if(!p?.fullInfo)return;const{adminMembersById:f}=p.fullInfo,V=!Object.keys(d).length;let C;if(f)if(V){const{[s]:t,...e}=f;C=e}else C={...f,[s]:{...f[s],adminRights:d,customTitle:l}};t=(0,i.Rd)(),t=(0,r.a4)(t,o,{fullInfo:{...p.fullInfo,...C&&{adminMembersById:C}}}),(0,i.R3)(t)})),(0,i.iw)("updateChat",(async(t,e,a)=>{const{chatId:o,title:d,about:l,photo:h,tabId:u=(0,g._w)()}=a,I=(0,c.Z1)(t,o);I&&(t=(0,i.Rd)(),t=(0,r.H9)(t,s.wv.InProgress,u),(0,i.R3)(t),await Promise.all([I.title!==d?(0,n.t9)("updateChatTitle",I,d):void 0,I.fullInfo&&I.fullInfo.about!==l?(0,n.t9)("updateChatAbout",I,l):void 0,h?(0,n.t9)("editChatPhoto",{chatId:o,accessHash:I.accessHash,photo:h}):void 0]),t=(0,i.Rd)(),t=(0,r.H9)(t,s.wv.Complete,u),(0,i.R3)(t))})),(0,i.iw)("updateChatPhoto",(async(t,e,a)=>{const{photo:o,chatId:s,tabId:d=(0,g._w)()}=a,l=(0,c.Z1)(t,s);l&&(t=(0,r.a4)(t,s,{avatarHash:void 0,fullInfo:{...l.fullInfo,profilePhoto:void 0}}),(0,i.R3)(t),await(0,n.t9)("editChatPhoto",{chatId:s,accessHash:l.accessHash,photo:o}),await(0,n.t9)("deleteProfilePhotos",[o]),e.loadFullChat({chatId:s,tabId:d}),e.loadProfilePhotos({profileId:s}))})),(0,i.iw)("deleteChatPhoto",(async(t,e,a)=>{const{photo:o,chatId:s,tabId:d=(0,g._w)()}=a,l=(0,c.Z1)(t,s);if(!l)return;const h=[o];if(l.avatarHash===o.id){const e=l.photos?.[1];e&&h.push(e),t=(0,r.a4)(t,s,{avatarHash:void 0,fullInfo:{...l.fullInfo,profilePhoto:void 0}}),(0,i.R3)(t),await(0,n.t9)("editChatPhoto",{chatId:s,accessHash:l.accessHash,photo:e})}await(0,n.t9)("deleteProfilePhotos",h)&&(e.loadFullChat({chatId:s,tabId:d}),e.loadProfilePhotos({profileId:s}))})),(0,i.iw)("toggleSignatures",((t,e,a)=>{const{chatId:i,isEnabled:o}=a,s=(0,c.Z1)(t,i);s&&(0,n.t9)("toggleSignatures",{chat:s,isEnabled:o})})),(0,i.iw)("loadGroupsForDiscussion",(async t=>{const e=await(0,n.t9)("fetchGroupsForDiscussion");if(!e)return;const a=e.reduce(((t,e)=>(e&&!e.isForum&&(t[e.id]=e),t)),{});t=(0,i.Rd)(),t=(0,r.fZ)(t,a),t={...t,chats:{...t.chats,forDiscussionIds:Object.keys(a)}},(0,i.R3)(t)})),(0,i.iw)("linkDiscussionGroup",(async(t,e,a)=>{const{channelId:o,chatId:s,tabId:d=(0,g._w)()}=a||{},l=(0,c.Z1)(t,o);if(!l)return;const h=await T(t,e,s,d);if(!h)return;let{fullInfo:u}=h;if(!u){const t=await(0,n.t9)("fetchFullChat",h);if(!t)return;u=t.fullInfo}u.isPreHistoryHidden&&(t=(0,i.Rd)(),t=(0,r.a4)(t,h.id,{fullInfo:{...h.fullInfo,isPreHistoryHidden:!1}}),(0,i.R3)(t),await(0,n.t9)("togglePreHistoryHidden",{chat:h,isEnabled:!1})),(0,n.t9)("setDiscussionGroup",{channel:l,chat:h})})),(0,i.iw)("unlinkDiscussionGroup",(async(t,e,a)=>{const{channelId:o,tabId:s=(0,g._w)()}=a,d=(0,c.Z1)(t,o);if(!d)return;let r;d.fullInfo?.linkedChatId&&(r=(0,c.Z1)(t,d.fullInfo.linkedChatId)),await(0,n.t9)("setDiscussionGroup",{channel:d}),r&&A(t=(0,i.Rd)(),e,r,s)})),(0,i.iw)("setActiveChatFolder",((t,e,a)=>{const{activeChatFolder:i,tabId:o=(0,g._w)()}=a;if(!(i+1>(0,w.M)(t,"dialogFilters")))return(0,b.i)(t,{activeChatFolder:i},o);e.openLimitReachedModal({limit:"dialogFilters",tabId:o})})),(0,i.iw)("resetOpenChatWithDraft",((t,e,a)=>{const{tabId:i=(0,g._w)()}=a||{};return(0,b.i)(t,{requestedDraft:void 0},i)})),(0,i.iw)("loadMoreMembers",(async(t,e,a)=>{const{tabId:o=(0,g._w)()}=a||{},{chatId:s}=(0,c.Bt)(t,o)||{},d=s?(0,c.Z1)(t,s):void 0;if(!d||(0,u.G9)(d))return;const h=d.fullInfo?.members?.length||void 0;if(void 0!==h&&void 0!==d.membersCount&&h>=d.membersCount)return;const I=await(0,n.t9)("fetchMembers",d.id,d.accessHash,"recent",h);if(!I)return;const{members:p,users:f,userStatusesById:V}=I;p&&p.length&&(t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(f,"id")),t=(0,r.zn)(t,V),t=(0,r.iX)(t,d,p),(0,i.R3)(t))})),(0,i.iw)("addChatMembers",(async(t,e,a)=>{const{chatId:o,memberIds:d,tabId:r=(0,g._w)()}=a,l=(0,c.Z1)(t,o),h=d.map((e=>(0,c.dy)(t,e))).filter(Boolean);l&&h.length&&(e.setNewChatMembersDialogState({newChatMembersProgress:s.WB.Loading,tabId:r}),await(0,n.t9)("addChatMembers",l,h),e.setNewChatMembersDialogState({newChatMembersProgress:s.WB.Closed,tabId:r}),A(t=(0,i.Rd)(),e,l,r))})),(0,i.iw)("deleteChatMember",(async(t,e,a)=>{const{chatId:o,userId:s,tabId:d=(0,g._w)()}=a,r=(0,c.Z1)(t,o),l=(0,c.dy)(t,s);r&&l&&(await(0,n.t9)("deleteChatMember",r,l),A(t=(0,i.Rd)(),e,r,d))})),(0,i.iw)("toggleIsProtected",((t,e,a)=>{const{chatId:i,isProtected:o}=a,s=(0,c.Z1)(t,i);s&&(0,n.t9)("toggleIsProtected",{chat:s,isProtected:o})})),(0,i.iw)("setChatEnabledReactions",(async(t,e,a)=>{const{chatId:o,enabledReactions:s,tabId:d=(0,g._w)()}=a,r=(0,c.Z1)(t,o);r&&(await(0,n.t9)("setChatEnabledReactions",{chat:r,enabledReactions:s}),A(t=(0,i.Rd)(),e,r,d))})),(0,i.iw)("loadChatSettings",(async(t,e,a)=>{const{chatId:o}=a,s=(0,c.Z1)(t,o);if(!s)return;const d=await(0,n.t9)("fetchChatSettings",s);if(!d)return;const{settings:h,users:u}=d;t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(u,"id")),t=(0,r.a4)(t,s.id,{settings:h}),(0,i.R3)(t)})),(0,i.iw)("toggleJoinToSend",(async(t,e,a)=>{const{chatId:i,isEnabled:o}=a,s=(0,c.Z1)(t,i);s&&((0,u.ZV)(s)||(0,u.eA)(s))&&await(0,n.t9)("toggleJoinToSend",s,o)})),(0,i.iw)("toggleJoinRequest",(async(t,e,a)=>{const{chatId:i,isEnabled:o}=a,s=(0,c.Z1)(t,i);s&&((0,u.ZV)(s)||(0,u.eA)(s))&&await(0,n.t9)("toggleJoinRequest",s,o)})),(0,i.iw)("openForumPanel",((t,e,a)=>{const{chatId:i,tabId:o=(0,g._w)()}=a;return(0,b.i)(t,{forumPanelChatId:i},o)})),(0,i.iw)("closeForumPanel",((t,e,a)=>{const{tabId:i=(0,g._w)()}=a||{};return(0,b.i)(t,{forumPanelChatId:void 0},i)})),(0,i.iw)("processAttachBotParameters",(async(t,e,a)=>{const{username:o,filter:s,startParam:d,tabId:n=(0,g._w)()}=a,r=await _(t,e,o,n);if(!r)return;t=(0,i.Rd)();const{attachMenu:{bots:c}}=t;if(!c[r.id])return t=(0,b.i)(t,{requestedAttachBotInstall:{bot:r,onConfirm:{action:"requestAttachBotInChat",payload:{bot:r,filter:s,startParam:d}}}},n),void(0,i.R3)(t);e.requestAttachBotInChat({bot:r,filter:s,startParam:d,tabId:n})})),(0,i.iw)("loadTopics",(async(t,e,a)=>{const{chatId:o,force:s}=a,h=(0,c.Z1)(t,o);if(!h)return;if(!s&&h.listedTopicIds&&h.listedTopicIds.length===h.topicsCount)return;const u=!s&&h.listedTopicIds?h.listedTopicIds.reduce(((t,e)=>{const a=h.topics?.[e],i=h.topics?.[t];return a&&(!i||a.lastMessageId<i.lastMessageId)?e:t})):void 0,{id:I,date:p,lastMessageId:f}=u&&h.topics?.[u]||{},V=await(0,n.t9)("fetchTopics",{chat:h,offsetTopicId:I,offsetId:f,offsetDate:p,limit:I?d.C1M:d.SC4});V&&(t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(V.users,"id")),t=(0,r.fZ)(t,(0,l.ee)(V.chats,"id")),t=(0,r.m6)(t,V.messages),t=(0,r.XG)(t,o,V.count,V.topics),t=(0,r.Jr)(t,o,V.topics.map((t=>t.id))),Object.entries(V.draftsById||{}).forEach((e=>{let[a,i]=e;t=(0,r.pf)(t,o,Number(a),"draft",i?.formattedText),t=(0,r.pf)(t,o,Number(a),"replyingToId",i?.replyingToId)})),Object.entries(V.readInboxMessageIdByTopicId||{}).forEach((e=>{let[a,i]=e;t=(0,r.Xg)(t,o,Number(a),{lastReadInboxMessageId:i})})),(0,i.R3)(t))})),(0,i.iw)("loadTopicById",(async(t,e,a)=>{const{chatId:o,topicId:s}=a,d=(0,c.Z1)(t,o);if(!d)return;const h=await(0,n.t9)("fetchTopicById",{chat:d,topicId:s});if(h)t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(h.users,"id")),t=(0,r.fZ)(t,(0,l.ee)(h.chats,"id")),t=(0,r.m6)(t,h.messages),t=(0,r.Cn)(t,o,s,h.topic),(0,i.R3)(t);else if("tabId"in a&&a.shouldCloseChatOnError){const{tabId:t=(0,g._w)()}=a;e.openChat({id:void 0,tabId:t})}})),(0,i.iw)("toggleForum",(async(t,e,a)=>{const{chatId:o,isEnabled:s,tabId:d=(0,g._w)()}=a,c=await T(t,e,o,d);if(!c)return;t=(0,i.Rd)();const l=c.isForum;t=(0,r.a4)(t,o,{isForum:s}),(0,i.R3)(t),await(0,n.t9)("toggleForum",{chat:c,isEnabled:s})||(t=(0,i.Rd)(),t=(0,r.a4)(t,o,{isForum:l}),(0,i.R3)(t))})),(0,i.iw)("toggleParticipantsHidden",(async(t,e,a)=>{const{chatId:o,isEnabled:s}=a,d=(0,c.Z1)(t,o);if(!d)return;const l=d.fullInfo?.areParticipantsHidden;t=(0,r.a4)(t,o,{fullInfo:{...d.fullInfo,areParticipantsHidden:s}}),(0,i.R3)(t),await(0,n.t9)("toggleParticipantsHidden",{chat:d,isEnabled:s})||void 0===l||(t=(0,i.Rd)(),t=(0,r.a4)(t,o,{fullInfo:{...d.fullInfo,areParticipantsHidden:l}}),(0,i.R3)(t))})),(0,i.iw)("createTopic",(async(t,e,a)=>{const{chatId:o,title:s,iconColor:d,iconEmojiId:r,tabId:l=(0,g._w)()}=a,h=(0,c.Z1)(t,o);if(!h)return;(0,c.jU)(t,l).createTopicPanel&&(t=(0,b.i)(t,{createTopicPanel:{chatId:o,isLoading:!0}},l),(0,i.R3)(t));const u=await(0,n.t9)("createTopic",{chat:h,title:s,iconColor:d,iconEmojiId:r});u&&e.openChat({id:o,threadId:u,shouldReplaceHistory:!0,tabId:l}),e.closeCreateTopicPanel({tabId:l})})),(0,i.iw)("deleteTopic",(async(t,e,a)=>{const{chatId:o,topicId:s}=a,d=(0,c.Z1)(t,o);d&&await(0,n.t9)("deleteTopic",{chat:d,topicId:s})&&(t=(0,i.Rd)(),t=(0,r.BK)(t,o,s),(0,i.R3)(t))})),(0,i.iw)("editTopic",(async(t,e,a)=>{const{chatId:o,topicId:s,tabId:d=(0,g._w)(),...l}=a,h=(0,c.Z1)(t,o),u=h?.topics?.[s];h&&u&&((0,c.jU)(t,d).editTopicPanel&&(t=(0,b.i)(t,{editTopicPanel:{chatId:o,topicId:s,isLoading:!0}},d),(0,i.R3)(t)),await(0,n.t9)("editTopic",{chat:h,topicId:s,...l})&&(t=(0,i.Rd)(),t=(0,r.Cn)(t,o,s,l),(0,i.R3)(t),e.closeEditTopicPanel({tabId:d})))})),(0,i.iw)("toggleTopicPinned",((t,e,a)=>{const{chatId:i,topicId:o,isPinned:s,tabId:d=(0,g._w)()}=a,{topicsPinnedLimit:r}=t.appConfig||{},l=(0,c.Z1)(t,i);l&&l.topics&&r&&(s&&Object.values(l.topics).filter((t=>t.isPinned)).length>=r?e.showNotification({message:C.Iu("LimitReachedPinnedTopics",r,"i"),tabId:d}):(0,n.t9)("togglePinnedTopic",{chat:l,topicId:o,isPinned:s}))}))},88422:(t,e,a)=>{a.d(e,{CW:()=>_,EP:()=>y,FF:()=>A,Mt:()=>P,NH:()=>M,o5:()=>m});var i=a(33555),o=a(71226),s=a(11192),d=a(64319),n=a(27225),r=a(25260),c=a(78958),l=a(42431),h=a(56112),u=a(60782),I=a(74753),p=a(77361),f=a(50711),V=a(44271),C=a(65054);let w,b,g;function m(){return y(),Promise.all(Object.values(g).map((t=>{const e=t.src;return t.src="data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",t.muted=!0,t.volume=1e-4,t.play().then((()=>{t.pause(),t.volume=1,t.currentTime=0,t.muted=!1,requestAnimationFrame((()=>{t.src=e}))}))})))}function y(){if(g)return;const t=new Audio("./voicechat_join.mp3"),e=new Audio("./voicechat_connecting.mp3");e.loop=!0;const a=new Audio("./voicechat_leave.mp3"),i=new Audio("./voicechat_onallowtalk.mp3"),o=new Audio("./call_busy.mp3"),s=new Audio("./call_connect.mp3"),d=new Audio("./call_end.mp3"),n=new Audio("./call_incoming.mp3");n.loop=!0;const r=new Audio("./call_ringing.mp3");r.loop=!0,g={join:t,allowTalk:i,leave:a,connecting:e,incoming:n,end:d,connect:s,busy:o,ringing:r}}async function R(t,e){const a=await(0,o.t9)("getGroupCall",{call:e});if(!a)return;t=(0,i.Rd)();const s=(0,l.$5)(t,e.id);return t=(0,c.AH)(t,e.id,(0,u.CE)(a.groupCall,["connectionState"]),void 0,s?.isLoaded?void 0:a.groupCall.participantsCount),t=(0,r.Sh)(t,(0,u.ee)(a.users,"id")),t=(0,r.fZ)(t,(0,u.ee)(a.chats,"id")),(0,i.R3)(t),a.groupCall}async function v(t,e,a){const s=await(0,o.t9)("fetchGroupCallParticipants",{call:e,offset:a});s&&(t=(0,i.Rd)(),t=(0,r.Sh)(t,(0,u.ee)(s.users,"id")),t=(0,r.fZ)(t,(0,u.ee)(s.chats,"id")),(0,i.R3)(t))}function A(){return w}function M(){return b}function P(){w?.pause(),b=void 0,w=void 0}function _(t,e,a){for(var i=arguments.length,o=new Array(i>3?i-3:0),s=3;s<i;s++)o[s-3]=arguments[s];let[d=(0,C._w)()]=o;a?navigator.mediaDevices.getUserMedia({video:!0}).then((a=>{0===a.getVideoTracks().length?e.showNotification({message:f.Iu("Call.Camera.Error"),tabId:d}):B(t,e,d)})).catch((()=>{e.showNotification({message:f.Iu("Call.Camera.Error"),tabId:d})})):B(t,e,d)}function B(t,e){for(var a=arguments.length,i=new Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];let[s=(0,C._w)()]=i;navigator.mediaDevices.getUserMedia({audio:!0}).then((t=>{0===t.getAudioTracks().length&&e.showNotification({message:f.Iu("RequestAcces.Error.HaveNotAccess.Call"),tabId:s})})).catch((()=>{e.showNotification({message:f.Iu("RequestAcces.Error.HaveNotAccess.Call"),tabId:s})}))}(0,i.iw)("toggleGroupCallPanel",((t,e,a)=>{const{force:i,tabId:o=(0,C._w)()}=a||{};return(0,V.i)(t,{isCallPanelVisible:"force"in(a||{})?i:!(0,s.jU)(t,o).isCallPanelVisible},o)})),(0,i.iw)("subscribeToGroupCallUpdates",(async(t,e,a)=>{const{subscribed:s,id:d}=a,n=(0,l.$5)(t,d);n&&(s&&(await R(t,n),t=(0,i.Rd)(),await v(t,n)),await(0,o.t9)("toggleGroupCallStartSubscription",{subscribed:s,call:n}))})),(0,i.iw)("createGroupCall",(async(t,e,a)=>{const{chatId:d,tabId:n=(0,C._w)()}=a,r=(0,s.Z1)(t,d);if(!r)return;const l=await(0,o.t9)("createGroupCall",{peer:r});l&&(t=(0,i.Rd)(),t=(0,c.AH)(t,l.id,{...l,chatId:d}),(0,i.R3)(t),e.requestMasterAndJoinGroupCall({id:l.id,accessHash:l.accessHash,tabId:n}))})),(0,i.iw)("createGroupCallInviteLink",(async(t,e,a)=>{const{tabId:i=(0,C._w)()}=a||{},n=(0,l.mU)(t);if(!n||!n.chatId)return;const r=(0,s.Z1)(t,n.chatId);if(!r)return;const c=Boolean((0,h.WS)(r));let{inviteLink:u}=r.fullInfo;c&&(u=await(0,o.t9)("exportGroupCallInvite",{call:n,canSelfUnmute:!1})),u&&((0,d.TE)(u),e.showNotification({message:"Link copied to clipboard",tabId:i}))})),(0,i.iw)("joinVoiceChatByLink",(async(t,e,a)=>{const{username:o,inviteHash:s,tabId:d=(0,C._w)()}=a,r=await(0,n.Co)(t,o);if(!r)return void e.showNotification({message:f.Iu("NoUsernameFound"),tabId:d});t=(0,i.Rd)();const c=await(0,n.ft)(t,e,r,d);c?.groupCall&&e.requestMasterAndJoinGroupCall({id:c.groupCall.id,accessHash:c.groupCall.accessHash,inviteHash:s,tabId:d})})),(0,i.iw)("requestMasterAndJoinGroupCall",((t,e,a)=>{e.requestMasterAndCallAction({action:"joinGroupCall",payload:a,tabId:a.tabId||(0,C._w)()})})),(0,i.iw)("requestMasterAndAcceptCall",((t,e,a)=>{e.requestMasterAndCallAction({action:"acceptCall",payload:void 0,tabId:a?.tabId||(0,C._w)()})})),(0,i.iw)("joinGroupCall",(async(t,e,a)=>{const{chatId:o,id:s,accessHash:d,inviteHash:n,tabId:r=(0,C._w)()}=a;if(!p.Bi)return;if(t.phoneCall)return void e.toggleGroupCallPanel({tabId:r});!function(){const t=new(window.AudioContext||window.webkitAudioContext);w=new Audio,b=t,w.srcObject=(t=>{const e=t.createOscillator(),a=e.connect(t.createMediaStreamDestination());return e.start(),new MediaStream([Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})])})(t),(0,I.Z)(w)}(),y(),_(t=(0,i.Rd)(),e,!0,r);const{groupCalls:{activeGroupCallId:h}}=t;let u=s?(0,l.$5)(t,s):(0,l.Bj)(t,o);u?.id!==h?h?"leaveGroupCall"in e&&e.leaveGroupCall({rejoin:a,tabId:r}):u&&h===u.id?e.toggleGroupCallPanel({tabId:r}):(u||s&&d||(u=await R(t,{id:s,accessHash:d})),u&&(t=(0,i.Rd)(),t=(0,c.AH)(t,u.id,{...u,inviteHash:n},void 0,u.participantsCount+1),t={...t,groupCalls:{...t.groupCalls,activeGroupCallId:u.id}},(0,i.R3)(t),e.toggleGroupCallPanel({force:!1,tabId:r}))):e.toggleGroupCallPanel({tabId:r})})),(0,i.iw)("playGroupCallSound",((t,e,a)=>{const{sound:i}=a;g[i]&&("connecting"!==i&&g.connecting.pause(),"incoming"!==i&&g.incoming.pause(),"ringing"!==i&&g.ringing.pause(),(0,I.Z)(g[i]))})),(0,i.iw)("loadMoreGroupCallParticipants",(t=>{const e=(0,l.mU)(t);e&&v(t,e,e.nextOffset)})),(0,i.iw)("requestMasterAndRequestCall",((t,e,a)=>{e.requestMasterAndCallAction({action:"requestCall",payload:a,tabId:a.tabId||(0,C._w)()})})),(0,i.iw)("requestCall",(async(t,e,a)=>{const{userId:o,isVideo:d,tabId:n=(0,C._w)()}=a;t.phoneCall?e.toggleGroupCallPanel({tabId:n}):(0,s.dy)(t,o)&&(y(),_(t=(0,i.Rd)(),e,d,n),t=(0,i.Rd)(),t={...t,phoneCall:{id:"",state:"requesting",participantId:o,isVideo:d,adminId:t.currentUserId}},(0,i.R3)(t),e.toggleGroupCallPanel({force:!1,tabId:n}))}))},78958:(t,e,a)=>{a.d(e,{AH:()=>n,B6:()=>l,Ic:()=>c,dc:()=>r});var i=a(42431),o=a(60782),s=a(53475),d=a(11192);function n(t,e,a,i,s){const d=Object.values({...t.groupCalls.byId[e]?.participants,...a.participants}).filter((t=>{let{isLeft:e}=t;return!e})).reduce(((t,e)=>(t[e.id]=e,t)),{});return{...t,groupCalls:{...t.groupCalls,byId:{...t.groupCalls.byId,[e]:{...t.groupCalls.byId[e],...(0,o.CE)(a,["participantsCount"]),...i&&{participantsCount:t.groupCalls.byId[e].participantsCount+i},...void 0!==s&&{participantsCount:s},participants:d}}}}}function r(t,e){const a=(0,i.$5)(t,e);if(a&&a.chatId){const e=(0,d.Z1)(t,a.chatId);e&&(t=(0,s.a4)(t,a.chatId,{fullInfo:{...e.fullInfo,groupCallId:void 0}}))}return{...t,groupCalls:{...t.groupCalls,byId:{...(0,o.CE)(t.groupCalls.byId,[e.toString()])}}}}function c(t,e,a){return t.groupCalls.activeGroupCallId?n(t,t.groupCalls.activeGroupCallId,e,void 0,a):t}function l(t,e,a,o){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const d=(0,i.$5)(t,e);return d?n(t,e,{participants:{...d.participants,[a]:{...d.participants[a],...o}}},o.isLeft?s?0:-1:d.participants[a]||s?0:1):t}}}]);
//# sourceMappingURL=8422.86dbc77707fdc0617721.js.map