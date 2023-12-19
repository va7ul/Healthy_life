import{r as x,j as e,a as q,L as B,s as i}from"./index-bd709a3e.js";import{c as u,a as m,F as y,b as j,d as t,E as h}from"./index.esm-07af71fb.js";import{W as E,I as L,L as M,a as G,S as N,N as T,b as I,c as $,d as z}from"./SignUpForm.styled-fc5b449b.js";const v=()=>x.useContext(P),R=u().shape({name:m().min(2,"Too Short! Must be minimum 2 symbols").max(50,"Too Long! 50 symbols - is maximum.").required("Name is required"),email:m().email("Invalid email. Here is an example: example@mail.com").required("Email is required"),password:m().min(6,"Too Short! Must be minimum 6 symbols").max(50,"Too Long! 50 symbols - is maximum.").required("Password is required")}),V=()=>{const[a,r]=x.useState(!1),{nextStage:s,addSignUpData:c,signUpData:o}=v(),d={name:o.name||"",email:o.email||"",password:o.password||""},p=async(l,{resetForm:g})=>{c(l),g(),s()};return e.jsx(y,{initialValues:d,validationSchema:R,onSubmit:p,children:({isSubmitting:l})=>e.jsxs(j,{autoComplete:"off",children:[e.jsxs(E,{children:[e.jsx(t,{as:L,name:"name",type:"text",placeholder:"Name"}),e.jsx(t,{as:L,name:"email",type:"email",placeholder:"E-mail"}),e.jsxs(M,{children:[e.jsx(t,{as:L,id:"password",name:"password",type:a?"text":"password",placeholder:"Password"}),e.jsx(G,{onClick:()=>r(!a),children:e.jsx(N,{children:e.jsx("use",{href:`${q}#${a?"icon-eye":"icon-eye-off"}`})})})]}),e.jsx(T,{type:"submit",disabled:l,children:"Sign up"})]}),e.jsxs(I,{children:[e.jsx($,{children:"Do you already have an account?"}),e.jsx(B,{to:"/signin",children:e.jsx(z,{children:"Sign in"})})]})]})})},W=i.div`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`,A=i.div`
  background-color: var(--primary-color-black-one);
  height: 100vh;
  width: 100%;
  overflow: hidden;
`,Y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
`,H=i.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`,_=i.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;i.div`
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
`;i.input`
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
`;i.div`
  background-color: var(--primary-color-green-lite);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 10px;
  border: none;
  width: 100%;
  cursor: pointer;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color-black-two);
  font-family: 'Poppins400';
`;i.div`
  text-align: center;
  padding-top: 16px;
`;i.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  margin: 0;
`;i.div`
  color: var(--primary-color-white);
  font-family: 'Poppins400';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;i.img`
  height: 296px;
  width: 300px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
`;const J=()=>e.jsx(W,{children:e.jsxs(A,{children:[e.jsxs(Y,{children:[e.jsx(H,{children:"Sign up"}),e.jsx(_,{children:"You need to register to use the service"})]}),e.jsx(V,{})]})}),b=i.img`
  height: 296px;
  width: 300px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
`,f=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 320px;
`,S=i.button`
  background-color: #76c893;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  margin: 10px 0;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5ea67e;
  }
`,D=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`,n=i.label`
  display: flex;
  align-items: center;
  margin: 5px 0;

  input[type='radio'] {
    margin-right: 10px;
  }
`,w=i.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,k=i.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`,U=i.button`
  background-color: #f2f2f2;
  color: #333;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`,C="/Healthy_life/assets/goals-8ade6549.png",K=u().shape({goalSelection:m().required("Required")}),O=({isSubmitting:a})=>{const{nextStage:r,prevStage:s,signUpData:c,addSignUpData:o}=v(),d={goal:c.goal||""},p=(l,{resetForm:g})=>{o(l),r(),g()};return e.jsxs(f,{children:[e.jsx(b,{src:C,alt:"Goal selection"}),e.jsx(w,{children:"Your Goal"}),e.jsx(k,{children:"Choose a goal so that we can help you effectively"}),e.jsx(y,{initialValues:d,onSubmit:p,validationSchema:K,children:e.jsxs(j,{children:[e.jsxs(D,{role:"group","aria-labelledby":"my-radio-group",children:[e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"goal",value:"Lose Fat"}),"Lose Fat"]}),e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"goal",value:"Gain Muscle"}),"Gain Muscle"]})]}),e.jsx(h,{name:"goal",component:"div"}),e.jsx(S,{type:"submit",disabled:a,onClick:r,children:"Next"}),e.jsx(U,{type:"button",onClick:s,children:"Back"})]})})]})},Q=u().shape({genderSelection:m().required("Required")}),X=({isSubmitting:a})=>{const{nextStage:r,prevStage:s,signUpData:c,addSignUpData:o}=v(),d={gender:c.gender||""},p=(l,{resetForm:g})=>{o(l),r(),g()};return e.jsxs(f,{children:[e.jsx(b,{src:C,alt:"Select gender"}),e.jsx(w,{children:"Select Gender, Age"}),e.jsx(k,{children:"Choose a goal so that we can help you effectively"}),e.jsx(y,{initialValues:d,onSubmit:p,validationSchema:Q,children:e.jsxs(j,{children:[e.jsxs(D,{role:"group","aria-labelledby":"gender-group",children:[e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"gender",value:"Male"}),"Male"]}),e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"gender",value:"Female"}),"Female"]})]}),e.jsx(h,{name:"gender",component:"div"}),e.jsxs(n,{htmlFor:"age",children:["Your age",e.jsx(t,{id:"age",name:"age",placeholder:"Enter your age",type:"number"})]}),e.jsx(h,{name:"age",component:"div"}),e.jsx(S,{type:"submit",disabled:a,onClick:r,children:"Next"}),e.jsx(U,{type:"button",onClick:s,children:"Back"})]})})]})},Z=u().shape({bodyparameters:m().required("Required")}),ee=({isSubmitting:a})=>{const{nextStage:r,prevStage:s,signUpData:c,addSignUpData:o}=v(),d={goal:c.goal||""},p=(l,{resetForm:g})=>{o(l),r(),g()};return e.jsxs(f,{children:[e.jsx(b,{src:C,alt:"Body parameters"}),e.jsx(w,{children:"Body Parameters"}),e.jsx(k,{children:"Enter your parameters for correct performance tracking"}),e.jsx(y,{initialValues:d,onSubmit:p,validationSchema:Z,children:e.jsxs(j,{children:[e.jsxs(n,{htmlFor:"height",children:["Height",e.jsx(t,{id:"height",name:"height",placeholder:"Enter your height",type:"number"})]}),e.jsx(h,{name:"height",component:"div"}),e.jsxs(n,{htmlFor:"weight",children:["Weight",e.jsx(t,{id:"weight",name:"weight",placeholder:"Enter your weight",type:"number"})]}),e.jsx(h,{name:"weight",component:"div"}),e.jsx(S,{type:"submit",disabled:a,onClick:r,children:"Next"}),e.jsx(U,{type:"button",onClick:s,children:"Back"})]})})]})},ie=u().shape({activityLevel:m().required("Required")}),ae=({isSubmitting:a})=>{const{nextStage:r,prevStage:s,signUpData:c,addSignUpData:o}=v(),d={goal:c.goal||""},p=(l,{resetForm:g})=>{o(l),r(),g()};return e.jsxs(f,{children:[e.jsx(b,{src:C,alt:"Activity Illustration"}),e.jsx(w,{children:"Your Activity"}),e.jsx(k,{children:"To correctly calculate calorie and water intake"}),e.jsx(y,{initialValues:d,onSubmit:p,validationSchema:ie,children:e.jsxs(j,{children:[e.jsxs(D,{role:"group","aria-labelledby":"activity-level-group",children:[e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"activityLevel",value:"1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"activityLevel",value:"1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"activityLevel",value:"1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"activityLevel",value:"1.725"}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(n,{children:[e.jsx(t,{type:"radio",name:"activityLevel",value:"1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]}),e.jsx(S,{type:"submit",disabled:a,onClick:r,children:"Next"}),e.jsx(U,{type:"button",onClick:s,children:"Back"})]})})]})},P=x.createContext(),ne=()=>{const[a,r]=x.useState(0),[s,c]=x.useState({name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityLevel:""}),o=()=>r(a-1),d=()=>r(a+1),p=F=>c({...s,...F}),g=[J,O,X,ee,ae][a];return e.jsx(P.Provider,{value:{prevStage:o,nextStage:d,signUpData:s,addSignUpData:p,currentStage:a},children:e.jsx(g,{})})};export{P as SignUpContext,ne as SignUpProcessPage,ne as default};
