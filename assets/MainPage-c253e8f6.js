import{s as t,k as x,m as I,n as L,j as e,o as u,t as m,p as U,q as O,v as N,r as b,u as k,w as q,x as V,L as A,y as Z,z as J,A as K,B as Q,C as X}from"./index-7d0106f5.js";import{C as E,A as Y,p as _,a as G,D as ee,b as te,L as re,B as ie,c as ne,d as oe}from"./index-0cf57a67.js";import{s as ae,a as se,b as le,c as ce,M as de,d as pe,A as xe,e as he,f as ge,g as me,h as fe}from"./MealPopUpModal-6df19352.js";import{R as ue}from"./RecommendedList-bb645a17.js";const we=t.div`
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
`,ve=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,je=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,S=t.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,P=t.p`
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
`,Ce=()=>{const r=x(I),i=x(L);return e.jsxs(we,{children:[e.jsx(ye,{children:"Daily goal"}),e.jsxs(be,{children:[e.jsxs(D,{children:[e.jsx(ve,{children:e.jsx("use",{href:`${u}#bubble`})}),e.jsxs(S,{children:[e.jsx("p",{children:"Calories"}),e.jsx(P,{children:r})]})]}),e.jsxs(D,{children:[e.jsx(je,{children:e.jsx("use",{href:`${u}#milk`})}),e.jsxs(S,{children:[e.jsx("p",{children:" Water"}),e.jsxs(P,{children:[i," ",e.jsx(ke,{children:"ml"})]})]})]})]})]})};E.register(Y,_,G);const $e={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},We={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const a=r.getDatasetMeta(0).data[0].x,s=r.getDatasetMeta(0).data[0].y,p=r.getDatasetMeta(0).data[0].innerRadius,d=r.getDatasetMeta(0).data[0].outerRadius,c=d-p,h=Math.PI/180;i.beginPath(),i.lineWidth=c,i.strokeStyle=`${m.palette.greyone.main}`,i.arc(a,s,d-c/2,0,h*360,!1),i.stroke()}},H=({dailyGoal:r,filledValue:i,bgColor:a})=>{let s=r-i;i>r&&(s=0);const p={datasets:[{label:[],data:[i,s],backgroundColor:[a,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(ee,{options:$e,data:p,plugins:[We]})})},ze=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,Fe=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Me=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,Be=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,T=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,De=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,$=({title:r,bgColor:i,dailyGoal:a,filledValue:s})=>{s||(s=0);let p=Math.round(s*100/a),d=(a-s).toFixed(0);return s>a&&(d=0),p>100&&(p=100),e.jsxs(Fe,{children:[e.jsxs(ze,{children:[e.jsx(H,{dailyGoal:a,filledValue:s,bgColor:i}),e.jsx(De,{children:e.jsx("p",{children:`${p}%`})})]}),e.jsxs("div",{children:[e.jsx(Be,{children:r}),e.jsxs(Me,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(T,{children:a})]}),e.jsxs("p",{children:["left: ",e.jsx(T,{children:d})]})]})]})]})},Se=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,Pe=t.div`
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
`,Te=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,Re=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;t.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const Ie=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,W=t.li`
  display: flex;
`,Le=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,Ae=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Ee=t.p`
  color: var(--primary-color-grey);
`,_e=()=>{const r=`${m.palette.litegreen.main}`,i=`${m.palette.pink.main}`,a=`${m.palette.yellow.main}`,s=`${m.palette.grey.main}`,p=x(I),d=x(U),c=x(O),h=x(N),g=x(ae),w=x(se),f=x(le),y=x(ce);return e.jsxs(Se,{children:[e.jsx(Re,{children:"Food"}),e.jsxs(Pe,{children:[e.jsxs(Ie,{children:[e.jsx(H,{dailyGoal:p,filledValue:g,bgColor:r}),e.jsxs(Le,{children:[e.jsx(Ae,{children:g||0}),e.jsx(Ee,{children:"calories"})]})]}),e.jsxs(Te,{children:[e.jsx(W,{children:e.jsx($,{title:"Carbonohidrates",bgColor:i,dailyGoal:d,filledValue:w})}),e.jsx(W,{children:e.jsx($,{title:"Protein",bgColor:a,dailyGoal:c,filledValue:f})}),e.jsx(W,{children:e.jsx($,{title:"Fat",bgColor:s,dailyGoal:h,filledValue:y})})]})]})]})},Ge=t.div`
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
`,He=t.div`
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
`,Ue=t.form`
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
`,Ne=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,qe=t.input`
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
`,Ze=({isModalOpen:r,setIsModalOpen:i})=>{const[a,s]=b.useState(0),p=k(),d=c=>{c.preventDefault(),p(q({value:a})),i(!1)};return b.useEffect(()=>{const c=h=>{h.code==="Escape"&&i(!1)};return r?(document.addEventListener("keydown",c),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",c),document.body.style.overflow="unset"}},[r,i]),e.jsx(Ge,{onClick:()=>i(!1),children:e.jsxs(He,{onClick:c=>c.stopPropagation(),children:[e.jsx(Ne,{children:"Add water intake"}),e.jsxs(Ue,{onSubmit:d,children:[e.jsxs("label",{children:["How much water",e.jsx(qe,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:c=>s(Number(c.target.value)),value:a||"",min:1})]}),e.jsx(Oe,{type:"submit",children:"Confirm"}),e.jsx(Ve,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})})};E.register(te,re,ie,ne,_,G);const Je={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Ke=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${m.palette.violet.main}`,hoverBackgroundColor:`${m.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(oe,{data:i,options:Je})},Qe=r=>r.dailyWaterStatistics.consumedWater.value,Xe=r=>r.dailyWaterStatistics.consumedWater._id,Ye=t.div`
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
`,R=t.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,it=t.span`
  color: var(--primary-color-white);
`,nt=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,ot=t.svg`
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
`,pt=()=>{const[r,i]=b.useState(!1),a=k(),s=x(Xe),p=x(L),d=x(Qe),c=d<=p?Math.round(d*100/p):100;let h=p-d;d>p&&(h=0);const g={color:c>85?`${m.palette.greyone.main}`:`${m.palette.violet.main}`};return e.jsxs(Ye,{children:[e.jsx(et,{children:"Water"}),e.jsxs(tt,{children:[e.jsx(ot,{width:"20px",height:"20px",onClick:()=>{a(V(s))},children:e.jsx("use",{href:`${u}#trash-delete`})}),e.jsx(lt,{children:e.jsxs(ct,{children:[e.jsx(Ke,{waterIntake:c}),e.jsx(dt,{style:g,children:`${c}%`})]})}),e.jsxs("div",{children:[e.jsx(rt,{children:"Water consumption"}),e.jsxs(R,{children:[e.jsx(nt,{children:d}),"ml"]}),e.jsxs(R,{children:[e.jsx(it,{children:"left:"})," ",`${h} ml`]}),e.jsxs(st,{type:"button",onClick:()=>i(!0),children:[e.jsx(at,{children:e.jsx("use",{href:`${u}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(Ze,{setIsModalOpen:i,isModalOpen:r})]})},xt=t.div`
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
`,ft=t(A)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,ut=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,wt=()=>e.jsxs(xt,{children:[e.jsxs(ht,{children:[e.jsx(mt,{children:"Today"}),e.jsxs(ft,{to:"/dashboard",children:["On the way to the goal",e.jsx(ut,{children:e.jsx("use",{href:`${u}#icon-arrowright`})})]})]}),e.jsxs(gt,{children:[e.jsx(Ce,{}),e.jsx(pt,{}),e.jsx(_e,{})]})]}),yt=t.div`
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
`,vt=t.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,jt=t(A)`
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
`,Wt=t.p`
  width: 160px;
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 160px;
  }
`,zt=t.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 88px;
  }
`,Ft=t.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    min-width: 88px;
  }
`,Mt=t.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,Bt=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Dt=t.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,St=t.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Pt=t.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`,Tt=({meal:r,title:i,totalCarbs:a,totalProtein:s,totalFat:p,typefood:d,src:c})=>{const h=k(),g=j=>{h(J({userFood:{},typeFood:j}))},[w,f]=b.useState(!1),y=()=>f(!0),v=()=>f(!1);return e.jsxs(Ct,{children:[e.jsx(de,{closeModal:v,stateModal:w,typefood:d}),e.jsxs(Bt,{children:[e.jsx(pe,{src:c}),e.jsx(Mt,{children:Z(i)})]}),e.jsx($t,{children:(r==null?void 0:r.length)>0?e.jsxs(e.Fragment,{children:[e.jsxs(Wt,{children:["Carbonohidrates: ",a]}),e.jsxs(zt,{children:["Protein: ",s]}),e.jsxs(Ft,{children:["Fat: ",p]}),e.jsx(Dt,{onClick:()=>g(i.toLowerCase()),children:e.jsx("use",{href:`${u}#trash-delete`})})]}):e.jsxs(Pt,{id:d,"data-site":d,onClick:y,children:[e.jsx(xe,{children:"Record your meal"}),e.jsx(St,{children:e.jsx("use",{href:`${u}#icon-add-converted`})})]})})]})},Rt="/Healthy_life/assets/Breakfast-ebbae9d6.png",It="/Healthy_life/assets/Dinner-3e075f11.png",Lt="/Healthy_life/assets/Lunch-b9834f5c.png",At="/Healthy_life/assets/Snack-986b08ce.png",Et=[Rt,Lt,It,At],_t=()=>{const r=x(he),i=x(ge),a=x(me),s=x(fe),p={breakfast:r,lunch:i,dinner:a,snack:s},d=["breakfast","lunch","dinner","snack"];let c=0,h=0,g=0,w=0,f=0,y=0,v=0,j=0,z=0,F=0,M=0,B=0;(r==null?void 0:r.length)>0&&(c=r.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.fat)},0),h=r.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.protein)},0),g=r.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),(i==null?void 0:i.length)>0&&(w=i.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.fat)},0),f=i.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.protein)},0),y=i.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.carbogidrate)},0)),(a==null?void 0:a.length)>0&&(v=a.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.protein)},0),j=a.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.carbogidrate)},0),z=a.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.fat)},0)),(s==null?void 0:s.length)>0&&(F=s.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.fat)},0),M=s.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.protein)},0),B=s.reduce((o,l)=>{var n;return o+((n=l.nutrition)==null?void 0:n.carbogidrate)},0));const C={breakfast:{carbs:g,protein:h,fat:c},lunch:{carbs:y,protein:f,fat:w},dinner:{carbs:j,protein:v,fat:z},snack:{carbs:B,protein:M,fat:F}};return e.jsxs(yt,{children:[e.jsxs(bt,{children:[e.jsx(vt,{children:"Diary"}),e.jsx(jt,{to:"/diary",children:"See more"})]}),e.jsx(kt,{children:d.map((o,l)=>e.jsx(Tt,{meal:p[o],typefood:o,title:o,totalCarbs:C[o].carbs,totalProtein:C[o].protein,totalFat:C[o].fat,src:Et[l]},o))})]})},Gt=t.div`
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
`,qt=()=>{const r=k();return b.useEffect(()=>{r(K()),r(Q()),r(X())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(wt,{}),e.jsxs(Gt,{children:[e.jsx(_t,{}),e.jsx(ue,{})]})]})};export{qt as default};
