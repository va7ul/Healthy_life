import{s as i,N as v,r as y,u as k,j as e,l as j,L as S}from"./index-022e5f0c.js";import{i as c,a as x}from"./eye-off-e530e41c.js";import{c as m,a,d as F,F as z,b as I}from"./index.esm-bcaa8d79.js";import{i as $}from"./welcomepage-690c85c9.js";const E=i.div`
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
`,P=i.div`
  text-align: left;
  margin-bottom: 24px;
`,B=i.h1`
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
`,q=i.h2`
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
`;i.input`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: ${n=>n.$border};
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
    background-image: url(${c}#eye-off);
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
    background-image: url(${x}#eye);
    visibility: visible;
  }

  @media screen and (max-width: 834px) {
    top: 50%;
    left: 50%;
  }
`;const W=i.div`
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
`,R=i.p`
  color: var(--color-primary-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
  }
`,T=i.p`
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    width: 212px;
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
`;const A=i(v)`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,N=m().shape({email:a().trim("Cannot include leading and trailing spaces").email("Invalid email").required("Required!"),password:a().trim("Cannot include leading and trailing spaces").min(6,"Too Short!").required("Required!")});i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;const t={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},l=i(F)`
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: ${n=>n.border||`1px solid ${t.inputBorder}`};
  padding: 14px;
  color: ${t.text};
  background-color: ${t.background};
  transition: border var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 1px solid ${t.inputBorderHover};
    outline: none;
  }
`,s=i.div`
  color: ${n=>n.color||t.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -20px;
  margin-left: 12px;
`,V=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`,Y=i.svg`
  width: 16px;
  height: 16px;
  stroke: ${t.iconStroke};
  cursor: pointer;
`,d=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,p=i.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`,D=i.div`
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

  /* &.inputError {
    border: 2px solid #e74a3b;
  }

  &.inputValid {
    border: 2px solid #3cbc81;
  } */

  &::placeholder {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
`;const H=i.button`
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
    background-color: var(--primary-color-lite-green);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,Q=m().shape({email:a().required("Required").trim("Cannot include leading and trailing spaces").email("Invalid email address").matches(/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,"Invalid email address")}),U={email:"",password:""},Z=()=>{const[n,g]=y.useState(!1),h=k(),f=(r,o)=>{h(j(r)),o.resetForm()},u=()=>{g(!n)};return e.jsx(z,{initialValues:U,validationSchema:N,onSubmit:f,children:({errors:r,touched:o})=>{const b=o.email?r.email?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",w=o.password?r.password?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)";return e.jsxs(I,{autoComplete:"off",children:[e.jsxs(V,{children:[e.jsx(p,{children:e.jsx(l,{border:b,type:n?"text":"password",name:"email",validate:Q,placeholder:"Email"})}),r.email&&o.email||!r.email&&o.email?e.jsx(d,{children:e.jsx(s,{color:!r.email&&o.email?"#3cbc81":null,children:r.email?r.email:"Success email"})}):null,e.jsxs(p,{children:[e.jsx(l,{border:w,type:n?"text":"password",name:"password",placeholder:"Password"}),e.jsx(D,{children:e.jsx(Y,{onClick:u,children:e.jsx("image",{href:n?c:x})})})]}),r.password&&o.password||!r.password&&o.password?e.jsx(d,{children:e.jsx(s,{color:!r.password&&o.password?"#3cbc81":null,children:r.password?r.password:"Success password"})}):null]}),e.jsx(H,{type:"submit",children:"Sign In"})]})}})},M=()=>e.jsxs(E,{children:[e.jsx(L,{src:$,alt:"Activity tracker"}),e.jsxs(C,{children:[e.jsxs(P,{children:[e.jsx(B,{children:"Sign in"}),e.jsx(q,{children:"You need to login to use the service"})]}),e.jsx(Z,{}),e.jsx(S,{to:"/forgot-password",children:e.jsx(T,{children:"Forgot your password?"})}),e.jsxs(W,{children:[e.jsx(R,{children:"If you do not have an account yet"}),e.jsx(A,{to:"/signup",children:"Sign up"})]})]})]});export{M as default};
