(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[3041],{97315:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AuthCode:()=>Z,AuthPassword:()=>v,AuthRegister:()=>y,AuthRegisterEmail:()=>B,AuthSignPassword:()=>R});var n=a(60748),r=a(33555),o=a(77361),s=a(60782),i=a(32340),l=a(46590),c=a(59107),u=a(97687),d=a(34288),m=a(83716),h=a(62821),g=a(42797),p=a(97799);const f=(0,n.X$)((({code:e,codeLength:t,trackingDirection:a,isTracking:r,isBig:o})=>{const[s,i]=(0,n.eJ)(!1),{isMobile:l}=(0,g.ZP)(),c=165/t,u=l?m.qpg:m.z7m,d=(0,n.I4)((()=>i(!0)),[]);return n.ZP.createElement("div",{id:"monkey",className:o?"big":""},!s&&n.ZP.createElement("div",{className:"monkey-preview"}),n.ZP.createElement(p.Z,{size:o?m.K2q:u,className:r?"hidden":void 0,tgsUrl:h.l.MonkeyIdle,play:!r,onLoad:d}),n.ZP.createElement(p.Z,{size:o?m.K2q:u,className:r?"shown":"hidden",tgsUrl:h.l.MonkeyTracking,playSegment:r?function(){const n=e&&e.length>1||a<0?15+c*(e.length-1):0,r=e.length===t?180:15+c*e.length;return a<1?[r,n]:[n,r]}():void 0,speed:2,noLoop:!0}))})),Z=(0,n.X$)((0,r.c$)((e=>(0,s.ei)(e,["authPhoneNumber","authIsCodeViaApp","authIsLoading","authError"])))((({authPhoneNumber:e,authIsCodeViaApp:t,authIsLoading:a,authError:s})=>{const{setAuthCode:m,returnToAuthPhoneNumber:h,clearAuthError:g}=(0,r.Sv)(),p=(0,c.Z)(),Z=(0,n.sO)(null),[P,E]=(0,n.eJ)(""),[v,b]=(0,n.eJ)(!1),[w,y]=(0,n.eJ)(1);(0,n.d4)((()=>{o.$b||Z.current.focus()}),[]),(0,l.Z)({isActive:!0,onBack:h});const N=(0,n.I4)((e=>{s&&g();const{currentTarget:t}=e;t.value=t.value.replace(/[^\d]+/,"").substr(0,5),t.value!==P&&(E(t.value),v?t.value.length||b(!1):b(!0),P&&P.length>t.value.length?y(-1):y(1),5===t.value.length&&m({code:t.value}))}),[s,g,P,v,m]);return n.ZP.createElement("div",{id:"auth-code-form",className:"custom-scroll"},n.ZP.createElement("div",{className:"auth-form"},n.ZP.createElement(f,{code:P,codeLength:5,isTracking:v,trackingDirection:w}),n.ZP.createElement("h1",null,e,n.ZP.createElement("div",{className:"auth-number-edit",onClick:function(){h()},role:"button",tabIndex:0,title:p("WrongNumber")},n.ZP.createElement("i",{className:"icon-edit"}))),n.ZP.createElement("p",{className:"note"},(0,i.Z)(p(t?"SentAppCode":"Login.JustSentSms"),["simple_markdown"])),n.ZP.createElement(u.Z,{ref:Z,id:"sign-in-code",label:p("Code"),onInput:N,value:P,error:s&&p(s),autoComplete:"off",inputMode:"numeric"}),a&&n.ZP.createElement(d.Z,null)))})));var P=a(93490),E=a(99364);const v=(0,n.X$)((0,r.c$)((e=>(0,s.ei)(e,["authIsLoading","authError","authHint"])))((({authIsLoading:e,authError:t,authHint:a})=>{const{setAuthPassword:o,clearAuthError:s}=(0,r.Sv)(),i=(0,c.Z)(),[l,u]=(0,n.eJ)(!1),d=(0,n.I4)((e=>{u(e)}),[]),m=(0,n.I4)((e=>{o({password:e})}),[o]);return n.ZP.createElement("div",{id:"auth-password-form",className:"custom-scroll"},n.ZP.createElement("div",{className:"auth-form"},n.ZP.createElement(P.Z,{isPasswordVisible:l}),n.ZP.createElement("h1",null,i("Login.Header.Password")),n.ZP.createElement("p",{className:"note"},i("Login.EnterPasswordDescription")),n.ZP.createElement(E.Z,{clearError:s,error:t&&i(t),hint:a,isLoading:e,isPasswordVisible:l,onChangePasswordVisibility:d,onSubmit:m})))})));var b=a(231),w=a(90730);const y=(0,n.X$)((0,r.c$)((e=>(0,s.ei)(e,["authIsLoading","authError"])))((({authIsLoading:e,authError:t})=>{const{signUp:a,clearAuthError:o,uploadProfilePhoto:s}=(0,r.Sv)(),i=(0,c.Z)(),[l,d]=(0,n.eJ)(!1),[m,h]=(0,n.eJ)(),[g,p]=(0,n.eJ)(""),[f,Z]=(0,n.eJ)(""),P=(0,n.I4)((e=>{t&&o();const{target:a}=e;p(a.value),d(a.value.length>0)}),[t,o]),E=(0,n.I4)((e=>{const{target:t}=e;Z(t.value)}),[]);return n.ZP.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},n.ZP.createElement("div",{className:"auth-form"},n.ZP.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault(),a({firstName:g,lastName:f}),m&&s({file:m})}},n.ZP.createElement(w.Z,{onChange:h}),n.ZP.createElement("h2",null,i("YourName")),n.ZP.createElement("p",{className:"note"},i("Login.Register.Desc")),n.ZP.createElement(u.Z,{id:"registration-first-name",label:i("Login.Register.FirstName.Placeholder"),onChange:P,value:g,error:t&&i(t),autoComplete:"given-name"}),n.ZP.createElement(u.Z,{id:"registration-last-name",label:i("Login.Register.LastName.Placeholder"),onChange:E,value:f,autoComplete:"family-name"}),l&&n.ZP.createElement(b.Z,{type:"submit",ripple:!0,isLoading:e},i("Next")))))}))),N=a.p+"github.cc5da41cefbfea31a26e.svg",C=a.p+"google.324ab349caf94c572718.svg";var S=a(54155),I=a.n(S),k=a(89618);function L(e){const t=e.replace(/#/g,"?"),a=new URL(t),n=Array.from(a.searchParams.entries()).reduce(((e,[t,a])=>({...e,[t]:a})),{});return{url:a,query:n}}(0,a(61926).QV)({key:a.g.JWT_SECRET});const A=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);var J=a(54844);let M=!1;const B=(0,n.X$)((0,r.c$)((e=>(0,s.ei)(e,["authError"])))((({authError:e})=>{const{clearAuthError:t,showAuthError:a,updateGlobal:o}=(0,r.Sv)(),s=(0,c.Z)(),[i,l]=(0,n.eJ)(!1),[d,h]=(0,n.eJ)(!1),[p,f]=(0,n.eJ)(m.IKD),[Z,P]=(0,n.eJ)(A(p)),[v,w]=(0,n.eJ)(m.vSM),[y,S]=(0,n.eJ)(""),[B,R]=(0,n.eJ)(""),[$,x]=(0,n.eJ)(""),[T,O]=(0,n.eJ)(!1),[z,D]=(0,n.eJ)(!1),[V,j]=(0,n.eJ)(!1),q=(0,n.I4)((e=>{h(!d)}),[d]),_=(0,n.I4)((a=>{e&&t();const{target:n}=a;f(n.value),P(A(n.value))}),[e,t]),U=(0,n.I4)((a=>{B&&R(""),e&&t(),w(a)}),[B,R,t]),X=(0,n.I4)((a=>{$&&x(""),e&&t(),S(a)}),[$,x,t]),H=(0,n.I4)((e=>{D(e)}),[]),F=(0,n.I4)((e=>{j(e)}),[]),K=()=>{o({authState:"authorizationStateReady"})},G=({token:e,user:t})=>{localStorage.setItem(m.IPc,JSON.stringify({token:e,user:t})),J.ZP.getMsgClient()&&J.ZP.getMsgClient()?.getState()==J.Pk.connected&&J.ZP.getMsgClient()?.login(e)};(0,n.d4)((()=>{const{query:e}=L(window.location.href),{code:t,email:n}=e;t&&!M&&(M=!0,f(n),O(!0),P(!0),(async()=>{try{const e=await fetch(`${m.t3z}/auth/token`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({code:t})}),n=await e.json();n.err_msg?a(n.err_msg):(G(n),K())}catch(e){a("network error")}})().then((()=>{window.history.replaceState({},"",window.location.href.split("?")[0])})).finally((()=>{M=!1,O(!1)})))}),[]),(0,n.d4)((()=>{const{query:e}=L(window.location.href),{err_msg:t}=e;t&&(a(t),window.history.replaceState({},"",window.location.href.split("?")[0]))}),[]);const W=(0,g.W7)();return n.ZP.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},n.ZP.createElement("div",{className:"auth-form"},n.ZP.createElement("form",{action:"",method:"post",onSubmit:async function(e){if(e.preventDefault(),!A(p))return a("Email不合法");const t=new(I());if(t.is().min(8).is().max(100).has().uppercase().has().lowercase().has().not().spaces().is().not().oneOf(["Passw0rd","Password123"]),console.log(t.validate("password",{list:!0})),!t.validate(v))return R("密码需要包含大小写字母至少8个字符");if(i){const e={password:(await(0,k.sha1)(v.toString())).toString("hex")};O(!0);try{const t=await fetch(`${m.t3z}/auth/password`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();if(n.err_msg)return a(n.err_msg);K()}catch(e){a("登录异常")}finally{O(!1)}return}if(d&&v!=y)return x("两次输入的密码不一致");const n=v===m.vSM?"da39a3ee5e6b4b0d3255bfef95601890afd80709":await(0,k.sha1)(v.toString()),r={email:p,password:n.toString("hex")};O(!0);try{const e=await fetch(`${m.t3z}/auth/${d?"reg":"login"}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}),t=await e.json();if(t.err_msg)return a(t.err_msg);G(t),K()}catch(e){a("登录异常")}finally{O(!1)}}},n.ZP.createElement("h2",null,"AiChat"),n.ZP.createElement("p",{className:"note"},"An Ai Chat Application"),n.ZP.createElement(u.Z,{onFocus:t,id:"registration-email",type:"email",label:"Email",onChange:_,value:p,error:e&&s(e)||"",autoComplete:"given-name"}),n.ZP.createElement(E.Z,{clearError:()=>R(""),error:B&&s(B),isPasswordVisible:z,onChangePasswordVisibility:H,onInputChange:U}),d&&n.ZP.createElement(E.Z,{placeholder:"Repeat Password",clearError:()=>x(""),error:$&&s($),isPasswordVisible:V,onChangePasswordVisibility:F,onInputChange:X}),Z&&n.ZP.createElement(b.Z,{type:"submit",ripple:!0,isLoading:T},s("Next"))),d?n.ZP.createElement("div",{className:"auth-tips"},"Already have an account? ",n.ZP.createElement("u",{className:"auth-tips-action",onClick:q},"Log in")):n.ZP.createElement("div",{className:"auth-tips"},"Don't have an account? ",n.ZP.createElement("u",{className:"auth-tips-action",onClick:q},"Sign up")),n.ZP.createElement("div",{className:"auth-or-line"},n.ZP.createElement("div",{className:"auth-line"}),n.ZP.createElement("div",{className:"auth-or"},"OR")),n.ZP.createElement("div",{className:"oauth-btn"},n.ZP.createElement(b.Z,{type:"button",onClick:()=>{window.location.href=`${m.t3z}/auth/github`},className:"Button translucent round","aria-label":"Github",style:""},n.ZP.createElement("img",{src:N,alt:"Github"})),n.ZP.createElement(b.Z,{type:"button",onClick:()=>{window.location.href=`${m.t3z}/auth/google`},className:"Button translucent round","aria-label":"Google",style:""},n.ZP.createElement("img",{src:C,alt:"Google"})))),W&&n.ZP.createElement("div",{style:"height:500px"}))}))),R=(0,n.X$)((0,r.c$)((e=>(0,s.ei)(e,["authIsLoading","authError","authHint"])))((({authIsLoading:e,authError:t,authHint:a})=>{const{setAuthPassword:o,clearAuthError:s,showAuthError:i}=(0,r.Sv)(),l=(0,c.Z)(),[u,d]=(0,n.eJ)(!1),m=(0,n.I4)((e=>{d(e)}),[]),h=(0,n.I4)((async e=>{const t=new(I());if(t.is().min(8).is().max(100).has().uppercase().has().lowercase().has().not().spaces().is().not().oneOf(["Passw0rd","Password123"]),!t.validate(e))return i("密码需要包含大小写字母至少8个字符");o({password:e})}),[o]),g=(0,n.I4)((()=>{(0,r.Sv)().updateGlobal({authState:"authorizationStateReady"})}),[o]);return n.ZP.createElement("div",{id:"auth-password-form",className:"custom-scroll"},n.ZP.createElement("div",{className:"auth-close"},n.ZP.createElement(b.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:l("Close"),onClick:g},n.ZP.createElement("i",{className:"icon-close"}))),n.ZP.createElement("div",{className:"auth-form"},n.ZP.createElement(P.Z,{isPasswordVisible:u}),n.ZP.createElement("h1",null,l("Login.Header.Password")),n.ZP.createElement("p",{className:"note"}),n.ZP.createElement(E.Z,{clearError:s,error:t&&l(t),hint:a,isLoading:e,isPasswordVisible:u,onChangePasswordVisibility:m,onSubmit:h})))})))},99364:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(60748),r=a(83716),o=a(77361),s=a(46752),i=a(3858),l=a(59107),c=a(28183),u=a(42797),d=a(231);const m=(0,n.X$)((({isLoading:e=!1,isPasswordVisible:t,error:a,hint:m,placeholder:h="Password",submitLabel:g="Next",description:p,shouldShowSubmit:f,shouldResetValue:Z,shouldDisablePasswordManager:P=!1,noRipple:E=!1,clearError:v,onChangePasswordVisibility:b,onInputChange:w,onSubmit:y})=>{const N=(0,n.sO)(null),C=(0,l.Z)(),{isMobile:S}=(0,u.ZP)(),[I,k]=(0,n.eJ)(r.vSM),[L,A]=(0,n.eJ)(!1),J=S?550:400;return(0,n.d4)((()=>{Z&&k("")}),[Z]),(0,c.Z)((()=>{o.$b||N.current.focus()}),J),(0,n.d4)((()=>{a&&requestAnimationFrame((()=>{N.current.focus(),N.current.select()}))}),[a]),n.ZP.createElement("form",{action:"",onSubmit:y?function(t){t.preventDefault(),e||L&&y(I)}:i.Z,autoComplete:"off"},n.ZP.createElement("div",{className:(0,s.Z)("input-group password-input",I&&"touched",a&&"error"),dir:C.isRtl?"rtl":void 0},P&&n.ZP.createElement("input",{type:"password",id:"prevent_autofill",autoComplete:"off",className:"visually-hidden",tabIndex:-2}),n.ZP.createElement("input",{onKeyDown:e=>{if("Enter"==e.code&&!y)return e.preventDefault(),e.stopPropagation(),!1},ref:N,className:"form-control",type:t?"text":"password",id:"sign-in-password",value:I||"",autoComplete:P?"one-time-code":"current-password",onChange:function(e){a&&v();const{target:t}=e;k(t.value),A(t.value.length>=r.loe),w&&w(t.value)},maxLength:256,dir:"auto"}),n.ZP.createElement("label",null,a||m||h),n.ZP.createElement("div",{className:"toggle-password",onClick:function(){b(!t)},role:"button",tabIndex:0,title:"Toggle password visibility"},n.ZP.createElement("i",{className:t?"icon-eye":"icon-eye-closed"}))),p&&n.ZP.createElement("p",{className:"description"},p),y&&(L||f)&&n.ZP.createElement(d.Z,{type:"submit",ripple:!E,isLoading:e,disabled:!L},g))}))},93490:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(60748),r=a(83716),o=a(62821),s=a(97799),i=a(28183),l=a(60706),c=a(42797);const u=[0,50],d=[0,20],m=[20,0],h=(0,n.X$)((({isPasswordVisible:e,isBig:t})=>{const[a,h]=(0,l.Z)(!1),[g,p]=(0,l.Z)(!1),{isMobile:f}=(0,c.ZP)(),Z=f?r.qpg:r.z7m;(0,i.Z)(p,2e3);const P=(0,n.I4)(h,[h]);return n.ZP.createElement("div",{id:"monkey",className:t?"big":""},!a&&n.ZP.createElement("div",{className:"monkey-preview"}),n.ZP.createElement(s.Z,{size:t?r.K2q:Z,className:g?"hidden":"shown",tgsUrl:o.l.MonkeyClose,playSegment:u,noLoop:!0,onLoad:P}),n.ZP.createElement(s.Z,{size:t?r.K2q:Z,className:g?"shown":"hidden",tgsUrl:o.l.MonkeyPeek,playSegment:e?d:m,noLoop:!0}))}))},90730:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(60748),r=a(46752),o=a(66735);const s=(0,n.X$)((({title:e="Change your profile picture",disabled:t,isForForum:a,currentAvatarBlobUrl:s,onChange:i})=>{const[l,c]=(0,n.eJ)(),[u,d]=(0,n.eJ)(s);(0,n.d4)((()=>{d(s)}),[s]);const m=(0,n.I4)((e=>{c(void 0),i(e),u&&u!==s&&URL.revokeObjectURL(u),d(URL.createObjectURL(e))}),[u,s,i]),h=(0,n.I4)((()=>{c(void 0)}),[]),g=(0,r.Z)(u&&"filled",t&&"disabled",a&&"rounded-square");return n.ZP.createElement("div",{className:"AvatarEditable"},n.ZP.createElement("label",{className:g,role:"button",tabIndex:0,title:e},n.ZP.createElement("input",{type:"file",onChange:function(e){const t=e.target;t?.files?.[0]&&(c(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),n.ZP.createElement("i",{className:"icon-camera-add"}),u&&n.ZP.createElement("img",{src:u,alt:"Avatar"})),n.ZP.createElement(o.Z,{file:l,onClose:h,onChange:m}))}))},66735:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(60748),r=a(83716),o=a(71394),s=a(59107),i=a(231),l=a(13103),c=a(34288);const u={type:"blob",quality:1,format:"jpeg",circle:!1,size:{width:1024,height:1024}};let d,m,h;const g=(0,n.X$)((({file:e,onChange:t,onClose:g})=>{const[p,f]=(0,n.eJ)(!1);(0,n.d4)((()=>{e&&(p?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:a,offsetHeight:n}=t;h=new d(t,{enableZoom:!0,boundary:{width:a,height:n},viewport:{width:a-16,height:n-16,type:"circle"}});const r=await(0,o.YJ)(e);await h.bind({url:r})}catch(e){r.eMD&&console.error(e)}}(e):async function(){return m||(m=Promise.all([a.e(5099),a.e(3472)]).then(a.bind(a,23472)),d=(await m).default),m}().then((()=>f(!0))))}),[e,p]);const Z=(0,s.Z)(),P=(0,n.I4)((async()=>{if(!h)return;const e=await h.result(u),a="string"==typeof e?e:(0,o.hl)(e,"avatar.jpg");t(a)}),[t]);return n.ZP.createElement(l.Z,{isOpen:Boolean(e),onClose:g,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},p?n.ZP.createElement("div",{id:"avatar-crop"}):n.ZP.createElement(c.Z,null),n.ZP.createElement(i.Z,{className:"confirm-button",round:!0,color:"primary",onClick:P,ariaLabel:Z("CropImage")},n.ZP.createElement("i",{className:"icon-check"})))}))},13103:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(60748),r=a(517),o=a(46752),s=a(98069),i=a(18674),l=a(31212),c=a(274),u=a(59107),d=a(46590),m=a(231),h=a(62898);const g=({dialogRef:e,title:t,className:a,isOpen:g,isSlim:p,header:f,hasCloseButton:Z,noBackdrop:P,noBackdropClose:E,children:v,style:b,onClose:w,onCloseAnimationEnd:y,onEnter:N,shouldSkipHistoryAnimations:C})=>{const{shouldRender:S,transitionClassNames:I}=(0,l.Z)(g,y,C,void 0,C),k=(0,n.sO)(null);(0,n.d4)((()=>{if(g)return(0,s.l_)(),s.In}),[g]),(0,n.d4)((()=>g?(0,r.Z)({onEsc:w,onEnter:N}):void 0),[g,w,N]),(0,n.d4)((()=>g&&k.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const a=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!a.length)return;const n=a.findIndex((e=>e.isSameNode(document.activeElement)));let r=0;n>=0&&(r=t.shiftKey?n>0?n-1:a.length-1:n<a.length-1?n+1:0),a[r].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(k.current):void 0),[g]),(0,d.Z)({isActive:g,onBack:w}),(0,c.Z)((([e])=>(document.body.classList.toggle("has-open-dialog",Boolean(g)),(g||!g&&void 0!==e)&&(0,i.YW)(200),()=>{document.body.classList.remove("has-open-dialog")})),[g]);const L=(0,u.Z)();if(!S)return;const A=(0,o.Z)("Modal",a,I,P&&"transparent-backdrop",p&&"slim");return n.ZP.createElement(h.Z,null,n.ZP.createElement("div",{ref:k,className:A,tabIndex:-1,role:"dialog"},n.ZP.createElement("div",{className:"modal-container"},n.ZP.createElement("div",{className:"modal-backdrop",onClick:E?void 0:w}),n.ZP.createElement("div",{className:"modal-dialog",ref:e},f||(t?n.ZP.createElement("div",{className:"modal-header"},Z&&n.ZP.createElement(m.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:L("Close"),onClick:w},n.ZP.createElement("i",{className:"icon-close"})),n.ZP.createElement("div",{className:"modal-title"},t)):void 0),n.ZP.createElement("div",{className:"modal-content custom-scroll",style:b},v)))))}},28183:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(60748);const r=function(e,t){const a=(0,n.sO)(e);(0,n.bt)((()=>{a.current=e}),[e]),(0,n.d4)((()=>{if("number"!=typeof t)return;const e=setTimeout((()=>a.current()),t);return()=>clearTimeout(e)}),[t])}},89618:(e,t,a)=>{var n=a(48764).Buffer;const r=a(24736),o=a(66842);function s(e,t=!0,a=!1){let o=n.from(e);const s=o.length;t&&(o=o.reverse());let i=r(o.toString("hex"),16);return a&&Math.floor(i.toString("2").length/8)>=s&&(i=i.subtract(r(2).pow(r(8*s)))),i}function i(e,t=8){const a=r(e),o=[];for(let e=0;e<t;e++)o[e]=a.shiftRight(8*e).and(255);return n.from(o)}function l(e,t,a=!0,o=!1){const s=(e=r(e)).bitLength();if(t<Math.ceil(s/8))throw new Error("OverflowError: int too big to convert");if(!o&&e.lesser(r(0)))throw new Error("Cannot convert to unsigned");let i=!1;e.lesser(r(0))&&(i=!0,e=e.abs());const l=e.toString("16").padStart(2*t,"0");let c=n.from(l,"hex");if(a&&(c=c.reverse()),o&&i)if(a){let e=!1;0!==c[0]&&(c[0]-=1);for(let t=0;t<c.length;t++)0!==c[t]?(e&&(c[t]-=1,e=!1),c[t]=255-c[t]):e=!0}else{c[c.length-1]=256-c[c.length-1];for(let e=0;e<c.length-1;e++)c[e]=255-c[e]}return c}function c(e){return n.from(o.randomBytes(e))}function u(e){const t=o.createHash("sha1");return t.update(e),t.digest()}let d;e.exports={readBigIntFromBuffer:s,readBufferFromBigInt:l,generateRandomLong:function(e=!0){return s(c(8),!0,e)},mod:function(e,t){return(e%t+t)%t},crc32:function(e){d||(d=function(){let e;const t=[];for(let a=0;a<256;a++){e=a;for(let t=0;t<8;t++)e=1&e?3988292384^e>>>1:e>>>1;t[a]=e}return t}()),n.isBuffer(e)||(e=n.from(e));let t=-1;for(let a=0;a<e.length;a++){const n=e[a];t=d[255&(t^n)]^t>>>8}return(-1^t)>>>0},generateRandomBytes:c,generateKeyDataFromNonce:async function(e,t){e=i(e,16),t=i(t,32);const[a,r,o]=await Promise.all([u(n.concat([t,e])),u(n.concat([e,t])),u(n.concat([t,t]))]);return{key:n.concat([a,r.slice(0,12)]),iv:n.concat([r.slice(12,20),o,t.slice(0,4)])}},sha1:u,sha256:function(e){const t=o.createHash("sha256");return t.update(e),t.digest()},bigIntMod:function(e,t){return e.remainder(t).add(t).remainder(t)},modExp:function(e,t,a){e=e.remainder(a);let n=r.one,o=e;for(;t.greater(r.zero);){const e=t.remainder(r(2));t=t.divide(r(2)),e.eq(r.one)&&(n=n.multiply(o),n=n.remainder(a)),o=o.multiply(o),o=o.remainder(a)}return n},getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},sleep:e=>new Promise((t=>{setTimeout(t,e)})),getByteArray:function(e,t=!1){const a=e.toString(2).length,n=Math.floor((a+8-1)/8);return l(r(e),n,!1,t)},toSignedLittleBuffer:i,convertToLittle:function(e){const t=n.alloc(4*e.length);for(let a=0;a<e.length;a++)t.writeUInt32BE(e[a],4*a);return t},bufferXor:function(e,t){const a=[];for(let n=0;n<e.length;n++)a.push(e[n]^t[n]);return n.from(a)}}},98069:(e,t,a)=>{"use strict";a.d(t,{In:()=>o,l_:()=>r,wT:()=>s});let n=0;function r(){n+=1}function o(){n-=1}function s(){return n>0}},3858:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=e=>{e.stopPropagation(),e.preventDefault()}}}]);
//# sourceMappingURL=3041.952e80e5f04f127cc0c6.js.map