import{s as t,k as h,m as M,n as A,j as e,o as u,t as g,p as _,q as H,v as V,r as v,u as j,w as q,x as N,L,y as Z,z as J,A as K,B as O}from"./index-3aa1b888.js";import{C as I,A as Q,p as E,a as G,D as X,b as Y,L as ee,B as te,c as re,d as ie}from"./index-d38ab5b1.js";import{R as ne}from"./RecommendedList-94a27bc7.js";import{M as oe,A as ae,s as se,a as le,b as ce,c as de}from"./Reacord.styled-34110b8f.js";const pe=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,xe=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,he=t.ul`
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
`,ge=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,me=t.svg`
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
`,ue=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,fe=()=>{const r=h(M),i=h(A);return e.jsxs(pe,{children:[e.jsx(xe,{children:"Daily goal"}),e.jsxs(he,{children:[e.jsxs(D,{children:[e.jsx(ge,{children:e.jsx("use",{href:`${u}#bubble`})}),e.jsxs(P,{children:[e.jsx("p",{children:"Calories"}),e.jsx(S,{children:r})]})]}),e.jsxs(D,{children:[e.jsx(me,{children:e.jsx("use",{href:`${u}#milk`})}),e.jsxs(P,{children:[e.jsx("p",{children:" Water"}),e.jsxs(S,{children:[i," ",e.jsx(ue,{children:"ml"})]})]})]})]})]})};I.register(Q,E,G);const we={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},ye={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const o=r.getDatasetMeta(0).data[0].x,a=r.getDatasetMeta(0).data[0].y,d=r.getDatasetMeta(0).data[0].innerRadius,p=r.getDatasetMeta(0).data[0].outerRadius,c=p-d,x=Math.PI/180;i.beginPath(),i.lineWidth=c,i.strokeStyle=`${g.palette.greyone.main}`,i.arc(o,a,p-c/2,0,x*360,!1),i.stroke()}},U=({dailyGoal:r,filledValue:i,bgColor:o})=>{let a=r-i;i>r&&(a=0);const d={datasets:[{label:[],data:[i,a],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(X,{options:we,data:d,plugins:[ye]})})},be=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,ve=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,je=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,ke=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,R=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Ce=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,k=({title:r,bgColor:i,dailyGoal:o,filledValue:a})=>{let d=Math.round(a*100/o),p=(o-a).toFixed(0);return a>o&&(p=0),d>100&&(d=100),e.jsxs(ve,{children:[e.jsxs(be,{children:[e.jsx(U,{dailyGoal:o,filledValue:a,bgColor:i}),e.jsx(Ce,{children:e.jsx("p",{children:`${d}%`})})]}),e.jsxs("div",{children:[e.jsx(ke,{children:r}),e.jsxs(je,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(R,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(R,{children:p})]})]})]})]})},$e=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,We=t.div`
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
`,Fe=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,ze=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;t.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const Be=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,C=t.li`
  display: flex;
`,De=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,Pe=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Se=t.p`
  color: var(--primary-color-grey);
`,Re=()=>{const r=`${g.palette.litegreen.main}`,i=`${g.palette.pink.main}`,o=`${g.palette.yellow.main}`,a=`${g.palette.grey.main}`,d=h(M),p=h(_),c=h(H),x=h(V),m=1360,f=136,w=119.5,y=38.8;return e.jsxs($e,{children:[e.jsx(ze,{children:"Food"}),e.jsxs(We,{children:[e.jsxs(Be,{children:[e.jsx(U,{dailyGoal:d,filledValue:m,bgColor:r}),e.jsxs(De,{children:[e.jsx(Pe,{children:m}),e.jsx(Se,{children:"calories"})]})]}),e.jsxs(Fe,{children:[e.jsx(C,{children:e.jsx(k,{title:"Carbonohidrates",bgColor:i,dailyGoal:p,filledValue:f})}),e.jsx(C,{children:e.jsx(k,{title:"Protein",bgColor:o,dailyGoal:c,filledValue:w})}),e.jsx(C,{children:e.jsx(k,{title:"Fat",bgColor:a,dailyGoal:x,filledValue:y})})]})]})]})},Te=t.div`
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
`,Me=t.div`
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
`,Ae=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Le=t.button`
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
`,Ie=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,Ee=t.input`
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
`,Ge=t.button`
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
`,Ue=({isModalOpen:r,setIsModalOpen:i})=>{const[o,a]=v.useState(0),d=j(),p=c=>{c.preventDefault(),d(q({value:o})),i(!1)};return v.useEffect(()=>{const c=x=>{x.code==="Escape"&&i(!1)};return r?(document.addEventListener("keydown",c),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",c),document.body.style.overflow="unset"}},[r,i]),e.jsx(Te,{onClick:()=>i(!1),children:e.jsxs(Me,{onClick:c=>c.stopPropagation(),children:[e.jsx(Ie,{children:"Add water intake"}),e.jsxs(Ae,{onSubmit:p,children:[e.jsxs("label",{children:["How much water",e.jsx(Ee,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:c=>a(Number(c.target.value)),value:o||"",min:1})]}),e.jsx(Le,{type:"submit",children:"Confirm"}),e.jsx(Ge,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})})};I.register(Y,ee,te,re,E,G);const _e={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},He=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${g.palette.violet.main}`,hoverBackgroundColor:`${g.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(ie,{data:i,options:_e})},Ve=r=>r.dailyWaterStatistics.consumedWater.value,qe=r=>r.dailyWaterStatistics.consumedWater._id,Ne=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,Ze=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,Je=t.div`
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
`,Ke=t.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,T=t.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Oe=t.span`
  color: var(--primary-color-white);
`,Qe=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,Xe=t.svg`
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
`,Ye=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,et=t.button`
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
`,tt=t.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,rt=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,it=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,nt=()=>{const[r,i]=v.useState(!1),o=j(),a=h(qe),d=h(A),p=h(Ve),c=p<=d?Math.round(p*100/d):100;let x=d-p;p>d&&(x=0);const m={color:c>85?`${g.palette.greyone.main}`:`${g.palette.violet.main}`};return e.jsxs(Ne,{children:[e.jsx(Ze,{children:"Water"}),e.jsxs(Je,{children:[e.jsx(Xe,{width:"20px",height:"20px",onClick:()=>{o(N(a))},children:e.jsx("use",{href:`${u}#trash-delete`})}),e.jsx(tt,{children:e.jsxs(rt,{children:[e.jsx(He,{waterIntake:c}),e.jsx(it,{style:m,children:`${c}%`})]})}),e.jsxs("div",{children:[e.jsx(Ke,{children:"Water consumption"}),e.jsxs(T,{children:[e.jsx(Qe,{children:p}),"ml"]}),e.jsxs(T,{children:[e.jsx(Oe,{children:"left:"})," ",`${x} ml`]}),e.jsxs(et,{type:"button",onClick:()=>i(!0),children:[e.jsx(Ye,{children:e.jsx("use",{href:`${u}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(Ue,{setIsModalOpen:i,isModalOpen:r})]})},ot=t.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,at=t.div`
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
`,st=t.div`
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
`,lt=t.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,ct=t(L)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,dt=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,pt=()=>e.jsxs(ot,{children:[e.jsxs(at,{children:[e.jsx(lt,{children:"Today"}),e.jsxs(ct,{to:"/dashboard",children:["On the way to the goal",e.jsx(dt,{children:e.jsx("use",{href:`${u}#icon-arrowright`})})]})]}),e.jsxs(st,{children:[e.jsx(fe,{}),e.jsx(nt,{}),e.jsx(Re,{})]})]}),xt=t.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,ht=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,gt=t.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,mt=t(L)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,ut=t.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,ft=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,wt=t.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,$=t.p`
  width: 160px;
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    width: AUTO;
  }
`,yt=t.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,bt=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,vt=t.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,jt=t.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,kt=t.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`,Ct="/Healthy_life/assets/Breakfast-ebbae9d6.png",b=({meal:r,title:i,totalCarbs:o,totalProtein:a,totalFat:d})=>{const p=j(),c=x=>{p(Z({userFood:{},typeFood:x}))};return e.jsxs(ft,{children:[e.jsxs(bt,{children:[e.jsx(oe,{src:Ct}),e.jsx(yt,{children:i})]}),e.jsx(wt,{children:r.length>0?e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Carbonohidrates: ",o]}),e.jsxs($,{children:["Protein: ",a]}),e.jsxs($,{children:["Fat: ",d,e.jsx(vt,{onClick:()=>c(i.toLowerCase()),children:e.jsx("use",{href:`${u}#trash-delete`})})]})]}):e.jsxs(kt,{children:[e.jsx(ae,{children:"Record your meal"}),e.jsx(jt,{children:e.jsx("use",{href:`${u}#icon-add-converted`})})]})})]})},$t=()=>{const r=h(se),i=h(le),o=h(ce),a=h(de);let d=0,p=0,c=0,x=0,m=0,f=0,w=0,y=0,W=0,F=0,z=0,B=0;return console.log("breakfast: ",r),(r==null?void 0:r.length)>0&&(d=r.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.fat)},0),p=r.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.protein)},0),c=r.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),(i==null?void 0:i.length)>0&&(x=i.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.fat)},0),m=i.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.protein)},0),f=i.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),(o==null?void 0:o.length)>0&&(w=o.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.protein)},0),y=o.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.carbogidrate)},0),W=o.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.fat)},0)),(a==null?void 0:a.length)>0&&(F=a.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.fat)},0),z=a.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.protein)},0),B=a.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),e.jsxs(xt,{children:[e.jsxs(ht,{children:[e.jsx(gt,{children:"Diary"}),e.jsx(mt,{to:"/diary",children:"See more"})]}),e.jsxs(ut,{children:[e.jsx(b,{meal:r,title:"Breakfast",totalCarbs:c,totalProtein:p,totalFat:d}),e.jsx(b,{meal:i,title:"Lunch",totalCarbs:f,totalProtein:m,totalFat:x}),e.jsx(b,{meal:o,title:"Dinner",totalCarbs:y,totalProtein:w,totalFat:W}),e.jsx(b,{meal:a,title:"Snack",totalCarbs:B,totalProtein:z,totalFat:F})]})]})},Wt=t.div`
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
`,Pt=()=>{const r=j();return v.useEffect(()=>{r(J()),r(K()),r(O())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(pt,{}),e.jsxs(Wt,{children:[e.jsx($t,{}),e.jsx(ne,{})]})]})};export{Pt as default};
