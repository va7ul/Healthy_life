import{s as t,k as h,m as P,n as S,j as e,o as m,t as g,p as _,q as H,v as V,r as w,u as y,w as q,x as N,L as R,y as Z,z as J,A as K,B as O}from"./index-4f766f15.js";import{C as T,A as Q,p as M,a as A,D as X,b as Y,L as ee,B as te,c as re,d as ie}from"./index-050fb328.js";import{R as ne}from"./RecommendedList-56b95b5f.js";import{M as oe,A as ae,s as se,a as le,b as ce,c as de}from"./Reacord.styled-130f42ae.js";const pe=t.div`
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
`,W=t.li`
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
`,F=t.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,z=t.p`
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
`,fe=()=>{const r=h(P),i=h(S);return e.jsxs(pe,{children:[e.jsx(xe,{children:"Daily goal"}),e.jsxs(he,{children:[e.jsxs(W,{children:[e.jsx(ge,{children:e.jsx("use",{href:`${m}#bubble`})}),e.jsxs(F,{children:[e.jsx("p",{children:"Calories"}),e.jsx(z,{children:r})]})]}),e.jsxs(W,{children:[e.jsx(me,{children:e.jsx("use",{href:`${m}#milk`})}),e.jsxs(F,{children:[e.jsx("p",{children:" Water"}),e.jsxs(z,{children:[i," ",e.jsx(ue,{children:"ml"})]})]})]})]})]})};T.register(Q,M,A);const we={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},ye={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const o=r.getDatasetMeta(0).data[0].x,l=r.getDatasetMeta(0).data[0].y,d=r.getDatasetMeta(0).data[0].innerRadius,p=r.getDatasetMeta(0).data[0].outerRadius,c=p-d,x=Math.PI/180;i.beginPath(),i.lineWidth=c,i.strokeStyle=`${g.palette.greyone.main}`,i.arc(o,l,p-c/2,0,x*360,!1),i.stroke()}},L=({dailyGoal:r,filledValue:i,bgColor:o})=>{let l=r-i;i>r&&(l=0);const d={datasets:[{label:[],data:[i,l],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(X,{options:we,data:d,plugins:[ye]})})},be=t.div`
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
`,B=t.span`
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
`,k=({title:r,bgColor:i,dailyGoal:o,filledValue:l})=>{let d=Math.round(l*100/o),p=(o-l).toFixed(0);return l>o&&(p=0),d>100&&(d=100),e.jsxs(ve,{children:[e.jsxs(be,{children:[e.jsx(L,{dailyGoal:o,filledValue:l,bgColor:i}),e.jsx(Ce,{children:e.jsx("p",{children:`${d}%`})})]}),e.jsxs("div",{children:[e.jsx(ke,{children:r}),e.jsxs(je,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(B,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(B,{children:p})]})]})]})]})},$e=t.div`
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
`,Re=()=>{const r=`${g.palette.litegreen.main}`,i=`${g.palette.pink.main}`,o=`${g.palette.yellow.main}`,l=`${g.palette.grey.main}`,d=h(P),p=h(_),c=h(H),x=h(V),u=1360,b=136,v=119.5,j=38.8;return e.jsxs($e,{children:[e.jsx(ze,{children:"Food"}),e.jsxs(We,{children:[e.jsxs(Be,{children:[e.jsx(L,{dailyGoal:d,filledValue:u,bgColor:r}),e.jsxs(De,{children:[e.jsx(Pe,{children:u}),e.jsx(Se,{children:"calories"})]})]}),e.jsxs(Fe,{children:[e.jsx(C,{children:e.jsx(k,{title:"Carbonohidrates",bgColor:i,dailyGoal:p,filledValue:b})}),e.jsx(C,{children:e.jsx(k,{title:"Protein",bgColor:o,dailyGoal:c,filledValue:v})}),e.jsx(C,{children:e.jsx(k,{title:"Fat",bgColor:l,dailyGoal:x,filledValue:j})})]})]})]})},Te=t.div`
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
`,Ue=({isModalOpen:r,setIsModalOpen:i})=>{const[o,l]=w.useState(0),d=y(),p=c=>{c.preventDefault(),d(q({value:o})),i(!1)};return w.useEffect(()=>{const c=x=>{x.code==="Escape"&&i(!1)};return r?(document.addEventListener("keydown",c),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",c),document.body.style.overflow="unset"}},[r,i]),e.jsx(Te,{onClick:()=>i(!1),children:e.jsxs(Me,{onClick:c=>c.stopPropagation(),children:[e.jsx(Ie,{children:"Add water intake"}),e.jsxs(Ae,{onSubmit:p,children:[e.jsxs("label",{children:["How much water",e.jsx(Ee,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:c=>l(Number(c.target.value)),value:o||"",min:1})]}),e.jsx(Le,{type:"submit",children:"Confirm"}),e.jsx(Ge,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})})};T.register(Y,ee,te,re,M,A);const _e={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},He=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${g.palette.violet.main}`,hoverBackgroundColor:`${g.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(ie,{data:i,options:_e})},Ve=r=>r.dailyWaterStatistics.consumedWater.value,qe=r=>r.dailyWaterStatistics.consumedWater._id,Ne=t.div`
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
`,D=t.p`
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
`,nt=()=>{const[r,i]=w.useState(!1),o=y(),l=h(qe),d=h(S),p=h(Ve),c=p<=d?Math.round(p*100/d):100;let x=d-p;p>d&&(x=0);const u={color:c>85?`${g.palette.greyone.main}`:`${g.palette.violet.main}`};return e.jsxs(Ne,{children:[e.jsx(Ze,{children:"Water"}),e.jsxs(Je,{children:[e.jsx(Xe,{width:"20px",height:"20px",onClick:()=>{o(N(l))},children:e.jsx("use",{href:`${m}#trash-delete`})}),e.jsx(tt,{children:e.jsxs(rt,{children:[e.jsx(He,{waterIntake:c}),e.jsx(it,{style:u,children:`${c}%`})]})}),e.jsxs("div",{children:[e.jsx(Ke,{children:"Water consumption"}),e.jsxs(D,{children:[e.jsx(Qe,{children:p}),"ml"]}),e.jsxs(D,{children:[e.jsx(Oe,{children:"left:"})," ",`${x} ml`]}),e.jsxs(et,{type:"button",onClick:()=>i(!0),children:[e.jsx(Ye,{children:e.jsx("use",{href:`${m}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(Ue,{setIsModalOpen:i,isModalOpen:r})]})},ot=t.div`
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
`,ct=t(R)`
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
`,pt=()=>e.jsxs(ot,{children:[e.jsxs(at,{children:[e.jsx(lt,{children:"Today"}),e.jsxs(ct,{to:"/dashboard",children:["On the way to the goal",e.jsx(dt,{children:e.jsx("use",{href:`${m}#icon-arrowright`})})]})]}),e.jsxs(st,{children:[e.jsx(fe,{}),e.jsx(nt,{}),e.jsx(Re,{})]})]}),xt=t.div`
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
`,mt=t(R)`
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
`,Ct="/Healthy_life/assets/Breakfast-ebbae9d6.png",f=({meal:r,title:i,totalCarbs:o,totalProtein:l,totalFat:d})=>{const p=y(),c=x=>{p(Z({userFood:{},typeFood:x}))};return e.jsxs(ft,{children:[e.jsxs(bt,{children:[e.jsx(oe,{src:Ct}),e.jsx(yt,{children:i})]}),e.jsx(wt,{children:r[0].name!==""?e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Carbonohidrates: ",o]}),e.jsxs($,{children:["Protein: ",l]}),e.jsxs($,{children:["Fat: ",d,e.jsx(vt,{onClick:()=>c(i.toLowerCase()),children:e.jsx("use",{href:`${m}#trash-delete`})})]})]}):e.jsxs(kt,{children:[e.jsx(ae,{children:"Record your meal"}),e.jsx(jt,{children:e.jsx("use",{href:`${m}#icon-add-converted`})})]})})]})},$t=()=>{const r=h(se),i=h(le),o=h(ce),l=h(de),d=r.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.fat)},0),p=o.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.fat)},0),c=i.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.fat)},0),x=l.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.fat)},0),u=r.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.protein)},0),b=o.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.protein)},0),v=i.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.protein)},0),j=l.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.protein)},0),I=r.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.carbogidrate)},0),E=o.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.carbogidrate)},0),G=i.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.carbogidrate)},0),U=l.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.carbogidrate)},0);return e.jsxs(xt,{children:[e.jsxs(ht,{children:[e.jsx(gt,{children:"Diary"}),e.jsx(mt,{to:"/diary",children:"See more"})]}),e.jsxs(ut,{children:[e.jsx(f,{meal:r,title:"Breakfast",totalCarbs:I,totalProtein:u,totalFat:d}),e.jsx(f,{meal:i,title:"Lunch",totalCarbs:G,totalProtein:v,totalFat:c}),e.jsx(f,{meal:o,title:"Dinner",totalCarbs:E,totalProtein:b,totalFat:p}),e.jsx(f,{meal:l,title:"Snack",totalCarbs:U,totalProtein:j,totalFat:x})]})]})},Wt=t.div`
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
`,Pt=()=>{const r=y();return w.useEffect(()=>{r(J()),r(K()),r(O())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(pt,{}),e.jsxs(Wt,{children:[e.jsx($t,{}),e.jsx(ne,{})]})]})};export{Pt as default};
