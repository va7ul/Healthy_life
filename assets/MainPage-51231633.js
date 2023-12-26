import{s as t,k as x,m as I,n as L,j as e,o as f,t as m,p as O,q as N,v as q,r as y,u as v,w as V,x as Z,L as E,y as J,z as K,A as Q,B as X,C as Y}from"./index-e110c9ae.js";import{C as G,A as ee,p as U,a as _,D as te,b as re,L as ie,B as ne,c as oe,d as ae}from"./index-a34a35de.js";import{s as se,a as le,b as ce,c as de,d as pe,R as xe,M as he,A as ge,e as me,f as ue,g as fe,h as we}from"./Record-04d1cded.js";import{R as be}from"./RecommendedList-5f558156.js";const ye=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,ve=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,je=t.ul`
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
`,R=t.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 834px) {
  }
`,ke=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,Ce=t.svg`
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
`,$e=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,We=()=>{const r=x(I),i=x(L);return e.jsxs(ye,{children:[e.jsx(ve,{children:"Daily goal"}),e.jsxs(je,{children:[e.jsxs(R,{children:[e.jsx(ke,{children:e.jsx("use",{href:`${f}#bubble`})}),e.jsxs(P,{children:[e.jsx("p",{children:"Calories"}),e.jsx(S,{children:r})]})]}),e.jsxs(R,{children:[e.jsx(Ce,{children:e.jsx("use",{href:`${f}#milk`})}),e.jsxs(P,{children:[e.jsx("p",{children:" Water"}),e.jsxs(S,{children:[i," ",e.jsx($e,{children:"ml"})]})]})]})]})]})};G.register(ee,U,_);const ze={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Be={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const a=r.getDatasetMeta(0).data[0].x,s=r.getDatasetMeta(0).data[0].y,p=r.getDatasetMeta(0).data[0].innerRadius,d=r.getDatasetMeta(0).data[0].outerRadius,l=d-p,h=Math.PI/180;i.beginPath(),i.lineWidth=l,i.strokeStyle=`${m.palette.greyone.main}`,i.arc(a,s,d-l/2,0,h*360,!1),i.stroke()}},H=({dailyGoal:r,filledValue:i,bgColor:a})=>{let s=r-i;i>r&&(s=0);const p={datasets:[{label:[],data:[i,s],backgroundColor:[a,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(te,{options:ze,data:p,plugins:[Be]})})},Fe=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,De=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Te=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,Re=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,M=t.span`
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
`,k=({title:r,bgColor:i,dailyGoal:a,filledValue:s})=>{s||(s=0);let p=Math.round(s*100/a),d=(a-s).toFixed(0);return s>a&&(d=0),p>100&&(p=100),e.jsxs(De,{children:[e.jsxs(Fe,{children:[e.jsx(H,{dailyGoal:a,filledValue:s,bgColor:i}),e.jsx(Pe,{children:e.jsx("p",{children:`${p}%`})})]}),e.jsxs("div",{children:[e.jsx(Re,{children:r}),e.jsxs(Te,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(M,{children:a})]}),e.jsxs("p",{children:["left: ",e.jsx(M,{children:d})]})]})]})]})},Se=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,Me=t.div`
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
`,Ae=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,Ie=t.h3`
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
`,Ee=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,Ge=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Ue=t.p`
  color: var(--primary-color-grey);
`,_e=()=>{const r=`${m.palette.litegreen.main}`,i=`${m.palette.pink.main}`,a=`${m.palette.yellow.main}`,s=`${m.palette.grey.main}`,p=x(I),d=x(O),l=x(N),h=x(q),g=x(se),w=x(le),u=x(ce),b=x(de);return e.jsxs(Se,{children:[e.jsx(Ie,{children:"Food"}),e.jsxs(Me,{children:[e.jsxs(Le,{children:[e.jsx(H,{dailyGoal:p,filledValue:g,bgColor:r}),e.jsxs(Ee,{children:[e.jsx(Ge,{children:g}),e.jsx(Ue,{children:"calories"})]})]}),e.jsxs(Ae,{children:[e.jsx(C,{children:e.jsx(k,{title:"Carbonohidrates",bgColor:i,dailyGoal:d,filledValue:w})}),e.jsx(C,{children:e.jsx(k,{title:"Protein",bgColor:a,dailyGoal:l,filledValue:u})}),e.jsx(C,{children:e.jsx(k,{title:"Fat",bgColor:s,dailyGoal:h,filledValue:b})})]})]})]})},He=t.div`
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
`,Oe=t.div`
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
`,Ne=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,qe=t.button`
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
`,Ve=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,Ze=t.input`
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
`,Je=t.button`
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
`,Ke=({isModalOpen:r,setIsModalOpen:i})=>{const[a,s]=y.useState(0),p=v(),d=l=>{l.preventDefault(),p(V({value:a})),i(!1)};return y.useEffect(()=>{const l=h=>{h.code==="Escape"&&i(!1)};return r?(document.addEventListener("keydown",l),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",l),document.body.style.overflow="unset"}},[r,i]),e.jsx(He,{onClick:()=>i(!1),children:e.jsxs(Oe,{onClick:l=>l.stopPropagation(),children:[e.jsx(Ve,{children:"Add water intake"}),e.jsxs(Ne,{onSubmit:d,children:[e.jsxs("label",{children:["How much water",e.jsx(Ze,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:l=>s(Number(l.target.value)),value:a||"",min:1})]}),e.jsx(qe,{type:"submit",children:"Confirm"}),e.jsx(Je,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})})};G.register(re,ie,ne,oe,U,_);const Qe={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Xe=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${m.palette.violet.main}`,hoverBackgroundColor:`${m.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(ae,{data:i,options:Qe})},Ye=r=>r.dailyWaterStatistics.consumedWater.value,et=r=>r.dailyWaterStatistics.consumedWater._id,tt=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,rt=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,it=t.div`
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
`,nt=t.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,A=t.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,ot=t.span`
  color: var(--primary-color-white);
`,at=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,st=t.svg`
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
`,lt=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,ct=t.button`
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
`,dt=t.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,pt=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,xt=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,ht=()=>{const[r,i]=y.useState(!1),a=v(),s=x(et),p=x(L),d=x(Ye),l=d<=p?Math.round(d*100/p):100;let h=p-d;d>p&&(h=0);const g={color:l>85?`${m.palette.greyone.main}`:`${m.palette.violet.main}`};return e.jsxs(tt,{children:[e.jsx(rt,{children:"Water"}),e.jsxs(it,{children:[e.jsx(st,{width:"20px",height:"20px",onClick:()=>{a(Z(s))},children:e.jsx("use",{href:`${f}#trash-delete`})}),e.jsx(dt,{children:e.jsxs(pt,{children:[e.jsx(Xe,{waterIntake:l}),e.jsx(xt,{style:g,children:`${l}%`})]})}),e.jsxs("div",{children:[e.jsx(nt,{children:"Water consumption"}),e.jsxs(A,{children:[e.jsx(at,{children:d}),"ml"]}),e.jsxs(A,{children:[e.jsx(ot,{children:"left:"})," ",`${h} ml`]}),e.jsxs(ct,{type:"button",onClick:()=>i(!0),children:[e.jsx(lt,{children:e.jsx("use",{href:`${f}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(Ke,{setIsModalOpen:i,isModalOpen:r})]})},gt=t.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,mt=t.div`
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
`,ut=t.div`
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
`,ft=t.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,wt=t(E)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,bt=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,yt=()=>e.jsxs(gt,{children:[e.jsxs(mt,{children:[e.jsx(ft,{children:"Today"}),e.jsxs(wt,{to:"/dashboard",children:["On the way to the goal",e.jsx(bt,{children:e.jsx("use",{href:`${f}#icon-arrowright`})})]})]}),e.jsxs(ut,{children:[e.jsx(We,{}),e.jsx(ht,{}),e.jsx(_e,{})]})]}),vt=t.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,jt=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,kt=t.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,Ct=t(E)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,$t=t.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,Wt=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,zt=t.div`
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
`,Bt=t.h3`
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
`,Dt=t.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,Tt=t.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Rt=t.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`,Pt="/Healthy_life/assets/Breakfast-ebbae9d6.png",St=({meal:r,title:i,totalCarbs:a,totalProtein:s,totalFat:p,typefood:d})=>{const l=v(),h=u=>{l(J({userFood:{},typeFood:u}))};let g=x(pe);const w=u=>{document.getElementById(d),l(K(!0))};return i.toLowerCase(),e.jsxs(Wt,{children:[g?e.jsx(xe,{secondType:d}):null,e.jsxs(Ft,{children:[e.jsx(he,{src:Pt}),e.jsx(Bt,{children:i})]}),e.jsx(zt,{children:r.length>0?e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Carbonohidrates: ",a]}),e.jsxs($,{children:["Protein: ",s]}),e.jsxs($,{children:["Fat: ",p,e.jsx(Dt,{onClick:()=>h(i.toLowerCase()),children:e.jsx("use",{href:`${f}#trash-delete`})})]})]}):e.jsxs(Rt,{id:d,"data-site":d,onClick:w,children:[e.jsx(ge,{children:"Record your meal"}),e.jsx(Tt,{children:e.jsx("use",{href:`${f}#icon-add-converted`})})]})})]})},Mt=()=>{const r=x(me),i=x(ue),a=x(fe),s=x(we),p={breakfast:r,lunch:i,dinner:a,snack:s},d=["breakfast","lunch","dinner","snack"];let l=0,h=0,g=0,w=0,u=0,b=0,W=0,z=0,B=0,F=0,D=0,T=0;(r==null?void 0:r.length)>0&&(l=r.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.fat)},0),h=r.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.protein)},0),g=r.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.carbogidrate)},0)),(i==null?void 0:i.length)>0&&(w=i.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.fat)},0),u=i.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.protein)},0),b=i.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.carbogidrate)},0)),(a==null?void 0:a.length)>0&&(W=a.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.protein)},0),z=a.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.carbogidrate)},0),B=a.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.fat)},0)),(s==null?void 0:s.length)>0&&(F=s.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.fat)},0),D=s.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.protein)},0),T=s.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.carbogidrate)},0));const j={breakfast:{carbs:g,protein:h,fat:l},lunch:{carbs:b,protein:u,fat:w},dinner:{carbs:z,protein:W,fat:B},snack:{carbs:T,protein:D,fat:F}};return e.jsxs(vt,{children:[e.jsxs(jt,{children:[e.jsx(kt,{children:"Diary"}),e.jsx(Ct,{to:"/diary",children:"See more"})]}),e.jsx($t,{children:d.map(o=>e.jsx(St,{meal:p[o],typefood:o,title:o,totalCarbs:j[o].carbs,totalProtein:j[o].protein,totalFat:j[o].fat},o))})]})},At=t.div`
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
`,Ut=()=>{const r=v();return y.useEffect(()=>{r(Q()),r(X()),r(Y())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(yt,{}),e.jsxs(At,{children:[e.jsx(Mt,{}),e.jsx(be,{})]})]})};export{Ut as default};
