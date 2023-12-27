import{s,k as j,m as $e,n as Ie,j as n,o as B,t as U,p as ht,q as mt,v as vt,r as D,u as Z,w as gt,x as xt,L as Ue,y as yt,z as bt,A as wt,B as Ct,C as Ot,D as _t,G as St,H as jt,I as Et,J as kt}from"./index-9a6f27e5.js";import{C as Be,A as Mt,p as He,a as ze,D as Tt,b as Rt,L as Pt,B as Dt,c as At,d as Ft}from"./index-ffe06b8b.js";import{s as Nt,a as Wt,b as Lt,c as $t,d as It,C as Ut,T as Bt,M as Ht,e as qe,f as zt,B as qt,g as Kt,h as Gt,i as Vt,A as Yt,j as Jt,k as Zt,l as Qt,m as Xt}from"./Reacord.styled-98d03875.js";import{R as en}from"./RecommendedList-91863033.js";var Ke={exports:{}},tn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nn=tn,on=nn;function Ge(){}function Ve(){}Ve.resetWarningCache=Ge;var rn=function(){function t(a,l,c,d,i,w){if(w!==on){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ve,resetWarningCache:Ge};return o.PropTypes=o,o};Ke.exports=rn();var Ye=Ke.exports;const an=s.div`
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
`,un=()=>{const t=j($e),e=j(Ie);return n.jsxs(an,{children:[n.jsx(ln,{children:"Daily goal"}),n.jsxs(sn,{children:[n.jsxs(Se,{children:[n.jsx(cn,{children:n.jsx("use",{href:`${B}#bubble`})}),n.jsxs(je,{children:[n.jsx("p",{children:"Calories"}),n.jsx(Ee,{children:t})]})]}),n.jsxs(Se,{children:[n.jsx(dn,{children:n.jsx("use",{href:`${B}#milk`})}),n.jsxs(je,{children:[n.jsx("p",{children:" Water"}),n.jsxs(Ee,{children:[e," ",n.jsx(pn,{children:"ml"})]})]})]})]})]})};Be.register(Mt,He,ze);const fn={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},hn={id:"bgCircle",beforeDatasetsDraw(t){const{ctx:e}=t;e.save();const o=t.getDatasetMeta(0).data[0].x,a=t.getDatasetMeta(0).data[0].y,l=t.getDatasetMeta(0).data[0].innerRadius,c=t.getDatasetMeta(0).data[0].outerRadius,d=c-l,i=Math.PI/180;e.beginPath(),e.lineWidth=d,e.strokeStyle=`${U.palette.greyone.main}`,e.arc(o,a,c-d/2,0,i*360,!1),e.stroke()}},Je=({dailyGoal:t,filledValue:e,bgColor:o})=>{let a=t-e;e>t&&(a=0);const l={datasets:[{label:[],data:[e,a],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return n.jsx(n.Fragment,{children:n.jsx(Tt,{options:fn,data:l,plugins:[hn]})})},mn=s.div`
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
`,me=({title:t,bgColor:e,dailyGoal:o,filledValue:a})=>{a||(a=0);let l=Math.round(a*100/o),c=(o-a).toFixed(0);return a>o&&(c=0),l>100&&(l=100),n.jsxs(vn,{children:[n.jsxs(mn,{children:[n.jsx(Je,{dailyGoal:o,filledValue:a,bgColor:e}),n.jsx(yn,{children:n.jsx("p",{children:`${l}%`})})]}),n.jsxs("div",{children:[n.jsx(xn,{children:t}),n.jsxs(gn,{children:[n.jsxs("p",{children:["Goal: ",n.jsx(ke,{children:o})]}),n.jsxs("p",{children:["left: ",n.jsx(ke,{children:c})]})]})]})]})},bn=s.div`
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
`,ve=s.li`
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
`,kn=()=>{const t=`${U.palette.litegreen.main}`,e=`${U.palette.pink.main}`,o=`${U.palette.yellow.main}`,a=`${U.palette.grey.main}`,l=j($e),c=j(ht),d=j(mt),i=j(vt),w=j(Nt),m=j(Wt),C=j(Lt),u=j($t);return n.jsxs(bn,{children:[n.jsx(On,{children:"Food"}),n.jsxs(wn,{children:[n.jsxs(_n,{children:[n.jsx(Je,{dailyGoal:l,filledValue:w,bgColor:t}),n.jsxs(Sn,{children:[n.jsx(jn,{children:w||0}),n.jsx(En,{children:"calories"})]})]}),n.jsxs(Cn,{children:[n.jsx(ve,{children:n.jsx(me,{title:"Carbonohidrates",bgColor:e,dailyGoal:c,filledValue:m})}),n.jsx(ve,{children:n.jsx(me,{title:"Protein",bgColor:o,dailyGoal:d,filledValue:C})}),n.jsx(ve,{children:n.jsx(me,{title:"Fat",bgColor:a,dailyGoal:i,filledValue:u})})]})]})]})},Mn=s.div`
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
`,Rn=s.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Pn=s.button`
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
`,An=s.input`
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
`,Fn=s.button`
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
`,Nn=({isModalOpen:t,setIsModalOpen:e})=>{const[o,a]=D.useState(0),l=Z(),c=d=>{d.preventDefault(),l(gt({value:o})),e(!1)};return D.useEffect(()=>{const d=i=>{i.code==="Escape"&&e(!1)};return t?(document.addEventListener("keydown",d),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",d),document.body.style.overflow="unset"}},[t,e]),n.jsx(Mn,{onClick:()=>e(!1),children:n.jsxs(Tn,{onClick:d=>d.stopPropagation(),children:[n.jsx(Dn,{children:"Add water intake"}),n.jsxs(Rn,{onSubmit:c,children:[n.jsxs("label",{children:["How much water",n.jsx(An,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:d=>a(Number(d.target.value)),value:o||"",min:1})]}),n.jsx(Pn,{type:"submit",children:"Confirm"}),n.jsx(Fn,{type:"button",onClick:()=>e(!1),children:"Cancel"})]})]})})};Be.register(Rt,Pt,Dt,At,He,ze);const Wn={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Ln=({waterIntake:t})=>{const e={labels:["Intake"],datasets:[{label:"Water",data:[t],backgroundColor:`${U.palette.violet.main}`,hoverBackgroundColor:`${U.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return n.jsx(Ft,{data:e,options:Wn})},$n=t=>t.dailyWaterStatistics.consumedWater.value,In=t=>t.dailyWaterStatistics.consumedWater._id,Un=s.div`
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
`,Jn=s.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,Zn=s.div`
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
`,Xn=()=>{const[t,e]=D.useState(!1),o=Z(),a=j(In),l=j(Ie),c=j($n),d=c<=l?Math.round(c*100/l):100;let i=l-c;c>l&&(i=0);const w={color:d>85?`${U.palette.greyone.main}`:`${U.palette.violet.main}`};return n.jsxs(Un,{children:[n.jsx(Bn,{children:"Water"}),n.jsxs(Hn,{children:[n.jsx(Gn,{width:"20px",height:"20px",onClick:()=>{o(xt(a))},children:n.jsx("use",{href:`${B}#trash-delete`})}),n.jsx(Jn,{children:n.jsxs(Zn,{children:[n.jsx(Ln,{waterIntake:d}),n.jsx(Qn,{style:w,children:`${d}%`})]})}),n.jsxs("div",{children:[n.jsx(zn,{children:"Water consumption"}),n.jsxs(Me,{children:[n.jsx(Kn,{children:c}),"ml"]}),n.jsxs(Me,{children:[n.jsx(qn,{children:"left:"})," ",`${i} ml`]}),n.jsxs(Yn,{type:"button",onClick:()=>e(!0),children:[n.jsx(Vn,{children:n.jsx("use",{href:`${B}#icon-add-converted`})}),"Add water intake"]})]})]}),t&&n.jsx(Nn,{setIsModalOpen:e,isModalOpen:t})]})},eo=s.div`
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
`,io=()=>n.jsxs(eo,{children:[n.jsxs(to,{children:[n.jsx(oo,{children:"Today"}),n.jsxs(ro,{to:"/dashboard",children:["On the way to the goal",n.jsx(ao,{children:n.jsx("use",{href:`${B}#icon-arrowright`})})]})]}),n.jsxs(no,{children:[n.jsx(un,{}),n.jsx(Xn,{}),n.jsx(kn,{})]})]}),lo=s.div`
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
`;var xe={exports:{}},V={},ye={exports:{}},W={},be={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=C;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",l=/input|select|textarea|button|object|iframe/;function c(u,g){return g.getPropertyValue("overflow")!=="visible"||u.scrollWidth<=0&&u.scrollHeight<=0}function d(u){var g=u.offsetWidth<=0&&u.offsetHeight<=0;if(g&&!u.innerHTML)return!0;try{var v=window.getComputedStyle(u),_=v.getPropertyValue("display");return g?_!==a&&c(u,v):_===o}catch{return console.warn("Failed to inspect element style"),!1}}function i(u){for(var g=u,v=u.getRootNode&&u.getRootNode();g&&g!==document.body;){if(v&&g===v&&(g=v.host.parentNode),d(g))return!1;g=g.parentNode}return!0}function w(u,g){var v=u.nodeName.toLowerCase(),_=l.test(v)&&!u.disabled||v==="a"&&u.href||g;return _&&i(u)}function m(u){var g=u.getAttribute("tabindex");g===null&&(g=void 0);var v=isNaN(g);return(v||g>=0)&&w(u,!v)}function C(u){var g=[].slice.call(u.querySelectorAll("*"),0).reduce(function(v,_){return v.concat(_.shadowRoot?C(_.shadowRoot):[_])},[]);return g.filter(m)}t.exports=e.default})(be,be.exports);var Ze=be.exports;Object.defineProperty(W,"__esModule",{value:!0});W.resetState=jo;W.log=Eo;W.handleBlur=ne;W.handleFocus=oe;W.markForFocusLater=ko;W.returnFocus=Mo;W.popWithoutFocus=To;W.setupScopedFocus=Ro;W.teardownScopedFocus=Po;var Oo=Ze,_o=So(Oo);function So(t){return t&&t.__esModule?t:{default:t}}var J=[],Y=null,we=!1;function jo(){J=[]}function Eo(){}function ne(){we=!0}function oe(){if(we){if(we=!1,!Y)return;setTimeout(function(){if(!Y.contains(document.activeElement)){var t=(0,_o.default)(Y)[0]||Y;t.focus()}},0)}}function ko(){J.push(document.activeElement)}function Mo(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{J.length!==0&&(e=J.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function To(){J.length>0&&J.pop()}function Ro(t){Y=t,window.addEventListener?(window.addEventListener("blur",ne,!1),document.addEventListener("focus",oe,!0)):(window.attachEvent("onBlur",ne),document.attachEvent("onFocus",oe))}function Po(){Y=null,window.addEventListener?(window.removeEventListener("blur",ne),document.removeEventListener("focus",oe)):(window.detachEvent("onBlur",ne),document.detachEvent("onFocus",oe))}var Ce={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var o=Ze,a=l(o);function l(i){return i&&i.__esModule?i:{default:i}}function c(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?c(i.activeElement.shadowRoot):i.activeElement}function d(i,w){var m=(0,a.default)(i);if(!m.length){w.preventDefault();return}var C=void 0,u=w.shiftKey,g=m[0],v=m[m.length-1],_=c();if(i===_){if(!u)return;C=v}if(v===_&&!u&&(C=g),g===_&&u&&(C=v),C){w.preventDefault(),C.focus();return}var R=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),$=R!=null&&R[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if($){var A=m.indexOf(_);if(A>-1&&(A+=u?-1:1),C=m[A],typeof C>"u"){w.preventDefault(),C=u?v:g,C.focus();return}w.preventDefault(),C.focus()}}t.exports=e.default})(Ce,Ce.exports);var Do=Ce.exports,L={},Ao=function(){},Fo=Ao,N={},Qe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Qe);var No=Qe.exports;Object.defineProperty(N,"__esModule",{value:!0});N.canUseDOM=N.SafeNodeList=N.SafeHTMLCollection=void 0;var Wo=No,Lo=$o(Wo);function $o(t){return t&&t.__esModule?t:{default:t}}var ue=Lo.default,Io=ue.canUseDOM?window.HTMLElement:{};N.SafeHTMLCollection=ue.canUseDOM?window.HTMLCollection:{};N.SafeNodeList=ue.canUseDOM?window.NodeList:{};N.canUseDOM=ue.canUseDOM;N.default=Io;Object.defineProperty(L,"__esModule",{value:!0});L.resetState=qo;L.log=Ko;L.assertNodeList=Xe;L.setElement=Go;L.validateElement=Oe;L.hide=Vo;L.show=Yo;L.documentNotReadyOrSSRTesting=Jo;var Uo=Fo,Bo=zo(Uo),Ho=N;function zo(t){return t&&t.__esModule?t:{default:t}}var P=null;function qo(){P&&(P.removeAttribute?P.removeAttribute("aria-hidden"):P.length!=null?P.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(P).forEach(function(t){return t.removeAttribute("aria-hidden")})),P=null}function Ko(){}function Xe(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Go(t){var e=t;if(typeof e=="string"&&Ho.canUseDOM){var o=document.querySelectorAll(e);Xe(o,e),e=o}return P=e||P,P}function Oe(t){var e=t||P;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Bo.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Vo(t){var e=!0,o=!1,a=void 0;try{for(var l=Oe(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.setAttribute("aria-hidden","true")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function Yo(t){var e=!0,o=!1,a=void 0;try{for(var l=Oe(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.removeAttribute("aria-hidden")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function Jo(){P=null}var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.resetState=Zo;Q.log=Qo;var ee={},te={};function Te(t,e){t.classList.remove(e)}function Zo(){var t=document.getElementsByTagName("html")[0];for(var e in ee)Te(t,ee[e]);var o=document.body;for(var a in te)Te(o,te[a]);ee={},te={}}function Qo(){}var Xo=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},er=function(e,o){return e[o]&&(e[o]-=1),o},tr=function(e,o,a){a.forEach(function(l){Xo(o,l),e.add(l)})},nr=function(e,o,a){a.forEach(function(l){er(o,l),o[l]===0&&e.remove(l)})};Q.add=function(e,o){return tr(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};Q.remove=function(e,o){return nr(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};var X={};Object.defineProperty(X,"__esModule",{value:!0});X.log=rr;X.resetState=ar;function or(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var et=function t(){var e=this;or(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ce=new et;function rr(){console.log("portalOpenInstances ----------"),console.log(ce.openInstances.length),ce.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function ar(){ce=new et}X.default=ce;var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.resetState=cr;_e.log=dr;var ir=X,lr=sr(ir);function sr(t){return t&&t.__esModule?t:{default:t}}var M=void 0,F=void 0,G=[];function cr(){for(var t=[M,F],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}M=F=null,G=[]}function dr(){console.log("bodyTrap ----------"),console.log(G.length);for(var t=[M,F],e=0;e<t.length;e++){var o=t[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Re(){G.length!==0&&G[G.length-1].focusContent()}function pr(t,e){!M&&!F&&(M=document.createElement("div"),M.setAttribute("data-react-modal-body-trap",""),M.style.position="absolute",M.style.opacity="0",M.setAttribute("tabindex","0"),M.addEventListener("focus",Re),F=M.cloneNode(),F.addEventListener("focus",Re)),G=e,G.length>0?(document.body.firstChild!==M&&document.body.insertBefore(M,document.body.firstChild),document.body.lastChild!==F&&document.body.appendChild(F)):(M.parentElement&&M.parentElement.removeChild(M),F.parentElement&&F.parentElement.removeChild(F))}lr.default.subscribe(pr);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(y){for(var h=1;h<arguments.length;h++){var S=arguments[h];for(var r in S)Object.prototype.hasOwnProperty.call(S,r)&&(y[r]=S[r])}return y},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},l=function(){function y(h,S){for(var r=0;r<S.length;r++){var p=S[r];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}return function(h,S,r){return S&&y(h.prototype,S),r&&y(h,r),h}}(),c=D,d=Ye,i=x(d),w=W,m=O(w),C=Do,u=x(C),g=L,v=O(g),_=Q,R=O(_),$=N,A=x($),I=X,b=x(I);function O(y){if(y&&y.__esModule)return y;var h={};if(y!=null)for(var S in y)Object.prototype.hasOwnProperty.call(y,S)&&(h[S]=y[S]);return h.default=y,h}function x(y){return y&&y.__esModule?y:{default:y}}function it(y,h){if(!(y instanceof h))throw new TypeError("Cannot call a class as a function")}function lt(y,h){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:y}function st(y,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);y.prototype=Object.create(h&&h.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(y,h):y.__proto__=h)}var fe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ct=function(h){return h.code==="Tab"||h.keyCode===9},dt=function(h){return h.code==="Escape"||h.keyCode===27},ie=0,he=function(y){st(h,y);function h(S){it(this,h);var r=lt(this,(h.__proto__||Object.getPrototypeOf(h)).call(this,S));return r.setOverlayRef=function(p){r.overlay=p,r.props.overlayRef&&r.props.overlayRef(p)},r.setContentRef=function(p){r.content=p,r.props.contentRef&&r.props.contentRef(p)},r.afterClose=function(){var p=r.props,k=p.appElement,T=p.ariaHideApp,E=p.htmlOpenClassName,z=p.bodyOpenClassName,q=p.parentSelector,le=q&&q().ownerDocument||document;z&&R.remove(le.body,z),E&&R.remove(le.getElementsByTagName("html")[0],E),T&&ie>0&&(ie-=1,ie===0&&v.show(k)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(m.returnFocus(r.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),b.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(m.setupScopedFocus(r.node),m.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var p=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:p},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(p){ct(p)&&(0,u.default)(r.content,p),r.props.shouldCloseOnEsc&&dt(p)&&(p.stopPropagation(),r.requestClose(p))},r.handleOverlayOnClick=function(p){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(p):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(p){!r.props.shouldCloseOnOverlayClick&&p.target==r.overlay&&p.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(p){return r.ownerHandlesClose()&&r.props.onRequestClose(p)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(p,k){var T=(typeof k>"u"?"undefined":a(k))==="object"?k:{base:fe[p],afterOpen:fe[p]+"--after-open",beforeClose:fe[p]+"--before-close"},E=T.base;return r.state.afterOpen&&(E=E+" "+T.afterOpen),r.state.beforeClose&&(E=E+" "+T.beforeClose),typeof k=="string"&&k?E+" "+k:E},r.attributesFromObject=function(p,k){return Object.keys(k).reduce(function(T,E){return T[p+"-"+E]=k[E],T},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return l(h,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,p){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!p.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,p=r.appElement,k=r.ariaHideApp,T=r.htmlOpenClassName,E=r.bodyOpenClassName,z=r.parentSelector,q=z&&z().ownerDocument||document;E&&R.add(q.body,E),T&&R.add(q.getElementsByTagName("html")[0],T),k&&(ie+=1,v.hide(p)),b.default.register(this)}},{key:"render",value:function(){var r=this.props,p=r.id,k=r.className,T=r.overlayClassName,E=r.defaultStyles,z=r.children,q=k?{}:E.content,le=T?{}:E.overlay;if(this.shouldBeClosed())return null;var pt={ref:this.setOverlayRef,className:this.buildClassName("overlay",T),style:o({},le,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ut=o({id:p,ref:this.setContentRef,style:o({},q,this.props.style.content),className:this.buildClassName("content",k),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ft=this.props.contentElement(ut,z);return this.props.overlayElement(pt,ft)}}]),h}(c.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(A.default),i.default.instanceOf($.SafeHTMLCollection),i.default.instanceOf($.SafeNodeList),i.default.arrayOf(i.default.instanceOf(A.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},e.default=he,t.exports=e.default})(ye,ye.exports);var ur=ye.exports;function tt(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function nt(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function ot(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}tt.__suppressDeprecationWarning=!0;nt.__suppressDeprecationWarning=!0;ot.__suppressDeprecationWarning=!0;function fr(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||a!==null||l!==null){var c=t.displayName||t.name,d=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+d+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=tt,e.componentWillReceiveProps=nt),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ot;var i=e.componentDidUpdate;e.componentDidUpdate=function(m,C,u){var g=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:u;i.call(this,m,C,g)}}return t}const hr=Object.freeze(Object.defineProperty({__proto__:null,polyfill:fr},Symbol.toStringTag,{value:"Module"})),mr=yt(hr);Object.defineProperty(V,"__esModule",{value:!0});V.bodyOpenClassName=V.portalClassName=void 0;var Pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},vr=function(){function t(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),rt=D,de=re(rt),gr=bt,pe=re(gr),xr=Ye,f=re(xr),yr=ur,De=re(yr),br=L,wr=Or(br),H=N,Ae=re(H),Cr=mr;function Or(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function re(t){return t&&t.__esModule?t:{default:t}}function _r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fe(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Sr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var jr=V.portalClassName="ReactModalPortal",Er=V.bodyOpenClassName="ReactModal__Body--open",K=H.canUseDOM&&pe.default.createPortal!==void 0,Ne=function(e){return document.createElement(e)},We=function(){return K?pe.default.createPortal:pe.default.unstable_renderSubtreeIntoContainer};function se(t){return t()}var ae=function(t){Sr(e,t);function e(){var o,a,l,c;_r(this,e);for(var d=arguments.length,i=Array(d),w=0;w<d;w++)i[w]=arguments[w];return c=(a=(l=Fe(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(i))),l),l.removePortal=function(){!K&&pe.default.unmountComponentAtNode(l.node);var m=se(l.props.parentSelector);m&&m.contains(l.node)?m.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(m){l.portal=m},l.renderPortal=function(m){var C=We(),u=C(l,de.default.createElement(De.default,Pe({defaultStyles:e.defaultStyles},m)),l.node);l.portalRef(u)},a),Fe(l,c)}return vr(e,[{key:"componentDidMount",value:function(){if(H.canUseDOM){K||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var a=se(this.props.parentSelector);a.appendChild(this.node),!K&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=se(a.parentSelector),c=se(this.props.parentSelector);return{prevParent:l,nextParent:c}}},{key:"componentDidUpdate",value:function(a,l,c){if(H.canUseDOM){var d=this.props,i=d.isOpen,w=d.portalClassName;a.portalClassName!==w&&(this.node.className=w);var m=c.prevParent,C=c.nextParent;C!==m&&(m.removeChild(this.node),C.appendChild(this.node)),!(!a.isOpen&&!i)&&!K&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!H.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),c=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);c?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-l)):this.removePortal()}}},{key:"render",value:function(){if(!H.canUseDOM||!K)return null;!this.node&&K&&(this.node=Ne("div"));var a=We();return a(de.default.createElement(De.default,Pe({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){wr.setElement(a)}}]),e}(rt.Component);ae.propTypes={isOpen:f.default.bool.isRequired,style:f.default.shape({content:f.default.object,overlay:f.default.object}),portalClassName:f.default.string,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,className:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),overlayClassName:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),appElement:f.default.oneOfType([f.default.instanceOf(Ae.default),f.default.instanceOf(H.SafeHTMLCollection),f.default.instanceOf(H.SafeNodeList),f.default.arrayOf(f.default.instanceOf(Ae.default))]),onAfterOpen:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,ariaHideApp:f.default.bool,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,preventScroll:f.default.bool,parentSelector:f.default.func,aria:f.default.object,data:f.default.object,role:f.default.string,contentLabel:f.default.string,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,id:f.default.string,overlayElement:f.default.func,contentElement:f.default.func};ae.defaultProps={isOpen:!1,portalClassName:jr,bodyOpenClassName:Er,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return de.default.createElement("div",e,o)},contentElement:function(e,o){return de.default.createElement("div",e,o)}};ae.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Cr.polyfill)(ae);V.default=ae;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=V,a=l(o);function l(c){return c&&c.__esModule?c:{default:c}}e.default=a.default,t.exports=e.default})(xe,xe.exports);var kr=xe.exports;const at=wt(kr),Mr=s.svg`
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
`,ge=s.input`
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
`,Rr=s.div`
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
`,Pr=s.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Le=s.input`
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
`,Dr=({setName:t,setColories:e,setCarbogidrate:o,setProtein:a,setFat:l,name:c,calories:d,carbogidrate:i,protein:w,fat:m,dataIndex:C})=>{const u=Z(),g=v=>{const _=v.currentTarget.dataset.set;if(_==="0"){t(""),e(""),o(""),a(""),l("");return}u(Ct(_))};return n.jsxs(Rr,{children:[n.jsx(ge,{value:c,placeholder:"The name of the product or dish",onChange:v=>{t(v.target.value)}}),n.jsx(ge,{type:"number",min:1,onChange:v=>{o(v.target.value)},value:i,placeholder:"Carbonoh"}),n.jsx(ge,{min:1,type:"number",onChange:v=>{a(v.target.value)},value:w,placeholder:"Protein"}),n.jsxs(Pr,{children:[n.jsx(Le,{min:1,type:"number",onChange:v=>{l(v.target.value)},value:m,placeholder:"Fat"}),n.jsx(Le,{min:1,type:"number",onChange:v=>{e(v.target.value)},value:d,placeholder:"Calories"}),n.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},"data-set":C,onClick:g,children:n.jsx("use",{href:`${B}#trash-delete`})})]})]})},Ar={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};at.setAppElement("#root");const Fr=({stateModal:t,closeModal:e,typefood:o})=>{const a=Z(),[l,c]=D.useState(""),[d,i]=D.useState(""),[w,m]=D.useState(""),[C,u]=D.useState(""),[g,v]=D.useState("");let _=j(It);const R={typeFood:o,userFood:[{name:l,calories:d,nutrition:{carbogidrate:w,protein:C,fat:g}}]},$=I=>{I.preventDefault(),a(Ot(R)),e()},A=()=>{const I=_.length-1,b=_[I]+1;a(_t(b))};return n.jsx(at,{isOpen:t,onRequestClose:e,style:Ar,children:n.jsxs(Ut,{children:[n.jsx(Bt,{children:"Record your meal"}),n.jsxs(Ht,{style:{marginTop:"24px"},children:[n.jsx(qe,{src:"src/assets/images/Breakfast.png"}),n.jsx(zt,{})]}),n.jsxs("form",{onSubmit:$,children:[_.map((I,b)=>n.jsx(Dr,{dataIndex:b,setName:c,setColories:i,setCarbogidrate:m,setProtein:u,setFat:v,name:l,calories:d,carbogidrate:w,protein:C,fat:g},b)),n.jsxs(Tr,{onClick:A,type:"button",children:[n.jsx(Mr,{children:n.jsx("use",{href:`${B}#icon-add-converted`})}),"Add more"]}),n.jsxs(qt,{children:[n.jsx(Kt,{type:"submit",children:"Confirm"}),n.jsx(Gt,{onClick:e,type:"button",children:"Cancel"})]})]})]})})},Nr=({meal:t,title:e,totalCarbs:o,totalProtein:a,totalFat:l,typefood:c,src:d})=>{const i=Z(),w=v=>{i(St({userFood:{},typeFood:v}))};j(Vt),e.toLowerCase();const[m,C]=D.useState(!1),u=()=>C(!0),g=()=>C(!1);return n.jsxs(fo,{children:[n.jsx(Fr,{closeModal:g,stateModal:m,typefood:c}),n.jsxs(yo,{children:[n.jsx(qe,{src:d}),n.jsx(xo,{children:e})]}),n.jsx(ho,{children:(t==null?void 0:t.length)>0?n.jsxs(n.Fragment,{children:[n.jsxs(mo,{children:["Carbonohidrates: ",o]}),n.jsxs(vo,{children:["Protein: ",a]}),n.jsxs(go,{children:["Fat: ",l]}),n.jsx(bo,{onClick:()=>w(e.toLowerCase()),children:n.jsx("use",{href:`${B}#trash-delete`})})]}):n.jsxs(Co,{id:c,"data-site":c,onClick:u,children:[n.jsx(Yt,{children:"Record your meal"}),n.jsx(wo,{children:n.jsx("use",{href:`${B}#icon-add-converted`})})]})})]})},Wr="/Healthy_life/assets/Breakfast-ebbae9d6.png",Lr="/Healthy_life/assets/Dinner-3e075f11.png",$r="/Healthy_life/assets/Lunch-b9834f5c.png",Ir="/Healthy_life/assets/Snack-986b08ce.png",Ur=[Wr,$r,Lr,Ir],Br=()=>{const t=j(Jt),e=j(Zt),o=j(Qt),a=j(Xt),l={breakfast:t,lunch:e,dinner:o,snack:a},c=["breakfast","lunch","dinner","snack"];let d=0,i=0,w=0,m=0,C=0,u=0,g=0,v=0,_=0,R=0,$=0,A=0;(t==null?void 0:t.length)>0&&(d=t.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.fat)},0),i=t.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.protein)},0),w=t.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.carbogidrate)},0)),(e==null?void 0:e.length)>0&&(m=e.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.fat)},0),C=e.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.protein)},0),u=e.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.carbogidrate)},0)),(o==null?void 0:o.length)>0&&(g=o.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.protein)},0),v=o.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.carbogidrate)},0),_=o.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.fat)},0)),(a==null?void 0:a.length)>0&&(R=a.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.fat)},0),$=a.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.protein)},0),A=a.reduce((b,O)=>{var x;return b+((x=O.nutrition)==null?void 0:x.carbogidrate)},0));const I={breakfast:{carbs:w,protein:i,fat:d},lunch:{carbs:u,protein:C,fat:m},dinner:{carbs:v,protein:g,fat:_},snack:{carbs:A,protein:$,fat:R}};return n.jsxs(lo,{children:[n.jsxs(so,{children:[n.jsx(co,{children:"Diary"}),n.jsx(po,{to:"/diary",children:"See more"})]}),n.jsx(uo,{children:c.map((b,O)=>n.jsx(Nr,{meal:l[b],typefood:b,title:b,totalCarbs:I[b].carbs,totalProtein:I[b].protein,totalFat:I[b].fat,src:Ur[O]},b))})]})},Hr=s.div`
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
`,Vr=()=>{const t=Z();return D.useEffect(()=>{t(jt()),t(Et()),t(kt())},[t]),n.jsxs(n.Fragment,{children:[n.jsx(io,{}),n.jsxs(Hr,{children:[n.jsx(Br,{}),n.jsx(en,{})]})]})};export{Vr as default};
