import{s,k as E,m as Ie,n as Ue,j as n,o as U,t as I,p as mt,q as vt,v as gt,r as R,u as oe,w as xt,x as yt,L as Be,y as bt,z as wt,A as Ct,B as Ot,C as _t,D as St,G as jt,H as Et}from"./index-02caf8bd.js";import{C as He,A as kt,p as ze,a as qe,D as Mt,b as Tt,L as Pt,B as Rt,c as Dt,d as At}from"./index-d5dc33a4.js";import{s as Ft,a as Nt,b as Wt,c as Lt,C as $t,T as It,M as Ut,d as Ke,e as Bt,B as Ht,f as zt,g as qt,h as Kt,A as Gt,i as Vt,j as Yt,k as Zt,l as Jt}from"./Reacord.styled-ff19a0b6.js";import{R as Qt}from"./RecommendedList-79a2ccca.js";var Ge={exports:{}},Xt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",en=Xt,tn=en;function Ve(){}function Ye(){}Ye.resetWarningCache=Ve;var nn=function(){function t(a,l,c,d,i,w){if(w!==tn){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ye,resetWarningCache:Ve};return o.PropTypes=o,o};Ge.exports=nn();var Ze=Ge.exports;const on=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,rn=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,an=s.ul`
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
`,ln=s.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,sn=s.svg`
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
`,cn=s.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,dn=()=>{const t=E(Ie),e=E(Ue);return n.jsxs(on,{children:[n.jsx(rn,{children:"Daily goal"}),n.jsxs(an,{children:[n.jsxs(je,{children:[n.jsx(ln,{children:n.jsx("use",{href:`${U}#bubble`})}),n.jsxs(Ee,{children:[n.jsx("p",{children:"Calories"}),n.jsx(ke,{children:t})]})]}),n.jsxs(je,{children:[n.jsx(sn,{children:n.jsx("use",{href:`${U}#milk`})}),n.jsxs(Ee,{children:[n.jsx("p",{children:" Water"}),n.jsxs(ke,{children:[e," ",n.jsx(cn,{children:"ml"})]})]})]})]})]})};He.register(kt,ze,qe);const pn={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},un={id:"bgCircle",beforeDatasetsDraw(t){const{ctx:e}=t;e.save();const o=t.getDatasetMeta(0).data[0].x,a=t.getDatasetMeta(0).data[0].y,l=t.getDatasetMeta(0).data[0].innerRadius,c=t.getDatasetMeta(0).data[0].outerRadius,d=c-l,i=Math.PI/180;e.beginPath(),e.lineWidth=d,e.strokeStyle=`${I.palette.greyone.main}`,e.arc(o,a,c-d/2,0,i*360,!1),e.stroke()}},Je=({dailyGoal:t,filledValue:e,bgColor:o})=>{let a=t-e;e>t&&(a=0);const l={datasets:[{label:[],data:[e,a],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return n.jsx(n.Fragment,{children:n.jsx(Mt,{options:pn,data:l,plugins:[un]})})},fn=s.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,hn=s.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,mn=s.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,vn=s.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,Me=s.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,gn=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,me=({title:t,bgColor:e,dailyGoal:o,filledValue:a})=>{a||(a=0);let l=Math.round(a*100/o),c=(o-a).toFixed(0);return a>o&&(c=0),l>100&&(l=100),n.jsxs(hn,{children:[n.jsxs(fn,{children:[n.jsx(Je,{dailyGoal:o,filledValue:a,bgColor:e}),n.jsx(gn,{children:n.jsx("p",{children:`${l}%`})})]}),n.jsxs("div",{children:[n.jsx(vn,{children:t}),n.jsxs(mn,{children:[n.jsxs("p",{children:["Goal: ",n.jsx(Me,{children:o})]}),n.jsxs("p",{children:["left: ",n.jsx(Me,{children:c})]})]})]})]})},xn=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,yn=s.div`
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
`,bn=s.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,wn=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;s.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const Cn=s.div`
  position: relative;
  width: 168px;
  height: 168px;
`,ve=s.li`
  display: flex;
`,On=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,_n=s.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Sn=s.p`
  color: var(--primary-color-grey);
`,jn=()=>{const t=`${I.palette.litegreen.main}`,e=`${I.palette.pink.main}`,o=`${I.palette.yellow.main}`,a=`${I.palette.grey.main}`,l=E(Ie),c=E(mt),d=E(vt),i=E(gt),w=E(Ft),g=E(Nt),h=E(Wt),m=E(Lt);return n.jsxs(xn,{children:[n.jsx(wn,{children:"Food"}),n.jsxs(yn,{children:[n.jsxs(Cn,{children:[n.jsx(Je,{dailyGoal:l,filledValue:w,bgColor:t}),n.jsxs(On,{children:[n.jsx(_n,{children:w||0}),n.jsx(Sn,{children:"calories"})]})]}),n.jsxs(bn,{children:[n.jsx(ve,{children:n.jsx(me,{title:"Carbonohidrates",bgColor:e,dailyGoal:c,filledValue:g})}),n.jsx(ve,{children:n.jsx(me,{title:"Protein",bgColor:o,dailyGoal:d,filledValue:h})}),n.jsx(ve,{children:n.jsx(me,{title:"Fat",bgColor:a,dailyGoal:i,filledValue:m})})]})]})]})},En=s.div`
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
`,kn=s.div`
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
`,Mn=s.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Tn=s.button`
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
`,Pn=s.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,Rn=s.input`
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
`,Dn=s.button`
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
`,An=({isModalOpen:t,setIsModalOpen:e})=>{const[o,a]=R.useState(0),l=oe(),c=d=>{d.preventDefault(),l(xt({value:o})),e(!1)};return R.useEffect(()=>{const d=i=>{i.code==="Escape"&&e(!1)};return t?(document.addEventListener("keydown",d),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",d),document.body.style.overflow="unset"}},[t,e]),n.jsx(En,{onClick:()=>e(!1),children:n.jsxs(kn,{onClick:d=>d.stopPropagation(),children:[n.jsx(Pn,{children:"Add water intake"}),n.jsxs(Mn,{onSubmit:c,children:[n.jsxs("label",{children:["How much water",n.jsx(Rn,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:d=>a(Number(d.target.value)),value:o||"",min:1})]}),n.jsx(Tn,{type:"submit",children:"Confirm"}),n.jsx(Dn,{type:"button",onClick:()=>e(!1),children:"Cancel"})]})]})})};He.register(Tt,Pt,Rt,Dt,ze,qe);const Fn={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Nn=({waterIntake:t})=>{const e={labels:["Intake"],datasets:[{label:"Water",data:[t],backgroundColor:`${I.palette.violet.main}`,hoverBackgroundColor:`${I.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return n.jsx(At,{data:e,options:Fn})},Wn=t=>t.dailyWaterStatistics.consumedWater.value,Ln=t=>t.dailyWaterStatistics.consumedWater._id,$n=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,In=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,Un=s.div`
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
`,Bn=s.h4`
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
`,Hn=s.span`
  color: var(--primary-color-white);
`,zn=s.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,qn=s.svg`
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
`,Kn=s.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,Gn=s.button`
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
`,Vn=s.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,Yn=s.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,Zn=s.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,Jn=()=>{const[t,e]=R.useState(!1),o=oe(),a=E(Ln),l=E(Ue),c=E(Wn),d=c<=l?Math.round(c*100/l):100;let i=l-c;c>l&&(i=0);const w={color:d>85?`${I.palette.greyone.main}`:`${I.palette.violet.main}`};return n.jsxs($n,{children:[n.jsx(In,{children:"Water"}),n.jsxs(Un,{children:[n.jsx(qn,{width:"20px",height:"20px",onClick:()=>{o(yt(a))},children:n.jsx("use",{href:`${U}#trash-delete`})}),n.jsx(Vn,{children:n.jsxs(Yn,{children:[n.jsx(Nn,{waterIntake:d}),n.jsx(Zn,{style:w,children:`${d}%`})]})}),n.jsxs("div",{children:[n.jsx(Bn,{children:"Water consumption"}),n.jsxs(Te,{children:[n.jsx(zn,{children:c}),"ml"]}),n.jsxs(Te,{children:[n.jsx(Hn,{children:"left:"})," ",`${i} ml`]}),n.jsxs(Gn,{type:"button",onClick:()=>e(!0),children:[n.jsx(Kn,{children:n.jsx("use",{href:`${U}#icon-add-converted`})}),"Add water intake"]})]})]}),t&&n.jsx(An,{setIsModalOpen:e,isModalOpen:t})]})},Qn=s.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,Xn=s.div`
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
`,eo=s.div`
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
`,to=s.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,no=s(Be)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,oo=s.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,ro=()=>n.jsxs(Qn,{children:[n.jsxs(Xn,{children:[n.jsx(to,{children:"Today"}),n.jsxs(no,{to:"/dashboard",children:["On the way to the goal",n.jsx(oo,{children:n.jsx("use",{href:`${U}#icon-arrowright`})})]})]}),n.jsxs(eo,{children:[n.jsx(dn,{}),n.jsx(Jn,{}),n.jsx(jn,{})]})]}),ao=s.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,io=s.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,lo=s.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,so=s(Be)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,co=s.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,po=s.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,uo=s.div`
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
`,fo=s.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,ho=s.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,mo=s.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,vo=s.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,go=s.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;var ye={exports:{}},V={},be={exports:{}},W={},we={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=h;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",l=/input|select|textarea|button|object|iframe/;function c(m,y){return y.getPropertyValue("overflow")!=="visible"||m.scrollWidth<=0&&m.scrollHeight<=0}function d(m){var y=m.offsetWidth<=0&&m.offsetHeight<=0;if(y&&!m.innerHTML)return!0;try{var O=window.getComputedStyle(m),_=O.getPropertyValue("display");return y?_!==a&&c(m,O):_===o}catch{return console.warn("Failed to inspect element style"),!1}}function i(m){for(var y=m,O=m.getRootNode&&m.getRootNode();y&&y!==document.body;){if(O&&y===O&&(y=O.host.parentNode),d(y))return!1;y=y.parentNode}return!0}function w(m,y){var O=m.nodeName.toLowerCase(),_=l.test(O)&&!m.disabled||O==="a"&&m.href||y;return _&&i(m)}function g(m){var y=m.getAttribute("tabindex");y===null&&(y=void 0);var O=isNaN(y);return(O||y>=0)&&w(m,!O)}function h(m){var y=[].slice.call(m.querySelectorAll("*"),0).reduce(function(O,_){return O.concat(_.shadowRoot?h(_.shadowRoot):[_])},[]);return y.filter(g)}t.exports=e.default})(we,we.exports);var Qe=we.exports;Object.defineProperty(W,"__esModule",{value:!0});W.resetState=wo;W.log=Co;W.handleBlur=te;W.handleFocus=ne;W.markForFocusLater=Oo;W.returnFocus=_o;W.popWithoutFocus=So;W.setupScopedFocus=jo;W.teardownScopedFocus=Eo;var xo=Qe,yo=bo(xo);function bo(t){return t&&t.__esModule?t:{default:t}}var Z=[],Y=null,Ce=!1;function wo(){Z=[]}function Co(){}function te(){Ce=!0}function ne(){if(Ce){if(Ce=!1,!Y)return;setTimeout(function(){if(!Y.contains(document.activeElement)){var t=(0,yo.default)(Y)[0]||Y;t.focus()}},0)}}function Oo(){Z.push(document.activeElement)}function _o(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Z.length!==0&&(e=Z.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function So(){Z.length>0&&Z.pop()}function jo(t){Y=t,window.addEventListener?(window.addEventListener("blur",te,!1),document.addEventListener("focus",ne,!0)):(window.attachEvent("onBlur",te),document.attachEvent("onFocus",ne))}function Eo(){Y=null,window.addEventListener?(window.removeEventListener("blur",te),document.removeEventListener("focus",ne)):(window.detachEvent("onBlur",te),document.detachEvent("onFocus",ne))}var Oe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var o=Qe,a=l(o);function l(i){return i&&i.__esModule?i:{default:i}}function c(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?c(i.activeElement.shadowRoot):i.activeElement}function d(i,w){var g=(0,a.default)(i);if(!g.length){w.preventDefault();return}var h=void 0,m=w.shiftKey,y=g[0],O=g[g.length-1],_=c();if(i===_){if(!m)return;h=O}if(O===_&&!m&&(h=y),y===_&&m&&(h=O),h){w.preventDefault(),h.focus();return}var P=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),$=P!=null&&P[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if($){var A=g.indexOf(_);if(A>-1&&(A+=m?-1:1),h=g[A],typeof h>"u"){w.preventDefault(),h=m?O:y,h.focus();return}w.preventDefault(),h.focus()}}t.exports=e.default})(Oe,Oe.exports);var ko=Oe.exports,L={},Mo=function(){},To=Mo,N={},Xe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Xe);var Po=Xe.exports;Object.defineProperty(N,"__esModule",{value:!0});N.canUseDOM=N.SafeNodeList=N.SafeHTMLCollection=void 0;var Ro=Po,Do=Ao(Ro);function Ao(t){return t&&t.__esModule?t:{default:t}}var ue=Do.default,Fo=ue.canUseDOM?window.HTMLElement:{};N.SafeHTMLCollection=ue.canUseDOM?window.HTMLCollection:{};N.SafeNodeList=ue.canUseDOM?window.NodeList:{};N.canUseDOM=ue.canUseDOM;N.default=Fo;Object.defineProperty(L,"__esModule",{value:!0});L.resetState=Io;L.log=Uo;L.assertNodeList=et;L.setElement=Bo;L.validateElement=_e;L.hide=Ho;L.show=zo;L.documentNotReadyOrSSRTesting=qo;var No=To,Wo=$o(No),Lo=N;function $o(t){return t&&t.__esModule?t:{default:t}}var D=null;function Io(){D&&(D.removeAttribute?D.removeAttribute("aria-hidden"):D.length!=null?D.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(D).forEach(function(t){return t.removeAttribute("aria-hidden")})),D=null}function Uo(){}function et(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Bo(t){var e=t;if(typeof e=="string"&&Lo.canUseDOM){var o=document.querySelectorAll(e);et(o,e),e=o}return D=e||D,D}function _e(t){var e=t||D;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Wo.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ho(t){var e=!0,o=!1,a=void 0;try{for(var l=_e(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.setAttribute("aria-hidden","true")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function zo(t){var e=!0,o=!1,a=void 0;try{for(var l=_e(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.removeAttribute("aria-hidden")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function qo(){D=null}var J={};Object.defineProperty(J,"__esModule",{value:!0});J.resetState=Ko;J.log=Go;var X={},ee={};function Pe(t,e){t.classList.remove(e)}function Ko(){var t=document.getElementsByTagName("html")[0];for(var e in X)Pe(t,X[e]);var o=document.body;for(var a in ee)Pe(o,ee[a]);X={},ee={}}function Go(){}var Vo=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Yo=function(e,o){return e[o]&&(e[o]-=1),o},Zo=function(e,o,a){a.forEach(function(l){Vo(o,l),e.add(l)})},Jo=function(e,o,a){a.forEach(function(l){Yo(o,l),o[l]===0&&e.remove(l)})};J.add=function(e,o){return Zo(e.classList,e.nodeName.toLowerCase()=="html"?X:ee,o.split(" "))};J.remove=function(e,o){return Jo(e.classList,e.nodeName.toLowerCase()=="html"?X:ee,o.split(" "))};var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.log=Xo;Q.resetState=er;function Qo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var tt=function t(){var e=this;Qo(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ce=new tt;function Xo(){console.log("portalOpenInstances ----------"),console.log(ce.openInstances.length),ce.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function er(){ce=new tt}Q.default=ce;var Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.resetState=rr;Se.log=ar;var tr=Q,nr=or(tr);function or(t){return t&&t.__esModule?t:{default:t}}var M=void 0,F=void 0,G=[];function rr(){for(var t=[M,F],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}M=F=null,G=[]}function ar(){console.log("bodyTrap ----------"),console.log(G.length);for(var t=[M,F],e=0;e<t.length;e++){var o=t[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Re(){G.length!==0&&G[G.length-1].focusContent()}function ir(t,e){!M&&!F&&(M=document.createElement("div"),M.setAttribute("data-react-modal-body-trap",""),M.style.position="absolute",M.style.opacity="0",M.setAttribute("tabindex","0"),M.addEventListener("focus",Re),F=M.cloneNode(),F.addEventListener("focus",Re)),G=e,G.length>0?(document.body.firstChild!==M&&document.body.insertBefore(M,document.body.firstChild),document.body.lastChild!==F&&document.body.appendChild(F)):(M.parentElement&&M.parentElement.removeChild(M),F.parentElement&&F.parentElement.removeChild(F))}nr.default.subscribe(ir);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(x){for(var v=1;v<arguments.length;v++){var S=arguments[v];for(var r in S)Object.prototype.hasOwnProperty.call(S,r)&&(x[r]=S[r])}return x},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},l=function(){function x(v,S){for(var r=0;r<S.length;r++){var p=S[r];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(v,p.key,p)}}return function(v,S,r){return S&&x(v.prototype,S),r&&x(v,r),v}}(),c=R,d=Ze,i=u(d),w=W,g=b(w),h=ko,m=u(h),y=L,O=b(y),_=J,P=b(_),$=N,A=u($),H=Q,C=u(H);function b(x){if(x&&x.__esModule)return x;var v={};if(x!=null)for(var S in x)Object.prototype.hasOwnProperty.call(x,S)&&(v[S]=x[S]);return v.default=x,v}function u(x){return x&&x.__esModule?x:{default:x}}function lt(x,v){if(!(x instanceof v))throw new TypeError("Cannot call a class as a function")}function st(x,v){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:x}function ct(x,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);x.prototype=Object.create(v&&v.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(x,v):x.__proto__=v)}var fe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},dt=function(v){return v.code==="Tab"||v.keyCode===9},pt=function(v){return v.code==="Escape"||v.keyCode===27},ie=0,he=function(x){ct(v,x);function v(S){lt(this,v);var r=st(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,S));return r.setOverlayRef=function(p){r.overlay=p,r.props.overlayRef&&r.props.overlayRef(p)},r.setContentRef=function(p){r.content=p,r.props.contentRef&&r.props.contentRef(p)},r.afterClose=function(){var p=r.props,k=p.appElement,T=p.ariaHideApp,j=p.htmlOpenClassName,z=p.bodyOpenClassName,q=p.parentSelector,le=q&&q().ownerDocument||document;z&&P.remove(le.body,z),j&&P.remove(le.getElementsByTagName("html")[0],j),T&&ie>0&&(ie-=1,ie===0&&O.show(k)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(g.returnFocus(r.props.preventScroll),g.teardownScopedFocus()):g.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),C.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(g.setupScopedFocus(r.node),g.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var p=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:p},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(p){dt(p)&&(0,m.default)(r.content,p),r.props.shouldCloseOnEsc&&pt(p)&&(p.stopPropagation(),r.requestClose(p))},r.handleOverlayOnClick=function(p){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(p):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(p){!r.props.shouldCloseOnOverlayClick&&p.target==r.overlay&&p.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(p){return r.ownerHandlesClose()&&r.props.onRequestClose(p)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(p,k){var T=(typeof k>"u"?"undefined":a(k))==="object"?k:{base:fe[p],afterOpen:fe[p]+"--after-open",beforeClose:fe[p]+"--before-close"},j=T.base;return r.state.afterOpen&&(j=j+" "+T.afterOpen),r.state.beforeClose&&(j=j+" "+T.beforeClose),typeof k=="string"&&k?j+" "+k:j},r.attributesFromObject=function(p,k){return Object.keys(k).reduce(function(T,j){return T[p+"-"+j]=k[j],T},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return l(v,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,p){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!p.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,p=r.appElement,k=r.ariaHideApp,T=r.htmlOpenClassName,j=r.bodyOpenClassName,z=r.parentSelector,q=z&&z().ownerDocument||document;j&&P.add(q.body,j),T&&P.add(q.getElementsByTagName("html")[0],T),k&&(ie+=1,O.hide(p)),C.default.register(this)}},{key:"render",value:function(){var r=this.props,p=r.id,k=r.className,T=r.overlayClassName,j=r.defaultStyles,z=r.children,q=k?{}:j.content,le=T?{}:j.overlay;if(this.shouldBeClosed())return null;var ut={ref:this.setOverlayRef,className:this.buildClassName("overlay",T),style:o({},le,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ft=o({id:p,ref:this.setContentRef,style:o({},q,this.props.style.content),className:this.buildClassName("content",k),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ht=this.props.contentElement(ft,z);return this.props.overlayElement(ut,ht)}}]),v}(c.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(A.default),i.default.instanceOf($.SafeHTMLCollection),i.default.instanceOf($.SafeNodeList),i.default.arrayOf(i.default.instanceOf(A.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},e.default=he,t.exports=e.default})(be,be.exports);var lr=be.exports;function nt(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function ot(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function rt(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}nt.__suppressDeprecationWarning=!0;ot.__suppressDeprecationWarning=!0;rt.__suppressDeprecationWarning=!0;function sr(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||a!==null||l!==null){var c=t.displayName||t.name,d=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+d+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=nt,e.componentWillReceiveProps=ot),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=rt;var i=e.componentDidUpdate;e.componentDidUpdate=function(g,h,m){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:m;i.call(this,g,h,y)}}return t}const cr=Object.freeze(Object.defineProperty({__proto__:null,polyfill:sr},Symbol.toStringTag,{value:"Module"})),dr=bt(cr);Object.defineProperty(V,"__esModule",{value:!0});V.bodyOpenClassName=V.portalClassName=void 0;var De=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},pr=function(){function t(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),at=R,de=re(at),ur=wt,pe=re(ur),fr=Ze,f=re(fr),hr=lr,Ae=re(hr),mr=L,vr=xr(mr),B=N,Fe=re(B),gr=dr;function xr(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function re(t){return t&&t.__esModule?t:{default:t}}function yr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ne(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function br(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var wr=V.portalClassName="ReactModalPortal",Cr=V.bodyOpenClassName="ReactModal__Body--open",K=B.canUseDOM&&pe.default.createPortal!==void 0,We=function(e){return document.createElement(e)},Le=function(){return K?pe.default.createPortal:pe.default.unstable_renderSubtreeIntoContainer};function se(t){return t()}var ae=function(t){br(e,t);function e(){var o,a,l,c;yr(this,e);for(var d=arguments.length,i=Array(d),w=0;w<d;w++)i[w]=arguments[w];return c=(a=(l=Ne(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(i))),l),l.removePortal=function(){!K&&pe.default.unmountComponentAtNode(l.node);var g=se(l.props.parentSelector);g&&g.contains(l.node)?g.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(g){l.portal=g},l.renderPortal=function(g){var h=Le(),m=h(l,de.default.createElement(Ae.default,De({defaultStyles:e.defaultStyles},g)),l.node);l.portalRef(m)},a),Ne(l,c)}return pr(e,[{key:"componentDidMount",value:function(){if(B.canUseDOM){K||(this.node=We("div")),this.node.className=this.props.portalClassName;var a=se(this.props.parentSelector);a.appendChild(this.node),!K&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=se(a.parentSelector),c=se(this.props.parentSelector);return{prevParent:l,nextParent:c}}},{key:"componentDidUpdate",value:function(a,l,c){if(B.canUseDOM){var d=this.props,i=d.isOpen,w=d.portalClassName;a.portalClassName!==w&&(this.node.className=w);var g=c.prevParent,h=c.nextParent;h!==g&&(g.removeChild(this.node),h.appendChild(this.node)),!(!a.isOpen&&!i)&&!K&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!B.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),c=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);c?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-l)):this.removePortal()}}},{key:"render",value:function(){if(!B.canUseDOM||!K)return null;!this.node&&K&&(this.node=We("div"));var a=Le();return a(de.default.createElement(Ae.default,De({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){vr.setElement(a)}}]),e}(at.Component);ae.propTypes={isOpen:f.default.bool.isRequired,style:f.default.shape({content:f.default.object,overlay:f.default.object}),portalClassName:f.default.string,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,className:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),overlayClassName:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),appElement:f.default.oneOfType([f.default.instanceOf(Fe.default),f.default.instanceOf(B.SafeHTMLCollection),f.default.instanceOf(B.SafeNodeList),f.default.arrayOf(f.default.instanceOf(Fe.default))]),onAfterOpen:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,ariaHideApp:f.default.bool,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,preventScroll:f.default.bool,parentSelector:f.default.func,aria:f.default.object,data:f.default.object,role:f.default.string,contentLabel:f.default.string,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,id:f.default.string,overlayElement:f.default.func,contentElement:f.default.func};ae.defaultProps={isOpen:!1,portalClassName:wr,bodyOpenClassName:Cr,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return de.default.createElement("div",e,o)},contentElement:function(e,o){return de.default.createElement("div",e,o)}};ae.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,gr.polyfill)(ae);V.default=ae;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=V,a=l(o);function l(c){return c&&c.__esModule?c:{default:c}}e.default=a.default,t.exports=e.default})(ye,ye.exports);var Or=ye.exports;const it=Ct(Or),_r=s.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Sr=s.button`
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
`,jr=s.div`
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
`,Er=s.div`
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
`,kr=({setName:t,setColories:e,setCarbogidrate:o,setProtein:a,setFat:l,name:c,calories:d,carbogidrate:i,protein:w,fat:g})=>n.jsxs(jr,{children:[n.jsx(xe,{value:c,placeholder:"The name of the product or dish",onChange:h=>{t(h.target.value)}}),n.jsx(xe,{type:"number",min:1,onChange:h=>{o(h.target.value)},value:i,placeholder:"Carbonoh"}),n.jsx(xe,{min:1,type:"number",onChange:h=>{a(h.target.value)},value:w,placeholder:"Protein"}),n.jsxs(Er,{children:[n.jsx($e,{min:1,type:"number",onChange:h=>{l(h.target.value)},value:g,placeholder:"Fat"}),n.jsx($e,{min:1,type:"number",onChange:h=>{e(h.target.value)},value:d,placeholder:"Calories"}),n.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:n.jsx("use",{href:`${U}#trash-delete`})})]})]}),Mr={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};it.setAppElement("#root");const Tr=({stateModal:t,closeModal:e,typefood:o})=>{const a=oe(),[l,c]=R.useState(""),[d,i]=R.useState(""),[w,g]=R.useState(""),[h,m]=R.useState(""),[y,O]=R.useState(""),[_,P]=R.useState([1]),$={typeFood:o,userFood:[{name:l,calories:d,nutrition:{carbogidrate:w,protein:h,fat:y}}]},A=b=>{b.preventDefault(),a(Ot($)),e()},H=[_],C=()=>{P(b=>{console.log(b);const u=b.lenght-1;[...b,b[u]+1]})};return n.jsx(it,{isOpen:t,onRequestClose:e,style:Mr,children:n.jsxs($t,{children:[n.jsx(It,{children:"Record your meal"}),n.jsxs(Ut,{style:{marginTop:"24px"},children:[n.jsx(Ke,{src:"src/assets/images/Breakfast.png"}),n.jsx(Bt,{})]}),n.jsxs("form",{onSubmit:A,children:[H.map((b,u)=>n.jsx(kr,{setName:c,setColories:i,setCarbogidrate:g,setProtein:m,setFat:O,name:l,calories:d,carbogidrate:w,protein:h,fat:y},u)),n.jsxs(Sr,{onClick:C,type:"button",children:[n.jsx(_r,{children:n.jsx("use",{href:`${U}#icon-add-converted`})}),"Add more"]}),n.jsxs(Ht,{children:[n.jsx(zt,{type:"submit",children:"Confirm"}),n.jsx(qt,{onClick:e,type:"button",children:"Cancel"})]})]})]})})},Pr=({meal:t,title:e,totalCarbs:o,totalProtein:a,totalFat:l,typefood:c,src:d})=>{const i=oe(),w=O=>{i(_t({userFood:{},typeFood:O}))};E(Kt),e.toLowerCase();const[g,h]=R.useState(!1),m=()=>h(!0),y=()=>h(!1);return n.jsxs(po,{children:[n.jsx(Tr,{closeModal:y,stateModal:g,typefood:c}),n.jsxs(ho,{children:[n.jsx(Ke,{src:d}),n.jsx(fo,{children:e})]}),n.jsx(uo,{children:(t==null?void 0:t.length)>0?n.jsxs(n.Fragment,{children:[n.jsxs(ge,{children:["Carbonohidrates: ",o]}),n.jsxs(ge,{children:["Protein: ",a]}),n.jsxs(ge,{children:["Fat: ",l,n.jsx(mo,{onClick:()=>w(e.toLowerCase()),children:n.jsx("use",{href:`${U}#trash-delete`})})]})]}):n.jsxs(go,{id:c,"data-site":c,onClick:m,children:[n.jsx(Gt,{children:"Record your meal"}),n.jsx(vo,{children:n.jsx("use",{href:`${U}#icon-add-converted`})})]})})]})},Rr="/Healthy_life/assets/Breakfast-ebbae9d6.png",Dr="/Healthy_life/assets/Dinner-3e075f11.png",Ar="/Healthy_life/assets/Lunch-b9834f5c.png",Fr="/Healthy_life/assets/Snack-986b08ce.png",Nr=[Rr,Ar,Dr,Fr],Wr=()=>{const t=E(Vt),e=E(Yt),o=E(Zt),a=E(Jt),l={breakfast:t,lunch:e,dinner:o,snack:a},c=["breakfast","lunch","dinner","snack"];let d=0,i=0,w=0,g=0,h=0,m=0,y=0,O=0,_=0,P=0,$=0,A=0;(t==null?void 0:t.length)>0&&(d=t.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.fat)},0),i=t.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.protein)},0),w=t.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.carbogidrate)},0)),(e==null?void 0:e.length)>0&&(g=e.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.fat)},0),h=e.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.protein)},0),m=e.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.carbogidrate)},0)),(o==null?void 0:o.length)>0&&(y=o.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.protein)},0),O=o.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.carbogidrate)},0),_=o.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.fat)},0)),(a==null?void 0:a.length)>0&&(P=a.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.fat)},0),$=a.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.protein)},0),A=a.reduce((C,b)=>{var u;return C+((u=b.nutrition)==null?void 0:u.carbogidrate)},0));const H={breakfast:{carbs:w,protein:i,fat:d},lunch:{carbs:m,protein:h,fat:g},dinner:{carbs:O,protein:y,fat:_},snack:{carbs:A,protein:$,fat:P}};return n.jsxs(ao,{children:[n.jsxs(io,{children:[n.jsx(lo,{children:"Diary"}),n.jsx(so,{to:"/diary",children:"See more"})]}),n.jsx(co,{children:c.map((C,b)=>n.jsx(Pr,{meal:l[C],typefood:C,title:C,totalCarbs:H[C].carbs,totalProtein:H[C].protein,totalFat:H[C].fat,src:Nr[b]},C))})]})},Lr=s.div`
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
`,Hr=()=>{const t=oe();return R.useEffect(()=>{t(St()),t(jt()),t(Et())},[t]),n.jsxs(n.Fragment,{children:[n.jsx(ro,{}),n.jsxs(Lr,{children:[n.jsx(Wr,{}),n.jsx(Qt,{})]})]})};export{Hr as default};
