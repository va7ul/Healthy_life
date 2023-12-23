import{s as i,N as k,r as c,b as a,u as S,j as e,l as F,L as $}from"./index-f74ee9e1.js";import{i as z,a as I}from"./eye-off-01faa7db.js";import{c as b,a as s,d as E,F as B,b as C}from"./index.esm-54be17e7.js";import{i as q}from"./welcomepage-690c85c9.js";const P=i.div`
  margin: 0 auto;
  padding: 10px;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 834px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,T=i.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 80px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    align-items: flex-start;
  }
`,L=i.div`
  text-align: left;
  margin-bottom: 24px;
`,W=i.h1`
  color: var(--color-primary-white, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,R=i.h2`
  color: var(--color-primary-gray, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,A=i.img`
  height: 296px;
  width: 300px;
  background: transparent;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`;i.input`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: ${t=>t.$border};
  background: var(--color-primary-black-2, #0f0f0f);
  color: var(--primary-color-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 20px;

  &.inputError {
    border: 2px solid #e74a3b;
  }

  &.inputValid {
    border: 2px solid #3cbc81;
  }

  &::placeholder {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
`;i.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--color-primary-green-lite, #e3ffa8);
  color: var(--color-primary-black-2, #0f0f0f);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--primary-color-lite-green);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;i.input.attrs({type:"checkbox"})`
  position: absolute;
  appearance: none;
  cursor: pointer;
  right: 14px;
  top: 14px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% - 2px);
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    background-color: var(--color-primary-black-2, #0f0f0f);
    background-image: url(${z}#eye-off);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% - 2px);
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    background-color: var(--color-primary-black-2, #0f0f0f);
    background-image: url(${I}#eye);
    visibility: visible;
  }

  @media screen and (max-width: 834px) {
    top: 50%;
    left: 50%;
  }
`;const N=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 54px;
  color: var(--color-primary-grey, #b6b6b6);

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 220px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 364px;
  }
`,V=i.p`
  color: var(--color-primary-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
  }
`,Y=i.p`
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;i.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`;i.div`
  font-size: 12px;
  color: var(--secondary-color-pink);
`;i.svg`
  fill: var(--primary-color-white);
  margin-left: auto;
`;i.svg`
  fill: var(--primary-color-lite-green);
`;i.div`
  display: flex;
  align-items: center;
`;i.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;i.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;const D=i(k)`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,H=b().shape({email:s().email("Invalid email").required("Required!"),password:s().min(6,"Too Short!").required("Required!")});i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;const n={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},x=i(E)`
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: ${t=>t.border||`1px solid ${n.inputBorder}`};
  padding: 14px;
  color: ${n.text};
  background-color: ${n.background};
  transition: border var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 1px solid ${n.inputBorderHover};
    outline: none;
  }
`,m=i.div`
  color: ${t=>t.color||n.error};
  margin-top: 4px;
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
`,Q=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,U=i.svg`
  width: 16px;
  height: 16px;
  stroke: ${n.iconStroke};
  cursor: pointer;
`,g=i.svg`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  fill: ${t=>t.fill||n.error};
`,h=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,f=i.label`
  position: relative;
  display: block;
`,Z=i.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  display: flex;
  align-items: center;
`;i.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;i.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
`;i.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;i.input`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--color-primary-green-lite, #e3ffa8);
  background: var(--color-primary-black-2, #0f0f0f);
  color: var(--primary-color-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;

  &.inputError {
    border: 2px solid #e74a3b;
  }

  &.inputValid {
    border: 2px solid #3cbc81;
  }

  &::placeholder {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
`;const _=i.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 40px;
  margin-bottom: 47px;
  border-radius: 12px;
  text-decoration: none;
  background: var(--color-primary-green-lite, #e3ffa8);
  color: var(--color-primary-black-2, #0f0f0f);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin-bottom: 238px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-bottom: 208px;
  }
`,G=b().shape({email:s().required("Required").email("Invalid email address").matches(/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,"Invalid email address")}),J={email:"",password:""},K=()=>{const[t,l]=c.useState(`${a}#icon-eye-off`),[d,p]=c.useState("password"),u=S(),v=(r,o)=>{u(F(r)),o.resetForm()},w=()=>{d==="password"?(p("text"),l(`${a}#icon-eye`)):(p("password"),l(`${a}#icon-eye-off`))};return e.jsx(B,{initialValues:J,validationSchema:H,onSubmit:v,children:({errors:r,touched:o})=>{const y=o.email?r.email?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",j=o.password?r.password?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)";return e.jsxs(C,{autoComplete:"off",children:[e.jsxs(Q,{children:[e.jsxs("div",{children:[e.jsx(f,{children:e.jsx(x,{border:y,type:"text",name:"email",validate:G,placeholder:"Email"})}),r.email&&o.email||!r.email&&o.email?e.jsxs(h,{children:[e.jsx(g,{fill:!r.email&&o.email?"#3cbc81":null,children:e.jsx("use",{href:`${a}#icon-checkbox`})}),e.jsx(m,{color:!r.email&&o.email?"#3cbc81":null,children:r.email?r.email:"Success email"})]}):null]}),e.jsxs("div",{children:[e.jsxs(f,{children:[e.jsx(x,{border:j,type:d,name:"password",placeholder:"Password"}),e.jsx(Z,{children:e.jsx(U,{onClick:w,children:e.jsx("use",{href:t})})})]}),r.password&&o.password||!r.password&&o.password?e.jsxs(h,{children:[e.jsx(g,{fill:!r.password&&o.password?"#3cbc81":null,children:e.jsx("use",{href:`${a}#icon-checkbox`})}),e.jsx(m,{color:!r.password&&o.password?"#3cbc81":null,children:r.password?r.password:"Success password"})]}):null]})]}),e.jsx(_,{type:"submit",children:"Sign In"})]})}})},ei=()=>e.jsxs(P,{children:[e.jsx(A,{src:q,alt:"Activity tracker"}),e.jsxs(T,{children:[e.jsxs(L,{children:[e.jsx(W,{children:"Sign in"}),e.jsx(R,{children:"You need to login to use the service"})]}),e.jsx(K,{}),e.jsx($,{to:"/forgot-password",children:e.jsx(Y,{children:"Forgot your password?"})}),e.jsxs(N,{children:[e.jsx(V,{children:"If you do not have an account yet"}),e.jsx(D,{to:"/signup",children:"Sign up"})]})]})]});export{ei as default};
