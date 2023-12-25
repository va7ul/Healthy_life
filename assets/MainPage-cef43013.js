import{s as t,k as x,m as P,n as S,j as e,o as u,t as g,p as _,q as V,v as q,r as w,u as $,w as H,x as N,L as R,y as Z,z as J,A as K}from"./index-0d6d12b0.js";import{C as T,A as O,p as M,a as A,D as Q,b as X,L as Y,B as ee,c as te,d as re}from"./index-785263a9.js";import{R as ie}from"./RecommendedList-bb39d0a4.js";import{M as ne,A as oe,s as ae,a as se,b as le,c as ce}from"./Reacord.styled-2f7970b7.js";const de=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,pe=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,xe=t.ul`
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
`,he=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,ge=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,z=t.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,F=t.p`
  margin-top: 4px;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.11;
  color: var(--primary-color-white);
`,me=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,ue=()=>{const r=x(P),i=x(S);return e.jsxs(de,{children:[e.jsx(pe,{children:"Daily goal"}),e.jsxs(xe,{children:[e.jsxs(W,{children:[e.jsx(he,{children:e.jsx("use",{href:`${u}#bubble`})}),e.jsxs(z,{children:[e.jsx("p",{children:"Calories"}),e.jsx(F,{children:r})]})]}),e.jsxs(W,{children:[e.jsx(ge,{children:e.jsx("use",{href:`${u}#milk`})}),e.jsxs(z,{children:[e.jsx("p",{children:" Water"}),e.jsxs(F,{children:[i," ",e.jsx(me,{children:"ml"})]})]})]})]})]})};T.register(O,M,A);const fe={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},we={id:"bgCircle",beforeDatasetsDraw(r){const{ctx:i}=r;i.save();const o=r.getDatasetMeta(0).data[0].x,l=r.getDatasetMeta(0).data[0].y,c=r.getDatasetMeta(0).data[0].innerRadius,d=r.getDatasetMeta(0).data[0].outerRadius,p=d-c,h=Math.PI/180;i.beginPath(),i.lineWidth=p,i.strokeStyle=`${g.palette.greyone.main}`,i.arc(o,l,d-p/2,0,h*360,!1),i.stroke()}},I=({dailyGoal:r,filledValue:i,bgColor:o})=>{let l=r-i;i>r&&(l=0);const c={datasets:[{label:[],data:[i,l],backgroundColor:[o,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(Q,{options:fe,data:c,plugins:[we]})})},ye=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,be=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,ve=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,je=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,D=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,ke=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,j=({title:r,bgColor:i,dailyGoal:o,filledValue:l})=>{let c=Math.round(l*100/o),d=(o-l).toFixed(0);return l>o&&(d=0),c>100&&(c=100),e.jsxs(be,{children:[e.jsxs(ye,{children:[e.jsx(I,{dailyGoal:o,filledValue:l,bgColor:i}),e.jsx(ke,{children:e.jsx("p",{children:`${c}%`})})]}),e.jsxs("div",{children:[e.jsx(je,{children:r}),e.jsxs(ve,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(D,{children:o})]}),e.jsxs("p",{children:["left: ",e.jsx(D,{children:d})]})]})]})]})},Ce=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,$e=t.div`
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
`,We=t.ul`
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
`;const Fe=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,k=t.li`
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
`,Be=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Pe=t.p`
  color: var(--primary-color-grey);
`,Se=()=>{const r=`${g.palette.litegreen.main}`,i=`${g.palette.pink.main}`,o=`${g.palette.yellow.main}`,l=`${g.palette.grey.main}`,c=x(P),d=x(_),p=x(V),h=x(q),m=1360,y=136,b=119.5,v=38.8;return e.jsxs(Ce,{children:[e.jsx(ze,{children:"Food"}),e.jsxs($e,{children:[e.jsxs(Fe,{children:[e.jsx(I,{dailyGoal:c,filledValue:m,bgColor:r}),e.jsxs(De,{children:[e.jsx(Be,{children:m}),e.jsx(Pe,{children:"calories"})]})]}),e.jsxs(We,{children:[e.jsx(k,{children:e.jsx(j,{title:"Carbonohidrates",bgColor:i,dailyGoal:d,filledValue:y})}),e.jsx(k,{children:e.jsx(j,{title:"Protein",bgColor:o,dailyGoal:p,filledValue:b})}),e.jsx(k,{children:e.jsx(j,{title:"Fat",bgColor:l,dailyGoal:h,filledValue:v})})]})]})]})},Re=t.div`
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
`,Te=t.div`
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
`,Me=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Ae=t.button`
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
`,Le=t.input`
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
`,Ee=t.button`
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
`,Ge=({isModalOpen:r,setIsModalOpen:i})=>{const[o,l]=w.useState(0),c=$(),d=p=>{p.preventDefault(),c(H({value:o})),i(!1)};return w.useEffect(()=>{const p=h=>{h.code==="Escape"&&i(!1)};return r?(document.addEventListener("keydown",p),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",p),document.body.style.overflow="unset"}},[r,i]),e.jsx(Re,{onClick:()=>i(!1),children:e.jsxs(Te,{onClick:p=>p.stopPropagation(),children:[e.jsx(Ie,{children:"Add water intake"}),e.jsxs(Me,{onSubmit:d,children:[e.jsxs("label",{children:["How much water",e.jsx(Le,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:p=>l(Number(p.target.value)),value:o||"",min:1})]}),e.jsx(Ae,{type:"submit",children:"Confirm"}),e.jsx(Ee,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})})};T.register(X,Y,ee,te,M,A);const Ue={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},_e=({waterIntake:r})=>{const i={labels:["Intake"],datasets:[{label:"Water",data:[r],backgroundColor:`${g.palette.violet.main}`,hoverBackgroundColor:`${g.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(re,{data:i,options:Ue})},Ve=r=>r.dailyWaterStatistics.consumedWater.value,qe=r=>r.dailyWaterStatistics.consumedWater._id,He=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,Ne=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,Ze=t.div`
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
`,Je=t.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,B=t.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Ke=t.span`
  color: var(--primary-color-white);
`,Oe=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,Qe=t.svg`
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
`,Xe=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,Ye=t.button`
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
`,et=t.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,tt=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,rt=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,it=()=>{const[r,i]=w.useState(!1),o=$(),l=x(qe),c=x(S),d=x(Ve),p=d<=c?Math.round(d*100/c):100;let h=c-d;d>c&&(h=0);const m={color:p>85?`${g.palette.greyone.main}`:`${g.palette.violet.main}`};return e.jsxs(He,{children:[e.jsx(Ne,{children:"Water"}),e.jsxs(Ze,{children:[e.jsx(Qe,{width:"20px",height:"20px",onClick:()=>{o(N(l))},children:e.jsx("use",{href:`${u}#trash-delete`})}),e.jsx(et,{children:e.jsxs(tt,{children:[e.jsx(_e,{waterIntake:p}),e.jsx(rt,{style:m,children:`${p}%`})]})}),e.jsxs("div",{children:[e.jsx(Je,{children:"Water consumption"}),e.jsxs(B,{children:[e.jsx(Oe,{children:d}),"ml"]}),e.jsxs(B,{children:[e.jsx(Ke,{children:"left:"})," ",`${h} ml`]}),e.jsxs(Ye,{type:"button",onClick:()=>i(!0),children:[e.jsx(Xe,{children:e.jsx("use",{href:`${u}#icon-add-converted`})}),"Add water intake"]})]})]}),r&&e.jsx(Ge,{setIsModalOpen:i,isModalOpen:r})]})},nt=t.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,ot=t.div`
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
`,at=t.div`
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
`,st=t.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,lt=t(R)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,ct=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,dt=()=>e.jsxs(nt,{children:[e.jsxs(ot,{children:[e.jsx(st,{children:"Today"}),e.jsxs(lt,{to:"/dashboard",children:["On the way to the goal",e.jsx(ct,{children:e.jsx("use",{href:`${u}#icon-arrowright`})})]})]}),e.jsxs(at,{children:[e.jsx(ue,{}),e.jsx(it,{}),e.jsx(Se,{})]})]}),pt=t.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,xt=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,ht=t.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`,gt=t(R)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,mt=t.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,ut=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,ft=t.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,C=t.p`
  width: 160px;
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    width: AUTO;
  }
`,wt=t.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,yt=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,bt=t.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
`,vt=t.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,jt=t.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`,f=({meal:r,title:i,totalCarbs:o,totalProtein:l,totalFat:c})=>{const d="src/assets/images/sprite.svg";return e.jsxs(ut,{children:[e.jsxs(yt,{children:[e.jsx(ne,{src:`src/assets/images/${i}.png`}),e.jsx(wt,{children:i})]}),e.jsx(ft,{children:r[0].name!==""?e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:["Carbonohidrates: ",o]}),e.jsxs(C,{children:["Protein: ",l]}),e.jsxs(C,{children:["Fat: ",c,e.jsx(bt,{children:e.jsx("use",{href:`${d}#trash-delete`})})]})]}):e.jsxs(jt,{children:[e.jsx(oe,{children:"Record your meal"}),e.jsx(vt,{children:e.jsx("use",{href:`${d}#icon-add-converted`})})]})})]})},kt=()=>{const r=x(ae),i=x(se),o=x(le),l=x(ce),c=r.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.fat)},0),d=o.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.fat)},0),p=i.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.fat)},0),h=l.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.fat)},0),m=r.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.protein)},0),y=o.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.protein)},0),b=i.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.protein)},0),v=l.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.protein)},0),L=r.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.carbogidrate)},0),E=o.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.carbogidrate)},0),G=i.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.carbogidrate)},0),U=l.reduce((a,s)=>{var n;return a+((n=s.nutrition)==null?void 0:n.carbogidrate)},0);return e.jsxs(pt,{children:[e.jsxs(xt,{children:[e.jsx(ht,{children:"Diary"}),e.jsx(gt,{to:"/diary",children:"See more"})]}),e.jsxs(mt,{children:[e.jsx(f,{meal:r,title:"Breakfast",totalCarbs:L,totalProtein:m,totalFat:c}),e.jsx(f,{meal:i,title:"Lunch",totalCarbs:G,totalProtein:b,totalFat:p}),e.jsx(f,{meal:o,title:"Dinner",totalCarbs:E,totalProtein:y,totalFat:d}),e.jsx(f,{meal:l,title:"Snack",totalCarbs:U,totalProtein:v,totalFat:h})]})]})},Ct=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding-top: 20px;
    gap: 138px;
  }
`,Dt=()=>{const r=$();return w.useEffect(()=>{r(Z()),r(J()),r(K())},[r]),e.jsxs(e.Fragment,{children:[e.jsx(dt,{}),e.jsxs(Ct,{children:[e.jsx(kt,{}),e.jsx(ie,{})]})]})};export{Dt as default};
