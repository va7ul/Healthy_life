import{s as i,N as m,j as e,r as o,b as g,u as h,L as f,l as u}from"./index-fa623c81.js";import{c as b,a,F as w,b as y}from"./index.esm-5ee6e69c.js";import{i as v,a as j}from"./eye-off-d9afee5f.js";import{i as k}from"./welcomepage-690c85c9.js";const S=b().shape({email:a().email("Invalid email").required("Required!"),password:a().min(6,"Too Short!").required("Required!")}),I=i.div`
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
`,z=i.div`
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
`,F=i.div`
  text-align: left;
  margin-bottom: 24px;
`,C=i.h1`
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
`,E=i.h2`
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
`,B=i.img`
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
`,L=i.button`
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
`,T=i.input.attrs({type:"checkbox"})`
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
    background-image: url(${v}#eye-off);
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
    background-image: url(${j}#eye);
    visibility: visible;
  }

  @media screen and (max-width: 834px) {
    top: 50%;
    left: 50%;
  }
`,$=i.div`
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
`,q=i.p`
  color: var(--color-primary-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
  }
`,N=i.p`
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`,R=i.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`,p=i.div`
  font-size: 12px;
  color: var(--secondary-color-pink);
  margin-top: 4px;
`;i.svg`
  fill: var(--primary-color-white);
  margin-left: auto;
`;i.svg`
  fill: var(--primary-color-lite-green);
`;i.div`
  display: flex;
  align-items: center;
`;const d=i.label`
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
`;const W=i(m)`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,D={email:"",password:""},P=()=>{o.useState(`${g}#icon-eye-off`),o.useState("password");const l=h(),c=(t,n)=>{l(u(t)),n.setSubmitting(!1),n.resetForm()},x=()=>{const t=document.getElementById("myInput");t.type==="password"?t.type="text":t.type="password"};return e.jsx(w,{initialValues:D,validationSchema:S,onSubmit:c,children:({errors:t,touched:n})=>e.jsx(y,{autoComplete:"off",children:e.jsxs(R,{children:[e.jsxs(d,{children:[e.jsx(s,{type:"email",name:"email",placeholder:"Email"}),e.jsx(p,{children:n.email&&t.email&&t.email})]}),e.jsxs(d,{children:[e.jsx(s,{type:"password",name:"password",placeholder:"Password",id:"myInput",onChange:r=>password.onChange(r),onBlur:r=>password.onBlur(r),autoComplete:"off"}),e.jsx(T,{type:"checkbox",onChange:x}),e.jsx(p,{children:n.password&&t.password&&t.password})]}),e.jsx(L,{type:"submit",children:"Sign In"}),e.jsx(f,{to:"/forgot-password",children:e.jsx(N,{children:"Forgot your password?"})})]})})})},A=()=>e.jsxs(I,{children:[e.jsx(B,{src:k,alt:"Activity tracker"}),e.jsxs(z,{children:[e.jsxs(F,{children:[e.jsx(C,{children:"Sign in"}),e.jsx(E,{children:"You need to login to use the service"})]}),e.jsx(P,{}),e.jsxs($,{children:[e.jsx(q,{children:"If you do not have an account yet"}),e.jsx(W,{to:"/signup",children:"Sign up"})]})]})]});export{A as default};
