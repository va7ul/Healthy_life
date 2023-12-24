import{s as t,g as d,h as k,i as C,j as e,k as x,t as p,m as S,n as T,o as F,r as g,u as f,p as I,q as A,L as E,v as L,w as M}from"./index-ae01c17d.js";import{C as $,A as G,p as W,a as z,D as U,b as _,L as V,B as q,c as H,d as N}from"./index-7d0426d1.js";import{R as Z}from"./RecommendedList-bb95234f.js";import{P as J}from"./Planner-041dabb3.js";const K=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,Q=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,X=t.ul`
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
`,w=t.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 834px) {
  }
`,Y=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,O=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,b=t.div`
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
`,ee=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,te=()=>{const r=d(k),i=d(C);return e.jsxs(K,{children:[e.jsx(Q,{children:"Daily goal"}),e.jsxs(X,{children:[e.jsxs(w,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${x}#bubble`})}),e.jsxs(b,{children:[e.jsx("p",{children:"Calories"}),e.jsx(y,{children:r})]})]}),e.jsxs(w,{children:[e.jsx(O,{children:e.jsx("use",{href:`${x}#milk`})}),e.jsxs(b,{children:[e.jsx("p",{children:" Water"}),e.jsxs(y,{children:[i," ",e.jsx(ee,{children:"ml"})]})]})]})]})]})};$.register(G,W,z);const re={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},ie={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const o=r.getDatasetMeta(0).data[0].x,s=r.getDatasetMeta(0).data[0].y,a=r.getDatasetMeta(0).data[0].innerRadius,l=r.getDatasetMeta(0).data[0].outerRadius,n=l-a,c=Math.PI/180;i.beginPath(),i.lineWidth=n,i.strokeStyle=`${p.palette.greyone.main}`,i.arc(o,s,l-n/2,0,c*360,!1),i.stroke()}},R=({dailyGoal:r,filledValue:i,bgColor:o})=>{let s=r-i;i>r&&(s=0);const a={datasets:[{label:[],data:[i,s],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(U,{options:re,data:a,plugins:[ie]})})},oe=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,ne=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,ae=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,se=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,v=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,le=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,m=({title:r,bgColor:i,dailyGoal:o,filledValue:s})=>{let a=Math.round(s*100/o),l=(o-s).toFixed(0);return s>o&&(l=0),a>100&&(a=100),e.jsxs(ne,{children:[e.jsxs(oe,{children:[e.jsx(R,{dailyGoal:o,filledValue:s,bgColor:i}),e.jsx(le,{children:e.jsx("p",{children:`${a}%`})})]}),e.jsxs("div",{children:[e.jsx(se,{children:r}),e.jsxs(ae,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(v,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(v,{children:l})]})]})]})]})},ce=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,de=t.div`
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
`,pe=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,xe=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;t.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const he=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,u=t.li`
  display: flex;
`,ge=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,me=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,ue=t.p`
  color: var(--primary-color-grey);
`,fe=()=>{const r=`${p.palette.litegreen.main}`,i=`${p.palette.pink.main}`,o=`${p.palette.yellow.main}`,s=`${p.palette.grey.main}`,a=d(k),l=d(S),n=d(T),c=d(F),h=1360,P=136,B=119.5,D=38.8;return e.jsxs(ce,{children:[e.jsx(xe,{children:"Food"}),e.jsxs(de,{children:[e.jsxs(he,{children:[e.jsx(R,{dailyGoal:a,filledValue:h,bgColor:r}),e.jsxs(ge,{children:[e.jsx(me,{children:h}),e.jsx(ue,{children:"calories"})]})]}),e.jsxs(pe,{children:[e.jsx(u,{children:e.jsx(m,{title:"Carbonohidrates",bgColor:i,dailyGoal:l,filledValue:P})}),e.jsx(u,{children:e.jsx(m,{title:"Protein",bgColor:o,dailyGoal:n,filledValue:B})}),e.jsx(u,{children:e.jsx(m,{title:"Fat",bgColor:s,dailyGoal:c,filledValue:D})})]})]})]})},we=t.div`
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
`,ye=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,ve=t.button`
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
`,ke=t.input`
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
`,Ce=t.button`
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
`,$e=({isModalOpen:r,setIsModalOpen:i})=>{const[o,s]=g.useState(0),a=f(),l=n=>{n.preventDefault(),a(I({value:o})),i(!1)};return g.useEffect(()=>{const n=c=>{c.code==="Escape"&&i(!1)};return r?(document.addEventListener("keydown",n),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",n),document.body.style.overflow="unset"}},[r,i]),e.jsx(we,{onClick:()=>i(!1),children:e.jsxs(be,{onClick:n=>n.stopPropagation(),children:[e.jsx(je,{children:"Add water intake"}),e.jsxs(ye,{onSubmit:l,children:[e.jsxs("label",{children:["How much water",e.jsx(ke,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:n=>s(Number(n.target.value)),value:o||"",min:1})]}),e.jsx(ve,{type:"submit",children:"Confirm"}),e.jsx(Ce,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})})};$.register(_,V,q,H,W,z);const We={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},ze=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${p.palette.violet.main}`,hoverBackgroundColor:`${p.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(N,{data:i,options:We})},Re=r=>r.dailyWaterStatistics.consumedWater.value,Pe=r=>r.dailyWaterStatistics.consumedWater._id,Be=t.div`
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
`,Se=t.div`
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
`,Te=t.h4`
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
`,Fe=t.span`
  color: var(--primary-color-white);
`,Ie=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,Ae=t.svg`
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
`,Ee=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,Le=t.button`
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
`,Me=t.div`
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
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,_e=()=>{const[r,i]=g.useState(!1),o=f(),s=d(Pe),a=d(C),l=d(Re),n=l<=a?Math.round(l*100/a):100;let c=a-l;l>a&&(c=0);const h={color:n>85?`${p.palette.greyone.main}`:`${p.palette.violet.main}`};return e.jsxs(Be,{children:[e.jsx(De,{children:"Water"}),e.jsxs(Se,{children:[e.jsx(Ae,{width:"20px",height:"20px",onClick:()=>{o(A(s))},children:e.jsx("use",{href:`${x}#trash-delete`})}),e.jsx(Me,{children:e.jsxs(Ge,{children:[e.jsx(ze,{waterIntake:n}),e.jsx(Ue,{style:h,children:`${n}%`})]})}),e.jsxs("div",{children:[e.jsx(Te,{children:"Water consumption"}),e.jsxs(j,{children:[e.jsx(Ie,{children:l}),"ml"]}),e.jsxs(j,{children:[e.jsx(Fe,{children:"left:"})," ",`${c} ml`]}),e.jsxs(Le,{type:"button",onClick:()=>i(!0),children:[e.jsx(Ee,{children:e.jsx("use",{href:`${x}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx($e,{setIsModalOpen:i,isModalOpen:r})]})},Ve=t.div`
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
`,Ze=t(E)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,Je=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,Ke=()=>e.jsxs(Ve,{children:[e.jsxs(qe,{children:[e.jsx(Ne,{children:"Today"}),e.jsxs(Ze,{to:"/dashboard",children:["On the way to the goal",e.jsx(Je,{children:e.jsx("use",{href:`${x}#icon-arrowright`})})]})]}),e.jsxs(He,{children:[e.jsx(te,{}),e.jsx(_e,{}),e.jsx(fe,{})]})]}),et=()=>{const r=f();return g.useEffect(()=>{r(L()),r(M())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(Ke,{}),e.jsx(Z,{}),e.jsx(J,{})]})};export{et as default};
