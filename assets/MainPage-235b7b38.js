import{s as t,k as x,m as A,n as I,j as e,o as y,t as m,p as Z,q as J,v as K,r as $,u as B,w as O,x as Q,L as X,y as Y,z as ee,A as te}from"./index-f2585cdd.js";import{C as E,A as ie,p as G,a as U,D as re,b as ne,L as oe,B as se,c as ae,d as le}from"./index-4657f5f0.js";import{R as ce}from"./RecommendedList-c2653c11.js";import{s as de,a as pe,b as xe,c as he,M as j,A as w}from"./Reacord.styled-fea522b4.js";const ge=t.div`
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
`,fe=t.ul`
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
`,ue=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,ye=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,S=t.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,T=t.p`
  margin-top: 4px;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.11;
  color: var(--primary-color-white);
`,je=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,we=()=>{const i=x(A),n=x(I);return e.jsxs(ge,{children:[e.jsx(me,{children:"Daily goal"}),e.jsxs(fe,{children:[e.jsxs(R,{children:[e.jsx(ue,{children:e.jsx("use",{href:`${y}#bubble`})}),e.jsxs(S,{children:[e.jsx("p",{children:"Calories"}),e.jsx(T,{children:i})]})]}),e.jsxs(R,{children:[e.jsx(ye,{children:e.jsx("use",{href:`${y}#milk`})}),e.jsxs(S,{children:[e.jsx("p",{children:" Water"}),e.jsxs(T,{children:[n," ",e.jsx(je,{children:"ml"})]})]})]})]})]})};E.register(ie,G,U);const be={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},ve={id:"bgCircle",beforeDatasetsDraw(i){const{ctx:n}=i;n.save();const a=i.getDatasetMeta(0).data[0].x,l=i.getDatasetMeta(0).data[0].y,d=i.getDatasetMeta(0).data[0].innerRadius,p=i.getDatasetMeta(0).data[0].outerRadius,c=p-d,g=Math.PI/180;n.beginPath(),n.lineWidth=c,n.strokeStyle=`${m.palette.greyone.main}`,n.arc(a,l,p-c/2,0,g*360,!1),n.stroke()}},_=({dailyGoal:i,filledValue:n,bgColor:a})=>{let l=i-n;n>i&&(l=0);const d={datasets:[{label:[],data:[n,l],backgroundColor:[a,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(re,{options:be,data:d,plugins:[ve]})})},ke=t.div`
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
`,M=t.span`
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
`,D=({title:i,bgColor:n,dailyGoal:a,filledValue:l})=>{let d=Math.round(l*100/a),p=(a-l).toFixed(0);return l>a&&(p=0),d>100&&(d=100),e.jsxs(Ce,{children:[e.jsxs(ke,{children:[e.jsx(_,{dailyGoal:a,filledValue:l,bgColor:n}),e.jsx(Fe,{children:e.jsx("p",{children:`${d}%`})})]}),e.jsxs("div",{children:[e.jsx(We,{children:i}),e.jsxs($e,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(M,{children:a})]}),e.jsxs("p",{children:["left: ",e.jsx(M,{children:p})]})]})]})]})},ze=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,De=t.div`
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
`,Pe=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,Be=t.h3`
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
`,P=t.li`
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
`,Le=()=>{const i=`${m.palette.litegreen.main}`,n=`${m.palette.pink.main}`,a=`${m.palette.yellow.main}`,l=`${m.palette.grey.main}`,d=x(A),p=x(Z),c=x(J),g=x(K),u=1360,W=136,F=119.5,z=38.8;return e.jsxs(ze,{children:[e.jsx(Be,{children:"Food"}),e.jsxs(De,{children:[e.jsxs(Re,{children:[e.jsx(_,{dailyGoal:d,filledValue:u,bgColor:i}),e.jsxs(Se,{children:[e.jsx(Te,{children:u}),e.jsx(Me,{children:"calories"})]})]}),e.jsxs(Pe,{children:[e.jsx(P,{children:e.jsx(D,{title:"Carbonohidrates",bgColor:n,dailyGoal:p,filledValue:W})}),e.jsx(P,{children:e.jsx(D,{title:"Protein",bgColor:a,dailyGoal:c,filledValue:F})}),e.jsx(P,{children:e.jsx(D,{title:"Fat",bgColor:l,dailyGoal:g,filledValue:z})})]})]})]})},Ae=t.div`
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
`,Ve=({isModalOpen:i,setIsModalOpen:n})=>{const[a,l]=$.useState(0),d=B(),p=c=>{c.preventDefault(),d(O({value:a})),n(!1)};return $.useEffect(()=>{const c=g=>{g.code==="Escape"&&n(!1)};return i?(document.addEventListener("keydown",c),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",c),document.body.style.overflow="unset"}},[i,n]),e.jsx(Ae,{onClick:()=>n(!1),children:e.jsxs(Ie,{onClick:c=>c.stopPropagation(),children:[e.jsx(Ue,{children:"Add water intake"}),e.jsxs(Ee,{onSubmit:p,children:[e.jsxs("label",{children:["How much water",e.jsx(_e,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:c=>l(Number(c.target.value)),value:a||"",min:1})]}),e.jsx(Ge,{type:"submit",children:"Confirm"}),e.jsx(He,{type:"button",onClick:()=>n(!1),children:"Cancel"})]})]})})};E.register(ne,oe,se,ae,G,U);const qe={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Ne=({waterIntake:i})=>{const n={labels:["Intake"],datasets:[{label:"Water",data:[i],backgroundColor:`${m.palette.violet.main}`,hoverBackgroundColor:`${m.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(le,{data:n,options:qe})},Ze=i=>i.dailyWaterStatistics.consumedWater.value,Je=i=>i.dailyWaterStatistics.consumedWater._id,Ke=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,Oe=t.h3`
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
`,L=t.p`
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
`,it=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,rt=t.button`
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
`,st=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,at=()=>{const[i,n]=$.useState(!1),a=B(),l=x(Je),d=x(I),p=x(Ze),c=p<=d?Math.round(p*100/d):100;let g=d-p;p>d&&(g=0);const u={color:c>85?`${m.palette.greyone.main}`:`${m.palette.violet.main}`};return e.jsxs(Ke,{children:[e.jsx(Oe,{children:"Water"}),e.jsxs(Qe,{children:[e.jsx(tt,{width:"20px",height:"20px",onClick:()=>{a(Q(l))},children:e.jsx("use",{href:`${y}#trash-delete`})}),e.jsx(nt,{children:e.jsxs(ot,{children:[e.jsx(Ne,{waterIntake:c}),e.jsx(st,{style:u,children:`${c}%`})]})}),e.jsxs("div",{children:[e.jsx(Xe,{children:"Water consumption"}),e.jsxs(L,{children:[e.jsx(et,{children:p}),"ml"]}),e.jsxs(L,{children:[e.jsx(Ye,{children:"left:"})," ",`${g} ml`]}),e.jsxs(rt,{type:"button",onClick:()=>n(!0),children:[e.jsx(it,{children:e.jsx("use",{href:`${y}#icon-add-converted`})}),"Add water intake"]})]})]}),i&&e.jsx(Ve,{setIsModalOpen:n,isModalOpen:i})]})},lt=t.div`
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
`,xt=t(X)`
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
`,gt=()=>e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(pt,{children:"Today"}),e.jsxs(xt,{to:"/dashboard",children:["On the way to the goal",e.jsx(ht,{children:e.jsx("use",{href:`${y}#icon-arrowright`})})]})]}),e.jsxs(dt,{children:[e.jsx(we,{}),e.jsx(at,{}),e.jsx(Le,{})]})]}),mt=t.div`
  padding-top: 20px;
  max-width: 300px;
  @media screen and (min-width: 834px) {
    max-width: 558px;
  }
`,b=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,ft=t.h2`
  color: #fff;
  font-family: 'Poppins400';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`,ut=t.p`
  color: #b6b6b6;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`,v=t.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,k=t.h3`
  min-width: 100px;
  color: var(--Color-Primary-White, #fff);
  /* Headline text/H3 */
  font-family: 'Poppins500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`,h=t.p`
  width: 160px;
  color: #fff;
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    width: AUTO;
  }
`,C=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,yt=t.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,jt=()=>{const i=x(de),n=x(pe),a=x(xe),l=x(he),d=i.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.fat)},0),p=l.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.fat)},0),c=n.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.fat)},0),g=a.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.fat)},0),u=i.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.protein)},0),W=l.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.protein)},0),F=n.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.protein)},0),z=a.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.protein)},0),H=i.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.carbogidrate)},0),V=l.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.carbogidrate)},0),q=n.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.carbogidrate)},0),N=a.reduce((o,s)=>{var r;return o+((r=s.nutrition)==null?void 0:r.carbogidrate)},0),f="src/assets/images/sprite.svg";return e.jsxs(mt,{children:[e.jsxs("div",{style:{display:"flex",gap:"16px",marginBottom:"16px"},children:[e.jsx(ft,{children:"Diary"}),e.jsx(ut,{children:"See more"})]}),e.jsxs(yt,{children:[e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(j,{src:"src/assets/images/Breakfast.png"}),e.jsx(k,{children:"BreakFast"})]}),e.jsx(v,{children:i[0].name!==""?e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Carbonohidrates: ",H]}),e.jsxs(h,{children:["Protein: ",u]}),e.jsxs(h,{children:["Fat: ",d," ",e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${f}#trash-delete`})})]})]}):e.jsxs("div",{style:{flexDirection:"row-reverse",display:"flex",gap:"8px"},children:[e.jsx(w,{children:"Record your meal"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${f}#icon-add-converted`})})]})})]}),e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(j,{src:"src/assets/images/Lunch.png"}),e.jsx(k,{children:"Lunch"})]}),e.jsx(v,{children:n[0].name!==""?e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Carbonohidrates: ",q]}),e.jsxs(h,{children:["Protein: ",F]}),e.jsxs(h,{children:["Fat: ",c,e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${f}#trash-delete`})})]})]}):e.jsxs("div",{style:{flexDirection:"row-reverse",display:"flex",gap:"8px"},children:[e.jsx(w,{children:"Record your meal"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${f}#icon-add-converted`})})]})})]}),e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(j,{src:"src/assets/images/Dinner.png"}),e.jsx(k,{children:"Dinner"})]}),e.jsx(v,{children:l[0].name!==""?e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Carbonohidrates: ",V]}),e.jsxs(h,{children:["Protein: ",W]}),e.jsxs(h,{children:["Fat: ",p,e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${f}#trash-delete`})})]})]}):e.jsxs("div",{style:{flexDirection:"row-reverse",display:"flex",gap:"8px"},children:[e.jsx(w,{children:"Record your meal"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${f}#icon-add-converted`})})]})})]}),e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(j,{src:"src/assets/images/Snack.png"}),e.jsx(k,{children:"Snack"})]}),e.jsx(v,{children:a[0].name!==""?e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:["Carbonohidrates: ",N]}),e.jsxs(h,{children:["Protein: ",z]}),e.jsxs(h,{children:["Fat: ",g," ",e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${f}#trash-delete`})})]})]}):e.jsxs("div",{style:{flexDirection:"row-reverse",display:"flex",gap:"8px"},children:[e.jsx(w,{children:"Record your meal"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${f}#icon-add-converted`})})]})})]})]})]})},wt=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding-top: 20px;
    gap: 138px;
  }
`,$t=()=>{const i=B();return $.useEffect(()=>{i(Y()),i(ee()),i(te())},[i]),e.jsxs(e.Fragment,{children:[e.jsx(gt,{}),e.jsxs(wt,{children:[e.jsx(jt,{}),e.jsx(ce,{})]})]})};export{$t as default};
