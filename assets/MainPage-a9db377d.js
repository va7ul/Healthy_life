import{s as t,k as h,m as M,n as L,j as e,o as u,t as m,p as _,q as H,v as O,r as j,u as v,w as V,x as q,L as A,y as N,z as Z,A as J,B as K,C as Q}from"./index-54606814.js";import{C as I,A as X,p as E,a as G,D as Y,b as ee,L as te,B as re,c as ie,d as ne}from"./index-00d5fe76.js";import{R as oe}from"./RecommendedList-b6f8ba36.js";import{s as ae,R as se,M as le,A as ce,a as de,b as pe,c as xe,d as he}from"./Record-e0a30a13.js";const ge=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,me=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,ue=t.ul`
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
`,fe=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,we=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,P=t.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,R=t.p`
  margin-top: 4px;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.11;
  color: var(--primary-color-white);
`,ye=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,be=()=>{const r=h(M),i=h(L);return e.jsxs(ge,{children:[e.jsx(me,{children:"Daily goal"}),e.jsxs(ue,{children:[e.jsxs(D,{children:[e.jsx(fe,{children:e.jsx("use",{href:`${u}#bubble`})}),e.jsxs(P,{children:[e.jsx("p",{children:"Calories"}),e.jsx(R,{children:r})]})]}),e.jsxs(D,{children:[e.jsx(we,{children:e.jsx("use",{href:`${u}#milk`})}),e.jsxs(P,{children:[e.jsx("p",{children:" Water"}),e.jsxs(R,{children:[i," ",e.jsx(ye,{children:"ml"})]})]})]})]})]})};I.register(X,E,G);const je={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},ve={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const o=r.getDatasetMeta(0).data[0].x,a=r.getDatasetMeta(0).data[0].y,d=r.getDatasetMeta(0).data[0].innerRadius,p=r.getDatasetMeta(0).data[0].outerRadius,c=p-d,x=Math.PI/180;i.beginPath(),i.lineWidth=c,i.strokeStyle=`${m.palette.greyone.main}`,i.arc(o,a,p-c/2,0,x*360,!1),i.stroke()}},U=({dailyGoal:r,filledValue:i,bgColor:o})=>{let a=r-i;i>r&&(a=0);const d={datasets:[{label:[],data:[i,a],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(Y,{options:je,data:d,plugins:[ve]})})},ke=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,Ce=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,$e=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,We=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,S=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Fe=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,k=({title:r,bgColor:i,dailyGoal:o,filledValue:a})=>{let d=Math.round(a*100/o),p=(o-a).toFixed(0);return a>o&&(p=0),d>100&&(d=100),e.jsxs(Ce,{children:[e.jsxs(ke,{children:[e.jsx(U,{dailyGoal:o,filledValue:a,bgColor:i}),e.jsx(Fe,{children:e.jsx("p",{children:`${d}%`})})]}),e.jsxs("div",{children:[e.jsx(We,{children:r}),e.jsxs($e,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(S,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(S,{children:p})]})]})]})]})},ze=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,Be=t.div`
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
`,De=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,Pe=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;t.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const Re=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,C=t.li`
  display: flex;
`,Se=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,Te=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Me=t.p`
  color: var(--primary-color-grey);
`,Le=()=>{const r=`${m.palette.litegreen.main}`,i=`${m.palette.pink.main}`,o=`${m.palette.yellow.main}`,a=`${m.palette.grey.main}`,d=h(M),p=h(_),c=h(H),x=h(O),g=1360,f=136,w=119.5,y=38.8;return e.jsxs(ze,{children:[e.jsx(Pe,{children:"Food"}),e.jsxs(Be,{children:[e.jsxs(Re,{children:[e.jsx(U,{dailyGoal:d,filledValue:g,bgColor:r}),e.jsxs(Se,{children:[e.jsx(Te,{children:g}),e.jsx(Me,{children:"calories"})]})]}),e.jsxs(De,{children:[e.jsx(C,{children:e.jsx(k,{title:"Carbonohidrates",bgColor:i,dailyGoal:p,filledValue:f})}),e.jsx(C,{children:e.jsx(k,{title:"Protein",bgColor:o,dailyGoal:c,filledValue:w})}),e.jsx(C,{children:e.jsx(k,{title:"Fat",bgColor:a,dailyGoal:x,filledValue:y})})]})]})]})},Ae=t.div`
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
`,Ie=t.div`
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
`,Ee=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Ge=t.button`
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
`,Ue=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,_e=t.input`
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
`,He=t.button`
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
`,Oe=({isModalOpen:r,setIsModalOpen:i})=>{const[o,a]=j.useState(0),d=v(),p=c=>{c.preventDefault(),d(V({value:o})),i(!1)};return j.useEffect(()=>{const c=x=>{x.code==="Escape"&&i(!1)};return r?(document.addEventListener("keydown",c),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",c),document.body.style.overflow="unset"}},[r,i]),e.jsx(Ae,{onClick:()=>i(!1),children:e.jsxs(Ie,{onClick:c=>c.stopPropagation(),children:[e.jsx(Ue,{children:"Add water intake"}),e.jsxs(Ee,{onSubmit:p,children:[e.jsxs("label",{children:["How much water",e.jsx(_e,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:c=>a(Number(c.target.value)),value:o||"",min:1})]}),e.jsx(Ge,{type:"submit",children:"Confirm"}),e.jsx(He,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})})};I.register(ee,te,re,ie,E,G);const Ve={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},qe=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${m.palette.violet.main}`,hoverBackgroundColor:`${m.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(ne,{data:i,options:Ve})},Ne=r=>r.dailyWaterStatistics.consumedWater.value,Ze=r=>r.dailyWaterStatistics.consumedWater._id,Je=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,Ke=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,Qe=t.div`
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
`,Xe=t.h4`
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
`,Ye=t.span`
  color: var(--primary-color-white);
`,et=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,tt=t.svg`
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
`,rt=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,it=t.button`
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
`,nt=t.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,ot=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,at=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,st=()=>{const[r,i]=j.useState(!1),o=v(),a=h(Ze),d=h(L),p=h(Ne),c=p<=d?Math.round(p*100/d):100;let x=d-p;p>d&&(x=0);const g={color:c>85?`${m.palette.greyone.main}`:`${m.palette.violet.main}`};return e.jsxs(Je,{children:[e.jsx(Ke,{children:"Water"}),e.jsxs(Qe,{children:[e.jsx(tt,{width:"20px",height:"20px",onClick:()=>{o(q(a))},children:e.jsx("use",{href:`${u}#trash-delete`})}),e.jsx(nt,{children:e.jsxs(ot,{children:[e.jsx(qe,{waterIntake:c}),e.jsx(at,{style:g,children:`${c}%`})]})}),e.jsxs("div",{children:[e.jsx(Xe,{children:"Water consumption"}),e.jsxs(T,{children:[e.jsx(et,{children:p}),"ml"]}),e.jsxs(T,{children:[e.jsx(Ye,{children:"left:"})," ",`${x} ml`]}),e.jsxs(it,{type:"button",onClick:()=>i(!0),children:[e.jsx(rt,{children:e.jsx("use",{href:`${u}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(Oe,{setIsModalOpen:i,isModalOpen:r})]})},lt=t.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,ct=t.div`
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
`,dt=t.div`
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
`,pt=t.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,xt=t(A)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,ht=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,gt=()=>e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(pt,{children:"Today"}),e.jsxs(xt,{to:"/dashboard",children:["On the way to the goal",e.jsx(ht,{children:e.jsx("use",{href:`${u}#icon-arrowright`})})]})]}),e.jsxs(dt,{children:[e.jsx(be,{}),e.jsx(st,{}),e.jsx(Le,{})]})]}),mt=t.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,ut=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,ft=t.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,wt=t(A)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,yt=t.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,bt=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,jt=t.div`
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
`,vt=t.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,kt=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Ct=t.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,$t=t.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Wt=t.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`,Ft="/Healthy_life/assets/Breakfast-ebbae9d6.png",b=({meal:r,title:i,totalCarbs:o,totalProtein:a,totalFat:d})=>{const p=v(),c=w=>{p(N({userFood:{},typeFood:w}))};let x=h(ae);const g=()=>{p(Z(!0))};let f=i.toLowerCase();return console.log("type: ",f),e.jsxs(bt,{children:[x?e.jsx(se,{}):null,e.jsxs(kt,{children:[e.jsx(le,{src:Ft}),e.jsx(vt,{children:i})]}),e.jsx(jt,{children:r.length>0?e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Carbonohidrates: ",o]}),e.jsxs($,{children:["Protein: ",a]}),e.jsxs($,{children:["Fat: ",d,e.jsx(Ct,{onClick:()=>c(i.toLowerCase()),children:e.jsx("use",{href:`${u}#trash-delete`})})]})]}):e.jsxs(Wt,{onClick:g,children:[e.jsx(ce,{children:"Record your meal"}),e.jsx($t,{children:e.jsx("use",{href:`${u}#icon-add-converted`})})]})})]})},zt=()=>{const r=h(de),i=h(pe),o=h(xe),a=h(he);let d=0,p=0,c=0,x=0,g=0,f=0,w=0,y=0,W=0,F=0,z=0,B=0;return(r==null?void 0:r.length)>0&&(d=r.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.fat)},0),p=r.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.protein)},0),c=r.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),(i==null?void 0:i.length)>0&&(x=i.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.fat)},0),g=i.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.protein)},0),f=i.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),(o==null?void 0:o.length)>0&&(w=o.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.protein)},0),y=o.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.carbogidrate)},0),W=o.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.fat)},0)),(a==null?void 0:a.length)>0&&(F=a.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.fat)},0),z=a.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.protein)},0),B=a.reduce((s,l)=>{var n;return s+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),e.jsxs(mt,{children:[e.jsxs(ut,{children:[e.jsx(ft,{children:"Diary"}),e.jsx(wt,{to:"/diary",children:"See more"})]}),e.jsxs(yt,{children:[e.jsx(b,{meal:r,title:"Breakfast",totalCarbs:c,totalProtein:p,totalFat:d}),e.jsx(b,{meal:i,title:"Lunch",totalCarbs:f,totalProtein:g,totalFat:x}),e.jsx(b,{meal:o,title:"Dinner",totalCarbs:y,totalProtein:w,totalFat:W}),e.jsx(b,{meal:a,title:"Snack",totalCarbs:B,totalProtein:z,totalFat:F})]})]})},Bt=t.div`
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
`,Tt=()=>{const r=v();return j.useEffect(()=>{r(J()),r(K()),r(Q())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(gt,{}),e.jsxs(Bt,{children:[e.jsx(zt,{}),e.jsx(oe,{})]})]})};export{Tt as default};
