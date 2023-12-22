import{s as o,r as l,b as s,u as I,j as r,l as $,n as x,c as z,L as m}from"./index-95993abd.js";import{i as P}from"./welcomepage-690c85c9.js";import{c as v,a as d,d as E,F as C,b as B}from"./index.esm-31cdef9e.js";const M=v().shape({email:d().email("Invalid email").required("Required!"),password:d().min(6,"Too Short!").required("Required!")});o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;const a={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},g=o(E)`
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: ${i=>i.border||`1px solid ${a.inputBorder}`};
  padding: 14px;
  color: ${a.text};
  background-color: ${a.background};
  transition: border var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 1px solid ${a.inputBorderHover};
    outline: none;
  }
`,f=o.div`
  color: ${i=>i.color||a.error};
  margin-top: 4px;
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
`,q=o.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,T=o.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.iconStroke};
  cursor: pointer;
`,h=o.svg`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  fill: ${i=>i.fill||a.error};
`,u=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,b=o.label`
  position: relative;
  display: block;
`,U=o.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  display: flex;
  align-items: center;
`;o.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;o.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
`;o.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;o.input`
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
`;const L=o.button`
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
`,R=v().shape({email:d().required("Required").email("Invalid email address").matches(/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,"Invalid email address")}),W={email:"",password:""},A=()=>{const[i,c]=l.useState(`${s}#icon-eye-off`),[t,p]=l.useState("password"),w=I(),j=(e,n)=>{w($(e)),n.resetForm()},k=()=>{t==="password"?(p("text"),c(`${s}#icon-eye`)):(p("password"),c(`${s}#icon-eye-off`))};return r.jsx(C,{initialValues:W,validationSchema:M,onSubmit:j,children:({errors:e,touched:n})=>{const S=n.email?e.email?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",F=n.password?e.password?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)";return r.jsxs(B,{autoComplete:"off",children:[r.jsxs(q,{children:[r.jsxs("div",{children:[r.jsx(b,{children:r.jsx(g,{border:S,type:"text",name:"email",validate:R,placeholder:"Email"})}),e.email&&n.email||!e.email&&n.email?r.jsxs(u,{children:[r.jsx(h,{fill:!e.email&&n.email?"#3cbc81":null,children:r.jsx("use",{href:`${s}#icon-checkbox`})}),r.jsx(f,{color:!e.email&&n.email?"#3cbc81":null,children:e.email?e.email:"Success email"})]}):null]}),r.jsxs("div",{children:[r.jsxs(b,{children:[r.jsx(g,{border:F,type:t,name:"password",placeholder:"Password"}),r.jsx(U,{children:r.jsx(T,{onClick:k,children:r.jsx("use",{href:i})})})]}),e.password&&n.password||!e.password&&n.password?r.jsxs(u,{children:[r.jsx(h,{fill:!e.password&&n.password?"#3cbc81":null,children:r.jsx("use",{href:`${s}#icon-checkbox`})}),r.jsx(f,{color:!e.password&&n.password?"#3cbc81":null,children:e.password?e.password:"Success password"})]}):null]})]}),r.jsx(L,{type:"submit",children:"Sign In"})]})}})},D=o.div`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,H=o.main`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,V=o.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,Y=o.h1`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  margin: 0;
`,Z=o.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 18px;
  margin-bottom: 24px;
`;o.div`
  background-color: var(--primary-color-black-two);
  border: 1px solid;
  border-color: var(--primary-color-green-lite);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  padding: 10px 8px;
  margin-bottom: 16px;
  width: 100%;
`;o.input`
  color: var(--primary-color-grey);
  background-color: transparent;
  font-family: 'Poppins500';
  color: var(--primary-color-grey);
  font-size: var(--main-font-size);
  width: 100%;
  border: none;

  &::placeholder {
    color: var(--primary-color-grey);
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color-green-lite);
  }
`;o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;o.div`
  background-color: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  font-family: 'Poppins500';
  font-size: var(--main-font-size);
  text-align: center;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  margin-top: 40px;

  &:hover {
    background-color: #22c55e;
  }
`;const G=o.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`,_=o.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
`,J=o.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,K=o.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
  cursor: pointer;
  margin-top: 14px;
  margin-bottom: 54px;

  &:hover {
    text-decoration: underline;
  }
`,N=o.img`
  height: 296px;
  width: 300px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
`,y=o.div`
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  ${i=>i.type==="success"&&x`
      background-color: #28a745; // Green for success
      border: 1px solid #1e7e34;
    `}

  ${i=>i.type==="error"&&x`
      background-color: #dc3545; // Red for error
      border: 1px solid #c82333;
    `}
`,rr=()=>{z();const[i,c]=l.useState(""),[t,p]=l.useState("");return r.jsx(D,{children:r.jsxs(H,{children:[i&&r.jsx(y,{type:"success",children:i}),t&&r.jsx(y,{type:"error",children:t}),r.jsx(N,{src:P,alt:"Activity trtacker"}),r.jsxs(V,{children:[r.jsx(Y,{children:"Sign in"}),r.jsx(Z,{children:"You need to login to use the service"})]}),r.jsx(A,{}),r.jsx(m,{to:"/forgot-password",children:r.jsx(K,{children:"Forgot your password?"})}),r.jsxs(G,{children:[r.jsx(_,{children:"If you do not have an account yet"}),r.jsx(m,{to:"/signup",children:r.jsx(J,{children:"Sign up"})})]})]})})};export{rr as default};
