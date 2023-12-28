import{s as m,r as Ee,au as Ge,R as Je,av as Qe,b as Xe,u as Ze,j as b,d as et,F as tt,aw as nt,o as ye,ax as ot}from"./index-7d0106f5.js";var Me={exports:{}},rt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",at=rt,it=at;function Te(){}function Pe(){}Pe.resetWarningCache=Te;var lt=function(){function t(r,i,f,y,a,g){if(g!==it){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Pe,resetWarningCache:Te};return o.PropTypes=o,o};Me.exports=lt();var Re=Me.exports;const Tn=t=>t.dailyStatisticsFood.consumedFood.breakfast,Pn=t=>t.dailyStatisticsFood.consumedFood.lunch,Rn=t=>t.dailyStatisticsFood.consumedFood.dinner,Fn=t=>t.dailyStatisticsFood.consumedFood.snack,Nn=t=>t.dailyStatisticsFood.isOpen,An=t=>t.dailyStatisticsFood.consumedFood.totalCalories,kn=t=>t.dailyStatisticsFood.consumedFood.totalCarbs,Dn=t=>t.dailyStatisticsFood.consumedFood.totalProtein,Ln=t=>t.dailyStatisticsFood.consumedFood.totalFat,st=m.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin-right: 150px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  }
`,Un=m.div`
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
`,ct=m.img`
  width: 32px;
  height: 32px;
`,Wn=m.div`
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
`,In=m.p`
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
`,jn=m.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Hn=m.div`
  display: flex;
  gap: 20px;
`,pt=m.p`
  font-size: 18px;
  font-weight: 800;
`,Bn=m.p`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
`,$n=m.div`
  max-width: 780px;

  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`,qn=m.div`
  position: relative;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 12px;
`,zn=m.p`
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
`,Kn=m.p`
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
`,Vn=m.div`
  @media screen and (min-width: 834px) {
    /* width: 834px; */
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`,Yn=m.button`
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
`,Gn=m.div`
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
`,ut=m.div`
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
`,dt=m.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`,Jn=m.input`
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
`;const Qn=m.div`
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
`,Xn=m.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Zn=m.input`
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
`,ft=m.div`
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
`,mt=m.button`
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
`,eo=m.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`,ht=m.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`;var ce={exports:{}},W={},pe={exports:{}},R={},ue={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",i=/input|select|textarea|button|object|iframe/;function f(u,h){return h.getPropertyValue("overflow")!=="visible"||u.scrollWidth<=0&&u.scrollHeight<=0}function y(u){var h=u.offsetWidth<=0&&u.offsetHeight<=0;if(h&&!u.innerHTML)return!0;try{var x=window.getComputedStyle(u),S=x.getPropertyValue("display");return h?S!==r&&f(u,x):S===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(u){for(var h=u,x=u.getRootNode&&u.getRootNode();h&&h!==document.body;){if(x&&h===x&&(h=x.host.parentNode),y(h))return!1;h=h.parentNode}return!0}function g(u,h){var x=u.nodeName.toLowerCase(),S=i.test(x)&&!u.disabled||x==="a"&&u.href||h;return S&&a(u)}function v(u){var h=u.getAttribute("tabindex");h===null&&(h=void 0);var x=isNaN(h);return(x||h>=0)&&g(u,!x)}function d(u){var h=[].slice.call(u.querySelectorAll("*"),0).reduce(function(x,S){return x.concat(S.shadowRoot?d(S.shadowRoot):[S])},[]);return h.filter(v)}t.exports=e.default})(ue,ue.exports);var Fe=ue.exports;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=bt;R.log=xt;R.handleBlur=Y;R.handleFocus=G;R.markForFocusLater=wt;R.returnFocus=Ot;R.popWithoutFocus=_t;R.setupScopedFocus=Ct;R.teardownScopedFocus=St;var vt=Fe,yt=gt(vt);function gt(t){return t&&t.__esModule?t:{default:t}}var H=[],j=null,de=!1;function bt(){H=[]}function xt(){}function Y(){de=!0}function G(){if(de){if(de=!1,!j)return;setTimeout(function(){if(!j.contains(document.activeElement)){var t=(0,yt.default)(j)[0]||j;t.focus()}},0)}}function wt(){H.push(document.activeElement)}function Ot(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{H.length!==0&&(e=H.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function _t(){H.length>0&&H.pop()}function Ct(t){j=t,window.addEventListener?(window.addEventListener("blur",Y,!1),document.addEventListener("focus",G,!0)):(window.attachEvent("onBlur",Y),document.attachEvent("onFocus",G))}function St(){j=null,window.addEventListener?(window.removeEventListener("blur",Y),document.removeEventListener("focus",G)):(window.detachEvent("onBlur",Y),document.detachEvent("onFocus",G))}var fe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;var o=Fe,r=i(o);function i(a){return a&&a.__esModule?a:{default:a}}function f(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?f(a.activeElement.shadowRoot):a.activeElement}function y(a,g){var v=(0,r.default)(a);if(!v.length){g.preventDefault();return}var d=void 0,u=g.shiftKey,h=v[0],x=v[v.length-1],S=f();if(a===S){if(!u)return;d=x}if(x===S&&!u&&(d=h),h===S&&u&&(d=x),d){g.preventDefault(),d.focus();return}var N=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),q=N!=null&&N[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(q){var I=v.indexOf(S);if(I>-1&&(I+=u?-1:1),d=v[I],typeof d>"u"){g.preventDefault(),d=u?x:h,d.focus();return}g.preventDefault(),d.focus()}}t.exports=e.default})(fe,fe.exports);var Et=fe.exports,F={},Mt=function(){},Tt=Mt,P={},Ne={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Ne);var Pt=Ne.exports;Object.defineProperty(P,"__esModule",{value:!0});P.canUseDOM=P.SafeNodeList=P.SafeHTMLCollection=void 0;var Rt=Pt,Ft=Nt(Rt);function Nt(t){return t&&t.__esModule?t:{default:t}}var ae=Ft.default,At=ae.canUseDOM?window.HTMLElement:{};P.SafeHTMLCollection=ae.canUseDOM?window.HTMLCollection:{};P.SafeNodeList=ae.canUseDOM?window.NodeList:{};P.canUseDOM=ae.canUseDOM;P.default=At;Object.defineProperty(F,"__esModule",{value:!0});F.resetState=Wt;F.log=It;F.assertNodeList=Ae;F.setElement=jt;F.validateElement=me;F.hide=Ht;F.show=Bt;F.documentNotReadyOrSSRTesting=$t;var kt=Tt,Dt=Ut(kt),Lt=P;function Ut(t){return t&&t.__esModule?t:{default:t}}var M=null;function Wt(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(t){return t.removeAttribute("aria-hidden")})),M=null}function It(){}function Ae(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function jt(t){var e=t;if(typeof e=="string"&&Lt.canUseDOM){var o=document.querySelectorAll(e);Ae(o,e),e=o}return M=e||M,M}function me(t){var e=t||M;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Dt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ht(t){var e=!0,o=!1,r=void 0;try{for(var i=me(t)[Symbol.iterator](),f;!(e=(f=i.next()).done);e=!0){var y=f.value;y.setAttribute("aria-hidden","true")}}catch(a){o=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(o)throw r}}}function Bt(t){var e=!0,o=!1,r=void 0;try{for(var i=me(t)[Symbol.iterator](),f;!(e=(f=i.next()).done);e=!0){var y=f.value;y.removeAttribute("aria-hidden")}}catch(a){o=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(o)throw r}}}function $t(){M=null}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.resetState=qt;B.log=zt;var K={},V={};function ge(t,e){t.classList.remove(e)}function qt(){var t=document.getElementsByTagName("html")[0];for(var e in K)ge(t,K[e]);var o=document.body;for(var r in V)ge(o,V[r]);K={},V={}}function zt(){}var Kt=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Vt=function(e,o){return e[o]&&(e[o]-=1),o},Yt=function(e,o,r){r.forEach(function(i){Kt(o,i),e.add(i)})},Gt=function(e,o,r){r.forEach(function(i){Vt(o,i),o[i]===0&&e.remove(i)})};B.add=function(e,o){return Yt(e.classList,e.nodeName.toLowerCase()=="html"?K:V,o.split(" "))};B.remove=function(e,o){return Gt(e.classList,e.nodeName.toLowerCase()=="html"?K:V,o.split(" "))};var $={};Object.defineProperty($,"__esModule",{value:!0});$.log=Qt;$.resetState=Xt;function Jt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ke=function t(){var e=this;Jt(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ne=new ke;function Qt(){console.log("portalOpenInstances ----------"),console.log(ne.openInstances.length),ne.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Xt(){ne=new ke}$.default=ne;var he={};Object.defineProperty(he,"__esModule",{value:!0});he.resetState=nn;he.log=on;var Zt=$,en=tn(Zt);function tn(t){return t&&t.__esModule?t:{default:t}}var C=void 0,T=void 0,U=[];function nn(){for(var t=[C,T],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}C=T=null,U=[]}function on(){console.log("bodyTrap ----------"),console.log(U.length);for(var t=[C,T],e=0;e<t.length;e++){var o=t[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function be(){U.length!==0&&U[U.length-1].focusContent()}function rn(t,e){!C&&!T&&(C=document.createElement("div"),C.setAttribute("data-react-modal-body-trap",""),C.style.position="absolute",C.style.opacity="0",C.setAttribute("tabindex","0"),C.addEventListener("focus",be),T=C.cloneNode(),T.addEventListener("focus",be)),U=e,U.length>0?(document.body.firstChild!==C&&document.body.insertBefore(C,document.body.firstChild),document.body.lastChild!==T&&document.body.appendChild(T)):(C.parentElement&&C.parentElement.removeChild(C),T.parentElement&&T.parentElement.removeChild(T))}en.default.subscribe(rn);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(p){for(var c=1;c<arguments.length;c++){var w=arguments[c];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&(p[n]=w[n])}return p},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},i=function(){function p(c,w){for(var n=0;n<w.length;n++){var l=w[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,w,n){return w&&p(c.prototype,w),n&&p(c,n),c}}(),f=Ee,y=Re,a=X(y),g=R,v=ie(g),d=Et,u=X(d),h=F,x=ie(h),S=B,N=ie(S),q=P,I=X(q),je=$,ve=X(je);function ie(p){if(p&&p.__esModule)return p;var c={};if(p!=null)for(var w in p)Object.prototype.hasOwnProperty.call(p,w)&&(c[w]=p[w]);return c.default=p,c}function X(p){return p&&p.__esModule?p:{default:p}}function He(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")}function Be(p,c){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:p}function $e(p,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);p.prototype=Object.create(c&&c.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(p,c):p.__proto__=c)}var le={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},qe=function(c){return c.code==="Tab"||c.keyCode===9},ze=function(c){return c.code==="Escape"||c.keyCode===27},Z=0,se=function(p){$e(c,p);function c(w){He(this,c);var n=Be(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,w));return n.setOverlayRef=function(l){n.overlay=l,n.props.overlayRef&&n.props.overlayRef(l)},n.setContentRef=function(l){n.content=l,n.props.contentRef&&n.props.contentRef(l)},n.afterClose=function(){var l=n.props,_=l.appElement,E=l.ariaHideApp,O=l.htmlOpenClassName,k=l.bodyOpenClassName,D=l.parentSelector,ee=D&&D().ownerDocument||document;k&&N.remove(ee.body,k),O&&N.remove(ee.getElementsByTagName("html")[0],O),E&&Z>0&&(Z-=1,Z===0&&x.show(_)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(v.returnFocus(n.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),ve.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(v.setupScopedFocus(n.node),v.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var l=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:l},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(l){qe(l)&&(0,u.default)(n.content,l),n.props.shouldCloseOnEsc&&ze(l)&&(l.stopPropagation(),n.requestClose(l))},n.handleOverlayOnClick=function(l){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(l):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(l){!n.props.shouldCloseOnOverlayClick&&l.target==n.overlay&&l.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(l){return n.ownerHandlesClose()&&n.props.onRequestClose(l)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(l,_){var E=(typeof _>"u"?"undefined":r(_))==="object"?_:{base:le[l],afterOpen:le[l]+"--after-open",beforeClose:le[l]+"--before-close"},O=E.base;return n.state.afterOpen&&(O=O+" "+E.afterOpen),n.state.beforeClose&&(O=O+" "+E.beforeClose),typeof _=="string"&&_?O+" "+_:O},n.attributesFromObject=function(l,_){return Object.keys(_).reduce(function(E,O){return E[l+"-"+O]=_[O],E},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return i(c,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,l){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,l=n.appElement,_=n.ariaHideApp,E=n.htmlOpenClassName,O=n.bodyOpenClassName,k=n.parentSelector,D=k&&k().ownerDocument||document;O&&N.add(D.body,O),E&&N.add(D.getElementsByTagName("html")[0],E),_&&(Z+=1,x.hide(l)),ve.default.register(this)}},{key:"render",value:function(){var n=this.props,l=n.id,_=n.className,E=n.overlayClassName,O=n.defaultStyles,k=n.children,D=_?{}:O.content,ee=E?{}:O.overlay;if(this.shouldBeClosed())return null;var Ke={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:o({},ee,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ve=o({id:l,ref:this.setContentRef,style:o({},D,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ye=this.props.contentElement(Ve,k);return this.props.overlayElement(Ke,Ye)}}]),c}(f.Component);se.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},se.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(I.default),a.default.instanceOf(q.SafeHTMLCollection),a.default.instanceOf(q.SafeNodeList),a.default.arrayOf(a.default.instanceOf(I.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=se,t.exports=e.default})(pe,pe.exports);var an=pe.exports;function De(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Le(t){function e(o){var r=this.constructor.getDerivedStateFromProps(t,o);return r??null}this.setState(e.bind(this))}function Ue(t,e){try{var o=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}De.__suppressDeprecationWarning=!0;Le.__suppressDeprecationWarning=!0;Ue.__suppressDeprecationWarning=!0;function ln(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,r=null,i=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),o!==null||r!==null||i!==null){var f=t.displayName||t.name,y=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+f+" uses "+y+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=De,e.componentWillReceiveProps=Le),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Ue;var a=e.componentDidUpdate;e.componentDidUpdate=function(v,d,u){var h=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:u;a.call(this,v,d,h)}}return t}const sn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:ln},Symbol.toStringTag,{value:"Module"})),cn=Ge(sn);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var xe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},pn=function(){function t(e,o){for(var r=0;r<o.length;r++){var i=o[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),We=Ee,oe=J(We),un=Je,re=J(un),dn=Re,s=J(dn),fn=an,we=J(fn),mn=F,hn=yn(mn),A=P,Oe=J(A),vn=cn;function yn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function J(t){return t&&t.__esModule?t:{default:t}}function gn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _e(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function bn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var xn=W.portalClassName="ReactModalPortal",wn=W.bodyOpenClassName="ReactModal__Body--open",L=A.canUseDOM&&re.default.createPortal!==void 0,Ce=function(e){return document.createElement(e)},Se=function(){return L?re.default.createPortal:re.default.unstable_renderSubtreeIntoContainer};function te(t){return t()}var Q=function(t){bn(e,t);function e(){var o,r,i,f;gn(this,e);for(var y=arguments.length,a=Array(y),g=0;g<y;g++)a[g]=arguments[g];return f=(r=(i=_e(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(a))),i),i.removePortal=function(){!L&&re.default.unmountComponentAtNode(i.node);var v=te(i.props.parentSelector);v&&v.contains(i.node)?v.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(v){i.portal=v},i.renderPortal=function(v){var d=Se(),u=d(i,oe.default.createElement(we.default,xe({defaultStyles:e.defaultStyles},v)),i.node);i.portalRef(u)},r),_e(i,f)}return pn(e,[{key:"componentDidMount",value:function(){if(A.canUseDOM){L||(this.node=Ce("div")),this.node.className=this.props.portalClassName;var r=te(this.props.parentSelector);r.appendChild(this.node),!L&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=te(r.parentSelector),f=te(this.props.parentSelector);return{prevParent:i,nextParent:f}}},{key:"componentDidUpdate",value:function(r,i,f){if(A.canUseDOM){var y=this.props,a=y.isOpen,g=y.portalClassName;r.portalClassName!==g&&(this.node.className=g);var v=f.prevParent,d=f.nextParent;d!==v&&(v.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!L&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!A.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),f=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);f?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,f-i)):this.removePortal()}}},{key:"render",value:function(){if(!A.canUseDOM||!L)return null;!this.node&&L&&(this.node=Ce("div"));var r=Se();return r(oe.default.createElement(we.default,xe({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){hn.setElement(r)}}]),e}(We.Component);Q.propTypes={isOpen:s.default.bool.isRequired,style:s.default.shape({content:s.default.object,overlay:s.default.object}),portalClassName:s.default.string,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),overlayClassName:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),appElement:s.default.oneOfType([s.default.instanceOf(Oe.default),s.default.instanceOf(A.SafeHTMLCollection),s.default.instanceOf(A.SafeNodeList),s.default.arrayOf(s.default.instanceOf(Oe.default))]),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,ariaHideApp:s.default.bool,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,parentSelector:s.default.func,aria:s.default.object,data:s.default.object,role:s.default.string,contentLabel:s.default.string,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func};Q.defaultProps={isOpen:!1,portalClassName:xn,bodyOpenClassName:wn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return oe.default.createElement("div",e,o)},contentElement:function(e,o){return oe.default.createElement("div",e,o)}};Q.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,vn.polyfill)(Q);W.default=Q;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=W,r=i(o);function i(f){return f&&f.__esModule?f:{default:f}}e.default=r.default,t.exports=e.default})(ce,ce.exports);var On=ce.exports;const Ie=Qe(On),_n=m.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Cn=m.button`
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
`,z=m(Xe)`
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
`,Sn=m.div`
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
`;const En={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};Ie.setAppElement("#root");const to=({stateModal:t,closeModal:e,typefood:o})=>{const r=Ze(),i={name:"",carbogidrate:"",protein:"",fat:"",calories:""},f=y=>{let a={typeFood:o,userFood:y.products.map(g=>({name:g.name,calories:g.calories,nutrition:{carbogidrate:g.carbogidrate,protein:g.protein,fat:g.fat}}))};r(ot(a)),e()};return b.jsx(Ie,{isOpen:t,onRequestClose:e,style:En,children:b.jsxs(ut,{children:[b.jsx(dt,{children:"Record your meal"}),b.jsxs(st,{style:{marginTop:"24px"},children:[b.jsx(ct,{src:"src/assets/images/Breakfast.png"}),b.jsx(pt,{})]}),b.jsx(et,{initialValues:{products:[i]},onSubmit:y=>f(y),children:({values:y})=>b.jsxs(tt,{children:[b.jsx(nt,{name:"products",children:({remove:a,push:g})=>b.jsxs("div",{children:[y.products.map((v,d)=>b.jsxs(Sn,{children:[b.jsx(z,{name:`products.${d}.name`,placeholder:"The name of the product or dish",value:y.products[d].name}),b.jsx(z,{name:`products.${d}.carbogidrate`,placeholder:"Carbonoh.",value:y.products[d].carbogidrate,type:"number",min:1}),b.jsx(z,{name:`products.${d}.protein`,placeholder:"Protein",value:y.products[d].protein,min:1,type:"number"}),b.jsx(z,{name:`products.${d}.fat`,placeholder:"Fat",value:y.products[d].fat,min:1,type:"number"}),b.jsx(z,{name:`products.${d}.calories`,placeholder:"Calories",value:y.products[d].calories,min:1,type:"number"}),b.jsx("button",{"data-set":d,type:"button",onClick:u=>{const h=u.currentTarget.dataset.set;y.products.length===1&&e(),a(h)},children:b.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:b.jsx("use",{href:`${ye}#trash-delete`})})})]},d)),b.jsxs(Cn,{type:"button",onClick:()=>g(i),children:[b.jsx(_n,{children:b.jsx("use",{href:`${ye}#icon-add-converted`})}),"Add more"]})]})}),b.jsxs(ft,{children:[b.jsx(mt,{type:"submit",children:"Confirm"}),b.jsx(ht,{onClick:e,type:"button",children:"Cancel"})]})]})})]})})};export{eo as A,Gn as B,ut as C,Yn as E,Qn as I,to as M,Bn as N,Jn as R,Xn as S,dt as T,Vn as W,kn as a,Dn as b,Ln as c,ct as d,Tn as e,Pn as f,Rn as g,Fn as h,st as i,pt as j,Zn as k,ft as l,mt as m,ht as n,$n as o,Wn as p,In as q,Hn as r,An as s,jn as t,Un as u,qn as v,zn as w,Kn as x,Nn as y};
