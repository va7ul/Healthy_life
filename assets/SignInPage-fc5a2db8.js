import{s as i,N as f,j as e,u as b,r as u,L as w,l as y}from"./index-54cfea03.js";import{c as p,a as n,F as v,b as j}from"./index.esm-f993a321.js";import{i as k,a as S}from"./eye-off-af8e2e96.js";import{i as z}from"./welcomepage-690c85c9.js";const I=p().shape({email:n().email("Invalid email").required("Required!"),password:n().min(6,"Too Short!").required("Required!")}),$=p().shape({email:n().required("Required").email("Invalid email address").matches(/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,"Invalid email address")}),F=i.div`
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
`,C=i.div`
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
`,E=i.div`
  text-align: left;
  margin-bottom: 24px;
`,q=i.h1`
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
`,P=i.h2`
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
`,L=i.img`
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
`,s=i.input`
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
`,N=i.button`
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
`,R=i.input.attrs({type:"checkbox"})`
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
    background-image: url(${k}#eye-off);
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
    background-image: url(${S}#eye);
    visibility: visible;
  }

  @media screen and (max-width: 834px) {
    top: 50%;
    left: 50%;
  }
`,T=i.div`
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
`,A=i.p`
  color: var(--color-primary-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
  }
`,V=i.p`
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`,W=i.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`,d=i.div`
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
`;const l=i.label`
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
`;const B=i(f)`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,D={email:"",password:""},Q=()=>{const o=b(),[a,c]=u.useState(!1),x=(t,r)=>{o(y(t)),r.resetForm()},m=()=>{c(!a)};return e.jsx(v,{initialValues:D,validationSchema:I,onSubmit:x,children:({errors:t,touched:r})=>{const h=r.email?t.email?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",g=r.password?t.password?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)";return e.jsx(j,{autoComplete:"off",children:e.jsxs(W,{children:[e.jsx(l,{children:e.jsx(s,{$border:h,type:"text",name:"email",validate:$,placeholder:"Email"})}),e.jsx(d,{children:r.email&&t.email&&t.email}),e.jsxs(l,{children:[e.jsx(s,{$border:g,type:a?"text":"password",name:"password",placeholder:"Password",autoComplete:"off"}),e.jsx(R,{type:"checkbox",onChange:m})]}),e.jsx(d,{children:r.password&&t.password&&t.password}),e.jsx(N,{type:"submit",children:"Sign In"}),e.jsx(w,{to:"/forgot-password",children:e.jsx(V,{children:"Forgot your password?"})})]})})}})},G=()=>e.jsxs(F,{children:[e.jsx(L,{src:z,alt:"Activity tracker"}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(q,{children:"Sign in"}),e.jsx(P,{children:"You need to login to use the service"})]}),e.jsx(Q,{}),e.jsxs(T,{children:[e.jsx(A,{children:"If you do not have an account yet"}),e.jsx(B,{to:"/signup",children:"Sign up"})]})]})]});export{G as default};
