import{s,k as E,m as $e,n as Le,j as n,o as L,t as $,p as ft,q as ht,v as mt,r as K,u as re,w as vt,x as gt,L as Ue,y as xt,z as yt,A as bt,F as wt,b as Ct,d as Ot,B as _t,C as St,D as jt,G as Et,H as kt,I as Mt}from"./index-05928887.js";import{C as Ie,A as Tt,p as Be,a as He,D as Pt,b as Rt,L as Dt,B as Ft,c as At,d as Nt}from"./index-337cd1cc.js";import{s as Wt,a as $t,b as Lt,c as Ut,C as It,T as Bt,M as Ht,d as ze,e as zt,B as qt,f as Kt,g as Gt,h as Vt,A as Yt,i as Zt,j as Jt,k as Qt,l as Xt}from"./Reacord.styled-03e577e1.js";import{R as en}from"./RecommendedList-41fd82e5.js";var qe={exports:{}},tn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nn=tn,on=nn;function Ke(){}function Ge(){}Ge.resetWarningCache=Ke;var rn=function(){function t(a,l,c,d,i,x){if(x!==on){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ge,resetWarningCache:Ke};return o.PropTypes=o,o};qe.exports=rn();var Ve=qe.exports;const an=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,ln=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,sn=s.ul`
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
`,Se=s.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 834px) {
  }
`,cn=s.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,dn=s.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,je=s.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,Ee=s.p`
  margin-top: 4px;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.11;
  color: var(--primary-color-white);
`,pn=s.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,un=()=>{const t=E($e),e=E(Le);return n.jsxs(an,{children:[n.jsx(ln,{children:"Daily goal"}),n.jsxs(sn,{children:[n.jsxs(Se,{children:[n.jsx(cn,{children:n.jsx("use",{href:`${L}#bubble`})}),n.jsxs(je,{children:[n.jsx("p",{children:"Calories"}),n.jsx(Ee,{children:t})]})]}),n.jsxs(Se,{children:[n.jsx(dn,{children:n.jsx("use",{href:`${L}#milk`})}),n.jsxs(je,{children:[n.jsx("p",{children:" Water"}),n.jsxs(Ee,{children:[e," ",n.jsx(pn,{children:"ml"})]})]})]})]})]})};Ie.register(Tt,Be,He);const fn={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},hn={id:"bgCircle",beforeDatasetsDraw(t){const{ctx:e}=t;e.save();const o=t.getDatasetMeta(0).data[0].x,a=t.getDatasetMeta(0).data[0].y,l=t.getDatasetMeta(0).data[0].innerRadius,c=t.getDatasetMeta(0).data[0].outerRadius,d=c-l,i=Math.PI/180;e.beginPath(),e.lineWidth=d,e.strokeStyle=`${$.palette.greyone.main}`,e.arc(o,a,c-d/2,0,i*360,!1),e.stroke()}},Ye=({dailyGoal:t,filledValue:e,bgColor:o})=>{let a=t-e;e>t&&(a=0);const l={datasets:[{label:[],data:[e,a],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return n.jsx(n.Fragment,{children:n.jsx(Pt,{options:fn,data:l,plugins:[hn]})})},mn=s.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,vn=s.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,gn=s.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,xn=s.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,ke=s.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,yn=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,ve=({title:t,bgColor:e,dailyGoal:o,filledValue:a})=>{a||(a=0);let l=Math.round(a*100/o),c=(o-a).toFixed(0);return a>o&&(c=0),l>100&&(l=100),n.jsxs(vn,{children:[n.jsxs(mn,{children:[n.jsx(Ye,{dailyGoal:o,filledValue:a,bgColor:e}),n.jsx(yn,{children:n.jsx("p",{children:`${l}%`})})]}),n.jsxs("div",{children:[n.jsx(xn,{children:t}),n.jsxs(gn,{children:[n.jsxs("p",{children:["Goal: ",n.jsx(ke,{children:o})]}),n.jsxs("p",{children:["left: ",n.jsx(ke,{children:c})]})]})]})]})},bn=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,wn=s.div`
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
`,Cn=s.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,On=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;s.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const _n=s.div`
  position: relative;
  width: 168px;
  height: 168px;
`,ge=s.li`
  display: flex;
`,Sn=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,jn=s.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,En=s.p`
  color: var(--primary-color-grey);
`,kn=()=>{const t=`${$.palette.litegreen.main}`,e=`${$.palette.pink.main}`,o=`${$.palette.yellow.main}`,a=`${$.palette.grey.main}`,l=E($e),c=E(ft),d=E(ht),i=E(mt),x=E(Wt),y=E($t),f=E(Lt),h=E(Ut);return n.jsxs(bn,{children:[n.jsx(On,{children:"Food"}),n.jsxs(wn,{children:[n.jsxs(_n,{children:[n.jsx(Ye,{dailyGoal:l,filledValue:x,bgColor:t}),n.jsxs(Sn,{children:[n.jsx(jn,{children:x||0}),n.jsx(En,{children:"calories"})]})]}),n.jsxs(Cn,{children:[n.jsx(ge,{children:n.jsx(ve,{title:"Carbonohidrates",bgColor:e,dailyGoal:c,filledValue:y})}),n.jsx(ge,{children:n.jsx(ve,{title:"Protein",bgColor:o,dailyGoal:d,filledValue:f})}),n.jsx(ge,{children:n.jsx(ve,{title:"Fat",bgColor:a,dailyGoal:i,filledValue:h})})]})]})]})},Mn=s.div`
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
`,Tn=s.div`
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
`,Rn=s.button`
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
`,Dn=s.h2`
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
`,An=s.button`
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
`,Nn=({isModalOpen:t,setIsModalOpen:e})=>{const[o,a]=K.useState(0),l=re(),c=d=>{d.preventDefault(),l(vt({value:o})),e(!1)};return K.useEffect(()=>{const d=i=>{i.code==="Escape"&&e(!1)};return t?(document.addEventListener("keydown",d),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",d),document.body.style.overflow="unset"}},[t,e]),n.jsx(Mn,{onClick:()=>e(!1),children:n.jsxs(Tn,{onClick:d=>d.stopPropagation(),children:[n.jsx(Dn,{children:"Add water intake"}),n.jsxs(Pn,{onSubmit:c,children:[n.jsxs("label",{children:["How much water",n.jsx(Fn,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:d=>a(Number(d.target.value)),value:o||"",min:1})]}),n.jsx(Rn,{type:"submit",children:"Confirm"}),n.jsx(An,{type:"button",onClick:()=>e(!1),children:"Cancel"})]})]})})};Ie.register(Rt,Dt,Ft,At,Be,He);const Wn={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},$n=({waterIntake:t})=>{const e={labels:["Intake"],datasets:[{label:"Water",data:[t],backgroundColor:`${$.palette.violet.main}`,hoverBackgroundColor:`${$.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return n.jsx(Nt,{data:e,options:Wn})},Ln=t=>t.dailyWaterStatistics.consumedWater.value,Un=t=>t.dailyWaterStatistics.consumedWater._id,In=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,Bn=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,Hn=s.div`
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
`,zn=s.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,Me=s.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,qn=s.span`
  color: var(--primary-color-white);
`,Kn=s.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,Gn=s.svg`
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
`,Vn=s.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,Yn=s.button`
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
`,Jn=s.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,Qn=s.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,Xn=()=>{const[t,e]=K.useState(!1),o=re(),a=E(Un),l=E(Le),c=E(Ln),d=c<=l?Math.round(c*100/l):100;let i=l-c;c>l&&(i=0);const x={color:d>85?`${$.palette.greyone.main}`:`${$.palette.violet.main}`};return n.jsxs(In,{children:[n.jsx(Bn,{children:"Water"}),n.jsxs(Hn,{children:[n.jsx(Gn,{width:"20px",height:"20px",onClick:()=>{o(gt(a))},children:n.jsx("use",{href:`${L}#trash-delete`})}),n.jsx(Zn,{children:n.jsxs(Jn,{children:[n.jsx($n,{waterIntake:d}),n.jsx(Qn,{style:x,children:`${d}%`})]})}),n.jsxs("div",{children:[n.jsx(zn,{children:"Water consumption"}),n.jsxs(Me,{children:[n.jsx(Kn,{children:c}),"ml"]}),n.jsxs(Me,{children:[n.jsx(qn,{children:"left:"})," ",`${i} ml`]}),n.jsxs(Yn,{type:"button",onClick:()=>e(!0),children:[n.jsx(Vn,{children:n.jsx("use",{href:`${L}#icon-add-converted`})}),"Add water intake"]})]})]}),t&&n.jsx(Nn,{setIsModalOpen:e,isModalOpen:t})]})},eo=s.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,to=s.div`
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
`,no=s.div`
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
`,oo=s.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,ro=s(Ue)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,ao=s.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,io=()=>n.jsxs(eo,{children:[n.jsxs(to,{children:[n.jsx(oo,{children:"Today"}),n.jsxs(ro,{to:"/dashboard",children:["On the way to the goal",n.jsx(ao,{children:n.jsx("use",{href:`${L}#icon-arrowright`})})]})]}),n.jsxs(no,{children:[n.jsx(un,{}),n.jsx(Xn,{}),n.jsx(kn,{})]})]}),lo=s.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,so=s.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,co=s.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,po=s(Ue)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,uo=s.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,fo=s.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,ho=s.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,mo=s.p`
  width: 160px;
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 160px;
  }
`,vo=s.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 88px;
  }
`,go=s.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 88px;
  }
`,xo=s.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,yo=s.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,bo=s.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,wo=s.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Co=s.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;var xe={exports:{}},G={},ye={exports:{}},A={},be={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",l=/input|select|textarea|button|object|iframe/;function c(h,b){return b.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function d(h){var b=h.offsetWidth<=0&&h.offsetHeight<=0;if(b&&!h.innerHTML)return!0;try{var O=window.getComputedStyle(h),S=O.getPropertyValue("display");return b?S!==a&&c(h,O):S===o}catch{return console.warn("Failed to inspect element style"),!1}}function i(h){for(var b=h,O=h.getRootNode&&h.getRootNode();b&&b!==document.body;){if(O&&b===O&&(b=O.host.parentNode),d(b))return!1;b=b.parentNode}return!0}function x(h,b){var O=h.nodeName.toLowerCase(),S=l.test(O)&&!h.disabled||O==="a"&&h.href||b;return S&&i(h)}function y(h){var b=h.getAttribute("tabindex");b===null&&(b=void 0);var O=isNaN(b);return(O||b>=0)&&x(h,!O)}function f(h){var b=[].slice.call(h.querySelectorAll("*"),0).reduce(function(O,S){return O.concat(S.shadowRoot?f(S.shadowRoot):[S])},[]);return b.filter(y)}t.exports=e.default})(be,be.exports);var Ze=be.exports;Object.defineProperty(A,"__esModule",{value:!0});A.resetState=jo;A.log=Eo;A.handleBlur=ne;A.handleFocus=oe;A.markForFocusLater=ko;A.returnFocus=Mo;A.popWithoutFocus=To;A.setupScopedFocus=Po;A.teardownScopedFocus=Ro;var Oo=Ze,_o=So(Oo);function So(t){return t&&t.__esModule?t:{default:t}}var Y=[],V=null,we=!1;function jo(){Y=[]}function Eo(){}function ne(){we=!0}function oe(){if(we){if(we=!1,!V)return;setTimeout(function(){if(!V.contains(document.activeElement)){var t=(0,_o.default)(V)[0]||V;t.focus()}},0)}}function ko(){Y.push(document.activeElement)}function Mo(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Y.length!==0&&(e=Y.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function To(){Y.length>0&&Y.pop()}function Po(t){V=t,window.addEventListener?(window.addEventListener("blur",ne,!1),document.addEventListener("focus",oe,!0)):(window.attachEvent("onBlur",ne),document.attachEvent("onFocus",oe))}function Ro(){V=null,window.addEventListener?(window.removeEventListener("blur",ne),document.removeEventListener("focus",oe)):(window.detachEvent("onBlur",ne),document.detachEvent("onFocus",oe))}var Ce={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var o=Ze,a=l(o);function l(i){return i&&i.__esModule?i:{default:i}}function c(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?c(i.activeElement.shadowRoot):i.activeElement}function d(i,x){var y=(0,a.default)(i);if(!y.length){x.preventDefault();return}var f=void 0,h=x.shiftKey,b=y[0],O=y[y.length-1],S=c();if(i===S){if(!h)return;f=O}if(O===S&&!h&&(f=b),b===S&&h&&(f=O),f){x.preventDefault(),f.focus();return}var R=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),U=R!=null&&R[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(U){var W=y.indexOf(S);if(W>-1&&(W+=h?-1:1),f=y[W],typeof f>"u"){x.preventDefault(),f=h?O:b,f.focus();return}x.preventDefault(),f.focus()}}t.exports=e.default})(Ce,Ce.exports);var Do=Ce.exports,N={},Fo=function(){},Ao=Fo,F={},Je={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Je);var No=Je.exports;Object.defineProperty(F,"__esModule",{value:!0});F.canUseDOM=F.SafeNodeList=F.SafeHTMLCollection=void 0;var Wo=No,$o=Lo(Wo);function Lo(t){return t&&t.__esModule?t:{default:t}}var fe=$o.default,Uo=fe.canUseDOM?window.HTMLElement:{};F.SafeHTMLCollection=fe.canUseDOM?window.HTMLCollection:{};F.SafeNodeList=fe.canUseDOM?window.NodeList:{};F.canUseDOM=fe.canUseDOM;F.default=Uo;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=qo;N.log=Ko;N.assertNodeList=Qe;N.setElement=Go;N.validateElement=Oe;N.hide=Vo;N.show=Yo;N.documentNotReadyOrSSRTesting=Zo;var Io=Ao,Bo=zo(Io),Ho=F;function zo(t){return t&&t.__esModule?t:{default:t}}var P=null;function qo(){P&&(P.removeAttribute?P.removeAttribute("aria-hidden"):P.length!=null?P.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(P).forEach(function(t){return t.removeAttribute("aria-hidden")})),P=null}function Ko(){}function Qe(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Go(t){var e=t;if(typeof e=="string"&&Ho.canUseDOM){var o=document.querySelectorAll(e);Qe(o,e),e=o}return P=e||P,P}function Oe(t){var e=t||P;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Bo.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Vo(t){var e=!0,o=!1,a=void 0;try{for(var l=Oe(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.setAttribute("aria-hidden","true")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function Yo(t){var e=!0,o=!1,a=void 0;try{for(var l=Oe(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.removeAttribute("aria-hidden")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function Zo(){P=null}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.resetState=Jo;Z.log=Qo;var ee={},te={};function Te(t,e){t.classList.remove(e)}function Jo(){var t=document.getElementsByTagName("html")[0];for(var e in ee)Te(t,ee[e]);var o=document.body;for(var a in te)Te(o,te[a]);ee={},te={}}function Qo(){}var Xo=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},er=function(e,o){return e[o]&&(e[o]-=1),o},tr=function(e,o,a){a.forEach(function(l){Xo(o,l),e.add(l)})},nr=function(e,o,a){a.forEach(function(l){er(o,l),o[l]===0&&e.remove(l)})};Z.add=function(e,o){return tr(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};Z.remove=function(e,o){return nr(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};var J={};Object.defineProperty(J,"__esModule",{value:!0});J.log=rr;J.resetState=ar;function or(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Xe=function t(){var e=this;or(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},de=new Xe;function rr(){console.log("portalOpenInstances ----------"),console.log(de.openInstances.length),de.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function ar(){de=new Xe}J.default=de;var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.resetState=cr;_e.log=dr;var ir=J,lr=sr(ir);function sr(t){return t&&t.__esModule?t:{default:t}}var M=void 0,D=void 0,q=[];function cr(){for(var t=[M,D],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}M=D=null,q=[]}function dr(){console.log("bodyTrap ----------"),console.log(q.length);for(var t=[M,D],e=0;e<t.length;e++){var o=t[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Pe(){q.length!==0&&q[q.length-1].focusContent()}function pr(t,e){!M&&!D&&(M=document.createElement("div"),M.setAttribute("data-react-modal-body-trap",""),M.style.position="absolute",M.style.opacity="0",M.setAttribute("tabindex","0"),M.addEventListener("focus",Pe),D=M.cloneNode(),D.addEventListener("focus",Pe)),q=e,q.length>0?(document.body.firstChild!==M&&document.body.insertBefore(M,document.body.firstChild),document.body.lastChild!==D&&document.body.appendChild(D)):(M.parentElement&&M.parentElement.removeChild(M),D.parentElement&&D.parentElement.removeChild(D))}lr.default.subscribe(pr);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(g){for(var m=1;m<arguments.length;m++){var _=arguments[m];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&(g[r]=_[r])}return g},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},l=function(){function g(m,_){for(var r=0;r<_.length;r++){var p=_[r];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(m,p.key,p)}}return function(m,_,r){return _&&g(m.prototype,_),r&&g(m,r),m}}(),c=K,d=Ve,i=v(d),x=A,y=C(x),f=Do,h=v(f),b=N,O=C(b),S=Z,R=C(S),U=F,W=v(U),Q=J,w=v(Q);function C(g){if(g&&g.__esModule)return g;var m={};if(g!=null)for(var _ in g)Object.prototype.hasOwnProperty.call(g,_)&&(m[_]=g[_]);return m.default=g,m}function v(g){return g&&g.__esModule?g:{default:g}}function at(g,m){if(!(g instanceof m))throw new TypeError("Cannot call a class as a function")}function it(g,m){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:g}function lt(g,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);g.prototype=Object.create(m&&m.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(g,m):g.__proto__=m)}var he={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},st=function(m){return m.code==="Tab"||m.keyCode===9},ct=function(m){return m.code==="Escape"||m.keyCode===27},le=0,me=function(g){lt(m,g);function m(_){at(this,m);var r=it(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,_));return r.setOverlayRef=function(p){r.overlay=p,r.props.overlayRef&&r.props.overlayRef(p)},r.setContentRef=function(p){r.content=p,r.props.contentRef&&r.props.contentRef(p)},r.afterClose=function(){var p=r.props,k=p.appElement,T=p.ariaHideApp,j=p.htmlOpenClassName,B=p.bodyOpenClassName,H=p.parentSelector,se=H&&H().ownerDocument||document;B&&R.remove(se.body,B),j&&R.remove(se.getElementsByTagName("html")[0],j),T&&le>0&&(le-=1,le===0&&O.show(k)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(y.returnFocus(r.props.preventScroll),y.teardownScopedFocus()):y.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),w.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(y.setupScopedFocus(r.node),y.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var p=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:p},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(p){st(p)&&(0,h.default)(r.content,p),r.props.shouldCloseOnEsc&&ct(p)&&(p.stopPropagation(),r.requestClose(p))},r.handleOverlayOnClick=function(p){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(p):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(p){!r.props.shouldCloseOnOverlayClick&&p.target==r.overlay&&p.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(p){return r.ownerHandlesClose()&&r.props.onRequestClose(p)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(p,k){var T=(typeof k>"u"?"undefined":a(k))==="object"?k:{base:he[p],afterOpen:he[p]+"--after-open",beforeClose:he[p]+"--before-close"},j=T.base;return r.state.afterOpen&&(j=j+" "+T.afterOpen),r.state.beforeClose&&(j=j+" "+T.beforeClose),typeof k=="string"&&k?j+" "+k:j},r.attributesFromObject=function(p,k){return Object.keys(k).reduce(function(T,j){return T[p+"-"+j]=k[j],T},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return l(m,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,p){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!p.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,p=r.appElement,k=r.ariaHideApp,T=r.htmlOpenClassName,j=r.bodyOpenClassName,B=r.parentSelector,H=B&&B().ownerDocument||document;j&&R.add(H.body,j),T&&R.add(H.getElementsByTagName("html")[0],T),k&&(le+=1,O.hide(p)),w.default.register(this)}},{key:"render",value:function(){var r=this.props,p=r.id,k=r.className,T=r.overlayClassName,j=r.defaultStyles,B=r.children,H=k?{}:j.content,se=T?{}:j.overlay;if(this.shouldBeClosed())return null;var dt={ref:this.setOverlayRef,className:this.buildClassName("overlay",T),style:o({},se,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},pt=o({id:p,ref:this.setContentRef,style:o({},H,this.props.style.content),className:this.buildClassName("content",k),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ut=this.props.contentElement(pt,B);return this.props.overlayElement(dt,ut)}}]),m}(c.Component);me.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},me.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(W.default),i.default.instanceOf(U.SafeHTMLCollection),i.default.instanceOf(U.SafeNodeList),i.default.arrayOf(i.default.instanceOf(W.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},e.default=me,t.exports=e.default})(ye,ye.exports);var ur=ye.exports;function et(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function tt(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function nt(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}et.__suppressDeprecationWarning=!0;tt.__suppressDeprecationWarning=!0;nt.__suppressDeprecationWarning=!0;function fr(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||a!==null||l!==null){var c=t.displayName||t.name,d=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+d+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=et,e.componentWillReceiveProps=tt),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=nt;var i=e.componentDidUpdate;e.componentDidUpdate=function(y,f,h){var b=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;i.call(this,y,f,b)}}return t}const hr=Object.freeze(Object.defineProperty({__proto__:null,polyfill:fr},Symbol.toStringTag,{value:"Module"})),mr=xt(hr);Object.defineProperty(G,"__esModule",{value:!0});G.bodyOpenClassName=G.portalClassName=void 0;var Re=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},vr=function(){function t(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),ot=K,pe=ae(ot),gr=yt,ue=ae(gr),xr=Ve,u=ae(xr),yr=ur,De=ae(yr),br=N,wr=Or(br),I=F,Fe=ae(I),Cr=mr;function Or(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function ae(t){return t&&t.__esModule?t:{default:t}}function _r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ae(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Sr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var jr=G.portalClassName="ReactModalPortal",Er=G.bodyOpenClassName="ReactModal__Body--open",z=I.canUseDOM&&ue.default.createPortal!==void 0,Ne=function(e){return document.createElement(e)},We=function(){return z?ue.default.createPortal:ue.default.unstable_renderSubtreeIntoContainer};function ce(t){return t()}var ie=function(t){Sr(e,t);function e(){var o,a,l,c;_r(this,e);for(var d=arguments.length,i=Array(d),x=0;x<d;x++)i[x]=arguments[x];return c=(a=(l=Ae(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(i))),l),l.removePortal=function(){!z&&ue.default.unmountComponentAtNode(l.node);var y=ce(l.props.parentSelector);y&&y.contains(l.node)?y.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(y){l.portal=y},l.renderPortal=function(y){var f=We(),h=f(l,pe.default.createElement(De.default,Re({defaultStyles:e.defaultStyles},y)),l.node);l.portalRef(h)},a),Ae(l,c)}return vr(e,[{key:"componentDidMount",value:function(){if(I.canUseDOM){z||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var a=ce(this.props.parentSelector);a.appendChild(this.node),!z&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=ce(a.parentSelector),c=ce(this.props.parentSelector);return{prevParent:l,nextParent:c}}},{key:"componentDidUpdate",value:function(a,l,c){if(I.canUseDOM){var d=this.props,i=d.isOpen,x=d.portalClassName;a.portalClassName!==x&&(this.node.className=x);var y=c.prevParent,f=c.nextParent;f!==y&&(y.removeChild(this.node),f.appendChild(this.node)),!(!a.isOpen&&!i)&&!z&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!I.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),c=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);c?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-l)):this.removePortal()}}},{key:"render",value:function(){if(!I.canUseDOM||!z)return null;!this.node&&z&&(this.node=Ne("div"));var a=We();return a(pe.default.createElement(De.default,Re({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){wr.setElement(a)}}]),e}(ot.Component);ie.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Fe.default),u.default.instanceOf(I.SafeHTMLCollection),u.default.instanceOf(I.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Fe.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};ie.defaultProps={isOpen:!1,portalClassName:jr,bodyOpenClassName:Er,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return pe.default.createElement("div",e,o)},contentElement:function(e,o){return pe.default.createElement("div",e,o)}};ie.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Cr.polyfill)(ie);G.default=ie;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=G,a=l(o);function l(c){return c&&c.__esModule?c:{default:c}}e.default=a.default,t.exports=e.default})(xe,xe.exports);var kr=xe.exports;const rt=bt(kr),Mr=s.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Tr=s.button`
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
`,X=s(wt)`
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
`,Pr=s.div`
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
`;s.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`;s.input`
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
`;const Rr={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};rt.setAppElement("#root");const Dr=({stateModal:t,closeModal:e,typefood:o})=>{const a=re(),l={name:"",carbogidrate:"",protein:"",fat:"",calories:""},c=d=>{let i={typeFood:o,userFood:d.products.map(x=>({name:x.name,calories:x.calories,nutrition:{carbogidrate:x.carbogidrate,protein:x.protein,fat:x.fat}}))};a(St(i)),e()};return n.jsx(rt,{isOpen:t,onRequestClose:e,style:Rr,children:n.jsxs(It,{children:[n.jsx(Bt,{children:"Record your meal"}),n.jsxs(Ht,{style:{marginTop:"24px"},children:[n.jsx(ze,{src:"src/assets/images/Breakfast.png"}),n.jsx(zt,{})]}),n.jsx(Ct,{initialValues:{products:[l]},onSubmit:d=>c(d),children:({values:d})=>n.jsxs(Ot,{children:[n.jsx(_t,{name:"products",children:({remove:i,push:x})=>n.jsxs("div",{children:[d.products.map((y,f)=>n.jsxs(Pr,{children:[n.jsx(X,{name:`products.${f}.name`,placeholder:"The name of the product or dish",value:d.products[f].name}),n.jsx(X,{name:`products.${f}.carbogidrate`,placeholder:"Carbonoh.",value:d.products[f].carbogidrate,type:"number",min:1}),n.jsx(X,{name:`products.${f}.protein`,placeholder:"Protein",value:d.products[f].protein,min:1,type:"number"}),n.jsx(X,{name:`products.${f}.fat`,placeholder:"Fat",value:d.products[f].fat,min:1,type:"number"}),n.jsx(X,{name:`products.${f}.calories`,placeholder:"Calories",value:d.products[f].calories,min:1,type:"number"}),n.jsx("button",{"data-set":f,type:"button",onClick:h=>{const b=h.currentTarget.dataset.set;d.products.length===1&&e(),i(b)},children:n.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:n.jsx("use",{href:`${L}#trash-delete`})})})]},f)),n.jsxs(Tr,{type:"button",onClick:()=>x(l),children:[n.jsx(Mr,{children:n.jsx("use",{href:`${L}#icon-add-converted`})}),"Add more"]})]})}),n.jsxs(qt,{children:[n.jsx(Kt,{type:"submit",children:"Confirm"}),n.jsx(Gt,{onClick:e,type:"button",children:"Cancel"})]})]})})]})})},Fr=({meal:t,title:e,totalCarbs:o,totalProtein:a,totalFat:l,typefood:c,src:d})=>{const i=re(),x=O=>{i(jt({userFood:{},typeFood:O}))};E(Vt),e.toLowerCase();const[y,f]=K.useState(!1),h=()=>f(!0),b=()=>f(!1);return n.jsxs(fo,{children:[n.jsx(Dr,{closeModal:b,stateModal:y,typefood:c}),n.jsxs(yo,{children:[n.jsx(ze,{src:d}),n.jsx(xo,{children:e})]}),n.jsx(ho,{children:(t==null?void 0:t.length)>0?n.jsxs(n.Fragment,{children:[n.jsxs(mo,{children:["Carbonohidrates: ",o]}),n.jsxs(vo,{children:["Protein: ",a]}),n.jsxs(go,{children:["Fat: ",l]}),n.jsx(bo,{onClick:()=>x(e.toLowerCase()),children:n.jsx("use",{href:`${L}#trash-delete`})})]}):n.jsxs(Co,{id:c,"data-site":c,onClick:h,children:[n.jsx(Yt,{children:"Record your meal"}),n.jsx(wo,{children:n.jsx("use",{href:`${L}#icon-add-converted`})})]})})]})},Ar="/Healthy_life/assets/Breakfast-ebbae9d6.png",Nr="/Healthy_life/assets/Dinner-3e075f11.png",Wr="/Healthy_life/assets/Lunch-b9834f5c.png",$r="/Healthy_life/assets/Snack-986b08ce.png",Lr=[Ar,Wr,Nr,$r],Ur=()=>{const t=E(Zt),e=E(Jt),o=E(Qt),a=E(Xt),l={breakfast:t,lunch:e,dinner:o,snack:a},c=["breakfast","lunch","dinner","snack"];let d=0,i=0,x=0,y=0,f=0,h=0,b=0,O=0,S=0,R=0,U=0,W=0;(t==null?void 0:t.length)>0&&(d=t.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.fat)},0),i=t.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.protein)},0),x=t.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.carbogidrate)},0)),(e==null?void 0:e.length)>0&&(y=e.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.fat)},0),f=e.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.protein)},0),h=e.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.carbogidrate)},0)),(o==null?void 0:o.length)>0&&(b=o.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.protein)},0),O=o.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.carbogidrate)},0),S=o.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.fat)},0)),(a==null?void 0:a.length)>0&&(R=a.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.fat)},0),U=a.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.protein)},0),W=a.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.carbogidrate)},0));const Q={breakfast:{carbs:x,protein:i,fat:d},lunch:{carbs:h,protein:f,fat:y},dinner:{carbs:O,protein:b,fat:S},snack:{carbs:W,protein:U,fat:R}};return n.jsxs(lo,{children:[n.jsxs(so,{children:[n.jsx(co,{children:"Diary"}),n.jsx(po,{to:"/diary",children:"See more"})]}),n.jsx(uo,{children:c.map((w,C)=>n.jsx(Fr,{meal:l[w],typefood:w,title:w,totalCarbs:Q[w].carbs,totalProtein:Q[w].protein,totalFat:Q[w].fat,src:Lr[C]},w))})]})},Ir=s.div`
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
`,Kr=()=>{const t=re();return K.useEffect(()=>{t(Et()),t(kt()),t(Mt())},[t]),n.jsxs(n.Fragment,{children:[n.jsx(io,{}),n.jsxs(Ir,{children:[n.jsx(Ur,{}),n.jsx(en,{})]})]})};export{Kr as default};
