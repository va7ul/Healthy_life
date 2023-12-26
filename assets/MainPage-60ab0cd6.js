import{s,k as j,m as Ue,n as Ie,j as o,o as B,t as U,p as mt,q as vt,v as gt,r as D,u as oe,w as xt,x as yt,L as Be,y as bt,z as wt,A as Ct,B as Ot,C as _t,D as St,G as Et,H as jt}from"./index-930f9377.js";import{C as He,A as Mt,p as ze,a as qe,D as kt,b as Tt,L as Rt,B as Pt,c as Dt,d as Ft}from"./index-2e9a259b.js";import{s as At,a as Nt,b as Wt,c as Lt,C as $t,T as Ut,M as It,d as Ke,e as Bt,B as Ht,f as zt,g as qt,h as Kt,A as Gt,i as Vt,j as Yt,k as Zt,l as Jt}from"./Reacord.styled-58b2e0f7.js";import{R as Qt}from"./RecommendedList-d0a96e94.js";var Ge={exports:{}},Xt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",en=Xt,tn=en;function Ve(){}function Ye(){}Ye.resetWarningCache=Ve;var nn=function(){function t(a,l,c,d,i,b){if(b!==tn){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ye,resetWarningCache:Ve};return n.PropTypes=n,n};Ge.exports=nn();var Ze=Ge.exports;const on=s.div`
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
`,Ee=s.li`
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
`,je=s.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,Me=s.p`
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
`,dn=()=>{const t=j(Ue),e=j(Ie);return o.jsxs(on,{children:[o.jsx(rn,{children:"Daily goal"}),o.jsxs(an,{children:[o.jsxs(Ee,{children:[o.jsx(ln,{children:o.jsx("use",{href:`${B}#bubble`})}),o.jsxs(je,{children:[o.jsx("p",{children:"Calories"}),o.jsx(Me,{children:t})]})]}),o.jsxs(Ee,{children:[o.jsx(sn,{children:o.jsx("use",{href:`${B}#milk`})}),o.jsxs(je,{children:[o.jsx("p",{children:" Water"}),o.jsxs(Me,{children:[e," ",o.jsx(cn,{children:"ml"})]})]})]})]})]})};He.register(Mt,ze,qe);const pn={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},un={id:"bgCircle",beforeDatasetsDraw(t){const{ctx:e}=t;e.save();const n=t.getDatasetMeta(0).data[0].x,a=t.getDatasetMeta(0).data[0].y,l=t.getDatasetMeta(0).data[0].innerRadius,c=t.getDatasetMeta(0).data[0].outerRadius,d=c-l,i=Math.PI/180;e.beginPath(),e.lineWidth=d,e.strokeStyle=`${U.palette.greyone.main}`,e.arc(n,a,c-d/2,0,i*360,!1),e.stroke()}},Je=({dailyGoal:t,filledValue:e,bgColor:n})=>{let a=t-e;e>t&&(a=0);const l={datasets:[{label:[],data:[e,a],backgroundColor:[n,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return o.jsx(o.Fragment,{children:o.jsx(kt,{options:pn,data:l,plugins:[un]})})},fn=s.div`
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
`,ke=s.span`
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
`,me=({title:t,bgColor:e,dailyGoal:n,filledValue:a})=>{a||(a=0);let l=Math.round(a*100/n),c=(n-a).toFixed(0);return a>n&&(c=0),l>100&&(l=100),o.jsxs(hn,{children:[o.jsxs(fn,{children:[o.jsx(Je,{dailyGoal:n,filledValue:a,bgColor:e}),o.jsx(gn,{children:o.jsx("p",{children:`${l}%`})})]}),o.jsxs("div",{children:[o.jsx(vn,{children:t}),o.jsxs(mn,{children:[o.jsxs("p",{children:["Goal: ",o.jsx(ke,{children:n})]}),o.jsxs("p",{children:["left: ",o.jsx(ke,{children:c})]})]})]})]})},xn=s.div`
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
`,En=()=>{const t=`${U.palette.litegreen.main}`,e=`${U.palette.pink.main}`,n=`${U.palette.yellow.main}`,a=`${U.palette.grey.main}`,l=j(Ue),c=j(mt),d=j(vt),i=j(gt),b=j(At),v=j(Nt),f=j(Wt),h=j(Lt);return o.jsxs(xn,{children:[o.jsx(wn,{children:"Food"}),o.jsxs(yn,{children:[o.jsxs(Cn,{children:[o.jsx(Je,{dailyGoal:l,filledValue:b,bgColor:t}),o.jsxs(On,{children:[o.jsx(_n,{children:b||0}),o.jsx(Sn,{children:"calories"})]})]}),o.jsxs(bn,{children:[o.jsx(ve,{children:o.jsx(me,{title:"Carbonohidrates",bgColor:e,dailyGoal:c,filledValue:v})}),o.jsx(ve,{children:o.jsx(me,{title:"Protein",bgColor:n,dailyGoal:d,filledValue:f})}),o.jsx(ve,{children:o.jsx(me,{title:"Fat",bgColor:a,dailyGoal:i,filledValue:h})})]})]})]})},jn=s.div`
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
`,Mn=s.div`
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
`,kn=s.form`
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
`,Rn=s.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,Pn=s.input`
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
`,Fn=({isModalOpen:t,setIsModalOpen:e})=>{const[n,a]=D.useState(0),l=oe(),c=d=>{d.preventDefault(),l(xt({value:n})),e(!1)};return D.useEffect(()=>{const d=i=>{i.code==="Escape"&&e(!1)};return t?(document.addEventListener("keydown",d),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",d),document.body.style.overflow="unset"}},[t,e]),o.jsx(jn,{onClick:()=>e(!1),children:o.jsxs(Mn,{onClick:d=>d.stopPropagation(),children:[o.jsx(Rn,{children:"Add water intake"}),o.jsxs(kn,{onSubmit:c,children:[o.jsxs("label",{children:["How much water",o.jsx(Pn,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:d=>a(Number(d.target.value)),value:n||"",min:1})]}),o.jsx(Tn,{type:"submit",children:"Confirm"}),o.jsx(Dn,{type:"button",onClick:()=>e(!1),children:"Cancel"})]})]})})};He.register(Tt,Rt,Pt,Dt,ze,qe);const An={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Nn=({waterIntake:t})=>{const e={labels:["Intake"],datasets:[{label:"Water",data:[t],backgroundColor:`${U.palette.violet.main}`,hoverBackgroundColor:`${U.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return o.jsx(Ft,{data:e,options:An})},Wn=t=>t.dailyWaterStatistics.consumedWater.value,Ln=t=>t.dailyWaterStatistics.consumedWater._id,$n=s.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,Un=s.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,In=s.div`
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
`,Jn=()=>{const[t,e]=D.useState(!1),n=oe(),a=j(Ln),l=j(Ie),c=j(Wn),d=c<=l?Math.round(c*100/l):100;let i=l-c;c>l&&(i=0);const b={color:d>85?`${U.palette.greyone.main}`:`${U.palette.violet.main}`};return o.jsxs($n,{children:[o.jsx(Un,{children:"Water"}),o.jsxs(In,{children:[o.jsx(qn,{width:"20px",height:"20px",onClick:()=>{n(yt(a))},children:o.jsx("use",{href:`${B}#trash-delete`})}),o.jsx(Vn,{children:o.jsxs(Yn,{children:[o.jsx(Nn,{waterIntake:d}),o.jsx(Zn,{style:b,children:`${d}%`})]})}),o.jsxs("div",{children:[o.jsx(Bn,{children:"Water consumption"}),o.jsxs(Te,{children:[o.jsx(zn,{children:c}),"ml"]}),o.jsxs(Te,{children:[o.jsx(Hn,{children:"left:"})," ",`${i} ml`]}),o.jsxs(Gn,{type:"button",onClick:()=>e(!0),children:[o.jsx(Kn,{children:o.jsx("use",{href:`${B}#icon-add-converted`})}),"Add water intake"]})]})]}),t&&o.jsx(Fn,{setIsModalOpen:e,isModalOpen:t})]})},Qn=s.div`
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
`,ro=()=>o.jsxs(Qn,{children:[o.jsxs(Xn,{children:[o.jsx(to,{children:"Today"}),o.jsxs(no,{to:"/dashboard",children:["On the way to the goal",o.jsx(oo,{children:o.jsx("use",{href:`${B}#icon-arrowright`})})]})]}),o.jsxs(eo,{children:[o.jsx(dn,{}),o.jsx(Jn,{}),o.jsx(En,{})]})]}),ao=s.div`
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
`;var ye={exports:{}},G={},be={exports:{}},N={},we={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",l=/input|select|textarea|button|object|iframe/;function c(h,y){return y.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function d(h){var y=h.offsetWidth<=0&&h.offsetHeight<=0;if(y&&!h.innerHTML)return!0;try{var C=window.getComputedStyle(h),_=C.getPropertyValue("display");return y?_!==a&&c(h,C):_===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(h){for(var y=h,C=h.getRootNode&&h.getRootNode();y&&y!==document.body;){if(C&&y===C&&(y=C.host.parentNode),d(y))return!1;y=y.parentNode}return!0}function b(h,y){var C=h.nodeName.toLowerCase(),_=l.test(C)&&!h.disabled||C==="a"&&h.href||y;return _&&i(h)}function v(h){var y=h.getAttribute("tabindex");y===null&&(y=void 0);var C=isNaN(y);return(C||y>=0)&&b(h,!C)}function f(h){var y=[].slice.call(h.querySelectorAll("*"),0).reduce(function(C,_){return C.concat(_.shadowRoot?f(_.shadowRoot):[_])},[]);return y.filter(v)}t.exports=e.default})(we,we.exports);var Qe=we.exports;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=wo;N.log=Co;N.handleBlur=te;N.handleFocus=ne;N.markForFocusLater=Oo;N.returnFocus=_o;N.popWithoutFocus=So;N.setupScopedFocus=Eo;N.teardownScopedFocus=jo;var xo=Qe,yo=bo(xo);function bo(t){return t&&t.__esModule?t:{default:t}}var Y=[],V=null,Ce=!1;function wo(){Y=[]}function Co(){}function te(){Ce=!0}function ne(){if(Ce){if(Ce=!1,!V)return;setTimeout(function(){if(!V.contains(document.activeElement)){var t=(0,yo.default)(V)[0]||V;t.focus()}},0)}}function Oo(){Y.push(document.activeElement)}function _o(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Y.length!==0&&(e=Y.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function So(){Y.length>0&&Y.pop()}function Eo(t){V=t,window.addEventListener?(window.addEventListener("blur",te,!1),document.addEventListener("focus",ne,!0)):(window.attachEvent("onBlur",te),document.attachEvent("onFocus",ne))}function jo(){V=null,window.addEventListener?(window.removeEventListener("blur",te),document.removeEventListener("focus",ne)):(window.detachEvent("onBlur",te),document.detachEvent("onFocus",ne))}var Oe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var n=Qe,a=l(n);function l(i){return i&&i.__esModule?i:{default:i}}function c(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?c(i.activeElement.shadowRoot):i.activeElement}function d(i,b){var v=(0,a.default)(i);if(!v.length){b.preventDefault();return}var f=void 0,h=b.shiftKey,y=v[0],C=v[v.length-1],_=c();if(i===_){if(!h)return;f=C}if(C===_&&!h&&(f=y),y===_&&h&&(f=C),f){b.preventDefault(),f.focus();return}var R=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),L=R!=null&&R[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(L){var $=v.indexOf(_);if($>-1&&($+=h?-1:1),f=v[$],typeof f>"u"){b.preventDefault(),f=h?C:y,f.focus();return}b.preventDefault(),f.focus()}}t.exports=e.default})(Oe,Oe.exports);var Mo=Oe.exports,W={},ko=function(){},To=ko,A={},Xe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(Xe);var Ro=Xe.exports;Object.defineProperty(A,"__esModule",{value:!0});A.canUseDOM=A.SafeNodeList=A.SafeHTMLCollection=void 0;var Po=Ro,Do=Fo(Po);function Fo(t){return t&&t.__esModule?t:{default:t}}var ue=Do.default,Ao=ue.canUseDOM?window.HTMLElement:{};A.SafeHTMLCollection=ue.canUseDOM?window.HTMLCollection:{};A.SafeNodeList=ue.canUseDOM?window.NodeList:{};A.canUseDOM=ue.canUseDOM;A.default=Ao;Object.defineProperty(W,"__esModule",{value:!0});W.resetState=Uo;W.log=Io;W.assertNodeList=et;W.setElement=Bo;W.validateElement=_e;W.hide=Ho;W.show=zo;W.documentNotReadyOrSSRTesting=qo;var No=To,Wo=$o(No),Lo=A;function $o(t){return t&&t.__esModule?t:{default:t}}var P=null;function Uo(){P&&(P.removeAttribute?P.removeAttribute("aria-hidden"):P.length!=null?P.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(P).forEach(function(t){return t.removeAttribute("aria-hidden")})),P=null}function Io(){}function et(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Bo(t){var e=t;if(typeof e=="string"&&Lo.canUseDOM){var n=document.querySelectorAll(e);et(n,e),e=n}return P=e||P,P}function _e(t){var e=t||P;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Wo.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ho(t){var e=!0,n=!1,a=void 0;try{for(var l=_e(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.setAttribute("aria-hidden","true")}}catch(i){n=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(n)throw a}}}function zo(t){var e=!0,n=!1,a=void 0;try{for(var l=_e(t)[Symbol.iterator](),c;!(e=(c=l.next()).done);e=!0){var d=c.value;d.removeAttribute("aria-hidden")}}catch(i){n=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(n)throw a}}}function qo(){P=null}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.resetState=Ko;Z.log=Go;var X={},ee={};function Re(t,e){t.classList.remove(e)}function Ko(){var t=document.getElementsByTagName("html")[0];for(var e in X)Re(t,X[e]);var n=document.body;for(var a in ee)Re(n,ee[a]);X={},ee={}}function Go(){}var Vo=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},Yo=function(e,n){return e[n]&&(e[n]-=1),n},Zo=function(e,n,a){a.forEach(function(l){Vo(n,l),e.add(l)})},Jo=function(e,n,a){a.forEach(function(l){Yo(n,l),n[l]===0&&e.remove(l)})};Z.add=function(e,n){return Zo(e.classList,e.nodeName.toLowerCase()=="html"?X:ee,n.split(" "))};Z.remove=function(e,n){return Jo(e.classList,e.nodeName.toLowerCase()=="html"?X:ee,n.split(" "))};var J={};Object.defineProperty(J,"__esModule",{value:!0});J.log=Xo;J.resetState=er;function Qo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var tt=function t(){var e=this;Qo(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var a=e.openInstances.indexOf(n);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(a){return a(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ce=new tt;function Xo(){console.log("portalOpenInstances ----------"),console.log(ce.openInstances.length),ce.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function er(){ce=new tt}J.default=ce;var Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.resetState=rr;Se.log=ar;var tr=J,nr=or(tr);function or(t){return t&&t.__esModule?t:{default:t}}var k=void 0,F=void 0,K=[];function rr(){for(var t=[k,F],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}k=F=null,K=[]}function ar(){console.log("bodyTrap ----------"),console.log(K.length);for(var t=[k,F],e=0;e<t.length;e++){var n=t[e],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Pe(){K.length!==0&&K[K.length-1].focusContent()}function ir(t,e){!k&&!F&&(k=document.createElement("div"),k.setAttribute("data-react-modal-body-trap",""),k.style.position="absolute",k.style.opacity="0",k.setAttribute("tabindex","0"),k.addEventListener("focus",Pe),F=k.cloneNode(),F.addEventListener("focus",Pe)),K=e,K.length>0?(document.body.firstChild!==k&&document.body.insertBefore(k,document.body.firstChild),document.body.lastChild!==F&&document.body.appendChild(F)):(k.parentElement&&k.parentElement.removeChild(k),F.parentElement&&F.parentElement.removeChild(F))}nr.default.subscribe(ir);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(x){for(var m=1;m<arguments.length;m++){var S=arguments[m];for(var r in S)Object.prototype.hasOwnProperty.call(S,r)&&(x[r]=S[r])}return x},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},l=function(){function x(m,S){for(var r=0;r<S.length;r++){var p=S[r];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(m,p.key,p)}}return function(m,S,r){return S&&x(m.prototype,S),r&&x(m,r),m}}(),c=D,d=Ze,i=g(d),b=N,v=O(b),f=Mo,h=g(f),y=W,C=O(y),_=Z,R=O(_),L=A,$=g(L),Q=J,w=g(Q);function O(x){if(x&&x.__esModule)return x;var m={};if(x!=null)for(var S in x)Object.prototype.hasOwnProperty.call(x,S)&&(m[S]=x[S]);return m.default=x,m}function g(x){return x&&x.__esModule?x:{default:x}}function lt(x,m){if(!(x instanceof m))throw new TypeError("Cannot call a class as a function")}function st(x,m){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:x}function ct(x,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);x.prototype=Object.create(m&&m.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(x,m):x.__proto__=m)}var fe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},dt=function(m){return m.code==="Tab"||m.keyCode===9},pt=function(m){return m.code==="Escape"||m.keyCode===27},ie=0,he=function(x){ct(m,x);function m(S){lt(this,m);var r=st(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,S));return r.setOverlayRef=function(p){r.overlay=p,r.props.overlayRef&&r.props.overlayRef(p)},r.setContentRef=function(p){r.content=p,r.props.contentRef&&r.props.contentRef(p)},r.afterClose=function(){var p=r.props,M=p.appElement,T=p.ariaHideApp,E=p.htmlOpenClassName,H=p.bodyOpenClassName,z=p.parentSelector,le=z&&z().ownerDocument||document;H&&R.remove(le.body,H),E&&R.remove(le.getElementsByTagName("html")[0],E),T&&ie>0&&(ie-=1,ie===0&&C.show(M)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(v.returnFocus(r.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),w.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(v.setupScopedFocus(r.node),v.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var p=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:p},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(p){dt(p)&&(0,h.default)(r.content,p),r.props.shouldCloseOnEsc&&pt(p)&&(p.stopPropagation(),r.requestClose(p))},r.handleOverlayOnClick=function(p){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(p):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(p){!r.props.shouldCloseOnOverlayClick&&p.target==r.overlay&&p.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(p){return r.ownerHandlesClose()&&r.props.onRequestClose(p)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(p,M){var T=(typeof M>"u"?"undefined":a(M))==="object"?M:{base:fe[p],afterOpen:fe[p]+"--after-open",beforeClose:fe[p]+"--before-close"},E=T.base;return r.state.afterOpen&&(E=E+" "+T.afterOpen),r.state.beforeClose&&(E=E+" "+T.beforeClose),typeof M=="string"&&M?E+" "+M:E},r.attributesFromObject=function(p,M){return Object.keys(M).reduce(function(T,E){return T[p+"-"+E]=M[E],T},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return l(m,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,p){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!p.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,p=r.appElement,M=r.ariaHideApp,T=r.htmlOpenClassName,E=r.bodyOpenClassName,H=r.parentSelector,z=H&&H().ownerDocument||document;E&&R.add(z.body,E),T&&R.add(z.getElementsByTagName("html")[0],T),M&&(ie+=1,C.hide(p)),w.default.register(this)}},{key:"render",value:function(){var r=this.props,p=r.id,M=r.className,T=r.overlayClassName,E=r.defaultStyles,H=r.children,z=M?{}:E.content,le=T?{}:E.overlay;if(this.shouldBeClosed())return null;var ut={ref:this.setOverlayRef,className:this.buildClassName("overlay",T),style:n({},le,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ft=n({id:p,ref:this.setContentRef,style:n({},z,this.props.style.content),className:this.buildClassName("content",M),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ht=this.props.contentElement(ft,H);return this.props.overlayElement(ut,ht)}}]),m}(c.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf($.default),i.default.instanceOf(L.SafeHTMLCollection),i.default.instanceOf(L.SafeNodeList),i.default.arrayOf(i.default.instanceOf($.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},e.default=he,t.exports=e.default})(be,be.exports);var lr=be.exports;function nt(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function ot(t){function e(n){var a=this.constructor.getDerivedStateFromProps(t,n);return a??null}this.setState(e.bind(this))}function rt(t,e){try{var n=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}nt.__suppressDeprecationWarning=!0;ot.__suppressDeprecationWarning=!0;rt.__suppressDeprecationWarning=!0;function sr(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,a=null,l=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),n!==null||a!==null||l!==null){var c=t.displayName||t.name,d=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+d+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=nt,e.componentWillReceiveProps=ot),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=rt;var i=e.componentDidUpdate;e.componentDidUpdate=function(v,f,h){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;i.call(this,v,f,y)}}return t}const cr=Object.freeze(Object.defineProperty({__proto__:null,polyfill:sr},Symbol.toStringTag,{value:"Module"})),dr=bt(cr);Object.defineProperty(G,"__esModule",{value:!0});G.bodyOpenClassName=G.portalClassName=void 0;var De=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},pr=function(){function t(e,n){for(var a=0;a<n.length;a++){var l=n[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),at=D,de=re(at),ur=wt,pe=re(ur),fr=Ze,u=re(fr),hr=lr,Fe=re(hr),mr=W,vr=xr(mr),I=A,Ae=re(I),gr=dr;function xr(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function re(t){return t&&t.__esModule?t:{default:t}}function yr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ne(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function br(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var wr=G.portalClassName="ReactModalPortal",Cr=G.bodyOpenClassName="ReactModal__Body--open",q=I.canUseDOM&&pe.default.createPortal!==void 0,We=function(e){return document.createElement(e)},Le=function(){return q?pe.default.createPortal:pe.default.unstable_renderSubtreeIntoContainer};function se(t){return t()}var ae=function(t){br(e,t);function e(){var n,a,l,c;yr(this,e);for(var d=arguments.length,i=Array(d),b=0;b<d;b++)i[b]=arguments[b];return c=(a=(l=Ne(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(i))),l),l.removePortal=function(){!q&&pe.default.unmountComponentAtNode(l.node);var v=se(l.props.parentSelector);v&&v.contains(l.node)?v.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(v){l.portal=v},l.renderPortal=function(v){var f=Le(),h=f(l,de.default.createElement(Fe.default,De({defaultStyles:e.defaultStyles},v)),l.node);l.portalRef(h)},a),Ne(l,c)}return pr(e,[{key:"componentDidMount",value:function(){if(I.canUseDOM){q||(this.node=We("div")),this.node.className=this.props.portalClassName;var a=se(this.props.parentSelector);a.appendChild(this.node),!q&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=se(a.parentSelector),c=se(this.props.parentSelector);return{prevParent:l,nextParent:c}}},{key:"componentDidUpdate",value:function(a,l,c){if(I.canUseDOM){var d=this.props,i=d.isOpen,b=d.portalClassName;a.portalClassName!==b&&(this.node.className=b);var v=c.prevParent,f=c.nextParent;f!==v&&(v.removeChild(this.node),f.appendChild(this.node)),!(!a.isOpen&&!i)&&!q&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!I.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),c=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);c?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-l)):this.removePortal()}}},{key:"render",value:function(){if(!I.canUseDOM||!q)return null;!this.node&&q&&(this.node=We("div"));var a=Le();return a(de.default.createElement(Fe.default,De({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){vr.setElement(a)}}]),e}(at.Component);ae.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Ae.default),u.default.instanceOf(I.SafeHTMLCollection),u.default.instanceOf(I.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Ae.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};ae.defaultProps={isOpen:!1,portalClassName:wr,bodyOpenClassName:Cr,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return de.default.createElement("div",e,n)},contentElement:function(e,n){return de.default.createElement("div",e,n)}};ae.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,gr.polyfill)(ae);G.default=ae;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=G,a=l(n);function l(c){return c&&c.__esModule?c:{default:c}}e.default=a.default,t.exports=e.default})(ye,ye.exports);var Or=ye.exports;const it=Ct(Or),xe=s.input`
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
`,_r=s.div`
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
`,Sr=s.div`
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
`,Er=({setName:t,setColories:e,setCarbogidrate:n,setProtein:a,setFat:l,name:c,calories:d,carbogidrate:i,protein:b,fat:v})=>o.jsxs(_r,{children:[o.jsx(xe,{value:c,placeholder:"The name of the product or dish",onChange:f=>{t(f.target.value)}}),o.jsx(xe,{type:"number",min:1,onChange:f=>{n(f.target.value)},value:i,placeholder:"Carbonoh"}),o.jsx(xe,{min:1,type:"number",onChange:f=>{a(f.target.value)},value:b,placeholder:"Protein"}),o.jsxs(Sr,{children:[o.jsx($e,{min:1,type:"number",onChange:f=>{l(f.target.value)},value:v,placeholder:"Fat"}),o.jsx($e,{min:1,type:"number",onChange:f=>{e(f.target.value)},value:d,placeholder:"Calories"}),o.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:o.jsx("use",{href:`${B}#trash-delete`})})]})]}),jr={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};it.setAppElement("#root");const Mr=({stateModal:t,closeModal:e,typefood:n})=>{const a=oe(),[l,c]=D.useState(""),[d,i]=D.useState(""),[b,v]=D.useState(""),[f,h]=D.useState(""),[y,C]=D.useState(""),_={typeFood:n,userFood:[{name:l,calories:d,nutrition:{carbogidrate:b,protein:f,fat:y}}]},R=L=>{L.preventDefault(),a(Ot(_)),e()};return o.jsx(it,{isOpen:t,onRequestClose:e,style:jr,children:o.jsxs($t,{children:[o.jsx(Ut,{children:"Record your meal"}),o.jsxs(It,{style:{marginTop:"24px"},children:[o.jsx(Ke,{src:"src/assets/images/Breakfast.png"}),o.jsx(Bt,{})]}),o.jsxs("form",{onSubmit:R,children:[o.jsx(Er,{setName:c,setColories:i,setCarbogidrate:v,setProtein:h,setFat:C,name:l,calories:d,carbogidrate:b,protein:f,fat:y}),o.jsxs(Ht,{children:[o.jsx(zt,{type:"submit",children:"Confirm"}),o.jsx(qt,{onClick:e,type:"button",children:"Cancel"})]})]})]})})},kr=({meal:t,title:e,totalCarbs:n,totalProtein:a,totalFat:l,typefood:c,src:d})=>{const i=oe(),b=C=>{i(_t({userFood:{},typeFood:C}))};j(Kt),e.toLowerCase();const[v,f]=D.useState(!1),h=()=>f(!0),y=()=>f(!1);return o.jsxs(po,{children:[o.jsx(Mr,{closeModal:y,stateModal:v,typefood:c}),o.jsxs(ho,{children:[o.jsx(Ke,{src:d}),o.jsx(fo,{children:e})]}),o.jsx(uo,{children:(t==null?void 0:t.length)>0?o.jsxs(o.Fragment,{children:[o.jsxs(ge,{children:["Carbonohidrates: ",n]}),o.jsxs(ge,{children:["Protein: ",a]}),o.jsxs(ge,{children:["Fat: ",l,o.jsx(mo,{onClick:()=>b(e.toLowerCase()),children:o.jsx("use",{href:`${B}#trash-delete`})})]})]}):o.jsxs(go,{id:c,"data-site":c,onClick:h,children:[o.jsx(Gt,{children:"Record your meal"}),o.jsx(vo,{children:o.jsx("use",{href:`${B}#icon-add-converted`})})]})})]})},Tr="/Healthy_life/assets/Breakfast-ebbae9d6.png",Rr="/Healthy_life/assets/Dinner-3e075f11.png",Pr="/Healthy_life/assets/Lunch-b9834f5c.png",Dr="/Healthy_life/assets/Snack-986b08ce.png",Fr=[Tr,Pr,Rr,Dr],Ar=()=>{const t=j(Vt),e=j(Yt),n=j(Zt),a=j(Jt),l={breakfast:t,lunch:e,dinner:n,snack:a},c=["breakfast","lunch","dinner","snack"];let d=0,i=0,b=0,v=0,f=0,h=0,y=0,C=0,_=0,R=0,L=0,$=0;(t==null?void 0:t.length)>0&&(d=t.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.fat)},0),i=t.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.protein)},0),b=t.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.carbogidrate)},0)),(e==null?void 0:e.length)>0&&(v=e.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.fat)},0),f=e.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.protein)},0),h=e.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.carbogidrate)},0)),(n==null?void 0:n.length)>0&&(y=n.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.protein)},0),C=n.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.carbogidrate)},0),_=n.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.fat)},0)),(a==null?void 0:a.length)>0&&(R=a.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.fat)},0),L=a.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.protein)},0),$=a.reduce((w,O)=>{var g;return w+((g=O.nutrition)==null?void 0:g.carbogidrate)},0));const Q={breakfast:{carbs:b,protein:i,fat:d},lunch:{carbs:h,protein:f,fat:v},dinner:{carbs:C,protein:y,fat:_},snack:{carbs:$,protein:L,fat:R}};return o.jsxs(ao,{children:[o.jsxs(io,{children:[o.jsx(lo,{children:"Diary"}),o.jsx(so,{to:"/diary",children:"See more"})]}),o.jsx(co,{children:c.map((w,O)=>o.jsx(kr,{meal:l[w],typefood:w,title:w,totalCarbs:Q[w].carbs,totalProtein:Q[w].protein,totalFat:Q[w].fat,src:Fr[O]},w))})]})},Nr=s.div`
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
`,Ir=()=>{const t=oe();return D.useEffect(()=>{t(St()),t(Et()),t(jt())},[t]),o.jsxs(o.Fragment,{children:[o.jsx(ro,{}),o.jsxs(Nr,{children:[o.jsx(Ar,{}),o.jsx(Qt,{})]})]})};export{Ir as default};
