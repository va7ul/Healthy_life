import{s as t,k as x,m as M,n as L,j as e,o as u,t as m,p as _,q as H,v as O,r as j,u as v,w as q,x as N,L as A,y as V,z as Z,A as J,B as K,C as Q}from"./index-895674c0.js";import{C as I,A as X,p as E,a as G,D as Y,b as ee,L as te,B as re,c as ie,d as oe}from"./index-852bf93f.js";import{s as ne,a as ae,b as se,c as le,d as ce,R as de,M as pe,A as xe,e as he,f as ge,g as me,h as ue}from"./Record-b678aa60.js";import{R as fe}from"./RecommendedList-6978bbe5.js";const we=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,ye=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,be=t.ul`
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
`,je=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,ve=t.svg`
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
`,ke=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Ce=()=>{const r=x(M),i=x(L);return e.jsxs(we,{children:[e.jsx(ye,{children:"Daily goal"}),e.jsxs(be,{children:[e.jsxs(D,{children:[e.jsx(je,{children:e.jsx("use",{href:`${u}#bubble`})}),e.jsxs(P,{children:[e.jsx("p",{children:"Calories"}),e.jsx(R,{children:r})]})]}),e.jsxs(D,{children:[e.jsx(ve,{children:e.jsx("use",{href:`${u}#milk`})}),e.jsxs(P,{children:[e.jsx("p",{children:" Water"}),e.jsxs(R,{children:[i," ",e.jsx(ke,{children:"ml"})]})]})]})]})]})};I.register(X,E,G);const $e={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},We={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const n=r.getDatasetMeta(0).data[0].x,a=r.getDatasetMeta(0).data[0].y,d=r.getDatasetMeta(0).data[0].innerRadius,p=r.getDatasetMeta(0).data[0].outerRadius,c=p-d,h=Math.PI/180;i.beginPath(),i.lineWidth=c,i.strokeStyle=`${m.palette.greyone.main}`,i.arc(n,a,p-c/2,0,h*360,!1),i.stroke()}},U=({dailyGoal:r,filledValue:i,bgColor:n})=>{let a=r-i;i>r&&(a=0);const d={datasets:[{label:[],data:[i,a],backgroundColor:[n,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(Y,{options:$e,data:d,plugins:[We]})})},Fe=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,ze=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Be=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,De=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,T=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Pe=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,k=({title:r,bgColor:i,dailyGoal:n,filledValue:a})=>{a||(a=0);let d=Math.round(a*100/n),p=(n-a).toFixed(0);return a>n&&(p=0),d>100&&(d=100),e.jsxs(ze,{children:[e.jsxs(Fe,{children:[e.jsx(U,{dailyGoal:n,filledValue:a,bgColor:i}),e.jsx(Pe,{children:e.jsx("p",{children:`${d}%`})})]}),e.jsxs("div",{children:[e.jsx(De,{children:r}),e.jsxs(Be,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(T,{children:n})]}),e.jsxs("p",{children:["left: ",e.jsx(T,{children:p})]})]})]})]})},Re=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,Te=t.div`
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
`,Se=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,Me=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;t.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const Le=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,C=t.li`
  display: flex;
`,Ae=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,Ie=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Ee=t.p`
  color: var(--primary-color-grey);
`,Ge=()=>{const r=`${m.palette.litegreen.main}`,i=`${m.palette.pink.main}`,n=`${m.palette.yellow.main}`,a=`${m.palette.grey.main}`,d=x(M),p=x(_),c=x(H),h=x(O),g=x(ne),f=x(ae),w=x(se),y=x(le);return e.jsxs(Re,{children:[e.jsx(Me,{children:"Food"}),e.jsxs(Te,{children:[e.jsxs(Le,{children:[e.jsx(U,{dailyGoal:d,filledValue:g,bgColor:r}),e.jsxs(Ae,{children:[e.jsx(Ie,{children:g}),e.jsx(Ee,{children:"calories"})]})]}),e.jsxs(Se,{children:[e.jsx(C,{children:e.jsx(k,{title:"Carbonohidrates",bgColor:i,dailyGoal:p,filledValue:f})}),e.jsx(C,{children:e.jsx(k,{title:"Protein",bgColor:n,dailyGoal:c,filledValue:w})}),e.jsx(C,{children:e.jsx(k,{title:"Fat",bgColor:a,dailyGoal:h,filledValue:y})})]})]})]})},Ue=t.div`
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
`,_e=t.div`
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
`,He=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Oe=t.button`
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
`,qe=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,Ne=t.input`
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
`,Ve=t.button`
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
`,Ze=({isModalOpen:r,setIsModalOpen:i})=>{const[n,a]=j.useState(0),d=v(),p=c=>{c.preventDefault(),d(q({value:n})),i(!1)};return j.useEffect(()=>{const c=h=>{h.code==="Escape"&&i(!1)};return r?(document.addEventListener("keydown",c),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",c),document.body.style.overflow="unset"}},[r,i]),e.jsx(Ue,{onClick:()=>i(!1),children:e.jsxs(_e,{onClick:c=>c.stopPropagation(),children:[e.jsx(qe,{children:"Add water intake"}),e.jsxs(He,{onSubmit:p,children:[e.jsxs("label",{children:["How much water",e.jsx(Ne,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:c=>a(Number(c.target.value)),value:n||"",min:1})]}),e.jsx(Oe,{type:"submit",children:"Confirm"}),e.jsx(Ve,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})})};I.register(ee,te,re,ie,E,G);const Je={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Ke=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${m.palette.violet.main}`,hoverBackgroundColor:`${m.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(oe,{data:i,options:Je})},Qe=r=>r.dailyWaterStatistics.consumedWater.value,Xe=r=>r.dailyWaterStatistics.consumedWater._id,Ye=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,et=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,tt=t.div`
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
`,rt=t.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,S=t.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,it=t.span`
  color: var(--primary-color-white);
`,ot=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,nt=t.svg`
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
`,at=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,st=t.button`
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
`,lt=t.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,ct=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,dt=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,pt=()=>{const[r,i]=j.useState(!1),n=v(),a=x(Xe),d=x(L),p=x(Qe),c=p<=d?Math.round(p*100/d):100;let h=d-p;p>d&&(h=0);const g={color:c>85?`${m.palette.greyone.main}`:`${m.palette.violet.main}`};return e.jsxs(Ye,{children:[e.jsx(et,{children:"Water"}),e.jsxs(tt,{children:[e.jsx(nt,{width:"20px",height:"20px",onClick:()=>{n(N(a))},children:e.jsx("use",{href:`${u}#trash-delete`})}),e.jsx(lt,{children:e.jsxs(ct,{children:[e.jsx(Ke,{waterIntake:c}),e.jsx(dt,{style:g,children:`${c}%`})]})}),e.jsxs("div",{children:[e.jsx(rt,{children:"Water consumption"}),e.jsxs(S,{children:[e.jsx(ot,{children:p}),"ml"]}),e.jsxs(S,{children:[e.jsx(it,{children:"left:"})," ",`${h} ml`]}),e.jsxs(st,{type:"button",onClick:()=>i(!0),children:[e.jsx(at,{children:e.jsx("use",{href:`${u}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(Ze,{setIsModalOpen:i,isModalOpen:r})]})},xt=t.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,ht=t.div`
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
`,gt=t.div`
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
`,mt=t.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,ut=t(A)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,ft=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,wt=()=>e.jsxs(xt,{children:[e.jsxs(ht,{children:[e.jsx(mt,{children:"Today"}),e.jsxs(ut,{to:"/dashboard",children:["On the way to the goal",e.jsx(ft,{children:e.jsx("use",{href:`${u}#icon-arrowright`})})]})]}),e.jsxs(gt,{children:[e.jsx(Ce,{}),e.jsx(pt,{}),e.jsx(Ge,{})]})]}),yt=t.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,bt=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,jt=t.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,vt=t(A)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,kt=t.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,Ct=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,$t=t.div`
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
`,Wt=t.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,Ft=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,zt=t.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,Bt=t.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Dt=t.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`,Pt="/Healthy_life/assets/Breakfast-ebbae9d6.png",b=({meal:r,title:i,totalCarbs:n,totalProtein:a,totalFat:d})=>{const p=v(),c=w=>{p(V({userFood:{},typeFood:w}))};let h=x(ce);const g=()=>{p(Z(!0))};let f=i.toLowerCase();return console.log("type: ",f),e.jsxs(Ct,{children:[h?e.jsx(de,{}):null,e.jsxs(Ft,{children:[e.jsx(pe,{src:Pt}),e.jsx(Wt,{children:i})]}),e.jsx($t,{children:r.length>0?e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Carbonohidrates: ",n]}),e.jsxs($,{children:["Protein: ",a]}),e.jsxs($,{children:["Fat: ",d,e.jsx(zt,{onClick:()=>c(i.toLowerCase()),children:e.jsx("use",{href:`${u}#trash-delete`})})]})]}):e.jsxs(Dt,{onClick:g,children:[e.jsx(xe,{children:"Record your meal"}),e.jsx(Bt,{children:e.jsx("use",{href:`${u}#icon-add-converted`})})]})})]})},Rt=()=>{const r=x(he),i=x(ge),n=x(me),a=x(ue);let d=0,p=0,c=0,h=0,g=0,f=0,w=0,y=0,W=0,F=0,z=0,B=0;return(r==null?void 0:r.length)>0&&(d=r.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.fat)},0),p=r.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.protein)},0),c=r.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.carbogidrate)},0)),(i==null?void 0:i.length)>0&&(h=i.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.fat)},0),g=i.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.protein)},0),f=i.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.carbogidrate)},0)),(n==null?void 0:n.length)>0&&(w=n.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.protein)},0),y=n.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.carbogidrate)},0),W=n.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.fat)},0)),(a==null?void 0:a.length)>0&&(F=a.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.fat)},0),z=a.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.protein)},0),B=a.reduce((s,l)=>{var o;return s+((o=l.nutrition)==null?void 0:o.carbogidrate)},0)),e.jsxs(yt,{children:[e.jsxs(bt,{children:[e.jsx(jt,{children:"Diary"}),e.jsx(vt,{to:"/diary",children:"See more"})]}),e.jsxs(kt,{children:[e.jsx(b,{meal:r,title:"Breakfast",totalCarbs:c,totalProtein:p,totalFat:d}),e.jsx(b,{meal:i,title:"Lunch",totalCarbs:f,totalProtein:g,totalFat:h}),e.jsx(b,{meal:n,title:"Dinner",totalCarbs:y,totalProtein:w,totalFat:W}),e.jsx(b,{meal:a,title:"Snack",totalCarbs:B,totalProtein:z,totalFat:F})]})]})},Tt=t.div`
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
`,It=()=>{const r=v();return j.useEffect(()=>{r(J()),r(K()),r(Q())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(wt,{}),e.jsxs(Tt,{children:[e.jsx(Rt,{}),e.jsx(fe,{})]})]})};export{It as default};
