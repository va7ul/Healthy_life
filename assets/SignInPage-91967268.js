import{s as e,r as p,a as c,u as k,j as r,l as I,n as d,b as P,c as E,L as m}from"./index-6a8e81be.js";import{i as $}from"./welcomepage-690c85c9.js";import{c as z,a as x,b as M,d as U}from"./index.esm-2a8fddd8.js";import{W as C,L as g,I as f,e as u,f as y,E as h,a as F,S as L}from"./SignUpForm.styled-76c9d4df.js";const T=z().shape({email:x().email("Invalid email").required("Required!"),password:x().min(6,"Too Short!").required("Required!")});e.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;const R=e.button`
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
`;function q(i){let n;return i?/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(i)||(n="Invalid email address"):n="Required",n}const W={email:"",password:""},A=()=>{const[i,n]=p.useState(`${c}#icon-eye-off`),[t,a]=p.useState("password"),l=k(),b=(o,s)=>{l(I(o)),s.resetForm()},w=()=>{t==="password"?(a("text"),n(`${c}#icon-eye`)):(a("password"),n(`${c}#icon-eye-off`))};return r.jsx(M,{initialValues:W,validationSchema:T,onSubmit:b,children:({errors:o,touched:s})=>{const j=s.email?o.email?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",S=s.password?o.password?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)";return r.jsxs(U,{autoComplete:"off",children:[r.jsxs(C,{children:[r.jsxs("div",{children:[r.jsx(g,{children:r.jsx(f,{border:j,type:"text",name:"email",validate:q,placeholder:"Email"})}),o.email&&s.email||!o.email&&s.email?r.jsxs(u,{children:[r.jsx(y,{fill:!o.email&&s.email?"#3cbc81":null,children:r.jsx("use",{href:`${c}#icon-checkbox`})}),r.jsx(h,{color:!o.email&&s.email?"#3cbc81":null,children:o.email?o.email:"Success email"})]}):null]}),r.jsxs("div",{children:[r.jsxs(g,{children:[r.jsx(f,{border:S,type:t,name:"password",placeholder:"Password"}),r.jsx(F,{children:r.jsx(L,{onClick:w,children:r.jsx("use",{href:i})})})]}),o.password&&s.password||!o.password&&s.password?r.jsxs(u,{children:[r.jsx(y,{fill:!o.password&&s.password?"#3cbc81":null,children:r.jsx("use",{href:`${c}#icon-checkbox`})}),r.jsx(h,{color:!o.password&&s.password?"#3cbc81":null,children:o.password?o.password:"Success password"})]}):null]})]}),r.jsx(R,{type:"submit",children:"Sign In"})]})}})},B=e.div`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
  /* height: 100vh; */
`,D=e.main`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Z=e.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,G=e.h1`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  margin: 0;
`,V=e.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 18px;
  margin-bottom: 24px;
`;e.div`
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
`;e.input`
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
`;e.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;e.div`
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
`;const Y=e.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`,_=e.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
`,H=e.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,J=e.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
  cursor: pointer;
  margin-top: 14px;
  margin-bottom: 54px;

  &:hover {
    text-decoration: underline;
  }
`,K=e.img`
  height: 296px;
  width: 300px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
`,v=e.div`
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  ${i=>i.type==="success"&&d`
      background-color: #28a745; // Green for success
      border: 1px solid #1e7e34;
    `}

  ${i=>i.type==="error"&&d`
      background-color: #dc3545; // Red for error
      border: 1px solid #c82333;
    `}
`,N=P.create({baseURL:"apiurl"}),O=async(i,n,t)=>{try{const{data:a}=await N.get(`auth/verify/${i}`);n(`${a.message}! Use your credentials to login`)}catch(a){const l=a.response&&a.response.data.message?`Error when verifying email: ${a.response.data.message}`:"Error when verifying email: An unknown error occurred.";t(l)}},or=()=>{const{verificationToken:i}=E(),[n,t]=p.useState(""),[a,l]=p.useState("");return p.useEffect(()=>{i&&O(i,t,l)},[i]),r.jsx(B,{children:r.jsxs(D,{children:[n&&r.jsx(v,{type:"success",children:n}),a&&r.jsx(v,{type:"error",children:a}),r.jsx(K,{src:$,alt:"Activity trtacker"}),r.jsxs(Z,{children:[r.jsx(G,{children:"Sign in"}),r.jsx(V,{children:"You need to login to use the service"})]}),r.jsx(A,{}),r.jsx(m,{to:"/forgot-password",children:r.jsx(J,{children:"Forgot your password?"})}),r.jsxs(Y,{children:[r.jsx(_,{children:"If you do not have an account yet"}),r.jsx(m,{to:"/signup",children:r.jsx(H,{children:"Sign up"})})]})]})})};export{or as default};
