import{s as e,u as k,r as n,j as t,z as j,as as C}from"./index-54606814.js";const A=i=>i.dailyStatisticsFood.consumedFood.breakfast,E=i=>i.dailyStatisticsFood.consumedFood.lunch,O=i=>i.dailyStatisticsFood.consumedFood.dinner,W=i=>i.dailyStatisticsFood.consumedFood.snack,L=i=>i.dailyStatisticsFood.isOpen,S=e.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin-right: 196px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  }
`,$=e.div`
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
`,q=e.div`
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
`,G=e.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`,F=e.p`
  font-size: 18px;
  font-weight: 800;
`,J=e.p`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
`,K=e.div`
  max-width: 676px;
  margin-bottom: 24px;
`,Q=e.div`
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`,U=e.p`
  color: var(--primary-color-white);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  max-height: 25px;
`,V=e.div`
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
`,P=e.div`
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
`,M=e.h2`
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
`;const R=e.div`
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
`,T=e.div`
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
`,D=e.input`
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
`,X=e.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`,H=e.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`,Y=({type:i})=>{console.log("dailyType: ",dailyType),console.log("type: ",i);const r=k(),m="src/assets/images/sprite.svg",[s,g]=n.useState(""),[p,f]=n.useState(""),[d,u]=n.useState(""),[l,y]=n.useState(""),[c,w]=n.useState(""),x=()=>{r(j(!1))},b={typeFood:i,userFood:[{name:s,calories:p,nutrition:{carbogidrate:d,protein:l,fat:c}}]},v=o=>{o.preventDefault(),r(C(b)),x()};return t.jsx(z,{children:t.jsxs(P,{children:[t.jsx(M,{children:"Record your meal"}),t.jsxs(S,{style:{marginTop:"24px"},children:[t.jsx(B,{src:"src/assets/images/Breakfast.png"}),t.jsx(F,{children:"Breakfast"})]}),t.jsxs("form",{onSubmit:v,children:[t.jsxs(R,{children:[t.jsx(a,{value:s,placeholder:"The name of the product or dish",onChange:o=>{g(o.target.value)}}),t.jsx(a,{type:"number",min:1,onChange:o=>{u(o.target.value)},value:d,placeholder:"Carbonoh"}),t.jsx(a,{min:1,type:"number",onChange:o=>{y(o.target.value)},value:l,placeholder:"Protein"}),t.jsxs(T,{children:[t.jsx(h,{min:1,type:"number",onChange:o=>{w(o.target.value)},value:c,placeholder:"Fat"}),t.jsx(h,{min:1,type:"number",onChange:o=>{f(o.target.value)},value:p,placeholder:"Calories"}),t.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:t.jsx("use",{href:`${m}#trash-delete`})})]})]}),t.jsxs(I,{children:[t.jsx(D,{type:"submit",value:"Confirm"}),t.jsx(H,{onClick:x,type:"button",children:"Cancel"})]})]})]})})};export{X as A,B as M,J as N,Y as R,V as W,A as a,E as b,O as c,W as d,K as e,S as f,F as g,q as h,G as i,$ as j,Q as k,U as l,L as s};
