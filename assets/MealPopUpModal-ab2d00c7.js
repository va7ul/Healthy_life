import{s as l,r as Ee,at as Qe,Q as Ge,au as Je,b as Q,u as Xe,j as v,x as Ze,d as et,F as tt,av as nt,n as ye,aw as ot}from"./index-39c90e22.js";var Pe={exports:{}},rt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",at=rt,it=at;function Me(){}function Te(){}Te.resetWarningCache=Me;var lt=function(){function t(a,i,h,b,r,y){if(y!==it){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Te,resetWarningCache:Me};return o.PropTypes=o,o};Pe.exports=lt();var Re=Pe.exports;const Wn=t=>t.dailyStatisticsFood.consumedFood.breakfast,Hn=t=>t.dailyStatisticsFood.consumedFood.lunch,jn=t=>t.dailyStatisticsFood.consumedFood.dinner,Bn=t=>t.dailyStatisticsFood.consumedFood.snack,$n=t=>t.dailyStatisticsFood.isOpen,zn=t=>t.dailyStatisticsFood.consumedFood.totalCalories,qn=t=>t.dailyStatisticsFood.consumedFood.totalCarbs,Kn=t=>t.dailyStatisticsFood.consumedFood.totalProtein,Vn=t=>t.dailyStatisticsFood.consumedFood.totalFat,Yn=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    /* width: 834px; */
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`,st=l.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    /* margin-right: 150px; */
  }
  @media screen and (min-width: 1440px) {
    /* margin-right: 159px; */
  }
`,pt=l.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,ct=l.img`
  width: 32px;
  height: 32px;
`,Qn=l.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* flex-wrap: wrap; */
  @media screen and (min-width: 834px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Gn=l.p`
  width: 100%;
  @media screen and (min-width: 834px) {
    margin-top: 0px;
    width: auto;
  }

  @media screen and (min-width: 1440px) {
  }
`,Jn=l.p`
  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Xn=l.span`
  color: var(--primary-color-grey);
  font-weight: 500;
  line-height: 1.42;
`,Zn=l.div`
  margin-top: 12px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 12px;
  height: 232px;
  background-color: var(--primary-color-black-two);
  border-radius: 13px;
  width: 300px;
  position: relative;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 32px 14px;
    gap: 32px;
    margin-top: 6px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 240px;
  }
`,eo=l.span`
  color: var(--primary-color-grey);
  font-weight: 400;
  line-height: 1.42;
  margin-right: 6px;

  @media screen and (min-width: 834px) {
    display: none;
  }
`,to=l.div`
  display: flex;
  gap: 20px;
`,no=l.span`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
  margin-right: 16px;
`,oo=l.div`
  max-width: 780px;

  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`,ro=l.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  column-gap: 12px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }
`,ao=l.p`
  color: var(--primary-color-white);
  /* width: calc(100% - 30px); */
  line-height: 1.42;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  @media screen and (min-width: 834px) {
    /* width: 105px; */
  }

  @media screen and (min-width: 1440px) {
  }
`,io=l.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: 834px) {
    font-size: 14px;
  }
`,lo=l.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
  position: absolute;
  right: 35px;

  @media screen and (min-width: 834px) {
    gap: 32px;
  }
`,so=l.li`
  color: var(--primary-color-white);
  line-height: 1.42;
  max-height: 25px;
  width: 70px;

  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: flex-start;
    width: 80px;
    position: relative;
  }
`,po=l.button`
  display: flex;
  gap: 6px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  padding: 0;

  @media screen and (min-width: 834px) {
  }
`,co=l.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
`,uo=l.p`
  color: var(--primary-color-grey);
  line-height: 1.42;

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,fo=l.button`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  max-height: 20px;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  padding: 0;
`,ho=l.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  fill: var(--primary-color-green-lite);
`,mo=l.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,vo=l.div`
  position: relative;
  padding: 10px;
  width: 300px;
  height: 546px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    width: 708px;
    height: 280px;
    padding: 24px;
  }
`,dt=l.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`,yo=l.input`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  @media screen and (min-width: 834px) {
    width: 255px;
  }
`,go=l.input`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
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
`,xo=l.input`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 86px;
  }
`,bo=l.input`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 61px;
  }
`,wo=l.input`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 78px;
  }
`;l.input`
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
`;const Oo=l.div`
  width: 660px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }
`,Co=l.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`;l.input`
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
`;const ut=l.div`
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
`,ft=l.button`
  display: block;
  width: 256px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  font-family: 'Poppins500';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  margin-left: auto;
  margin-right: auto;
  border: none;
`,_o=l.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`,So=l.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`;var pe={exports:{}},U={},ce={exports:{}},R={},de={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=x;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",i=/input|select|textarea|button|object|iframe/;function h(s,m){return m.getPropertyValue("overflow")!=="visible"||s.scrollWidth<=0&&s.scrollHeight<=0}function b(s){var m=s.offsetWidth<=0&&s.offsetHeight<=0;if(m&&!s.innerHTML)return!0;try{var g=window.getComputedStyle(s),S=g.getPropertyValue("display");return m?S!==a&&h(s,g):S===o}catch{return console.warn("Failed to inspect element style"),!1}}function r(s){for(var m=s,g=s.getRootNode&&s.getRootNode();m&&m!==document.body;){if(g&&m===g&&(m=g.host.parentNode),b(m))return!1;m=m.parentNode}return!0}function y(s,m){var g=s.nodeName.toLowerCase(),S=i.test(g)&&!s.disabled||g==="a"&&s.href||m;return S&&r(s)}function f(s){var m=s.getAttribute("tabindex");m===null&&(m=void 0);var g=isNaN(m);return(g||m>=0)&&y(s,!g)}function x(s){var m=[].slice.call(s.querySelectorAll("*"),0).reduce(function(g,S){return g.concat(S.shadowRoot?x(S.shadowRoot):[S])},[]);return m.filter(f)}t.exports=e.default})(de,de.exports);var ke=de.exports;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=yt;R.log=gt;R.handleBlur=V;R.handleFocus=Y;R.markForFocusLater=xt;R.returnFocus=bt;R.popWithoutFocus=wt;R.setupScopedFocus=Ot;R.teardownScopedFocus=Ct;var ht=ke,mt=vt(ht);function vt(t){return t&&t.__esModule?t:{default:t}}var j=[],H=null,ue=!1;function yt(){j=[]}function gt(){}function V(){ue=!0}function Y(){if(ue){if(ue=!1,!H)return;setTimeout(function(){if(!H.contains(document.activeElement)){var t=(0,mt.default)(H)[0]||H;t.focus()}},0)}}function xt(){j.push(document.activeElement)}function bt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{j.length!==0&&(e=j.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function wt(){j.length>0&&j.pop()}function Ot(t){H=t,window.addEventListener?(window.addEventListener("blur",V,!1),document.addEventListener("focus",Y,!0)):(window.attachEvent("onBlur",V),document.attachEvent("onFocus",Y))}function Ct(){H=null,window.addEventListener?(window.removeEventListener("blur",V),document.removeEventListener("focus",Y)):(window.detachEvent("onBlur",V),document.detachEvent("onFocus",Y))}var fe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;var o=ke,a=i(o);function i(r){return r&&r.__esModule?r:{default:r}}function h(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return r.activeElement.shadowRoot?h(r.activeElement.shadowRoot):r.activeElement}function b(r,y){var f=(0,a.default)(r);if(!f.length){y.preventDefault();return}var x=void 0,s=y.shiftKey,m=f[0],g=f[f.length-1],S=h();if(r===S){if(!s)return;x=g}if(g===S&&!s&&(x=m),m===S&&s&&(x=g),x){y.preventDefault(),x.focus();return}var F=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),z=F!=null&&F[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(z){var W=f.indexOf(S);if(W>-1&&(W+=s?-1:1),x=f[W],typeof x>"u"){y.preventDefault(),x=s?g:m,x.focus();return}y.preventDefault(),x.focus()}}t.exports=e.default})(fe,fe.exports);var _t=fe.exports,k={},St=function(){},Et=St,T={},Fe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Fe);var Pt=Fe.exports;Object.defineProperty(T,"__esModule",{value:!0});T.canUseDOM=T.SafeNodeList=T.SafeHTMLCollection=void 0;var Mt=Pt,Tt=Rt(Mt);function Rt(t){return t&&t.__esModule?t:{default:t}}var ae=Tt.default,kt=ae.canUseDOM?window.HTMLElement:{};T.SafeHTMLCollection=ae.canUseDOM?window.HTMLCollection:{};T.SafeNodeList=ae.canUseDOM?window.NodeList:{};T.canUseDOM=ae.canUseDOM;T.default=kt;Object.defineProperty(k,"__esModule",{value:!0});k.resetState=Lt;k.log=It;k.assertNodeList=Ne;k.setElement=Ut;k.validateElement=he;k.hide=Wt;k.show=Ht;k.documentNotReadyOrSSRTesting=jt;var Ft=Et,Nt=Dt(Ft),At=T;function Dt(t){return t&&t.__esModule?t:{default:t}}var P=null;function Lt(){P&&(P.removeAttribute?P.removeAttribute("aria-hidden"):P.length!=null?P.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(P).forEach(function(t){return t.removeAttribute("aria-hidden")})),P=null}function It(){}function Ne(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Ut(t){var e=t;if(typeof e=="string"&&At.canUseDOM){var o=document.querySelectorAll(e);Ne(o,e),e=o}return P=e||P,P}function he(t){var e=t||P;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Nt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Wt(t){var e=!0,o=!1,a=void 0;try{for(var i=he(t)[Symbol.iterator](),h;!(e=(h=i.next()).done);e=!0){var b=h.value;b.setAttribute("aria-hidden","true")}}catch(r){o=!0,a=r}finally{try{!e&&i.return&&i.return()}finally{if(o)throw a}}}function Ht(t){var e=!0,o=!1,a=void 0;try{for(var i=he(t)[Symbol.iterator](),h;!(e=(h=i.next()).done);e=!0){var b=h.value;b.removeAttribute("aria-hidden")}}catch(r){o=!0,a=r}finally{try{!e&&i.return&&i.return()}finally{if(o)throw a}}}function jt(){P=null}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.resetState=Bt;B.log=$t;var q={},K={};function ge(t,e){t.classList.remove(e)}function Bt(){var t=document.getElementsByTagName("html")[0];for(var e in q)ge(t,q[e]);var o=document.body;for(var a in K)ge(o,K[a]);q={},K={}}function $t(){}var zt=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},qt=function(e,o){return e[o]&&(e[o]-=1),o},Kt=function(e,o,a){a.forEach(function(i){zt(o,i),e.add(i)})},Vt=function(e,o,a){a.forEach(function(i){qt(o,i),o[i]===0&&e.remove(i)})};B.add=function(e,o){return Kt(e.classList,e.nodeName.toLowerCase()=="html"?q:K,o.split(" "))};B.remove=function(e,o){return Vt(e.classList,e.nodeName.toLowerCase()=="html"?q:K,o.split(" "))};var $={};Object.defineProperty($,"__esModule",{value:!0});$.log=Qt;$.resetState=Gt;function Yt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ae=function t(){var e=this;Yt(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ne=new Ae;function Qt(){console.log("portalOpenInstances ----------"),console.log(ne.openInstances.length),ne.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Gt(){ne=new Ae}$.default=ne;var me={};Object.defineProperty(me,"__esModule",{value:!0});me.resetState=en;me.log=tn;var Jt=$,Xt=Zt(Jt);function Zt(t){return t&&t.__esModule?t:{default:t}}var _=void 0,M=void 0,I=[];function en(){for(var t=[_,M],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}_=M=null,I=[]}function tn(){console.log("bodyTrap ----------"),console.log(I.length);for(var t=[_,M],e=0;e<t.length;e++){var o=t[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function xe(){I.length!==0&&I[I.length-1].focusContent()}function nn(t,e){!_&&!M&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",xe),M=_.cloneNode(),M.addEventListener("focus",xe)),I=e,I.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==M&&document.body.appendChild(M)):(_.parentElement&&_.parentElement.removeChild(_),M.parentElement&&M.parentElement.removeChild(M))}Xt.default.subscribe(nn);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(u){for(var d=1;d<arguments.length;d++){var w=arguments[d];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&(u[n]=w[n])}return u},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i=function(){function u(d,w){for(var n=0;n<w.length;n++){var p=w[n];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(d,p.key,p)}}return function(d,w,n){return w&&u(d.prototype,w),n&&u(d,n),d}}(),h=Ee,b=Re,r=X(b),y=R,f=ie(y),x=_t,s=X(x),m=k,g=ie(m),S=B,F=ie(S),z=T,W=X(z),He=$,ve=X(He);function ie(u){if(u&&u.__esModule)return u;var d={};if(u!=null)for(var w in u)Object.prototype.hasOwnProperty.call(u,w)&&(d[w]=u[w]);return d.default=u,d}function X(u){return u&&u.__esModule?u:{default:u}}function je(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function Be(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:u}function $e(u,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);u.prototype=Object.create(d&&d.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(u,d):u.__proto__=d)}var le={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ze=function(d){return d.code==="Tab"||d.keyCode===9},qe=function(d){return d.code==="Escape"||d.keyCode===27},Z=0,se=function(u){$e(d,u);function d(w){je(this,d);var n=Be(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,w));return n.setOverlayRef=function(p){n.overlay=p,n.props.overlayRef&&n.props.overlayRef(p)},n.setContentRef=function(p){n.content=p,n.props.contentRef&&n.props.contentRef(p)},n.afterClose=function(){var p=n.props,C=p.appElement,E=p.ariaHideApp,O=p.htmlOpenClassName,A=p.bodyOpenClassName,D=p.parentSelector,ee=D&&D().ownerDocument||document;A&&F.remove(ee.body,A),O&&F.remove(ee.getElementsByTagName("html")[0],O),E&&Z>0&&(Z-=1,Z===0&&g.show(C)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(f.returnFocus(n.props.preventScroll),f.teardownScopedFocus()):f.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),ve.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(f.setupScopedFocus(n.node),f.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var p=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:p},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(p){ze(p)&&(0,s.default)(n.content,p),n.props.shouldCloseOnEsc&&qe(p)&&(p.stopPropagation(),n.requestClose(p))},n.handleOverlayOnClick=function(p){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(p):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(p){!n.props.shouldCloseOnOverlayClick&&p.target==n.overlay&&p.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(p){return n.ownerHandlesClose()&&n.props.onRequestClose(p)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(p,C){var E=(typeof C>"u"?"undefined":a(C))==="object"?C:{base:le[p],afterOpen:le[p]+"--after-open",beforeClose:le[p]+"--before-close"},O=E.base;return n.state.afterOpen&&(O=O+" "+E.afterOpen),n.state.beforeClose&&(O=O+" "+E.beforeClose),typeof C=="string"&&C?O+" "+C:O},n.attributesFromObject=function(p,C){return Object.keys(C).reduce(function(E,O){return E[p+"-"+O]=C[O],E},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return i(d,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,p){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!p.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,p=n.appElement,C=n.ariaHideApp,E=n.htmlOpenClassName,O=n.bodyOpenClassName,A=n.parentSelector,D=A&&A().ownerDocument||document;O&&F.add(D.body,O),E&&F.add(D.getElementsByTagName("html")[0],E),C&&(Z+=1,g.hide(p)),ve.default.register(this)}},{key:"render",value:function(){var n=this.props,p=n.id,C=n.className,E=n.overlayClassName,O=n.defaultStyles,A=n.children,D=C?{}:O.content,ee=E?{}:O.overlay;if(this.shouldBeClosed())return null;var Ke={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:o({},ee,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ve=o({id:p,ref:this.setContentRef,style:o({},D,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ye=this.props.contentElement(Ve,A);return this.props.overlayElement(Ke,Ye)}}]),d}(h.Component);se.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},se.propTypes={isOpen:r.default.bool.isRequired,defaultStyles:r.default.shape({content:r.default.object,overlay:r.default.object}),style:r.default.shape({content:r.default.object,overlay:r.default.object}),className:r.default.oneOfType([r.default.string,r.default.object]),overlayClassName:r.default.oneOfType([r.default.string,r.default.object]),parentSelector:r.default.func,bodyOpenClassName:r.default.string,htmlOpenClassName:r.default.string,ariaHideApp:r.default.bool,appElement:r.default.oneOfType([r.default.instanceOf(W.default),r.default.instanceOf(z.SafeHTMLCollection),r.default.instanceOf(z.SafeNodeList),r.default.arrayOf(r.default.instanceOf(W.default))]),onAfterOpen:r.default.func,onAfterClose:r.default.func,onRequestClose:r.default.func,closeTimeoutMS:r.default.number,shouldFocusAfterRender:r.default.bool,shouldCloseOnOverlayClick:r.default.bool,shouldReturnFocusAfterClose:r.default.bool,preventScroll:r.default.bool,role:r.default.string,contentLabel:r.default.string,aria:r.default.object,data:r.default.object,children:r.default.node,shouldCloseOnEsc:r.default.bool,overlayRef:r.default.func,contentRef:r.default.func,id:r.default.string,overlayElement:r.default.func,contentElement:r.default.func,testId:r.default.string},e.default=se,t.exports=e.default})(ce,ce.exports);var on=ce.exports;function De(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Le(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function Ie(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}De.__suppressDeprecationWarning=!0;Le.__suppressDeprecationWarning=!0;Ie.__suppressDeprecationWarning=!0;function rn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,i=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),o!==null||a!==null||i!==null){var h=t.displayName||t.name,b=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+h+" uses "+b+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=De,e.componentWillReceiveProps=Le),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Ie;var r=e.componentDidUpdate;e.componentDidUpdate=function(f,x,s){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:s;r.call(this,f,x,m)}}return t}const an=Object.freeze(Object.defineProperty({__proto__:null,polyfill:rn},Symbol.toStringTag,{value:"Module"})),ln=Qe(an);Object.defineProperty(U,"__esModule",{value:!0});U.bodyOpenClassName=U.portalClassName=void 0;var be=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},sn=function(){function t(e,o){for(var a=0;a<o.length;a++){var i=o[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),Ue=Ee,oe=G(Ue),pn=Ge,re=G(pn),cn=Re,c=G(cn),dn=on,we=G(dn),un=k,fn=mn(un),N=T,Oe=G(N),hn=ln;function mn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function G(t){return t&&t.__esModule?t:{default:t}}function vn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ce(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function yn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var gn=U.portalClassName="ReactModalPortal",xn=U.bodyOpenClassName="ReactModal__Body--open",L=N.canUseDOM&&re.default.createPortal!==void 0,_e=function(e){return document.createElement(e)},Se=function(){return L?re.default.createPortal:re.default.unstable_renderSubtreeIntoContainer};function te(t){return t()}var J=function(t){yn(e,t);function e(){var o,a,i,h;vn(this,e);for(var b=arguments.length,r=Array(b),y=0;y<b;y++)r[y]=arguments[y];return h=(a=(i=Ce(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(r))),i),i.removePortal=function(){!L&&re.default.unmountComponentAtNode(i.node);var f=te(i.props.parentSelector);f&&f.contains(i.node)?f.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(f){i.portal=f},i.renderPortal=function(f){var x=Se(),s=x(i,oe.default.createElement(we.default,be({defaultStyles:e.defaultStyles},f)),i.node);i.portalRef(s)},a),Ce(i,h)}return sn(e,[{key:"componentDidMount",value:function(){if(N.canUseDOM){L||(this.node=_e("div")),this.node.className=this.props.portalClassName;var a=te(this.props.parentSelector);a.appendChild(this.node),!L&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var i=te(a.parentSelector),h=te(this.props.parentSelector);return{prevParent:i,nextParent:h}}},{key:"componentDidUpdate",value:function(a,i,h){if(N.canUseDOM){var b=this.props,r=b.isOpen,y=b.portalClassName;a.portalClassName!==y&&(this.node.className=y);var f=h.prevParent,x=h.nextParent;x!==f&&(f.removeChild(this.node),x.appendChild(this.node)),!(!a.isOpen&&!r)&&!L&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!N.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,i=Date.now(),h=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||i+this.props.closeTimeoutMS);h?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,h-i)):this.removePortal()}}},{key:"render",value:function(){if(!N.canUseDOM||!L)return null;!this.node&&L&&(this.node=_e("div"));var a=Se();return a(oe.default.createElement(we.default,be({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){fn.setElement(a)}}]),e}(Ue.Component);J.propTypes={isOpen:c.default.bool.isRequired,style:c.default.shape({content:c.default.object,overlay:c.default.object}),portalClassName:c.default.string,bodyOpenClassName:c.default.string,htmlOpenClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),overlayClassName:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),appElement:c.default.oneOfType([c.default.instanceOf(Oe.default),c.default.instanceOf(N.SafeHTMLCollection),c.default.instanceOf(N.SafeNodeList),c.default.arrayOf(c.default.instanceOf(Oe.default))]),onAfterOpen:c.default.func,onRequestClose:c.default.func,closeTimeoutMS:c.default.number,ariaHideApp:c.default.bool,shouldFocusAfterRender:c.default.bool,shouldCloseOnOverlayClick:c.default.bool,shouldReturnFocusAfterClose:c.default.bool,preventScroll:c.default.bool,parentSelector:c.default.func,aria:c.default.object,data:c.default.object,role:c.default.string,contentLabel:c.default.string,shouldCloseOnEsc:c.default.bool,overlayRef:c.default.func,contentRef:c.default.func,id:c.default.string,overlayElement:c.default.func,contentElement:c.default.func};J.defaultProps={isOpen:!1,portalClassName:gn,bodyOpenClassName:xn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return oe.default.createElement("div",e,o)},contentElement:function(e,o){return oe.default.createElement("div",e,o)}};J.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,hn.polyfill)(J);U.default=J;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=U,a=i(o);function i(h){return h&&h.__esModule?h:{default:h}}e.default=a.default,t.exports=e.default})(pe,pe.exports);var bn=pe.exports;const We=Je(bn),wn=l(Q)`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  @media screen and (min-width: 834px) {
    width: 255px;
  }
`,On=l(Q)`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
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
`,Cn=l(Q)`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 86px;
  }
`,_n=l(Q)`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 61px;
  }
`,Sn=l(Q)`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 78px;
  }
`,En=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }
`,Pn=l.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`,Mn=l.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Tn=l.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 6px;
  border: none;
  color: var(--primary-color-green-lite);
  font-family: 'Poppins400', sans-serif;
  margin-top: 40px;
  width: 150px;
  height: 20px;

  &:hover,
  &:focus {
    color: var(secondary-color-yellow);
  }
`,Rn=l.button`
  background-color: transparent;
  border: none;
  padding: 0px;
`,kn=l.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`,Fn=l.div`
  position: relative;
  width: 276px;
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
`,Nn="/Healthy_life/assets/Breakfast-ebbae9d6.png",An="/Healthy_life/assets/Dinner-3e075f11.png",Dn="/Healthy_life/assets/Lunch-b9834f5c.png",Ln="/Healthy_life/assets/Snack-986b08ce.png",In={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"#0F0F0F"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};We.setAppElement("#root");const Eo=({stateModal:t,closeModal:e,typefood:o})=>{const a=Xe(),i={name:"",carbogidrate:"",protein:"",fat:"",calories:""},h=r=>{let y={typeFood:o,userFood:r.products.map(f=>({name:f.name,calories:f.calories,nutrition:{carbogidrate:f.carbogidrate,protein:f.protein,fat:f.fat}}))};a(ot(y)),e()},b=r=>{if(o==="breakfast")return Nn;if(o==="dinner")return An;if(o==="lunch")return Dn;if(o==="snack")return Ln};return v.jsx(We,{isOpen:t,onRequestClose:e,style:In,children:v.jsxs(Fn,{children:[v.jsx(dt,{children:"Record your meal"}),v.jsxs(st,{style:{marginTop:"24px"},children:[v.jsx(ct,{src:b(),alt:o}),v.jsx(pt,{children:Ze(o)})]}),v.jsx(et,{initialValues:{products:[i]},onSubmit:r=>h(r),children:({values:r})=>v.jsxs(tt,{children:[v.jsx(nt,{name:"products",children:({remove:y,push:f})=>v.jsxs("div",{children:[r.products.map((x,s)=>v.jsxs(En,{children:[v.jsx(wn,{name:`products.${s}.name`,placeholder:"The name of the product or dish",value:r.products[s].name}),v.jsx(On,{name:`products.${s}.carbogidrate`,placeholder:"Carbonoh.",value:r.products[s].carbogidrate,type:"number",min:1}),v.jsx(Cn,{name:`products.${s}.protein`,placeholder:"Protein",value:r.products[s].protein,min:1,type:"number"}),v.jsxs(Pn,{children:[v.jsx(_n,{name:`products.${s}.fat`,placeholder:"Fat",value:r.products[s].fat,min:1,type:"number"}),v.jsx(Sn,{name:`products.${s}.calories`,placeholder:"Calories",value:r.products[s].calories,min:1,type:"number"}),v.jsx(Rn,{"data-set":s,type:"button",onClick:m=>{const g=m.currentTarget.dataset.set;r.products.length===1&&e(),y(g)},children:v.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"#E3FFA8"},children:v.jsx("use",{href:`${ye}#trash-delete`})})})]})]},s)),v.jsxs(Tn,{type:"button",onClick:()=>f(i),children:[v.jsx(Mn,{children:v.jsx("use",{href:`${ye}#icon-add-converted`})}),"Add more"]})]})}),v.jsxs(ut,{children:[v.jsx(ft,{type:"submit",children:"Confirm"}),v.jsx(kn,{onClick:e,type:"button",children:"Cancel"})]})]})})]})})};export{_o as A,Nn as B,vo as C,An as D,Zn as E,ro as F,ao as G,lo as H,Oo as I,so as J,io as K,Dn as L,Eo as M,no as N,eo as O,po as P,co as Q,yo as R,Ln as S,dt as T,uo as U,fo as V,Yn as W,ho as X,$n as Y,qn as a,Kn as b,Vn as c,ct as d,Wn as e,Hn as f,jn as g,Bn as h,mo as i,st as j,pt as k,go as l,xo as m,Co as n,bo as o,wo as p,ut as q,ft as r,zn as s,So as t,oo as u,Qn as v,Gn as w,Xn as x,to as y,Jn as z};
