import{s as r,u as c,d as p,j as o,L as d,f as m}from"./index-e5e60a42.js";import{c as h,a as g,F as x,b as u,d as f,E as y}from"./index.esm-9de86228.js";import{n as i}from"./notiflix-notify-aio-7c00b0a8.js";import{i as b}from"./welcomepage-690c85c9.js";const v=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background: var(--primary-color-black-one);
  background-size: cover;
  padding: 10px;
`,w=r.div`
  width: 90%;
  max-width: 400px;
  background: var(--primary-color-black-one);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`,j=r.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;
`,k=r.h1`
  color: var(--primary-color-white);
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
`,P=r.p`
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;
`,S=r.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 40px;

  &:placeholder-shown {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
`,z=r.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  background: var(--color-primary-green-lite, #e3ffa8);
  color: var(--color-primary-black-2, #0f0f0f);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 80px;

  &:disabled {
    background-color: var(--primary-color-green-lite);
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: var(--secondary-color-yellow);
  }
`,F=r.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`,E=r.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 16px;
`;r.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;const I=h().shape({email:g().email("Invalid email").required("Required")}),D=()=>{const t=c(),a=p(),n=async(e,{setSubmitting:s})=>{try{await t(m({email:e.email})),i.Notify.success("A password reset link has been sent to your email."),a("/signin")}catch(l){i.Notify.failure("Failed to send password reset link. Please try again."),console.error(l)}finally{s(!1)}};return o.jsx(v,{children:o.jsxs(w,{children:[o.jsx(j,{src:b,alt:"Forgot Password"}),o.jsx(k,{children:"Forgot your password"}),o.jsx(P,{children:"Enter your email to receive password recovery instructions"}),o.jsx(x,{initialValues:{email:""},validationSchema:I,onSubmit:n,children:({isSubmitting:e})=>o.jsxs(u,{children:[o.jsx(f,{as:S,name:"email",type:"email",placeholder:"E-mail"}),o.jsx(y,{name:"email",component:"div"}),o.jsx(z,{type:"submit",disabled:e,children:"Send"})]})}),o.jsxs(F,{children:[o.jsx(E,{children:"If you do not have an account yet"}),o.jsx(d,{to:"/signup",children:"Sign up"})]})]})})};export{D as default};
