import{s as t,k as x,m as I,n as A,j as e,o as f,t as m,p as O,q as H,v as N,r as b,u as k,w as q,x as V,L,y as Z,z as J,A as K,B as Q,C as X}from"./index-2f63c0f6.js";import{C as E,A as Y,p as G,a as U,D as ee,b as te,L as re,B as ie,c as ne,d as oe}from"./index-8f776d41.js";import{s as ae,a as se,b as le,c as ce,M as de,d as pe,A as xe,e as he,f as ge,g as me,h as ue,i as fe,l as we,j as ye,k as be}from"./MealPopUpModal-9e371d6e.js";import{R as ve}from"./RecommendedList-e8c52eab.js";const je=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,ke=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,Ce=t.ul`
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
`,D=t.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 834px) {
  }
`,$e=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,We=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,P=t.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,S=t.p`
  margin-top: 4px;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.11;
  color: var(--primary-color-white);
`,ze=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Fe=()=>{const r=x(I),i=x(A);return e.jsxs(je,{children:[e.jsx(ke,{children:"Daily goal"}),e.jsxs(Ce,{children:[e.jsxs(D,{children:[e.jsx($e,{children:e.jsx("use",{href:`${f}#bubble`})}),e.jsxs(P,{children:[e.jsx("p",{children:"Calories"}),e.jsx(S,{children:r})]})]}),e.jsxs(D,{children:[e.jsx(We,{children:e.jsx("use",{href:`${f}#milk`})}),e.jsxs(P,{children:[e.jsx("p",{children:" Water"}),e.jsxs(S,{children:[i," ",e.jsx(ze,{children:"ml"})]})]})]})]})]})};E.register(Y,G,U);const Me={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Be={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const a=r.getDatasetMeta(0).data[0].x,s=r.getDatasetMeta(0).data[0].y,p=r.getDatasetMeta(0).data[0].innerRadius,d=r.getDatasetMeta(0).data[0].outerRadius,c=d-p,h=Math.PI/180;i.beginPath(),i.lineWidth=c,i.strokeStyle=`${m.palette.greyone.main}`,i.arc(a,s,d-c/2,0,h*360,!1),i.stroke()}},_=({dailyGoal:r,filledValue:i,bgColor:a})=>{let s=r-i;i>r&&(s=0);const p={datasets:[{label:[],data:[i,s],backgroundColor:[a,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(ee,{options:Me,data:p,plugins:[Be]})})},De=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,Pe=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Se=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,Te=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,T=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Re=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,$=({title:r,bgColor:i,dailyGoal:a,filledValue:s})=>{s||(s=0);let p=Math.round(s*100/a),d=(a-s).toFixed(0);return s>a&&(d=0),p>100&&(p=100),e.jsxs(Pe,{children:[e.jsxs(De,{children:[e.jsx(_,{dailyGoal:a,filledValue:s,bgColor:i}),e.jsx(Re,{children:e.jsx("p",{children:`${p}%`})})]}),e.jsxs("div",{children:[e.jsx(Te,{children:r}),e.jsxs(Se,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(T,{children:a})]}),e.jsxs("p",{children:["left: ",e.jsx(T,{children:d})]})]})]})]})},Ie=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,Ae=t.div`
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
`,Le=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,Ee=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;t.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const Ge=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,W=t.li`
  display: flex;
`,Ue=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,_e=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Oe=t.p`
  color: var(--primary-color-grey);
`,He=()=>{const r=`${m.palette.litegreen.main}`,i=`${m.palette.pink.main}`,a=`${m.palette.yellow.main}`,s=`${m.palette.grey.main}`,p=x(I),d=x(O),c=x(H),h=x(N),g=x(ae),w=x(se),u=x(le),y=x(ce);return e.jsxs(Ie,{children:[e.jsx(Ee,{children:"Food"}),e.jsxs(Ae,{children:[e.jsxs(Ge,{children:[e.jsx(_,{dailyGoal:p,filledValue:g,bgColor:r}),e.jsxs(Ue,{children:[e.jsx(_e,{children:g||0}),e.jsx(Oe,{children:"calories"})]})]}),e.jsxs(Le,{children:[e.jsx(W,{children:e.jsx($,{title:"Carbonohidrates",bgColor:i,dailyGoal:d,filledValue:w})}),e.jsx(W,{children:e.jsx($,{title:"Protein",bgColor:a,dailyGoal:c,filledValue:u})}),e.jsx(W,{children:e.jsx($,{title:"Fat",bgColor:s,dailyGoal:h,filledValue:y})})]})]})]})},Ne=t.div`
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
`,qe=t.div`
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
`,Ve=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Ze=t.button`
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
`,Je=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,Ke=t.input`
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
`,Qe=t.button`
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
`,Xe=({isModalOpen:r,setIsModalOpen:i})=>{const[a,s]=b.useState(0),p=k(),d=c=>{c.preventDefault(),p(q({value:a})),i(!1)};return b.useEffect(()=>{const c=h=>{h.code==="Escape"&&i(!1)};return r?(document.addEventListener("keydown",c),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",c),document.body.style.overflow="unset"}},[r,i]),e.jsx(Ne,{onClick:()=>i(!1),children:e.jsxs(qe,{onClick:c=>c.stopPropagation(),children:[e.jsx(Je,{children:"Add water intake"}),e.jsxs(Ve,{onSubmit:d,children:[e.jsxs("label",{children:["How much water",e.jsx(Ke,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:c=>s(Number(c.target.value)),value:a||"",min:1})]}),e.jsx(Ze,{type:"submit",children:"Confirm"}),e.jsx(Qe,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})})};E.register(te,re,ie,ne,G,U);const Ye={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},et=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${m.palette.violet.main}`,hoverBackgroundColor:`${m.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(oe,{data:i,options:Ye})},tt=r=>r.dailyWaterStatistics.consumedWater.value,rt=r=>r.dailyWaterStatistics.consumedWater._id,it=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,nt=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,ot=t.div`
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
`,at=t.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,R=t.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,st=t.span`
  color: var(--primary-color-white);
`,lt=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,ct=t.svg`
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
`,dt=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,pt=t.button`
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
`,xt=t.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,ht=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,gt=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,mt=()=>{const[r,i]=b.useState(!1),a=k(),s=x(rt),p=x(A),d=x(tt),c=d<=p?Math.round(d*100/p):100;let h=p-d;d>p&&(h=0);const g={color:c>85?`${m.palette.greyone.main}`:`${m.palette.violet.main}`};return e.jsxs(it,{children:[e.jsx(nt,{children:"Water"}),e.jsxs(ot,{children:[e.jsx(ct,{width:"20px",height:"20px",onClick:()=>{a(V(s))},children:e.jsx("use",{href:`${f}#trash-delete`})}),e.jsx(xt,{children:e.jsxs(ht,{children:[e.jsx(et,{waterIntake:c}),e.jsx(gt,{style:g,children:`${c}%`})]})}),e.jsxs("div",{children:[e.jsx(at,{children:"Water consumption"}),e.jsxs(R,{children:[e.jsx(lt,{children:d}),"ml"]}),e.jsxs(R,{children:[e.jsx(st,{children:"left:"})," ",`${h} ml`]}),e.jsxs(pt,{type:"button",onClick:()=>i(!0),children:[e.jsx(dt,{children:e.jsx("use",{href:`${f}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(Xe,{setIsModalOpen:i,isModalOpen:r})]})},ut=t.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,ft=t.div`
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
`,wt=t.div`
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
`,yt=t.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,bt=t(L)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,vt=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,jt=()=>e.jsxs(ut,{children:[e.jsxs(ft,{children:[e.jsx(yt,{children:"Today"}),e.jsxs(bt,{to:"/dashboard",children:["On the way to the goal",e.jsx(vt,{children:e.jsx("use",{href:`${f}#icon-arrowright`})})]})]}),e.jsxs(wt,{children:[e.jsx(Fe,{}),e.jsx(mt,{}),e.jsx(He,{})]})]}),kt=t.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,Ct=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,$t=t.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,Wt=t(L)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,zt=t.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,Ft=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,Mt=t.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Bt=t.p`
  width: 160px;
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 160px;
  }
`,Dt=t.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 88px;
  }
`,Pt=t.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 88px;
  }
`,St=t.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,Tt=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Rt=t.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,It=t.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,At=t.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`,Lt=({meal:r,title:i,totalCarbs:a,totalProtein:s,totalFat:p,typefood:d,src:c})=>{const h=k(),g=j=>{h(J({userFood:{},typeFood:j}))},[w,u]=b.useState(!1),y=()=>u(!0),v=()=>u(!1);return e.jsxs(Ft,{children:[e.jsx(de,{closeModal:v,stateModal:w,typefood:d}),e.jsxs(Tt,{children:[e.jsx(pe,{src:c}),e.jsx(St,{children:Z(i)})]}),e.jsx(Mt,{children:(r==null?void 0:r.length)>0?e.jsxs(e.Fragment,{children:[e.jsxs(Bt,{children:["Carbonohidrates: ",a]}),e.jsxs(Dt,{children:["Protein: ",s]}),e.jsxs(Pt,{children:["Fat: ",p]}),e.jsx(Rt,{onClick:()=>g(i.toLowerCase()),children:e.jsx("use",{href:`${f}#trash-delete`})})]}):e.jsxs(At,{id:d,"data-site":d,onClick:y,children:[e.jsx(xe,{children:"Record your meal"}),e.jsx(It,{children:e.jsx("use",{href:`${f}#icon-add-converted`})})]})})]})},Et=[fe,we,ye,be],Gt=()=>{const r=x(he),i=x(ge),a=x(me),s=x(ue),p={breakfast:r,lunch:i,dinner:a,snack:s},d=["breakfast","lunch","dinner","snack"];let c=0,h=0,g=0,w=0,u=0,y=0,v=0,j=0,z=0,F=0,M=0,B=0;(r==null?void 0:r.length)>0&&(c=r.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.fat)},0),h=r.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.protein)},0),g=r.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),(i==null?void 0:i.length)>0&&(w=i.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.fat)},0),u=i.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.protein)},0),y=i.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),(a==null?void 0:a.length)>0&&(v=a.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.protein)},0),j=a.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.carbogidrate)},0),z=a.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.fat)},0)),(s==null?void 0:s.length)>0&&(F=s.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.fat)},0),M=s.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.protein)},0),B=s.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.carbogidrate)},0));const C={breakfast:{carbs:g,protein:h,fat:c},lunch:{carbs:y,protein:u,fat:w},dinner:{carbs:j,protein:v,fat:z},snack:{carbs:B,protein:M,fat:F}};return e.jsxs(kt,{children:[e.jsxs(Ct,{children:[e.jsx($t,{children:"Diary"}),e.jsx(Wt,{to:"/diary",children:"See more"})]}),e.jsx(zt,{children:d.map((o,l)=>e.jsx(Lt,{meal:p[o],typefood:o,title:o,totalCarbs:C[o].carbs,totalProtein:C[o].protein,totalFat:C[o].fat,src:Et[l]},o))})]})},Ut=t.div`
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
`,qt=()=>{const r=k();return b.useEffect(()=>{r(K()),r(Q()),r(X())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(jt,{}),e.jsxs(Ut,{children:[e.jsx(Gt,{}),e.jsx(ve,{})]})]})};export{qt as default};
