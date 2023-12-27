import{s,k as S,m as Le,n as $e,j as n,o as $,t as L,p as ft,q as ht,v as mt,r as K,u as re,w as vt,x as xt,L as Ie,y as gt,z as yt,A as bt,F as wt,b as Ct,B as Ot,d as _t,C as St,D as jt,G as Et,H as kt,I as Mt,J as Tt}from"./index-64abedd7.js";import{C as Ue,A as Rt,p as Be,a as He,D as Pt,b as Dt,L as Ft,B as At,c as Nt,d as Wt}from"./index-d6a39107.js";import{s as Lt,a as $t,b as It,c as Ut,d as Bt,C as Ht,T as zt,M as qt,e as ze,f as Kt,B as Gt,g as Vt,h as Yt,i as Jt,A as Zt,j as Qt,k as Xt,l as en,m as tn}from"./Reacord.styled-8c41bfe5.js";import{R as nn}from"./RecommendedList-6bbff0a7.js";var qe={exports:{}},on="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rn=on,an=rn;function Ke(){}function Ge(){}Ge.resetWarningCache=Ke;var ln=function(){function t(a,l,c,f,i,y){if(y!==an){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ge,resetWarningCache:Ke};return o.PropTypes=o,o};qe.exports=ln();var Ve=qe.exports;const sn=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,cn=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,dn=s.ul`
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
`,pn=s.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,un=s.svg`
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
`,fn=s.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,hn=()=>{const t=S(Le),e=S($e);return n.jsxs(sn,{children:[n.jsx(cn,{children:"Daily goal"}),n.jsxs(dn,{children:[n.jsxs(Se,{children:[n.jsx(pn,{children:n.jsx("use",{href:`${$}#bubble`})}),n.jsxs(je,{children:[n.jsx("p",{children:"Calories"}),n.jsx(Ee,{children:t})]})]}),n.jsxs(Se,{children:[n.jsx(un,{children:n.jsx("use",{href:`${$}#milk`})}),n.jsxs(je,{children:[n.jsx("p",{children:" Water"}),n.jsxs(Ee,{children:[e," ",n.jsx(fn,{children:"ml"})]})]})]})]})]})};Ue.register(Rt,Be,He);const mn={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},vn={id:"bgCircle",beforeDatasetsDraw(t){const{ctx:e}=t;e.save();const o=t.getDatasetMeta(0).data[0].x,a=t.getDatasetMeta(0).data[0].y,l=t.getDatasetMeta(0).data[0].innerRadius,c=t.getDatasetMeta(0).data[0].outerRadius,f=c-l,i=Math.PI/180;e.beginPath(),e.lineWidth=f,e.strokeStyle=`${L.palette.greyone.main}`,e.arc(o,a,c-f/2,0,i*360,!1),e.stroke()}},Ye=({dailyGoal:t,filledValue:e,bgColor:o})=>{let a=t-e;e>t&&(a=0);const l={datasets:[{label:[],data:[e,a],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return n.jsx(n.Fragment,{children:n.jsx(Pt,{options:mn,data:l,plugins:[vn]})})},xn=s.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,gn=s.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,yn=s.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,bn=s.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,ke=s.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,wn=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,ve=({title:t,bgColor:e,dailyGoal:o,filledValue:a})=>{a||(a=0);let l=Math.round(a*100/o),c=(o-a).toFixed(0);return a>o&&(c=0),l>100&&(l=100),n.jsxs(gn,{children:[n.jsxs(xn,{children:[n.jsx(Ye,{dailyGoal:o,filledValue:a,bgColor:e}),n.jsx(wn,{children:n.jsx("p",{children:`${l}%`})})]}),n.jsxs("div",{children:[n.jsx(bn,{children:t}),n.jsxs(yn,{children:[n.jsxs("p",{children:["Goal: ",n.jsx(ke,{children:o})]}),n.jsxs("p",{children:["left: ",n.jsx(ke,{children:c})]})]})]})]})},Cn=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,On=s.div`
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
`,_n=s.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,Sn=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;s.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const jn=s.div`
  position: relative;
  width: 168px;
  height: 168px;
`,xe=s.li`
  display: flex;
`,En=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,kn=s.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Mn=s.p`
  color: var(--primary-color-grey);
`,Tn=()=>{const t=`${L.palette.litegreen.main}`,e=`${L.palette.pink.main}`,o=`${L.palette.yellow.main}`,a=`${L.palette.grey.main}`,l=S(Le),c=S(ft),f=S(ht),i=S(mt),y=S(Lt),p=S($t),g=S(It),h=S(Ut);return n.jsxs(Cn,{children:[n.jsx(Sn,{children:"Food"}),n.jsxs(On,{children:[n.jsxs(jn,{children:[n.jsx(Ye,{dailyGoal:l,filledValue:y,bgColor:t}),n.jsxs(En,{children:[n.jsx(kn,{children:y||0}),n.jsx(Mn,{children:"calories"})]})]}),n.jsxs(_n,{children:[n.jsx(xe,{children:n.jsx(ve,{title:"Carbonohidrates",bgColor:e,dailyGoal:c,filledValue:p})}),n.jsx(xe,{children:n.jsx(ve,{title:"Protein",bgColor:o,dailyGoal:f,filledValue:g})}),n.jsx(xe,{children:n.jsx(ve,{title:"Fat",bgColor:a,dailyGoal:i,filledValue:h})})]})]})]})},Rn=s.div`
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
`,Pn=s.div`
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
`,Dn=s.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Fn=s.button`
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
`,Nn=s.input`
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
`,Wn=s.button`
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
`,Ln=({isModalOpen:t,setIsModalOpen:e})=>{const[o,a]=K.useState(0),l=re(),c=f=>{f.preventDefault(),l(vt({value:o})),e(!1)};return K.useEffect(()=>{const f=i=>{i.code==="Escape"&&e(!1)};return t?(document.addEventListener("keydown",f),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",f),document.body.style.overflow="unset"}},[t,e]),n.jsx(Rn,{onClick:()=>e(!1),children:n.jsxs(Pn,{onClick:f=>f.stopPropagation(),children:[n.jsx(An,{children:"Add water intake"}),n.jsxs(Dn,{onSubmit:c,children:[n.jsxs("label",{children:["How much water",n.jsx(Nn,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:f=>a(Number(f.target.value)),value:o||"",min:1})]}),n.jsx(Fn,{type:"submit",children:"Confirm"}),n.jsx(Wn,{type:"button",onClick:()=>e(!1),children:"Cancel"})]})]})})};Ue.register(Dt,Ft,At,Nt,Be,He);const $n={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},In=({waterIntake:t})=>{const e={labels:["Intake"],datasets:[{label:"Water",data:[t],backgroundColor:`${L.palette.violet.main}`,hoverBackgroundColor:`${L.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return n.jsx(Wt,{data:e,options:$n})},Un=t=>t.dailyWaterStatistics.consumedWater.value,Bn=t=>t.dailyWaterStatistics.consumedWater._id,Hn=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,zn=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,qn=s.div`
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
`,Kn=s.h4`
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
`,Gn=s.span`
  color: var(--primary-color-white);
`,Vn=s.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,Yn=s.svg`
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
`,Jn=s.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,Zn=s.button`
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
`,Qn=s.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,Xn=s.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,eo=s.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,to=()=>{const[t,e]=K.useState(!1),o=re(),a=S(Bn),l=S($e),c=S(Un),f=c<=l?Math.round(c*100/l):100;let i=l-c;c>l&&(i=0);const y={color:f>85?`${L.palette.greyone.main}`:`${L.palette.violet.main}`};return n.jsxs(Hn,{children:[n.jsx(zn,{children:"Water"}),n.jsxs(qn,{children:[n.jsx(Yn,{width:"20px",height:"20px",onClick:()=>{o(xt(a))},children:n.jsx("use",{href:`${$}#trash-delete`})}),n.jsx(Qn,{children:n.jsxs(Xn,{children:[n.jsx(In,{waterIntake:f}),n.jsx(eo,{style:y,children:`${f}%`})]})}),n.jsxs("div",{children:[n.jsx(Kn,{children:"Water consumption"}),n.jsxs(Me,{children:[n.jsx(Vn,{children:c}),"ml"]}),n.jsxs(Me,{children:[n.jsx(Gn,{children:"left:"})," ",`${i} ml`]}),n.jsxs(Zn,{type:"button",onClick:()=>e(!0),children:[n.jsx(Jn,{children:n.jsx("use",{href:`${$}#icon-add-converted`})}),"Add water intake"]})]})]}),t&&n.jsx(Ln,{setIsModalOpen:e,isModalOpen:t})]})},no=s.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,oo=s.div`
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
`,ro=s.div`
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
`,ao=s.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,io=s(Ie)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,lo=s.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,so=()=>n.jsxs(no,{children:[n.jsxs(oo,{children:[n.jsx(ao,{children:"Today"}),n.jsxs(io,{to:"/dashboard",children:["On the way to the goal",n.jsx(lo,{children:n.jsx("use",{href:`${$}#icon-arrowright`})})]})]}),n.jsxs(ro,{children:[n.jsx(hn,{}),n.jsx(to,{}),n.jsx(Tn,{})]})]}),co=s.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,po=s.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,uo=s.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,fo=s(Ie)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,ho=s.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,mo=s.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,vo=s.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,xo=s.p`
  width: 160px;
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 160px;
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
`,yo=s.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 88px;
  }
`,bo=s.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,wo=s.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Co=s.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,Oo=s.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,_o=s.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;var ge={exports:{}},G={},ye={exports:{}},A={},be={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",l=/input|select|textarea|button|object|iframe/;function c(h,b){return b.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function f(h){var b=h.offsetWidth<=0&&h.offsetHeight<=0;if(b&&!h.innerHTML)return!0;try{var O=window.getComputedStyle(h),j=O.getPropertyValue("display");return b?j!==a&&c(h,O):j===o}catch{return console.warn("Failed to inspect element style"),!1}}function i(h){for(var b=h,O=h.getRootNode&&h.getRootNode();b&&b!==document.body;){if(O&&b===O&&(b=O.host.parentNode),f(b))return!1;b=b.parentNode}return!0}function y(h,b){var O=h.nodeName.toLowerCase(),j=l.test(O)&&!h.disabled||O==="a"&&h.href||b;return j&&i(h)}function p(h){var b=h.getAttribute("tabindex");b===null&&(b=void 0);var O=isNaN(b);return(O||b>=0)&&y(h,!O)}function g(h){var b=[].slice.call(h.querySelectorAll("*"),0).reduce(function(O,j){return O.concat(j.shadowRoot?g(j.shadowRoot):[j])},[]);return b.filter(p)}t.exports=e.default})(be,be.exports);var Je=be.exports;Object.defineProperty(A,"__esModule",{value:!0});A.resetState=ko;A.log=Mo;A.handleBlur=ne;A.handleFocus=oe;A.markForFocusLater=To;A.returnFocus=Ro;A.popWithoutFocus=Po;A.setupScopedFocus=Do;A.teardownScopedFocus=Fo;var So=Je,jo=Eo(So);function Eo(t){return t&&t.__esModule?t:{default:t}}var Y=[],V=null,we=!1;function ko(){Y=[]}function Mo(){}function ne(){we=!0}function oe(){if(we){if(we=!1,!V)return;setTimeout(function(){if(!V.contains(document.activeElement)){var t=(0,jo.default)(V)[0]||V;t.focus()}},0)}}function To(){Y.push(document.activeElement)}function Ro(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Y.length!==0&&(e=Y.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Po(){Y.length>0&&Y.pop()}function Do(t){V=t,window.addEventListener?(window.addEventListener("blur",ne,!1),document.addEventListener("focus",oe,!0)):(window.attachEvent("onBlur",ne),document.attachEvent("onFocus",oe))}function Fo(){V=null,window.addEventListener?(window.removeEventListener("blur",ne),document.removeEventListener("focus",oe)):(window.detachEvent("onBlur",ne),document.detachEvent("onFocus",oe))}var Ce={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;var o=Je,a=l(o);function l(i){return i&&i.__esModule?i:{default:i}}function c(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?c(i.activeElement.shadowRoot):i.activeElement}function f(i,y){var p=(0,a.default)(i);if(!p.length){y.preventDefault();return}var g=void 0,h=y.shiftKey,b=p[0],O=p[p.length-1],j=c();if(i===j){if(!h)return;g=O}if(O===j&&!h&&(g=b),b===j&&h&&(g=O),g){y.preventDefault(),g.focus();return}var P=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),I=P!=null&&P[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(I){var W=p.indexOf(j);if(W>-1&&(W+=h?-1:1),g=p[W],typeof g>"u"){y.preventDefault(),g=h?O:b,g.focus();return}y.preventDefault(),g.focus()}}t.exports=e.default})(Ce,Ce.exports);var Ao=Ce.exports,N={},No=function(){},Wo=No,F={},Ze={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Ze);var Lo=Ze.exports;Object.defineProperty(F,"__esModule",{value:!0});F.canUseDOM=F.SafeNodeList=F.SafeHTMLCollection=void 0;var $o=Lo,Io=Uo($o);function Uo(t){return t&&t.__esModule?t:{default:t}}var fe=Io.default,Bo=fe.canUseDOM?window.HTMLElement:{};F.SafeHTMLCollection=fe.canUseDOM?window.HTMLCollection:{};F.SafeNodeList=fe.canUseDOM?window.NodeList:{};F.canUseDOM=fe.canUseDOM;F.default=Bo;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Go;N.log=Vo;N.assertNodeList=Qe;N.setElement=Yo;N.validateElement=Oe;N.hide=Jo;N.show=Zo;N.documentNotReadyOrSSRTesting=Qo;var Ho=Wo,zo=Ko(Ho),qo=F;function Ko(t){return t&&t.__esModule?t:{default:t}}var R=null;function Go(){R&&(R.removeAttribute?R.removeAttribute("aria-hidden"):R.length!=null?R.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(R).forEach(function(t){return t.removeAttribute("aria-hidden")})),R=null}function Vo(){}function Qe(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Yo(t){var e=t;if(typeof e=="string"&&qo.canUseDOM){var o=document.querySelectorAll(e);Qe(o,e),e=o}return R=e||R,R}function Oe(t){var e=t||R;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,zo.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Jo(t){var e=!0,o=!1,a=void 0;try{for(var l=Oe(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var f=c.value;f.setAttribute("aria-hidden","true")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function Zo(t){var e=!0,o=!1,a=void 0;try{for(var l=Oe(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var f=c.value;f.removeAttribute("aria-hidden")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function Qo(){R=null}var J={};Object.defineProperty(J,"__esModule",{value:!0});J.resetState=Xo;J.log=er;var ee={},te={};function Te(t,e){t.classList.remove(e)}function Xo(){var t=document.getElementsByTagName("html")[0];for(var e in ee)Te(t,ee[e]);var o=document.body;for(var a in te)Te(o,te[a]);ee={},te={}}function er(){}var tr=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},nr=function(e,o){return e[o]&&(e[o]-=1),o},or=function(e,o,a){a.forEach(function(l){tr(o,l),e.add(l)})},rr=function(e,o,a){a.forEach(function(l){nr(o,l),o[l]===0&&e.remove(l)})};J.add=function(e,o){return or(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};J.remove=function(e,o){return rr(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.log=ir;Z.resetState=lr;function ar(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Xe=function t(){var e=this;ar(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},de=new Xe;function ir(){console.log("portalOpenInstances ----------"),console.log(de.openInstances.length),de.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function lr(){de=new Xe}Z.default=de;var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.resetState=pr;_e.log=ur;var sr=Z,cr=dr(sr);function dr(t){return t&&t.__esModule?t:{default:t}}var M=void 0,D=void 0,q=[];function pr(){for(var t=[M,D],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}M=D=null,q=[]}function ur(){console.log("bodyTrap ----------"),console.log(q.length);for(var t=[M,D],e=0;e<t.length;e++){var o=t[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Re(){q.length!==0&&q[q.length-1].focusContent()}function fr(t,e){!M&&!D&&(M=document.createElement("div"),M.setAttribute("data-react-modal-body-trap",""),M.style.position="absolute",M.style.opacity="0",M.setAttribute("tabindex","0"),M.addEventListener("focus",Re),D=M.cloneNode(),D.addEventListener("focus",Re)),q=e,q.length>0?(document.body.firstChild!==M&&document.body.insertBefore(M,document.body.firstChild),document.body.lastChild!==D&&document.body.appendChild(D)):(M.parentElement&&M.parentElement.removeChild(M),D.parentElement&&D.parentElement.removeChild(D))}cr.default.subscribe(fr);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(x){for(var m=1;m<arguments.length;m++){var _=arguments[m];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&(x[r]=_[r])}return x},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},l=function(){function x(m,_){for(var r=0;r<_.length;r++){var d=_[r];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(m,d.key,d)}}return function(m,_,r){return _&&x(m.prototype,_),r&&x(m,r),m}}(),c=K,f=Ve,i=v(f),y=A,p=C(y),g=Ao,h=v(g),b=N,O=C(b),j=J,P=C(j),I=F,W=v(I),Q=Z,w=v(Q);function C(x){if(x&&x.__esModule)return x;var m={};if(x!=null)for(var _ in x)Object.prototype.hasOwnProperty.call(x,_)&&(m[_]=x[_]);return m.default=x,m}function v(x){return x&&x.__esModule?x:{default:x}}function at(x,m){if(!(x instanceof m))throw new TypeError("Cannot call a class as a function")}function it(x,m){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:x}function lt(x,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);x.prototype=Object.create(m&&m.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(x,m):x.__proto__=m)}var he={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},st=function(m){return m.code==="Tab"||m.keyCode===9},ct=function(m){return m.code==="Escape"||m.keyCode===27},le=0,me=function(x){lt(m,x);function m(_){at(this,m);var r=it(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,_));return r.setOverlayRef=function(d){r.overlay=d,r.props.overlayRef&&r.props.overlayRef(d)},r.setContentRef=function(d){r.content=d,r.props.contentRef&&r.props.contentRef(d)},r.afterClose=function(){var d=r.props,k=d.appElement,T=d.ariaHideApp,E=d.htmlOpenClassName,B=d.bodyOpenClassName,H=d.parentSelector,se=H&&H().ownerDocument||document;B&&P.remove(se.body,B),E&&P.remove(se.getElementsByTagName("html")[0],E),T&&le>0&&(le-=1,le===0&&O.show(k)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(p.returnFocus(r.props.preventScroll),p.teardownScopedFocus()):p.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),w.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(p.setupScopedFocus(r.node),p.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var d=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:d},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(d){st(d)&&(0,h.default)(r.content,d),r.props.shouldCloseOnEsc&&ct(d)&&(d.stopPropagation(),r.requestClose(d))},r.handleOverlayOnClick=function(d){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(d):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(d){!r.props.shouldCloseOnOverlayClick&&d.target==r.overlay&&d.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(d){return r.ownerHandlesClose()&&r.props.onRequestClose(d)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(d,k){var T=(typeof k>"u"?"undefined":a(k))==="object"?k:{base:he[d],afterOpen:he[d]+"--after-open",beforeClose:he[d]+"--before-close"},E=T.base;return r.state.afterOpen&&(E=E+" "+T.afterOpen),r.state.beforeClose&&(E=E+" "+T.beforeClose),typeof k=="string"&&k?E+" "+k:E},r.attributesFromObject=function(d,k){return Object.keys(k).reduce(function(T,E){return T[d+"-"+E]=k[E],T},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return l(m,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,d){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!d.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,d=r.appElement,k=r.ariaHideApp,T=r.htmlOpenClassName,E=r.bodyOpenClassName,B=r.parentSelector,H=B&&B().ownerDocument||document;E&&P.add(H.body,E),T&&P.add(H.getElementsByTagName("html")[0],T),k&&(le+=1,O.hide(d)),w.default.register(this)}},{key:"render",value:function(){var r=this.props,d=r.id,k=r.className,T=r.overlayClassName,E=r.defaultStyles,B=r.children,H=k?{}:E.content,se=T?{}:E.overlay;if(this.shouldBeClosed())return null;var dt={ref:this.setOverlayRef,className:this.buildClassName("overlay",T),style:o({},se,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},pt=o({id:d,ref:this.setContentRef,style:o({},H,this.props.style.content),className:this.buildClassName("content",k),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ut=this.props.contentElement(pt,B);return this.props.overlayElement(dt,ut)}}]),m}(c.Component);me.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},me.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(W.default),i.default.instanceOf(I.SafeHTMLCollection),i.default.instanceOf(I.SafeNodeList),i.default.arrayOf(i.default.instanceOf(W.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},e.default=me,t.exports=e.default})(ye,ye.exports);var hr=ye.exports;function et(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function tt(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function nt(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}et.__suppressDeprecationWarning=!0;tt.__suppressDeprecationWarning=!0;nt.__suppressDeprecationWarning=!0;function mr(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||a!==null||l!==null){var c=t.displayName||t.name,f=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+f+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=et,e.componentWillReceiveProps=tt),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=nt;var i=e.componentDidUpdate;e.componentDidUpdate=function(p,g,h){var b=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;i.call(this,p,g,b)}}return t}const vr=Object.freeze(Object.defineProperty({__proto__:null,polyfill:mr},Symbol.toStringTag,{value:"Module"})),xr=gt(vr);Object.defineProperty(G,"__esModule",{value:!0});G.bodyOpenClassName=G.portalClassName=void 0;var Pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},gr=function(){function t(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),ot=K,pe=ae(ot),yr=yt,ue=ae(yr),br=Ve,u=ae(br),wr=hr,De=ae(wr),Cr=N,Or=Sr(Cr),U=F,Fe=ae(U),_r=xr;function Sr(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function ae(t){return t&&t.__esModule?t:{default:t}}function jr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ae(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Er(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var kr=G.portalClassName="ReactModalPortal",Mr=G.bodyOpenClassName="ReactModal__Body--open",z=U.canUseDOM&&ue.default.createPortal!==void 0,Ne=function(e){return document.createElement(e)},We=function(){return z?ue.default.createPortal:ue.default.unstable_renderSubtreeIntoContainer};function ce(t){return t()}var ie=function(t){Er(e,t);function e(){var o,a,l,c;jr(this,e);for(var f=arguments.length,i=Array(f),y=0;y<f;y++)i[y]=arguments[y];return c=(a=(l=Ae(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(i))),l),l.removePortal=function(){!z&&ue.default.unmountComponentAtNode(l.node);var p=ce(l.props.parentSelector);p&&p.contains(l.node)?p.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(p){l.portal=p},l.renderPortal=function(p){var g=We(),h=g(l,pe.default.createElement(De.default,Pe({defaultStyles:e.defaultStyles},p)),l.node);l.portalRef(h)},a),Ae(l,c)}return gr(e,[{key:"componentDidMount",value:function(){if(U.canUseDOM){z||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var a=ce(this.props.parentSelector);a.appendChild(this.node),!z&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=ce(a.parentSelector),c=ce(this.props.parentSelector);return{prevParent:l,nextParent:c}}},{key:"componentDidUpdate",value:function(a,l,c){if(U.canUseDOM){var f=this.props,i=f.isOpen,y=f.portalClassName;a.portalClassName!==y&&(this.node.className=y);var p=c.prevParent,g=c.nextParent;g!==p&&(p.removeChild(this.node),g.appendChild(this.node)),!(!a.isOpen&&!i)&&!z&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!U.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),c=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);c?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-l)):this.removePortal()}}},{key:"render",value:function(){if(!U.canUseDOM||!z)return null;!this.node&&z&&(this.node=Ne("div"));var a=We();return a(pe.default.createElement(De.default,Pe({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){Or.setElement(a)}}]),e}(ot.Component);ie.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Fe.default),u.default.instanceOf(U.SafeHTMLCollection),u.default.instanceOf(U.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Fe.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};ie.defaultProps={isOpen:!1,portalClassName:kr,bodyOpenClassName:Mr,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return pe.default.createElement("div",e,o)},contentElement:function(e,o){return pe.default.createElement("div",e,o)}};ie.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,_r.polyfill)(ie);G.default=ie;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=G,a=l(o);function l(c){return c&&c.__esModule?c:{default:c}}e.default=a.default,t.exports=e.default})(ge,ge.exports);var Tr=ge.exports;const rt=bt(Tr),Rr=s.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Pr=s.button`
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
`,Dr=s.div`
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
`;const Fr=({dataIndex:t,handleDeleteInput:e,resetForm:o})=>n.jsxs(Dr,{children:[n.jsx(X,{id:"name",name:"name",placeholder:"The name of the product or dish"}),n.jsx(X,{id:"carbogidrate",name:"carbogidrate",placeholder:"Carbonoh.",type:"number",min:1}),n.jsx(X,{id:"protein",name:"protein",placeholder:"Protein",min:1,type:"number"}),n.jsx(X,{id:"fat",name:"fat",placeholder:"Fat",min:1,type:"number"}),n.jsx(X,{id:"calories",name:"calories",placeholder:"Calories",min:1,type:"number"}),n.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},"data-set":t,onClick:a=>e(a,o),children:n.jsx("use",{href:`${$}#trash-delete`})})]}),Ar={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};rt.setAppElement("#root");const Nr=({stateModal:t,closeModal:e,typefood:o})=>{const a=re();let l=S(Bt);const c={typeFood:o,userFood:[]},f=()=>{const y=l.length-1,p=l[y]+1;a(St(p))},i=(y,p)=>{const g=y.currentTarget.dataset.set;if(g==="0"){p();return}a(jt(g))};return n.jsx(rt,{isOpen:t,onRequestClose:e,style:Ar,children:n.jsxs(Ht,{children:[n.jsx(zt,{children:"Record your meal"}),n.jsxs(qt,{style:{marginTop:"24px"},children:[n.jsx(ze,{src:"src/assets/images/Breakfast.png"}),n.jsx(Kt,{})]}),l.map((y,p)=>n.jsx(Ct,{initialValues:{name:"",carbogidrate:"",protein:"",fat:"",calories:"",productId:""},onSubmit:(g,{resetForm:h})=>{console.log(g),a(Ot(c)),e(),h()},children:({resetForm:g})=>n.jsxs(_t,{children:[n.jsx(Fr,{dataIndex:p,handleDeleteInput:i,resetForm:g}),n.jsxs(Gt,{children:[n.jsx(Vt,{type:"submit",children:"Confirm"}),n.jsx(Yt,{onClick:e,type:"button",children:"Cancel"})]})]})},p)),n.jsxs(Pr,{onClick:f,type:"button",children:[n.jsx(Rr,{children:n.jsx("use",{href:`${$}#icon-add-converted`})}),"Add more"]})]})})},Wr=({meal:t,title:e,totalCarbs:o,totalProtein:a,totalFat:l,typefood:c,src:f})=>{const i=re(),y=O=>{i(Et({userFood:{},typeFood:O}))};S(Jt),e.toLowerCase();const[p,g]=K.useState(!1),h=()=>g(!0),b=()=>g(!1);return n.jsxs(mo,{children:[n.jsx(Nr,{closeModal:b,stateModal:p,typefood:c}),n.jsxs(wo,{children:[n.jsx(ze,{src:f}),n.jsx(bo,{children:e})]}),n.jsx(vo,{children:(t==null?void 0:t.length)>0?n.jsxs(n.Fragment,{children:[n.jsxs(xo,{children:["Carbonohidrates: ",o]}),n.jsxs(go,{children:["Protein: ",a]}),n.jsxs(yo,{children:["Fat: ",l]}),n.jsx(Co,{onClick:()=>y(e.toLowerCase()),children:n.jsx("use",{href:`${$}#trash-delete`})})]}):n.jsxs(_o,{id:c,"data-site":c,onClick:h,children:[n.jsx(Zt,{children:"Record your meal"}),n.jsx(Oo,{children:n.jsx("use",{href:`${$}#icon-add-converted`})})]})})]})},Lr="/Healthy_life/assets/Breakfast-ebbae9d6.png",$r="/Healthy_life/assets/Dinner-3e075f11.png",Ir="/Healthy_life/assets/Lunch-b9834f5c.png",Ur="/Healthy_life/assets/Snack-986b08ce.png",Br=[Lr,Ir,$r,Ur],Hr=()=>{const t=S(Qt),e=S(Xt),o=S(en),a=S(tn),l={breakfast:t,lunch:e,dinner:o,snack:a},c=["breakfast","lunch","dinner","snack"];let f=0,i=0,y=0,p=0,g=0,h=0,b=0,O=0,j=0,P=0,I=0,W=0;(t==null?void 0:t.length)>0&&(f=t.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.fat)},0),i=t.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.protein)},0),y=t.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.carbogidrate)},0)),(e==null?void 0:e.length)>0&&(p=e.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.fat)},0),g=e.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.protein)},0),h=e.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.carbogidrate)},0)),(o==null?void 0:o.length)>0&&(b=o.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.protein)},0),O=o.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.carbogidrate)},0),j=o.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.fat)},0)),(a==null?void 0:a.length)>0&&(P=a.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.fat)},0),I=a.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.protein)},0),W=a.reduce((w,C)=>{var v;return w+((v=C.nutrition)==null?void 0:v.carbogidrate)},0));const Q={breakfast:{carbs:y,protein:i,fat:f},lunch:{carbs:h,protein:g,fat:p},dinner:{carbs:O,protein:b,fat:j},snack:{carbs:W,protein:I,fat:P}};return n.jsxs(co,{children:[n.jsxs(po,{children:[n.jsx(uo,{children:"Diary"}),n.jsx(fo,{to:"/diary",children:"See more"})]}),n.jsx(ho,{children:c.map((w,C)=>n.jsx(Wr,{meal:l[w],typefood:w,title:w,totalCarbs:Q[w].carbs,totalProtein:Q[w].protein,totalFat:Q[w].fat,src:Br[C]},w))})]})},zr=s.div`
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
`,Yr=()=>{const t=re();return K.useEffect(()=>{t(kt()),t(Mt()),t(Tt())},[t]),n.jsxs(n.Fragment,{children:[n.jsx(so,{}),n.jsxs(zr,{children:[n.jsx(Hr,{}),n.jsx(nn,{})]})]})};export{Yr as default};
