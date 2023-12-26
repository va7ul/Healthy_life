import{s as e,u as j,r as n,j as o,z as F,at as C}from"./index-29824abf.js";const E=t=>t.dailyStatisticsFood.consumedFood.breakfast,O=t=>t.dailyStatisticsFood.consumedFood.lunch,W=t=>t.dailyStatisticsFood.consumedFood.dinner,L=t=>t.dailyStatisticsFood.consumedFood.snack,$=t=>t.dailyStatisticsFood.isOpen,q=t=>t.dailyStatisticsFood.consumedFood.totalCalories,G=t=>t.dailyStatisticsFood.consumedFood.totalCarbs,J=t=>t.dailyStatisticsFood.consumedFood.totalProtein,K=t=>t.dailyStatisticsFood.consumedFood.totalFat,S=e.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin-right: 196px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  }
`,Q=e.div`
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 12px;
  height: 232px;
  background: #0f0f0f;
  /* background: #fff; */
  /* borderRadius: 52px; */
  border-radius: 13px;
  max-width: 300px;
  /* width: 834px; */
  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 240px;
  }
`,B=e.img`
  width: 32px;
  height: 32px;
`,U=e.div`
  width: 178px;
  @media screen and (min-width: 834px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,V=e.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`,P=e.p`
  font-size: 18px;
  font-weight: 800;
`,X=e.p`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
`,Y=e.div`
  max-width: 676px;
  margin-bottom: 24px;
`,Z=e.div`
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`,_=e.p`
  color: var(--primary-color-white);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  max-height: 25px;
`,ee=e.div`
  @media screen and (min-width: 834px) {
    /* width: 834px; */
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`,z=e.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  /* visibility: hidden; */
  /* opacity: 0;    */

  display: flex;
  justify-content: center;
  align-items: center;
`,M=e.div`
  position: relative;
  padding: 10px;
  width: 300px;
  height: 546px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    width: 756px;
    height: 452px;
    padding: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,R=e.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`,a=e.input`
  width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 100px;
  }

  @media screen and (min-width: 1440px) {
  }
`;e.input`
  width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 255px;
  }

  @media screen and (min-width: 1440px) {
  }
`;const T=e.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  /* justify-content: center;
  align-items: center; */
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
  }
`,I=e.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`,m=e.input`
  display: flex;
  width: 120px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`,D=e.div`
  margin-top: 60px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    position: absolute;
    right: 24px;
    bottom: 24px;
    gap: 86px;
  }

  @media screen and (min-width: 1440px) {
  }
`,H=e.button`
  display: block;
  width: 256px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  /* Button text/1 */
  font-family: 'Poppins500';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  margin-left: auto;
  margin-right: auto;
  border: none;
`,te=e.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`,N=e.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`,oe=({type:t,secondType:r})=>{console.log("type: ",t),console.log("secondType: ",r);const s=j(),g="src/assets/images/sprite.svg",[d,u]=n.useState(""),[l,f]=n.useState(""),[p,y]=n.useState(""),[c,w]=n.useState(""),[x,b]=n.useState(""),h=()=>{s(F(!1))},v={typeFood:t===void 0?r:t,userFood:[{name:d,calories:l,nutrition:{carbogidrate:p,protein:c,fat:x}}]},k=i=>{i.preventDefault(),s(C(v)),h()};return o.jsx(z,{children:o.jsxs(M,{children:[o.jsx(R,{children:"Record your meal"}),o.jsxs(S,{style:{marginTop:"24px"},children:[o.jsx(B,{src:"src/assets/images/Breakfast.png"}),o.jsx(P,{children:"Breakfast"})]}),o.jsxs("form",{onSubmit:k,children:[o.jsxs(T,{children:[o.jsx(a,{value:d,placeholder:"The name of the product or dish",onChange:i=>{u(i.target.value)}}),o.jsx(a,{type:"number",min:1,onChange:i=>{y(i.target.value)},value:p,placeholder:"Carbonoh"}),o.jsx(a,{min:1,type:"number",onChange:i=>{w(i.target.value)},value:c,placeholder:"Protein"}),o.jsxs(I,{children:[o.jsx(m,{min:1,type:"number",onChange:i=>{b(i.target.value)},value:x,placeholder:"Fat"}),o.jsx(m,{min:1,type:"number",onChange:i=>{f(i.target.value)},value:l,placeholder:"Calories"}),o.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:o.jsx("use",{href:`${g}#trash-delete`})})]})]}),o.jsxs(D,{children:[o.jsx(H,{type:"submit",children:"Confirm"}),o.jsx(N,{onClick:h,type:"button",children:"Cancel"})]})]})]})})};export{te as A,B as M,X as N,oe as R,ee as W,G as a,J as b,K as c,$ as d,E as e,O as f,W as g,L as h,Y as i,S as j,P as k,U as l,V as m,Q as n,Z as o,_ as p,q as s};
