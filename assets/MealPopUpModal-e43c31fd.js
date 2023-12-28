import{s as m,r as Ee,au as Ge,R as Je,av as Qe,b as Xe,u as Ze,j as v,y as et,d as tt,F as nt,aw as ot,o as ye,ax as rt}from"./index-9f32fbec.js";var Me={exports:{}},at="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",it=at,lt=it;function Te(){}function Pe(){}Pe.resetWarningCache=Te;var st=function(){function t(a,i,f,x,r,y){if(y!==lt){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Pe,resetWarningCache:Te};return o.PropTypes=o,o};Me.exports=st();var Re=Me.exports;const kn=t=>t.dailyStatisticsFood.consumedFood.breakfast,Dn=t=>t.dailyStatisticsFood.consumedFood.lunch,An=t=>t.dailyStatisticsFood.consumedFood.dinner,Ln=t=>t.dailyStatisticsFood.consumedFood.snack,Un=t=>t.dailyStatisticsFood.isOpen,Wn=t=>t.dailyStatisticsFood.consumedFood.totalCalories,In=t=>t.dailyStatisticsFood.consumedFood.totalCarbs,Hn=t=>t.dailyStatisticsFood.consumedFood.totalProtein,jn=t=>t.dailyStatisticsFood.consumedFood.totalFat,ct=m.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin-right: 150px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  }
`,Bn=m.div`
  margin-top: 12px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 12px;
  height: 232px;
  background: #0f0f0f;
  /* background: #fff; */
  /* borderRadius: 52px; */
  border-radius: 13px;
  max-width: 300px;
  position: relative;
  /* width: 834px; */
  @media screen and (min-width: 834px) {
    max-width: 780px;
    padding: 32px 14px;
    gap: 32px;
    margin-top: 6px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 240px;
  }
`,pt=m.img`
  width: 32px;
  height: 32px;
`,$n=m.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 834px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,qn=m.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;
  width: 100%;
  @media screen and (min-width: 834px) {
    margin-top: 0px;
    width: auto;
  }

  @media screen and (min-width: 1440px) {
  }
`,zn=m.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Kn=m.div`
  display: flex;
  gap: 20px;
`,ut=m.p`
  font-size: 18px;
  font-weight: 800;
`,Vn=m.p`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
`,Yn=m.div`
  max-width: 780px;

  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`,Gn=m.div`
  position: relative;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 12px;
`,Jn=m.p`
  color: var(--primary-color-white);
  width: calc(100% - 30px);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  @media screen and (min-width: 834px) {
    width: 105px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Qn=m.p`
  margin-left: 20px;
  color: var(--primary-color-white);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  max-height: 25px;
  @media screen and (min-width: 834px) {
    min-width: 80px;
    position: relative;
    left: 120px;
  }
`,Xn=m.div`
  @media screen and (min-width: 834px) {
    /* width: 834px; */
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`,Zn=m.button`
  display: flex;
  gap: 6px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 15px;
  @media screen and (min-width: 834px) {
    /* position: static; */
    top: 0px;
  }
`,eo=m.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  /* visibility: hidden; */
  /* opacity: 0;    */

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,dt=m.div`
  position: relative;
  padding: 10px;
  width: 300px;
  height: 546px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    width: 756px;
    height: 452px;
    padding: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ft=m.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`,to=m.input`
  width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 100px;
  }

  @media screen and (min-width: 1440px) {
  }
`;m.input`
  width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 255px;
  }

  @media screen and (min-width: 1440px) {
  }
`;const no=m.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  /* justify-content: center;
  align-items: center; */
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
  }
`,oo=m.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`,ro=m.input`
  display: flex;
  width: 120px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`,mt=m.div`
  margin-top: 60px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    position: absolute;
    right: 24px;
    bottom: 24px;
    gap: 86px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ht=m.button`
  display: block;
  width: 256px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  /* Button text/1 */
  font-family: 'Poppins500';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  margin-left: auto;
  margin-right: auto;
  border: none;
`,ao=m.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`,vt=m.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`;var ce={exports:{}},W={},pe={exports:{}},R={},ue={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",i=/input|select|textarea|button|object|iframe/;function f(l,h){return h.getPropertyValue("overflow")!=="visible"||l.scrollWidth<=0&&l.scrollHeight<=0}function x(l){var h=l.offsetWidth<=0&&l.offsetHeight<=0;if(h&&!l.innerHTML)return!0;try{var g=window.getComputedStyle(l),S=g.getPropertyValue("display");return h?S!==a&&f(l,g):S===o}catch{return console.warn("Failed to inspect element style"),!1}}function r(l){for(var h=l,g=l.getRootNode&&l.getRootNode();h&&h!==document.body;){if(g&&h===g&&(h=g.host.parentNode),x(h))return!1;h=h.parentNode}return!0}function y(l,h){var g=l.nodeName.toLowerCase(),S=i.test(g)&&!l.disabled||g==="a"&&l.href||h;return S&&r(l)}function d(l){var h=l.getAttribute("tabindex");h===null&&(h=void 0);var g=isNaN(h);return(g||h>=0)&&y(l,!g)}function b(l){var h=[].slice.call(l.querySelectorAll("*"),0).reduce(function(g,S){return g.concat(S.shadowRoot?b(S.shadowRoot):[S])},[]);return h.filter(d)}t.exports=e.default})(ue,ue.exports);var Fe=ue.exports;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=xt;R.log=wt;R.handleBlur=Y;R.handleFocus=G;R.markForFocusLater=Ot;R.returnFocus=_t;R.popWithoutFocus=Ct;R.setupScopedFocus=St;R.teardownScopedFocus=Et;var yt=Fe,gt=bt(yt);function bt(t){return t&&t.__esModule?t:{default:t}}var j=[],H=null,de=!1;function xt(){j=[]}function wt(){}function Y(){de=!0}function G(){if(de){if(de=!1,!H)return;setTimeout(function(){if(!H.contains(document.activeElement)){var t=(0,gt.default)(H)[0]||H;t.focus()}},0)}}function Ot(){j.push(document.activeElement)}function _t(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{j.length!==0&&(e=j.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Ct(){j.length>0&&j.pop()}function St(t){H=t,window.addEventListener?(window.addEventListener("blur",Y,!1),document.addEventListener("focus",G,!0)):(window.attachEvent("onBlur",Y),document.attachEvent("onFocus",G))}function Et(){H=null,window.addEventListener?(window.removeEventListener("blur",Y),document.removeEventListener("focus",G)):(window.detachEvent("onBlur",Y),document.detachEvent("onFocus",G))}var fe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=x;var o=Fe,a=i(o);function i(r){return r&&r.__esModule?r:{default:r}}function f(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return r.activeElement.shadowRoot?f(r.activeElement.shadowRoot):r.activeElement}function x(r,y){var d=(0,a.default)(r);if(!d.length){y.preventDefault();return}var b=void 0,l=y.shiftKey,h=d[0],g=d[d.length-1],S=f();if(r===S){if(!l)return;b=g}if(g===S&&!l&&(b=h),h===S&&l&&(b=g),b){y.preventDefault(),b.focus();return}var N=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),q=N!=null&&N[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(q){var I=d.indexOf(S);if(I>-1&&(I+=l?-1:1),b=d[I],typeof b>"u"){y.preventDefault(),b=l?g:h,b.focus();return}y.preventDefault(),b.focus()}}t.exports=e.default})(fe,fe.exports);var Mt=fe.exports,F={},Tt=function(){},Pt=Tt,P={},Ne={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Ne);var Rt=Ne.exports;Object.defineProperty(P,"__esModule",{value:!0});P.canUseDOM=P.SafeNodeList=P.SafeHTMLCollection=void 0;var Ft=Rt,Nt=kt(Ft);function kt(t){return t&&t.__esModule?t:{default:t}}var ae=Nt.default,Dt=ae.canUseDOM?window.HTMLElement:{};P.SafeHTMLCollection=ae.canUseDOM?window.HTMLCollection:{};P.SafeNodeList=ae.canUseDOM?window.NodeList:{};P.canUseDOM=ae.canUseDOM;P.default=Dt;Object.defineProperty(F,"__esModule",{value:!0});F.resetState=It;F.log=Ht;F.assertNodeList=ke;F.setElement=jt;F.validateElement=me;F.hide=Bt;F.show=$t;F.documentNotReadyOrSSRTesting=qt;var At=Pt,Lt=Wt(At),Ut=P;function Wt(t){return t&&t.__esModule?t:{default:t}}var M=null;function It(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(t){return t.removeAttribute("aria-hidden")})),M=null}function Ht(){}function ke(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function jt(t){var e=t;if(typeof e=="string"&&Ut.canUseDOM){var o=document.querySelectorAll(e);ke(o,e),e=o}return M=e||M,M}function me(t){var e=t||M;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Lt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Bt(t){var e=!0,o=!1,a=void 0;try{for(var i=me(t)[Symbol.iterator](),f;!(e=(f=i.next()).done);e=!0){var x=f.value;x.setAttribute("aria-hidden","true")}}catch(r){o=!0,a=r}finally{try{!e&&i.return&&i.return()}finally{if(o)throw a}}}function $t(t){var e=!0,o=!1,a=void 0;try{for(var i=me(t)[Symbol.iterator](),f;!(e=(f=i.next()).done);e=!0){var x=f.value;x.removeAttribute("aria-hidden")}}catch(r){o=!0,a=r}finally{try{!e&&i.return&&i.return()}finally{if(o)throw a}}}function qt(){M=null}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.resetState=zt;B.log=Kt;var K={},V={};function ge(t,e){t.classList.remove(e)}function zt(){var t=document.getElementsByTagName("html")[0];for(var e in K)ge(t,K[e]);var o=document.body;for(var a in V)ge(o,V[a]);K={},V={}}function Kt(){}var Vt=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Yt=function(e,o){return e[o]&&(e[o]-=1),o},Gt=function(e,o,a){a.forEach(function(i){Vt(o,i),e.add(i)})},Jt=function(e,o,a){a.forEach(function(i){Yt(o,i),o[i]===0&&e.remove(i)})};B.add=function(e,o){return Gt(e.classList,e.nodeName.toLowerCase()=="html"?K:V,o.split(" "))};B.remove=function(e,o){return Jt(e.classList,e.nodeName.toLowerCase()=="html"?K:V,o.split(" "))};var $={};Object.defineProperty($,"__esModule",{value:!0});$.log=Xt;$.resetState=Zt;function Qt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var De=function t(){var e=this;Qt(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ne=new De;function Xt(){console.log("portalOpenInstances ----------"),console.log(ne.openInstances.length),ne.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Zt(){ne=new De}$.default=ne;var he={};Object.defineProperty(he,"__esModule",{value:!0});he.resetState=on;he.log=rn;var en=$,tn=nn(en);function nn(t){return t&&t.__esModule?t:{default:t}}var C=void 0,T=void 0,U=[];function on(){for(var t=[C,T],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}C=T=null,U=[]}function rn(){console.log("bodyTrap ----------"),console.log(U.length);for(var t=[C,T],e=0;e<t.length;e++){var o=t[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function be(){U.length!==0&&U[U.length-1].focusContent()}function an(t,e){!C&&!T&&(C=document.createElement("div"),C.setAttribute("data-react-modal-body-trap",""),C.style.position="absolute",C.style.opacity="0",C.setAttribute("tabindex","0"),C.addEventListener("focus",be),T=C.cloneNode(),T.addEventListener("focus",be)),U=e,U.length>0?(document.body.firstChild!==C&&document.body.insertBefore(C,document.body.firstChild),document.body.lastChild!==T&&document.body.appendChild(T)):(C.parentElement&&C.parentElement.removeChild(C),T.parentElement&&T.parentElement.removeChild(T))}tn.default.subscribe(an);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(u){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&(u[n]=w[n])}return u},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i=function(){function u(p,w){for(var n=0;n<w.length;n++){var s=w[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(p,s.key,s)}}return function(p,w,n){return w&&u(p.prototype,w),n&&u(p,n),p}}(),f=Ee,x=Re,r=X(x),y=R,d=ie(y),b=Mt,l=X(b),h=F,g=ie(h),S=B,N=ie(S),q=P,I=X(q),He=$,ve=X(He);function ie(u){if(u&&u.__esModule)return u;var p={};if(u!=null)for(var w in u)Object.prototype.hasOwnProperty.call(u,w)&&(p[w]=u[w]);return p.default=u,p}function X(u){return u&&u.__esModule?u:{default:u}}function je(u,p){if(!(u instanceof p))throw new TypeError("Cannot call a class as a function")}function Be(u,p){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:u}function $e(u,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);u.prototype=Object.create(p&&p.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(u,p):u.__proto__=p)}var le={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},qe=function(p){return p.code==="Tab"||p.keyCode===9},ze=function(p){return p.code==="Escape"||p.keyCode===27},Z=0,se=function(u){$e(p,u);function p(w){je(this,p);var n=Be(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,w));return n.setOverlayRef=function(s){n.overlay=s,n.props.overlayRef&&n.props.overlayRef(s)},n.setContentRef=function(s){n.content=s,n.props.contentRef&&n.props.contentRef(s)},n.afterClose=function(){var s=n.props,_=s.appElement,E=s.ariaHideApp,O=s.htmlOpenClassName,D=s.bodyOpenClassName,A=s.parentSelector,ee=A&&A().ownerDocument||document;D&&N.remove(ee.body,D),O&&N.remove(ee.getElementsByTagName("html")[0],O),E&&Z>0&&(Z-=1,Z===0&&g.show(_)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(d.returnFocus(n.props.preventScroll),d.teardownScopedFocus()):d.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),ve.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(d.setupScopedFocus(n.node),d.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var s=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:s},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(s){qe(s)&&(0,l.default)(n.content,s),n.props.shouldCloseOnEsc&&ze(s)&&(s.stopPropagation(),n.requestClose(s))},n.handleOverlayOnClick=function(s){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(s):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(s){!n.props.shouldCloseOnOverlayClick&&s.target==n.overlay&&s.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(s){return n.ownerHandlesClose()&&n.props.onRequestClose(s)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(s,_){var E=(typeof _>"u"?"undefined":a(_))==="object"?_:{base:le[s],afterOpen:le[s]+"--after-open",beforeClose:le[s]+"--before-close"},O=E.base;return n.state.afterOpen&&(O=O+" "+E.afterOpen),n.state.beforeClose&&(O=O+" "+E.beforeClose),typeof _=="string"&&_?O+" "+_:O},n.attributesFromObject=function(s,_){return Object.keys(_).reduce(function(E,O){return E[s+"-"+O]=_[O],E},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return i(p,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,s){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!s.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,s=n.appElement,_=n.ariaHideApp,E=n.htmlOpenClassName,O=n.bodyOpenClassName,D=n.parentSelector,A=D&&D().ownerDocument||document;O&&N.add(A.body,O),E&&N.add(A.getElementsByTagName("html")[0],E),_&&(Z+=1,g.hide(s)),ve.default.register(this)}},{key:"render",value:function(){var n=this.props,s=n.id,_=n.className,E=n.overlayClassName,O=n.defaultStyles,D=n.children,A=_?{}:O.content,ee=E?{}:O.overlay;if(this.shouldBeClosed())return null;var Ke={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:o({},ee,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ve=o({id:s,ref:this.setContentRef,style:o({},A,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ye=this.props.contentElement(Ve,D);return this.props.overlayElement(Ke,Ye)}}]),p}(f.Component);se.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},se.propTypes={isOpen:r.default.bool.isRequired,defaultStyles:r.default.shape({content:r.default.object,overlay:r.default.object}),style:r.default.shape({content:r.default.object,overlay:r.default.object}),className:r.default.oneOfType([r.default.string,r.default.object]),overlayClassName:r.default.oneOfType([r.default.string,r.default.object]),parentSelector:r.default.func,bodyOpenClassName:r.default.string,htmlOpenClassName:r.default.string,ariaHideApp:r.default.bool,appElement:r.default.oneOfType([r.default.instanceOf(I.default),r.default.instanceOf(q.SafeHTMLCollection),r.default.instanceOf(q.SafeNodeList),r.default.arrayOf(r.default.instanceOf(I.default))]),onAfterOpen:r.default.func,onAfterClose:r.default.func,onRequestClose:r.default.func,closeTimeoutMS:r.default.number,shouldFocusAfterRender:r.default.bool,shouldCloseOnOverlayClick:r.default.bool,shouldReturnFocusAfterClose:r.default.bool,preventScroll:r.default.bool,role:r.default.string,contentLabel:r.default.string,aria:r.default.object,data:r.default.object,children:r.default.node,shouldCloseOnEsc:r.default.bool,overlayRef:r.default.func,contentRef:r.default.func,id:r.default.string,overlayElement:r.default.func,contentElement:r.default.func,testId:r.default.string},e.default=se,t.exports=e.default})(pe,pe.exports);var ln=pe.exports;function Ae(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Le(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function Ue(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}Ae.__suppressDeprecationWarning=!0;Le.__suppressDeprecationWarning=!0;Ue.__suppressDeprecationWarning=!0;function sn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,i=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),o!==null||a!==null||i!==null){var f=t.displayName||t.name,x=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+f+" uses "+x+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Ae,e.componentWillReceiveProps=Le),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Ue;var r=e.componentDidUpdate;e.componentDidUpdate=function(d,b,l){var h=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:l;r.call(this,d,b,h)}}return t}const cn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:sn},Symbol.toStringTag,{value:"Module"})),pn=Ge(cn);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var xe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},un=function(){function t(e,o){for(var a=0;a<o.length;a++){var i=o[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),We=Ee,oe=J(We),dn=Je,re=J(dn),fn=Re,c=J(fn),mn=ln,we=J(mn),hn=F,vn=gn(hn),k=P,Oe=J(k),yn=pn;function gn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function J(t){return t&&t.__esModule?t:{default:t}}function bn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _e(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function xn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var wn=W.portalClassName="ReactModalPortal",On=W.bodyOpenClassName="ReactModal__Body--open",L=k.canUseDOM&&re.default.createPortal!==void 0,Ce=function(e){return document.createElement(e)},Se=function(){return L?re.default.createPortal:re.default.unstable_renderSubtreeIntoContainer};function te(t){return t()}var Q=function(t){xn(e,t);function e(){var o,a,i,f;bn(this,e);for(var x=arguments.length,r=Array(x),y=0;y<x;y++)r[y]=arguments[y];return f=(a=(i=_e(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(r))),i),i.removePortal=function(){!L&&re.default.unmountComponentAtNode(i.node);var d=te(i.props.parentSelector);d&&d.contains(i.node)?d.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(d){i.portal=d},i.renderPortal=function(d){var b=Se(),l=b(i,oe.default.createElement(we.default,xe({defaultStyles:e.defaultStyles},d)),i.node);i.portalRef(l)},a),_e(i,f)}return un(e,[{key:"componentDidMount",value:function(){if(k.canUseDOM){L||(this.node=Ce("div")),this.node.className=this.props.portalClassName;var a=te(this.props.parentSelector);a.appendChild(this.node),!L&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var i=te(a.parentSelector),f=te(this.props.parentSelector);return{prevParent:i,nextParent:f}}},{key:"componentDidUpdate",value:function(a,i,f){if(k.canUseDOM){var x=this.props,r=x.isOpen,y=x.portalClassName;a.portalClassName!==y&&(this.node.className=y);var d=f.prevParent,b=f.nextParent;b!==d&&(d.removeChild(this.node),b.appendChild(this.node)),!(!a.isOpen&&!r)&&!L&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!k.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,i=Date.now(),f=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||i+this.props.closeTimeoutMS);f?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,f-i)):this.removePortal()}}},{key:"render",value:function(){if(!k.canUseDOM||!L)return null;!this.node&&L&&(this.node=Ce("div"));var a=Se();return a(oe.default.createElement(we.default,xe({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){vn.setElement(a)}}]),e}(We.Component);Q.propTypes={isOpen:c.default.bool.isRequired,style:c.default.shape({content:c.default.object,overlay:c.default.object}),portalClassName:c.default.string,bodyOpenClassName:c.default.string,htmlOpenClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),overlayClassName:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),appElement:c.default.oneOfType([c.default.instanceOf(Oe.default),c.default.instanceOf(k.SafeHTMLCollection),c.default.instanceOf(k.SafeNodeList),c.default.arrayOf(c.default.instanceOf(Oe.default))]),onAfterOpen:c.default.func,onRequestClose:c.default.func,closeTimeoutMS:c.default.number,ariaHideApp:c.default.bool,shouldFocusAfterRender:c.default.bool,shouldCloseOnOverlayClick:c.default.bool,shouldReturnFocusAfterClose:c.default.bool,preventScroll:c.default.bool,parentSelector:c.default.func,aria:c.default.object,data:c.default.object,role:c.default.string,contentLabel:c.default.string,shouldCloseOnEsc:c.default.bool,overlayRef:c.default.func,contentRef:c.default.func,id:c.default.string,overlayElement:c.default.func,contentElement:c.default.func};Q.defaultProps={isOpen:!1,portalClassName:wn,bodyOpenClassName:On,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return oe.default.createElement("div",e,o)},contentElement:function(e,o){return oe.default.createElement("div",e,o)}};Q.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,yn.polyfill)(Q);W.default=Q;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=W,a=i(o);function i(f){return f&&f.__esModule?f:{default:f}}e.default=a.default,t.exports=e.default})(ce,ce.exports);var _n=ce.exports;const Ie=Qe(_n),Cn=m.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Sn=m.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background-color: var(--primary-color-black-one);
  color: var(--primary-color-green-lite);
  font-family: 'Poppins400', sans-serif;
  margin-top: 40px;
  width: 150px;
  height: 20px;

  &:hover,
  &:focus {
    color: var(secondary-color-yellow);
  }
`,En="/Healthy_life/assets/Breakfast-ebbae9d6.png",Mn="/Healthy_life/assets/Dinner-3e075f11.png",Tn="/Healthy_life/assets/Lunch-b9834f5c.png",Pn="/Healthy_life/assets/Snack-986b08ce.png",z=m(Xe)`
  width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 100px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Rn=m.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  /* justify-content: center;
  align-items: center; */
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
  }
`;m.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`;m.input`
  display: flex;
  width: 120px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;const Fn={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};Ie.setAppElement("#root");const io=({stateModal:t,closeModal:e,typefood:o})=>{const a=Ze(),i=[En,Mn,Tn,Pn],f={name:"",carbogidrate:"",protein:"",fat:"",calories:""},x=r=>{let y={typeFood:o,userFood:r.products.map(d=>({name:d.name,calories:d.calories,nutrition:{carbogidrate:d.carbogidrate,protein:d.protein,fat:d.fat}}))};a(rt(y)),e()};return v.jsx(Ie,{isOpen:t,onRequestClose:e,style:Fn,children:v.jsxs(dt,{children:[v.jsx(ft,{children:"Record your meal"}),v.jsxs(ct,{style:{marginTop:"24px"},children:[v.jsx(pt,{src:i[o],alt:o}),v.jsx(ut,{children:et(o)})]}),v.jsx(tt,{initialValues:{products:[f]},onSubmit:r=>x(r),children:({values:r})=>v.jsxs(nt,{children:[v.jsx(ot,{name:"products",children:({remove:y,push:d})=>v.jsxs("div",{children:[r.products.map((b,l)=>v.jsxs(Rn,{children:[v.jsx(z,{name:`products.${l}.name`,placeholder:"The name of the product or dish",value:r.products[l].name}),v.jsx(z,{name:`products.${l}.carbogidrate`,placeholder:"Carbonoh.",value:r.products[l].carbogidrate,type:"number",min:1}),v.jsx(z,{name:`products.${l}.protein`,placeholder:"Protein",value:r.products[l].protein,min:1,type:"number"}),v.jsx(z,{name:`products.${l}.fat`,placeholder:"Fat",value:r.products[l].fat,min:1,type:"number"}),v.jsx(z,{name:`products.${l}.calories`,placeholder:"Calories",value:r.products[l].calories,min:1,type:"number"}),v.jsx("button",{"data-set":l,type:"button",onClick:h=>{const g=h.currentTarget.dataset.set;r.products.length===1&&e(),y(g)},children:v.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:v.jsx("use",{href:`${ye}#trash-delete`})})})]},l)),v.jsxs(Sn,{type:"button",onClick:()=>d(f),children:[v.jsx(Cn,{children:v.jsx("use",{href:`${ye}#icon-add-converted`})}),"Add more"]})]})}),v.jsxs(mt,{children:[v.jsx(ht,{type:"submit",children:"Confirm"}),v.jsx(vt,{onClick:e,type:"button",children:"Cancel"})]})]})})]})})};export{ao as A,En as B,dt as C,Mn as D,Zn as E,Un as F,no as I,Tn as L,io as M,Vn as N,to as R,Pn as S,ft as T,Xn as W,In as a,Hn as b,jn as c,pt as d,kn as e,Dn as f,An as g,Ln as h,eo as i,ct as j,ut as k,oo as l,ro as m,mt as n,ht as o,vt as p,Yn as q,$n as r,Wn as s,qn as t,Kn as u,zn as v,Bn as w,Gn as x,Jn as y,Qn as z};
