import{s as t,d as c,e as k,g as C,j as e,h,t as d,i as I,k as P,m as T,r as u,u as f,n as F,o as M,L,p as A,q as E}from"./index-1cde3463.js";import{C as $,A as G,p as W,a as z,D as U,b as _,L as V,B as q,c as H,d as N}from"./index-9523ad62.js";import{R as O}from"./RecommendedList-f393b17f.js";const Z=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,J=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,K=t.ul`
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
`,Q=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,X=t.svg`
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
`,Y=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,ee=()=>{const r=c(k),i=c(C);return e.jsxs(Z,{children:[e.jsx(J,{children:"Daily goal"}),e.jsxs(K,{children:[e.jsxs(b,{children:[e.jsx(Q,{children:e.jsx("use",{href:`${h}#bubble`})}),e.jsxs(w,{children:[e.jsx("p",{children:"Calories"}),e.jsx(y,{children:r})]})]}),e.jsxs(b,{children:[e.jsx(X,{children:e.jsx("use",{href:`${h}#milk`})}),e.jsxs(w,{children:[e.jsx("p",{children:" Water"}),e.jsxs(y,{children:[i," ",e.jsx(Y,{children:"ml"})]})]})]})]})]})};$.register(G,W,z);const te={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},re={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const n=r.getDatasetMeta(0).data[0].x,a=r.getDatasetMeta(0).data[0].y,s=r.getDatasetMeta(0).data[0].innerRadius,o=r.getDatasetMeta(0).data[0].outerRadius,l=o-s,p=Math.PI/180;i.beginPath(),i.lineWidth=l,i.strokeStyle=`${d.palette.greyone.main}`,i.arc(n,a,o-l/2,0,p*360,!1),i.stroke()}},R=({dailyGoal:r,filledValue:i,bgColor:n})=>{let a=r-i;i>r&&(a=0);const s={datasets:[{label:[],data:[i,a],backgroundColor:[n,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(U,{options:te,data:s,plugins:[re]})})},ie=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,oe=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,ne=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,ae=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,j=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,se=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,g=({title:r,bgColor:i,dailyGoal:n,filledValue:a})=>{let s=Math.round(a*100/n),o=(n-a).toFixed(0);return a>n&&(o=0),s>100&&(s=100),e.jsxs(oe,{children:[e.jsxs(ie,{children:[e.jsx(R,{dailyGoal:n,filledValue:a,bgColor:i}),e.jsx(se,{children:e.jsx("p",{children:`${s}%`})})]}),e.jsxs("div",{children:[e.jsx(ae,{children:r}),e.jsxs(ne,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(j,{children:n})]}),e.jsxs("p",{children:["left: ",e.jsx(j,{children:o})]})]})]})]})},le=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,ce=t.div`
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
`,de=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,pe=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;t.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const xe=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,m=t.li`
  display: flex;
`,he=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,ge=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,me=t.p`
  color: var(--primary-color-grey);
`,ue=()=>{const r=`${d.palette.litegreen.main}`,i=`${d.palette.pink.main}`,n=`${d.palette.yellow.main}`,a=`${d.palette.grey.main}`,s=c(k),o=c(I),l=c(P),p=c(T),x=1360,S=136,B=119.5,D=38.8;return e.jsxs(le,{children:[e.jsx(pe,{children:"Food"}),e.jsxs(ce,{children:[e.jsxs(xe,{children:[e.jsx(R,{dailyGoal:s,filledValue:x,bgColor:r}),e.jsxs(he,{children:[e.jsx(ge,{children:x}),e.jsx(me,{children:"calories"})]})]}),e.jsxs(de,{children:[e.jsx(m,{children:e.jsx(g,{title:"Carbonohidrates",bgColor:i,dailyGoal:o,filledValue:S})}),e.jsx(m,{children:e.jsx(g,{title:"Protein",bgColor:n,dailyGoal:l,filledValue:B})}),e.jsx(m,{children:e.jsx(g,{title:"Fat",bgColor:a,dailyGoal:p,filledValue:D})})]})]})]})},fe=t.div`
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
`,be=t.div`
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
`,we=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,ye=t.button`
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
`,je=t.h2`
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
`,ke=t.button`
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
`,Ce=({setIsModalOpen:r})=>{const[i,n]=u.useState(0),a=f(),s=o=>{o.preventDefault(),a(F({value:i})),r(!1)};return e.jsx(fe,{onClick:()=>r(!1),children:e.jsxs(be,{onClick:o=>o.stopPropagation(),children:[e.jsx(je,{children:"Add water intake"}),e.jsxs(we,{onSubmit:s,children:[e.jsxs("label",{children:["How much water",e.jsx(ve,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:o=>n(Number(o.target.value)),value:i||""})]}),e.jsx(ye,{type:"submit",children:"Confirm"}),e.jsx(ke,{type:"button",onClick:()=>r(!1),children:"Cancel"})]})]})})};$.register(_,V,q,H,W,z);const $e={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},We=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${d.palette.violet.main}`,hoverBackgroundColor:`${d.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(N,{data:i,options:$e})},ze=r=>r.dailyWaterStatistics.isLoading,Re=r=>r.dailyWaterStatistics.consumedWater.value,Se=r=>r.dailyWaterStatistics.consumedWater._id,Be=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,De=t.h3`
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
`,Pe=t.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,v=t.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Te=t.span`
  color: var(--primary-color-white);
`,Fe=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,Me=t.svg`
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
`,Le=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,Ae=t.button`
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
`,Ee=t.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,Ge=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,Ue=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--primary-color-violet);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,_e=()=>{const[r,i]=u.useState(!1),n=c(ze),a=f(),s=c(Se),o=c(C),l=c(Re),p=l<=o?Math.round(l*100/o):100;let x=o-l;return l>o&&(x=0),e.jsxs(Be,{children:[e.jsx(De,{children:"Water"}),e.jsxs(Ie,{children:[e.jsx(Me,{width:"20px",height:"20px",onClick:()=>{a(M(s))},children:e.jsx("use",{href:`${h}#trash-delete`})}),e.jsx(Ee,{children:n?e.jsx("div",{children:"Loading..."}):e.jsxs(Ge,{children:[e.jsx(We,{waterIntake:p}),e.jsx(Ue,{children:`${p}%`})]})}),e.jsxs("div",{children:[e.jsx(Pe,{children:"Water consumption"}),e.jsxs(v,{children:[e.jsx(Fe,{children:l}),"ml"]}),e.jsxs(v,{children:[e.jsx(Te,{children:"left:"})," ",`${x} ml`]}),e.jsxs(Ae,{type:"button",onClick:()=>i(!0),children:[e.jsx(Le,{children:e.jsx("use",{href:`${h}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(Ce,{setIsModalOpen:i})]})},Ve=t.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,qe=t.div`
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
`,He=t.div`
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
`,Ne=t.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,Oe=t(L)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Ze=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
`,Je=()=>e.jsxs(Ve,{children:[e.jsxs(qe,{children:[e.jsx(Ne,{children:"Today"}),e.jsxs(Oe,{to:"/dashboard",children:["On the way to the goal",e.jsx(Ze,{children:e.jsx("use",{href:`${h}#icon-arrowright`})})]})]}),e.jsxs(He,{children:[e.jsx(ee,{}),e.jsx(_e,{}),e.jsx(ue,{})]})]}),Ye=()=>{const r=f();return u.useEffect(()=>{r(A()),r(E())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(Je,{}),e.jsx(O,{})]})};export{Ye as default};
