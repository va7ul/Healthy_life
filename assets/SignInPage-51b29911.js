import{s as i,N as v,c as y,a,F as k,r as j,u as F,j as e,b as S,d as z,l as E,L as P}from"./index-02caf8bd.js";import{i as x,a as m}from"./eye-off-253cca67.js";import{i as $}from"./welcomepage-690c85c9.js";const I=i.div`
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
`,B=i.div`
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
`,C=i.div`
  text-align: left;
  margin-bottom: 24px;
`,L=i.h1`
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
`,W=i.h2`
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
`,q=i.img`
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
  border: ${o=>o.$border};
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
    background-image: url(${x}#eye-off);
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
    background-image: url(${m}#eye);
    visibility: visible;
  }

  @media screen and (max-width: 834px) {
    top: 50%;
    left: 50%;
  }
`;const N=i.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: 1440px) {
    max-width: 364px;
  }
`,T=i.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 16px;
`,Y=i.p`
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    width: 212px;
    margin-bottom: 184px;
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
  width: 192;
`;i.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;const H=i(v)`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,s=y().shape({email:a().trim().strict().email("Enter a valid Email*").required("Email is required!"),password:a().trim().strict().min(6,"Enter a valid Password*").required("Password is required!")});i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;const n={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},l=i(k)`
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: ${o=>o.border||`1px solid ${n.inputBorder}`};
  padding: 14px;
  color: ${n.text};
  background-color: ${n.background};
  transition: border var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 1px solid ${n.inputBorderHover};
    outline: none;
  }
`,d=i.div`
  color: ${o=>o.color||n.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -20px;
  margin-left: 12px;
  font-size: 12px;
  font-family: 'Poppins400';
`,Q=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`,U=i.svg`
  width: 16px;
  height: 16px;
  stroke: ${n.iconStroke};
  cursor: pointer;
`,p=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,c=i.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`,V=i.div`
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

  &::placeholder {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
`;const A=i.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 40px;
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
    background-color: var(--secondary-color-yellow);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,D={email:"",password:""},M=()=>{const[o,g]=j.useState(!1),h=F(),f=(r,t)=>{h(E(r)),t.resetForm()},u=()=>{g(!o)};return e.jsx(S,{initialValues:D,validationSchema:s,onSubmit:f,children:({errors:r,touched:t})=>{const b=t.email?r.email?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",w=t.password?r.password?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)";return e.jsxs(z,{autoComplete:"off",children:[e.jsxs(Q,{children:[e.jsx(c,{children:e.jsx(l,{border:b,type:"text",name:"email",validate:s,placeholder:"Email"})}),r.email&&t.email||!r.email&&t.email?e.jsx(p,{children:e.jsx(d,{color:!r.email&&t.email?"#3cbc81":null,children:r.email?r.email:"Email is valid"})}):null,e.jsxs(c,{children:[e.jsx(l,{border:w,type:o?"text":"password",name:"password",placeholder:"Password"}),e.jsx(V,{children:e.jsx(U,{onClick:u,children:e.jsx("image",{href:o?m:x})})})]}),r.password&&t.password||!r.password&&t.password?e.jsx(p,{children:e.jsx(d,{color:!r.password&&t.password?"#3cbc81":null,children:r.password?r.password:"Password is secure"})}):null]}),e.jsx(A,{type:"submit",children:"Sign In"})]})}})},K=()=>e.jsxs(I,{children:[e.jsx(q,{src:$,alt:"Activity tracker"}),e.jsxs(B,{children:[e.jsxs(C,{children:[e.jsx(L,{children:"Sign in"}),e.jsx(W,{children:"You need to login to use the service"})]}),e.jsx(M,{}),e.jsx(P,{to:"/forgot-password",children:e.jsx(Y,{children:"Forgot your password?"})}),e.jsxs(N,{children:[e.jsx(T,{children:"If you do not have an account yet"}),e.jsx(H,{to:"/signup",children:"Sign up"})]})]})]});export{K as default};
