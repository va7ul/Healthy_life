import{s as e,u as k,r as n,j as i,z as j,as as F}from"./index-208c5b6f.js";const A=t=>t.dailyStatisticsFood.consumedFood.breakfast,E=t=>t.dailyStatisticsFood.consumedFood.lunch,O=t=>t.dailyStatisticsFood.consumedFood.dinner,W=t=>t.dailyStatisticsFood.consumedFood.snack,L=t=>t.dailyStatisticsFood.isOpen,$=t=>t.dailyStatisticsFood.consumedFood.totalCalories,q=t=>t.dailyStatisticsFood.consumedFood.totalCarbs,G=t=>t.dailyStatisticsFood.consumedFood.totalProtein,J=t=>t.dailyStatisticsFood.consumedFood.totalFat,C=e.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin-right: 196px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  }
`,K=e.div`
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
`,S=e.img`
  width: 32px;
  height: 32px;
`,Q=e.div`
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
`,U=e.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`,B=e.p`
  font-size: 18px;
  font-weight: 800;
`,V=e.p`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
`,X=e.div`
  max-width: 676px;
  margin-bottom: 24px;
`,Y=e.div`
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`,Z=e.p`
  color: var(--primary-color-white);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  max-height: 25px;
`,_=e.div`
  @media screen and (min-width: 834px) {
    /* width: 834px; */
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`,P=e.div`
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
`,T=e.div`
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
`,z=e.h2`
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
`;const M=e.div`
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
`,R=e.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`,h=e.input`
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
`,I=e.div`
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
`,D=e.button`
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
`,ee=e.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`,H=e.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`,te=({type:t})=>{console.log("dailyType: ",dailyType),console.log("type: ",t);const r=k(),m="src/assets/images/sprite.svg",[s,g]=n.useState(""),[d,u]=n.useState(""),[p,f]=n.useState(""),[l,y]=n.useState(""),[c,w]=n.useState(""),x=()=>{r(j(!1))},b={typeFood:t,userFood:[{name:s,calories:d,nutrition:{carbogidrate:p,protein:l,fat:c}}]},v=o=>{o.preventDefault(),r(F(b)),x()};return i.jsx(P,{children:i.jsxs(T,{children:[i.jsx(z,{children:"Record your meal"}),i.jsxs(C,{style:{marginTop:"24px"},children:[i.jsx(S,{src:"src/assets/images/Breakfast.png"}),i.jsx(B,{children:"Breakfast"})]}),i.jsxs("form",{onSubmit:v,children:[i.jsxs(M,{children:[i.jsx(a,{value:s,placeholder:"The name of the product or dish",onChange:o=>{g(o.target.value)}}),i.jsx(a,{type:"number",min:1,onChange:o=>{f(o.target.value)},value:p,placeholder:"Carbonoh"}),i.jsx(a,{min:1,type:"number",onChange:o=>{y(o.target.value)},value:l,placeholder:"Protein"}),i.jsxs(R,{children:[i.jsx(h,{min:1,type:"number",onChange:o=>{w(o.target.value)},value:c,placeholder:"Fat"}),i.jsx(h,{min:1,type:"number",onChange:o=>{u(o.target.value)},value:d,placeholder:"Calories"}),i.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:i.jsx("use",{href:`${m}#trash-delete`})})]})]}),i.jsxs(I,{children:[i.jsx(D,{type:"submit",children:"Confirm"}),i.jsx(H,{onClick:x,type:"button",children:"Cancel"})]})]})]})})};export{ee as A,S as M,V as N,te as R,_ as W,q as a,G as b,J as c,L as d,A as e,E as f,O as g,W as h,X as i,C as j,B as k,Q as l,U as m,K as n,Y as o,Z as p,$ as s};
