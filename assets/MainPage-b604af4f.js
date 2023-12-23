import{s as t,e as l,g as k,h as C,j as e,b as x,t as d,i as D,k as P,m as T,r as m,u,n as F,o as M,L as A,p as L}from"./index-62072c66.js";import{C as $,A as E,p as W,a as z,D as G,b as U,L as _,B as V,c as O,d as H}from"./index-b10e26a8.js";import{R as N}from"./RecommendedList-b153689f.js";const Z=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,q=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,J=t.ul`
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
`,b=t.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 834px) {
  }
`,K=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,Q=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,w=t.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,y=t.p`
  margin-top: 4px;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.11;
  color: var(--primary-color-white);
`,X=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Y=()=>{const r=l(k),i=l(C);return e.jsxs(Z,{children:[e.jsx(q,{children:"Daily goal"}),e.jsxs(J,{children:[e.jsxs(b,{children:[e.jsx(K,{children:e.jsx("use",{href:`${x}#bubble`})}),e.jsxs(w,{children:[e.jsx("p",{children:"Calories"}),e.jsx(y,{children:r})]})]}),e.jsxs(b,{children:[e.jsx(Q,{children:e.jsx("use",{href:`${x}#milk`})}),e.jsxs(w,{children:[e.jsx("p",{children:" Water"}),e.jsxs(y,{children:[i," ",e.jsx(X,{children:"ml"})]})]})]})]})]})};$.register(E,W,z);const ee={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},te={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const a=r.getDatasetMeta(0).data[0].x,s=r.getDatasetMeta(0).data[0].y,n=r.getDatasetMeta(0).data[0].innerRadius,o=r.getDatasetMeta(0).data[0].outerRadius,c=o-n,p=Math.PI/180;i.beginPath(),i.lineWidth=c,i.strokeStyle=`${d.palette.greyone.main}`,i.arc(a,s,o-c/2,0,p*360,!1),i.stroke()}},R=({dailyGoal:r,filledValue:i,bgColor:a})=>{let s=r-i;i>r&&(s=0);const n={datasets:[{label:[],data:[i,s],backgroundColor:[a,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(G,{options:ee,data:n,plugins:[te]})})},re=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,ie=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,oe=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,ne=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,v=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,ae=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,h=({title:r,bgColor:i,dailyGoal:a,filledValue:s})=>{let n=Math.round(s*100/a),o=(a-s).toFixed(0);return s>a&&(o=0),n>100&&(n=100),e.jsxs(ie,{children:[e.jsxs(re,{children:[e.jsx(R,{dailyGoal:a,filledValue:s,bgColor:i}),e.jsx(ae,{children:e.jsx("p",{children:`${n}%`})})]}),e.jsxs("div",{children:[e.jsx(ne,{children:r}),e.jsxs(oe,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(v,{children:a})]}),e.jsxs("p",{children:["left: ",e.jsx(v,{children:o})]})]})]})]})},se=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,le=t.div`
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
`,ce=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,de=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;t.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const pe=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,g=t.li`
  display: flex;
`,xe=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,he=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,ge=t.p`
  color: var(--primary-color-grey);
`,me=()=>{const r=`${d.palette.litegreen.main}`,i=`${d.palette.pink.main}`,a=`${d.palette.yellow.main}`,s=`${d.palette.grey.main}`,n=l(k),o=l(D),c=l(P),p=l(T),f=1360,B=136,I=119.5,S=38.8;return e.jsxs(se,{children:[e.jsx(de,{children:"Food"}),e.jsxs(le,{children:[e.jsxs(pe,{children:[e.jsx(R,{dailyGoal:n,filledValue:f,bgColor:r}),e.jsxs(xe,{children:[e.jsx(he,{children:f}),e.jsx(ge,{children:"calories"})]})]}),e.jsxs(ce,{children:[e.jsx(g,{children:e.jsx(h,{title:"Carbonohidrates",bgColor:i,dailyGoal:o,filledValue:B})}),e.jsx(g,{children:e.jsx(h,{title:"Protein",bgColor:a,dailyGoal:c,filledValue:I})}),e.jsx(g,{children:e.jsx(h,{title:"Fat",bgColor:s,dailyGoal:p,filledValue:S})})]})]})]})},ue=t.div`
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
`,fe=t.div`
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
`,be=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,we=t.button`
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

  transition:
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    border-color: var(--primary-color-green-lite);
    background-color: transparent;
    color: var(--primary-color-white);
  }
`,ye=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,ve=t.input`
  width: 100%;
  margin-top: 12px;
  padding: 8px 10px;
  border: 1px solid var(--primary-color-green-lite);
  border-radius: 12px;
  background-color: transparent;
  color: var(--primary-color-white);

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    color: var(--primary-color-grey);
  }
`,je=t.button`
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
`,ke=({setIsModalOpen:r})=>{const[i,a]=m.useState(0),s=u(),n=o=>{o.preventDefault(),s(F({value:i}))};return e.jsx(ue,{onClick:()=>r(!1),children:e.jsxs(fe,{onClick:o=>o.stopPropagation(),children:[e.jsx(ye,{children:"Add water intake"}),e.jsxs(be,{onSubmit:n,children:[e.jsxs("label",{children:["How much water",e.jsx(ve,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:o=>a(Number(o.target.value)),value:i||""})]}),e.jsx(we,{type:"submit",children:"Confirm"}),e.jsx(je,{type:"button",onClick:()=>r(!1),children:"Cancel"})]})]})})};$.register(U,_,V,O,W,z);const Ce={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},$e=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${d.palette.violet.main}`,hoverBackgroundColor:`${d.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(H,{data:i,options:Ce})},We=r=>r.dailyStatistics.consumedWater.value,ze=r=>r.dailyStatistics.consumedWater._id,Re=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,Be=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,Ie=t.div`
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
`,Se=t.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,j=t.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,De=t.span`
  color: var(--primary-color-white);
`,Pe=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,Te=t.svg`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);

  /* @media screen and (min-width: 834px) {
    width: 16px;
    height: 16px;
    fill: var(--primary-color-grey);
    &:hover {
      stroke: var(--primary-color-green-lite);
    } */
  /* } */
`,Fe=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,Me=t.button`
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

  transition:
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    border-color: var(--primary-color-green-lite);
    background-color: transparent;
    color: var(--primary-color-white);
  }
`,Ae=t.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,Le=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,Ee=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--primary-color-violet);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,Ge=()=>{const[r,i]=m.useState(!1),a=u(),s=l(ze),n=l(C),o=l(We),c=o<=n?Math.round(o*100/n):100;let p=n-o;return o>n&&(p=0),e.jsxs(Re,{children:[e.jsx(Be,{children:"Water"}),e.jsxs(Ie,{children:[e.jsx(Te,{width:"20px",height:"20px",onClick:()=>{a(M(s))},children:e.jsx("use",{href:`${x}#trash-delete`})}),e.jsx(Ae,{children:e.jsxs(Le,{children:[e.jsx($e,{waterIntake:c}),e.jsx(Ee,{children:`${c}%`})]})}),e.jsxs("div",{children:[e.jsx(Se,{children:"Water consumption"}),e.jsxs(j,{children:[e.jsx(Pe,{children:o}),"ml"]}),e.jsxs(j,{children:[e.jsx(De,{children:"left:"})," ",`${p} ml`]}),e.jsxs(Me,{type:"button",onClick:()=>i(!0),children:[e.jsx(Fe,{children:e.jsx("use",{href:`${x}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(ke,{setIsModalOpen:i})]})},Ue=t.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,_e=t.div`
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
`,Ve=t.div`
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
`,Oe=t.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,He=t(A)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Ne=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
`,Ze=()=>e.jsxs(Ue,{children:[e.jsxs(_e,{children:[e.jsx(Oe,{children:"Today"}),e.jsxs(He,{to:"/dashboard",children:["On the way to the goal",e.jsx(Ne,{children:e.jsx("use",{href:`${x}#icon-arrowright`})})]})]}),e.jsxs(Ve,{children:[e.jsx(Y,{}),e.jsx(Ge,{}),e.jsx(me,{})]})]}),Qe=()=>{const r=u();return m.useEffect(()=>{r(L())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(Ze,{}),e.jsx(N,{})]})};export{Qe as default};
