import{s,k as j,m as Ie,n as Ue,j as n,o as B,t as U,p as mt,q as vt,v as gt,r as D,u as Z,w as xt,x as yt,L as Be,y as bt,z as wt,A as Ct,B as Ot,C as _t,D as St,G as jt,H as Et,I as kt,J as Mt}from"./index-7b6ebf1f.js";import{C as He,A as Tt,p as ze,a as qe,D as Rt,b as Pt,L as Dt,B as At,c as Ft,d as Nt}from"./index-c128b4e5.js";import{s as Wt,a as Lt,b as $t,c as It,d as Ut,C as Bt,T as Ht,M as zt,e as Ke,f as qt,B as Kt,g as Gt,h as Vt,i as Yt,A as Jt,j as Zt,k as Qt,l as Xt,m as en}from"./Reacord.styled-37568790.js";import{R as tn}from"./RecommendedList-77129ce1.js";var Ge={exports:{}},nn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",on=nn,rn=on;function Ve(){}function Ye(){}Ye.resetWarningCache=Ve;var an=function(){function t(a,l,c,d,i,w){if(w!==rn){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ye,resetWarningCache:Ve};return o.PropTypes=o,o};Ge.exports=an();var Je=Ge.exports;const ln=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,sn=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,cn=s.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    gap: 32px;
    padding: 24px 40px;
  }
`,je=s.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 834px) {
  }
`,dn=s.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,pn=s.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,Ee=s.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,ke=s.p`
  margin-top: 4px;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.11;
  color: var(--primary-color-white);
`,un=s.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,fn=()=>{const t=j(Ie),e=j(Ue);return n.jsxs(ln,{children:[n.jsx(sn,{children:"Daily goal"}),n.jsxs(cn,{children:[n.jsxs(je,{children:[n.jsx(dn,{children:n.jsx("use",{href:`${B}#bubble`})}),n.jsxs(Ee,{children:[n.jsx("p",{children:"Calories"}),n.jsx(ke,{children:t})]})]}),n.jsxs(je,{children:[n.jsx(pn,{children:n.jsx("use",{href:`${B}#milk`})}),n.jsxs(Ee,{children:[n.jsx("p",{children:" Water"}),n.jsxs(ke,{children:[e," ",n.jsx(un,{children:"ml"})]})]})]})]})]})};He.register(Tt,ze,qe);const hn={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},mn={id:"bgCircle",beforeDatasetsDraw(t){const{ctx:e}=t;e.save();const o=t.getDatasetMeta(0).data[0].x,a=t.getDatasetMeta(0).data[0].y,l=t.getDatasetMeta(0).data[0].innerRadius,c=t.getDatasetMeta(0).data[0].outerRadius,d=c-l,i=Math.PI/180;e.beginPath(),e.lineWidth=d,e.strokeStyle=`${U.palette.greyone.main}`,e.arc(o,a,c-d/2,0,i*360,!1),e.stroke()}},Ze=({dailyGoal:t,filledValue:e,bgColor:o})=>{let a=t-e;e>t&&(a=0);const l={datasets:[{label:[],data:[e,a],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return n.jsx(n.Fragment,{children:n.jsx(Rt,{options:hn,data:l,plugins:[mn]})})},vn=s.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,gn=s.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,xn=s.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,yn=s.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,Me=s.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,bn=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,me=({title:t,bgColor:e,dailyGoal:o,filledValue:a})=>{a||(a=0);let l=Math.round(a*100/o),c=(o-a).toFixed(0);return a>o&&(c=0),l>100&&(l=100),n.jsxs(gn,{children:[n.jsxs(vn,{children:[n.jsx(Ze,{dailyGoal:o,filledValue:a,bgColor:e}),n.jsx(bn,{children:n.jsx("p",{children:`${l}%`})})]}),n.jsxs("div",{children:[n.jsx(yn,{children:t}),n.jsxs(xn,{children:[n.jsxs("p",{children:["Goal: ",n.jsx(Me,{children:o})]}),n.jsxs("p",{children:["left: ",n.jsx(Me,{children:c})]})]})]})]})},wn=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,Cn=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    flex-direction: row;
    padding: 36px 40px;
    gap: 40px;
  }
`,On=s.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,_n=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;s.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const Sn=s.div`
  position: relative;
  width: 168px;
  height: 168px;
`,ve=s.li`
  display: flex;
`,jn=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,En=s.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,kn=s.p`
  color: var(--primary-color-grey);
`,Mn=()=>{const t=`${U.palette.litegreen.main}`,e=`${U.palette.pink.main}`,o=`${U.palette.yellow.main}`,a=`${U.palette.grey.main}`,l=j(Ie),c=j(mt),d=j(vt),i=j(gt),w=j(Wt),m=j(Lt),C=j($t),u=j(It);return n.jsxs(wn,{children:[n.jsx(_n,{children:"Food"}),n.jsxs(Cn,{children:[n.jsxs(Sn,{children:[n.jsx(Ze,{dailyGoal:l,filledValue:w,bgColor:t}),n.jsxs(jn,{children:[n.jsx(En,{children:w||0}),n.jsx(kn,{children:"calories"})]})]}),n.jsxs(On,{children:[n.jsx(ve,{children:n.jsx(me,{title:"Carbonohidrates",bgColor:e,dailyGoal:c,filledValue:m})}),n.jsx(ve,{children:n.jsx(me,{title:"Protein",bgColor:o,dailyGoal:d,filledValue:C})}),n.jsx(ve,{children:n.jsx(me,{title:"Fat",bgColor:a,dailyGoal:i,filledValue:u})})]})]})]})},Tn=s.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`,Rn=s.div`
  width: 300px;
  height: 266px;
  padding: 16px 12px 24px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 338px;
    height: 280px;
    padding: 24px 40px;
  }
`,Pn=s.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Dn=s.button`
  margin-top: 32px;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  outline: none;
  background-color: var(--primary-color-green-lite);
  border-color: transparent;
  border-radius: 12px;

  color: var(--primary-color-black-two);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--secondary-color-yellow);
  }
`,An=s.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,Fn=s.input`
  width: 100%;
  margin-top: 12px;
  padding: 8px 10px;
  border: 1px solid var(--primary-color-green-lite);
  border-radius: 12px;
  background-color: transparent;
  color: var(--primary-color-white);

  &:focus {
    outline: none;
    border-color: var(--primary-color-green-lite);
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    color: var(--primary-color-grey);
  }
`,Nn=s.button`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,Wn=({isModalOpen:t,setIsModalOpen:e})=>{const[o,a]=D.useState(0),l=Z(),c=d=>{d.preventDefault(),l(xt({value:o})),e(!1)};return D.useEffect(()=>{const d=i=>{i.code==="Escape"&&e(!1)};return t?(document.addEventListener("keydown",d),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",d),document.body.style.overflow="unset"}},[t,e]),n.jsx(Tn,{onClick:()=>e(!1),children:n.jsxs(Rn,{onClick:d=>d.stopPropagation(),children:[n.jsx(An,{children:"Add water intake"}),n.jsxs(Pn,{onSubmit:c,children:[n.jsxs("label",{children:["How much water",n.jsx(Fn,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:d=>a(Number(d.target.value)),value:o||"",min:1})]}),n.jsx(Dn,{type:"submit",children:"Confirm"}),n.jsx(Nn,{type:"button",onClick:()=>e(!1),children:"Cancel"})]})]})})};He.register(Pt,Dt,At,Ft,ze,qe);const Ln={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},$n=({waterIntake:t})=>{const e={labels:["Intake"],datasets:[{label:"Water",data:[t],backgroundColor:`${U.palette.violet.main}`,hoverBackgroundColor:`${U.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return n.jsx(Nt,{data:e,options:Ln})},In=t=>t.dailyWaterStatistics.consumedWater.value,Un=t=>t.dailyWaterStatistics.consumedWater._id,Bn=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,Hn=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,zn=s.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    gap: 40px;
    padding: 24px 22px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 40px;
  }
`,qn=s.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,Te=s.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Kn=s.span`
  color: var(--primary-color-white);
`,Gn=s.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,Vn=s.svg`
  position: absolute;
  cursor: pointer;
  top: 12px;
  right: 12px;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);

  @media screen and (min-width: 834px) {
    top: 24px;
    right: 24px;
    fill: var(--primary-color-grey);
    &:hover {
      stroke: var(--primary-color-green-lite);
    }
  }
`,Yn=s.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,Jn=s.button`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: var(--primary-color-black-one);
  background-color: var(--primary-color-green-lite);
  border-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--secondary-color-yellow);
  }
`,Zn=s.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,Qn=s.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,Xn=s.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,eo=()=>{const[t,e]=D.useState(!1),o=Z(),a=j(Un),l=j(Ue),c=j(In),d=c<=l?Math.round(c*100/l):100;let i=l-c;c>l&&(i=0);const w={color:d>85?`${U.palette.greyone.main}`:`${U.palette.violet.main}`};return n.jsxs(Bn,{children:[n.jsx(Hn,{children:"Water"}),n.jsxs(zn,{children:[n.jsx(Vn,{width:"20px",height:"20px",onClick:()=>{o(yt(a))},children:n.jsx("use",{href:`${B}#trash-delete`})}),n.jsx(Zn,{children:n.jsxs(Qn,{children:[n.jsx($n,{waterIntake:d}),n.jsx(Xn,{style:w,children:`${d}%`})]})}),n.jsxs("div",{children:[n.jsx(qn,{children:"Water consumption"}),n.jsxs(Te,{children:[n.jsx(Gn,{children:c}),"ml"]}),n.jsxs(Te,{children:[n.jsx(Kn,{children:"left:"})," ",`${i} ml`]}),n.jsxs(Jn,{type:"button",onClick:()=>e(!0),children:[n.jsx(Yn,{children:n.jsx("use",{href:`${B}#icon-add-converted`})}),"Add water intake"]})]})]}),t&&n.jsx(Wn,{setIsModalOpen:e,isModalOpen:t})]})},to=s.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,no=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`,oo=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,ro=s.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,ao=s(Be)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,io=s.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,lo=()=>n.jsxs(to,{children:[n.jsxs(no,{children:[n.jsx(ro,{children:"Today"}),n.jsxs(ao,{to:"/dashboard",children:["On the way to the goal",n.jsx(io,{children:n.jsx("use",{href:`${B}#icon-arrowright`})})]})]}),n.jsxs(oo,{children:[n.jsx(fn,{}),n.jsx(eo,{}),n.jsx(Mn,{})]})]}),so=s.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,co=s.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,po=s.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,uo=s(Be)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,fo=s.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,ho=s.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,mo=s.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ge=s.p`
  width: 160px;
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    width: AUTO;
  }
`,vo=s.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,go=s.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,xo=s.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,yo=s.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,bo=s.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;var ye={exports:{}},V={},be={exports:{}},W={},we={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=C;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",l=/input|select|textarea|button|object|iframe/;function c(u,g){return g.getPropertyValue("overflow")!=="visible"||u.scrollWidth<=0&&u.scrollHeight<=0}function d(u){var g=u.offsetWidth<=0&&u.offsetHeight<=0;if(g&&!u.innerHTML)return!0;try{var v=window.getComputedStyle(u),_=v.getPropertyValue("display");return g?_!==a&&c(u,v):_===o}catch{return console.warn("Failed to inspect element style"),!1}}function i(u){for(var g=u,v=u.getRootNode&&u.getRootNode();g&&g!==document.body;){if(v&&g===v&&(g=v.host.parentNode),d(g))return!1;g=g.parentNode}return!0}function w(u,g){var v=u.nodeName.toLowerCase(),_=l.test(v)&&!u.disabled||v==="a"&&u.href||g;return _&&i(u)}function m(u){var g=u.getAttribute("tabindex");g===null&&(g=void 0);var v=isNaN(g);return(v||g>=0)&&w(u,!v)}function C(u){var g=[].slice.call(u.querySelectorAll("*"),0).reduce(function(v,_){return v.concat(_.shadowRoot?C(_.shadowRoot):[_])},[]);return g.filter(m)}t.exports=e.default})(we,we.exports);var Qe=we.exports;Object.defineProperty(W,"__esModule",{value:!0});W.resetState=_o;W.log=So;W.handleBlur=ne;W.handleFocus=oe;W.markForFocusLater=jo;W.returnFocus=Eo;W.popWithoutFocus=ko;W.setupScopedFocus=Mo;W.teardownScopedFocus=To;var wo=Qe,Co=Oo(wo);function Oo(t){return t&&t.__esModule?t:{default:t}}var J=[],Y=null,Ce=!1;function _o(){J=[]}function So(){}function ne(){Ce=!0}function oe(){if(Ce){if(Ce=!1,!Y)return;setTimeout(function(){if(!Y.contains(document.activeElement)){var t=(0,Co.default)(Y)[0]||Y;t.focus()}},0)}}function jo(){J.push(document.activeElement)}function Eo(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{J.length!==0&&(e=J.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function ko(){J.length>0&&J.pop()}function Mo(t){Y=t,window.addEventListener?(window.addEventListener("blur",ne,!1),document.addEventListener("focus",oe,!0)):(window.attachEvent("onBlur",ne),document.attachEvent("onFocus",oe))}function To(){Y=null,window.addEventListener?(window.removeEventListener("blur",ne),document.removeEventListener("focus",oe)):(window.detachEvent("onBlur",ne),document.detachEvent("onFocus",oe))}var Oe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var o=Qe,a=l(o);function l(i){return i&&i.__esModule?i:{default:i}}function c(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?c(i.activeElement.shadowRoot):i.activeElement}function d(i,w){var m=(0,a.default)(i);if(!m.length){w.preventDefault();return}var C=void 0,u=w.shiftKey,g=m[0],v=m[m.length-1],_=c();if(i===_){if(!u)return;C=v}if(v===_&&!u&&(C=g),g===_&&u&&(C=v),C){w.preventDefault(),C.focus();return}var R=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),$=R!=null&&R[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if($){var A=m.indexOf(_);if(A>-1&&(A+=u?-1:1),C=m[A],typeof C>"u"){w.preventDefault(),C=u?v:g,C.focus();return}w.preventDefault(),C.focus()}}t.exports=e.default})(Oe,Oe.exports);var Ro=Oe.exports,L={},Po=function(){},Do=Po,N={},Xe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Xe);var Ao=Xe.exports;Object.defineProperty(N,"__esModule",{value:!0});N.canUseDOM=N.SafeNodeList=N.SafeHTMLCollection=void 0;var Fo=Ao,No=Wo(Fo);function Wo(t){return t&&t.__esModule?t:{default:t}}var ue=No.default,Lo=ue.canUseDOM?window.HTMLElement:{};N.SafeHTMLCollection=ue.canUseDOM?window.HTMLCollection:{};N.SafeNodeList=ue.canUseDOM?window.NodeList:{};N.canUseDOM=ue.canUseDOM;N.default=Lo;Object.defineProperty(L,"__esModule",{value:!0});L.resetState=Ho;L.log=zo;L.assertNodeList=et;L.setElement=qo;L.validateElement=_e;L.hide=Ko;L.show=Go;L.documentNotReadyOrSSRTesting=Vo;var $o=Do,Io=Bo($o),Uo=N;function Bo(t){return t&&t.__esModule?t:{default:t}}var P=null;function Ho(){P&&(P.removeAttribute?P.removeAttribute("aria-hidden"):P.length!=null?P.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(P).forEach(function(t){return t.removeAttribute("aria-hidden")})),P=null}function zo(){}function et(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function qo(t){var e=t;if(typeof e=="string"&&Uo.canUseDOM){var o=document.querySelectorAll(e);et(o,e),e=o}return P=e||P,P}function _e(t){var e=t||P;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Io.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ko(t){var e=!0,o=!1,a=void 0;try{for(var l=_e(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.setAttribute("aria-hidden","true")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function Go(t){var e=!0,o=!1,a=void 0;try{for(var l=_e(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.removeAttribute("aria-hidden")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function Vo(){P=null}var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.resetState=Yo;Q.log=Jo;var ee={},te={};function Re(t,e){t.classList.remove(e)}function Yo(){var t=document.getElementsByTagName("html")[0];for(var e in ee)Re(t,ee[e]);var o=document.body;for(var a in te)Re(o,te[a]);ee={},te={}}function Jo(){}var Zo=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Qo=function(e,o){return e[o]&&(e[o]-=1),o},Xo=function(e,o,a){a.forEach(function(l){Zo(o,l),e.add(l)})},er=function(e,o,a){a.forEach(function(l){Qo(o,l),o[l]===0&&e.remove(l)})};Q.add=function(e,o){return Xo(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};Q.remove=function(e,o){return er(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};var X={};Object.defineProperty(X,"__esModule",{value:!0});X.log=nr;X.resetState=or;function tr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var tt=function t(){var e=this;tr(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ce=new tt;function nr(){console.log("portalOpenInstances ----------"),console.log(ce.openInstances.length),ce.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function or(){ce=new tt}X.default=ce;var Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.resetState=lr;Se.log=sr;var rr=X,ar=ir(rr);function ir(t){return t&&t.__esModule?t:{default:t}}var M=void 0,F=void 0,G=[];function lr(){for(var t=[M,F],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}M=F=null,G=[]}function sr(){console.log("bodyTrap ----------"),console.log(G.length);for(var t=[M,F],e=0;e<t.length;e++){var o=t[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Pe(){G.length!==0&&G[G.length-1].focusContent()}function cr(t,e){!M&&!F&&(M=document.createElement("div"),M.setAttribute("data-react-modal-body-trap",""),M.style.position="absolute",M.style.opacity="0",M.setAttribute("tabindex","0"),M.addEventListener("focus",Pe),F=M.cloneNode(),F.addEventListener("focus",Pe)),G=e,G.length>0?(document.body.firstChild!==M&&document.body.insertBefore(M,document.body.firstChild),document.body.lastChild!==F&&document.body.appendChild(F)):(M.parentElement&&M.parentElement.removeChild(M),F.parentElement&&F.parentElement.removeChild(F))}ar.default.subscribe(cr);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(y){for(var h=1;h<arguments.length;h++){var S=arguments[h];for(var r in S)Object.prototype.hasOwnProperty.call(S,r)&&(y[r]=S[r])}return y},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},l=function(){function y(h,S){for(var r=0;r<S.length;r++){var p=S[r];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}return function(h,S,r){return S&&y(h.prototype,S),r&&y(h,r),h}}(),c=D,d=Je,i=x(d),w=W,m=O(w),C=Ro,u=x(C),g=L,v=O(g),_=Q,R=O(_),$=N,A=x($),I=X,b=x(I);function O(y){if(y&&y.__esModule)return y;var h={};if(y!=null)for(var S in y)Object.prototype.hasOwnProperty.call(y,S)&&(h[S]=y[S]);return h.default=y,h}function x(y){return y&&y.__esModule?y:{default:y}}function lt(y,h){if(!(y instanceof h))throw new TypeError("Cannot call a class as a function")}function st(y,h){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:y}function ct(y,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);y.prototype=Object.create(h&&h.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(y,h):y.__proto__=h)}var fe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},dt=function(h){return h.code==="Tab"||h.keyCode===9},pt=function(h){return h.code==="Escape"||h.keyCode===27},ie=0,he=function(y){ct(h,y);function h(S){lt(this,h);var r=st(this,(h.__proto__||Object.getPrototypeOf(h)).call(this,S));return r.setOverlayRef=function(p){r.overlay=p,r.props.overlayRef&&r.props.overlayRef(p)},r.setContentRef=function(p){r.content=p,r.props.contentRef&&r.props.contentRef(p)},r.afterClose=function(){var p=r.props,k=p.appElement,T=p.ariaHideApp,E=p.htmlOpenClassName,z=p.bodyOpenClassName,q=p.parentSelector,le=q&&q().ownerDocument||document;z&&R.remove(le.body,z),E&&R.remove(le.getElementsByTagName("html")[0],E),T&&ie>0&&(ie-=1,ie===0&&v.show(k)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(m.returnFocus(r.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),b.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(m.setupScopedFocus(r.node),m.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var p=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:p},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(p){dt(p)&&(0,u.default)(r.content,p),r.props.shouldCloseOnEsc&&pt(p)&&(p.stopPropagation(),r.requestClose(p))},r.handleOverlayOnClick=function(p){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(p):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(p){!r.props.shouldCloseOnOverlayClick&&p.target==r.overlay&&p.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(p){return r.ownerHandlesClose()&&r.props.onRequestClose(p)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(p,k){var T=(typeof k>"u"?"undefined":a(k))==="object"?k:{base:fe[p],afterOpen:fe[p]+"--after-open",beforeClose:fe[p]+"--before-close"},E=T.base;return r.state.afterOpen&&(E=E+" "+T.afterOpen),r.state.beforeClose&&(E=E+" "+T.beforeClose),typeof k=="string"&&k?E+" "+k:E},r.attributesFromObject=function(p,k){return Object.keys(k).reduce(function(T,E){return T[p+"-"+E]=k[E],T},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return l(h,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,p){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!p.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,p=r.appElement,k=r.ariaHideApp,T=r.htmlOpenClassName,E=r.bodyOpenClassName,z=r.parentSelector,q=z&&z().ownerDocument||document;E&&R.add(q.body,E),T&&R.add(q.getElementsByTagName("html")[0],T),k&&(ie+=1,v.hide(p)),b.default.register(this)}},{key:"render",value:function(){var r=this.props,p=r.id,k=r.className,T=r.overlayClassName,E=r.defaultStyles,z=r.children,q=k?{}:E.content,le=T?{}:E.overlay;if(this.shouldBeClosed())return null;var ut={ref:this.setOverlayRef,className:this.buildClassName("overlay",T),style:o({},le,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ft=o({id:p,ref:this.setContentRef,style:o({},q,this.props.style.content),className:this.buildClassName("content",k),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ht=this.props.contentElement(ft,z);return this.props.overlayElement(ut,ht)}}]),h}(c.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(A.default),i.default.instanceOf($.SafeHTMLCollection),i.default.instanceOf($.SafeNodeList),i.default.arrayOf(i.default.instanceOf(A.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},e.default=he,t.exports=e.default})(be,be.exports);var dr=be.exports;function nt(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function ot(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function rt(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}nt.__suppressDeprecationWarning=!0;ot.__suppressDeprecationWarning=!0;rt.__suppressDeprecationWarning=!0;function pr(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||a!==null||l!==null){var c=t.displayName||t.name,d=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+d+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=nt,e.componentWillReceiveProps=ot),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=rt;var i=e.componentDidUpdate;e.componentDidUpdate=function(m,C,u){var g=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:u;i.call(this,m,C,g)}}return t}const ur=Object.freeze(Object.defineProperty({__proto__:null,polyfill:pr},Symbol.toStringTag,{value:"Module"})),fr=bt(ur);Object.defineProperty(V,"__esModule",{value:!0});V.bodyOpenClassName=V.portalClassName=void 0;var De=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},hr=function(){function t(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),at=D,de=re(at),mr=wt,pe=re(mr),vr=Je,f=re(vr),gr=dr,Ae=re(gr),xr=L,yr=wr(xr),H=N,Fe=re(H),br=fr;function wr(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function re(t){return t&&t.__esModule?t:{default:t}}function Cr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ne(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Or(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _r=V.portalClassName="ReactModalPortal",Sr=V.bodyOpenClassName="ReactModal__Body--open",K=H.canUseDOM&&pe.default.createPortal!==void 0,We=function(e){return document.createElement(e)},Le=function(){return K?pe.default.createPortal:pe.default.unstable_renderSubtreeIntoContainer};function se(t){return t()}var ae=function(t){Or(e,t);function e(){var o,a,l,c;Cr(this,e);for(var d=arguments.length,i=Array(d),w=0;w<d;w++)i[w]=arguments[w];return c=(a=(l=Ne(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(i))),l),l.removePortal=function(){!K&&pe.default.unmountComponentAtNode(l.node);var m=se(l.props.parentSelector);m&&m.contains(l.node)?m.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(m){l.portal=m},l.renderPortal=function(m){var C=Le(),u=C(l,de.default.createElement(Ae.default,De({defaultStyles:e.defaultStyles},m)),l.node);l.portalRef(u)},a),Ne(l,c)}return hr(e,[{key:"componentDidMount",value:function(){if(H.canUseDOM){K||(this.node=We("div")),this.node.className=this.props.portalClassName;var a=se(this.props.parentSelector);a.appendChild(this.node),!K&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=se(a.parentSelector),c=se(this.props.parentSelector);return{prevParent:l,nextParent:c}}},{key:"componentDidUpdate",value:function(a,l,c){if(H.canUseDOM){var d=this.props,i=d.isOpen,w=d.portalClassName;a.portalClassName!==w&&(this.node.className=w);var m=c.prevParent,C=c.nextParent;C!==m&&(m.removeChild(this.node),C.appendChild(this.node)),!(!a.isOpen&&!i)&&!K&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!H.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),c=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);c?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-l)):this.removePortal()}}},{key:"render",value:function(){if(!H.canUseDOM||!K)return null;!this.node&&K&&(this.node=We("div"));var a=Le();return a(de.default.createElement(Ae.default,De({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){yr.setElement(a)}}]),e}(at.Component);ae.propTypes={isOpen:f.default.bool.isRequired,style:f.default.shape({content:f.default.object,overlay:f.default.object}),portalClassName:f.default.string,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,className:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),overlayClassName:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),appElement:f.default.oneOfType([f.default.instanceOf(Fe.default),f.default.instanceOf(H.SafeHTMLCollection),f.default.instanceOf(H.SafeNodeList),f.default.arrayOf(f.default.instanceOf(Fe.default))]),onAfterOpen:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,ariaHideApp:f.default.bool,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,preventScroll:f.default.bool,parentSelector:f.default.func,aria:f.default.object,data:f.default.object,role:f.default.string,contentLabel:f.default.string,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,id:f.default.string,overlayElement:f.default.func,contentElement:f.default.func};ae.defaultProps={isOpen:!1,portalClassName:_r,bodyOpenClassName:Sr,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return de.default.createElement("div",e,o)},contentElement:function(e,o){return de.default.createElement("div",e,o)}};ae.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,br.polyfill)(ae);V.default=ae;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=V,a=l(o);function l(c){return c&&c.__esModule?c:{default:c}}e.default=a.default,t.exports=e.default})(ye,ye.exports);var jr=ye.exports;const it=Ct(jr),Er=s.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,kr=s.button`
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
`,xe=s.input`
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
`,Mr=s.div`
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
`,Tr=s.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`,$e=s.input`
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
`,Rr=({setName:t,setColories:e,setCarbogidrate:o,setProtein:a,setFat:l,name:c,calories:d,carbogidrate:i,protein:w,fat:m,dataIndex:C})=>{const u=Z(),g=v=>{const _=v.currentTarget.dataset.set;if(_==="0"){t(""),e(""),o(""),a(""),l("");return}u(Ot(_))};return n.jsxs(Mr,{children:[n.jsx(xe,{value:c,placeholder:"The name of the product or dish",onChange:v=>{t(v.target.value)}}),n.jsx(xe,{type:"number",min:1,onChange:v=>{o(v.target.value)},value:i,placeholder:"Carbonoh"}),n.jsx(xe,{min:1,type:"number",onChange:v=>{a(v.target.value)},value:w,placeholder:"Protein"}),n.jsxs(Tr,{children:[n.jsx($e,{min:1,type:"number",onChange:v=>{l(v.target.value)},value:m,placeholder:"Fat"}),n.jsx($e,{min:1,type:"number",onChange:v=>{e(v.target.value)},value:d,placeholder:"Calories"}),n.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},"data-set":C,onClick:g,children:n.jsx("use",{href:`${B}#trash-delete`})})]})]})},Pr={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};it.setAppElement("#root");const Dr=({stateModal:t,closeModal:e,typefood:o})=>{const a=Z(),[l,c]=D.useState(""),[d,i]=D.useState(""),[w,m]=D.useState(""),[C,u]=D.useState(""),[g,v]=D.useState("");let _=j(Ut);const R={typeFood:o,userFood:[{name:l,calories:d,nutrition:{carbogidrate:w,protein:C,fat:g}}]},$=I=>{I.preventDefault(),a(_t(R)),e()},A=()=>{const I=_.length-1,b=_[I]+1;a(St(b))};return n.jsx(it,{isOpen:t,onRequestClose:e,style:Pr,children:n.jsxs(Bt,{children:[n.jsx(Ht,{children:"Record your meal"}),n.jsxs(zt,{style:{marginTop:"24px"},children:[n.jsx(Ke,{src:"src/assets/images/Breakfast.png"}),n.jsx(qt,{})]}),n.jsxs("form",{onSubmit:$,children:[_.map((I,b)=>n.jsx(Rr,{dataIndex:b,setName:c,setColories:i,setCarbogidrate:m,setProtein:u,setFat:v,name:l,calories:d,carbogidrate:w,protein:C,fat:g},b)),n.jsxs(kr,{onClick:A,type:"button",children:[n.jsx(Er,{children:n.jsx("use",{href:`${B}#icon-add-converted`})}),"Add more"]}),n.jsxs(Kt,{children:[n.jsx(Gt,{type:"submit",children:"Confirm"}),n.jsx(Vt,{onClick:e,type:"button",children:"Cancel"})]})]})]})})},Ar=({meal:t,title:e,totalCarbs:o,totalProtein:a,totalFat:l,typefood:c,src:d})=>{const i=Z(),w=v=>{i(jt({userFood:{},typeFood:v}))};j(Yt),e.toLowerCase();const[m,C]=D.useState(!1),u=()=>C(!0),g=()=>C(!1);return n.jsxs(ho,{children:[n.jsx(Dr,{closeModal:g,stateModal:m,typefood:c}),n.jsxs(go,{children:[n.jsx(Ke,{src:d}),n.jsx(vo,{children:e})]}),n.jsx(mo,{children:(t==null?void 0:t.length)>0?n.jsxs(n.Fragment,{children:[n.jsxs(ge,{children:["Carbonohidrates: ",o]}),n.jsxs(ge,{children:["Protein: ",a]}),n.jsxs(ge,{children:["Fat: ",l,n.jsx(xo,{onClick:()=>w(e.toLowerCase()),children:n.jsx("use",{href:`${B}#trash-delete`})})]})]}):n.jsxs(bo,{id:c,"data-site":c,onClick:u,children:[n.jsx(Jt,{children:"Record your meal"}),n.jsx(yo,{children:n.jsx("use",{href:`${B}#icon-add-converted`})})]})})]})},Fr="/Healthy_life/assets/Breakfast-ebbae9d6.png",Nr="/Healthy_life/assets/Dinner-3e075f11.png",Wr="/Healthy_life/assets/Lunch-b9834f5c.png",Lr="/Healthy_life/assets/Snack-986b08ce.png",$r=[Fr,Wr,Nr,Lr],Ir=()=>{const t=j(Zt),e=j(Qt),o=j(Xt),a=j(en),l={breakfast:t,lunch:e,dinner:o,snack:a},c=["breakfast","lunch","dinner","snack"];let d=0,i=0,w=0,m=0,C=0,u=0,g=0,v=0,_=0,R=0,$=0,A=0;(t==null?void 0:t.length)>0&&(d=t.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.fat)},0),i=t.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.protein)},0),w=t.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.carbogidrate)},0)),(e==null?void 0:e.length)>0&&(m=e.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.fat)},0),C=e.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.protein)},0),u=e.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.carbogidrate)},0)),(o==null?void 0:o.length)>0&&(g=o.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.protein)},0),v=o.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.carbogidrate)},0),_=o.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.fat)},0)),(a==null?void 0:a.length)>0&&(R=a.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.fat)},0),$=a.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.protein)},0),A=a.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.carbogidrate)},0));const I={breakfast:{carbs:w,protein:i,fat:d},lunch:{carbs:u,protein:C,fat:m},dinner:{carbs:v,protein:g,fat:_},snack:{carbs:A,protein:$,fat:R}};return n.jsxs(so,{children:[n.jsxs(co,{children:[n.jsx(po,{children:"Diary"}),n.jsx(uo,{to:"/diary",children:"See more"})]}),n.jsx(fo,{children:c.map((b,O)=>n.jsx(Ar,{meal:l[b],typefood:b,title:b,totalCarbs:I[b].carbs,totalProtein:I[b].protein,totalFat:I[b].fat,src:$r[O]},b))})]})},Ur=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 80px;

  @media screen and (min-width: 834px) {
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding-top: 20px;
    gap: 138px;
    padding-bottom: 52px;
  }
`,Kr=()=>{const t=Z();return D.useEffect(()=>{t(Et()),t(kt()),t(Mt())},[t]),n.jsxs(n.Fragment,{children:[n.jsx(lo,{}),n.jsxs(Ur,{children:[n.jsx(Ir,{}),n.jsx(tn,{})]})]})};export{Kr as default};
