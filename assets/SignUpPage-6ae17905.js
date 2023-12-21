import{r as b,j as e,a as S,L as C,s as r}from"./index-6bf3420c.js";import{F as o,E as s,c as L,a as F,b as P,d as B}from"./index.esm-5a326af2.js";import{W as E,I as y,L as U,a as G,S as M,N,b as z,c as I,d as T}from"./SignUpForm.styled-8e0f39c8.js";const W=({nextStep:i,isSubmitting:a})=>{const[t,m]=b.useState(!1);return e.jsxs(E,{children:[e.jsx(o,{as:y,name:"name",type:"text",placeholder:"Name"}),e.jsx(o,{as:y,name:"email",type:"email",placeholder:"E-mail"}),e.jsxs(U,{children:[e.jsx(o,{as:y,id:"password",name:"password",type:t?"text":"password",placeholder:"Password"}),e.jsx(G,{onClick:()=>m(!t),children:e.jsx(M,{children:e.jsx("use",{href:`${S}#${t?"icon-eye":"icon-eye-off"}`})})})]}),e.jsx(N,{type:"submit",onClick:i,disabled:a,children:"Next"}),e.jsxs(z,{children:[e.jsx(I,{children:"Do you already have an account?"}),e.jsx(C,{to:"/signin",children:e.jsx(T,{children:"Sign in"})})]})]})},A=r.div`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`,Y=r.div`
  background-color: var(--primary-color-black-one);
  height: 100vh;
  width: 100%;
  overflow: hidden;
`,$=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
`,D=r.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`,R=r.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;r.div`
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
`;r.input`
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
`;r.div`
  background-color: var(--primary-color-green-lite);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 10px;
  border: none;
  width: 100%;
  cursor: pointer;
`;r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color-black-two);
  font-family: 'Poppins400';
`;r.div`
  text-align: center;
  padding-top: 16px;
`;r.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  margin: 0;
`;r.div`
  color: var(--primary-color-white);
  font-family: 'Poppins400';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;r.img`
  height: 296px;
  width: 300px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
`;const V=()=>e.jsx(A,{children:e.jsxs(Y,{children:[e.jsxs($,{children:[e.jsx(D,{children:"Sign up"}),e.jsx(R,{children:"You need to register to use the service"})]}),e.jsx(W,{})]})}),l=r.img`
  height: 296px;
  width: 300px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
`,c=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 320px;
`,d=r.button`
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
`,j=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`,n=r.label`
  display: flex;
  align-items: center;
  margin: 5px 0;

  input[type='radio'] {
    margin-right: 10px;
  }
`,p=r.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,x=r.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`,h=r.button`
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
`,g="/Healthy_life/assets/goals-8ade6549.png",q=({nextStep:i,prevStep:a,isSubmitting:t})=>e.jsxs(c,{children:[e.jsx(l,{src:g,alt:"Goal selection"}),e.jsx(p,{children:"Your Goal"}),e.jsx(x,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(j,{role:"group","aria-labelledby":"my-radio-group",children:[e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"goal",value:"Lose Fat"}),"Lose Fat"]}),e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"goal",value:"Gain Muscle"}),"Gain Muscle"]})]}),e.jsx(s,{name:"goal",component:"div"}),e.jsx(d,{type:"submit",onClick:i,disabled:t,children:"Next"}),e.jsx(h,{type:"button",onClick:a,children:"Back"})]}),H=({nextStep:i,prevStep:a,isSubmitting:t})=>e.jsxs(c,{children:[e.jsx(l,{src:g,alt:"Select gender"}),e.jsx(p,{children:"Select Gender, Age"}),e.jsx(x,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(j,{role:"group","aria-labelledby":"gender-group",children:[e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"gender",value:"Male"}),"Male"]}),e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"gender",value:"Female"}),"Female"]})]}),e.jsx(s,{name:"gender",component:"div"}),e.jsxs(n,{htmlFor:"age",children:["Your age",e.jsx(o,{id:"age",name:"age",placeholder:"Enter your age",type:"number"})]}),e.jsx(s,{name:"age",component:"div"}),e.jsx(d,{type:"submit",onClick:i,disabled:t,children:"Next"}),e.jsx(h,{type:"button",onClick:a,children:"Back"})]}),_=({nextStep:i,prevStep:a,isSubmitting:t})=>e.jsxs(c,{children:[e.jsx(l,{src:g,alt:"Body parameters"}),e.jsx(p,{children:"Body Parameters"}),e.jsx(x,{children:"Enter your parameters for correct performance tracking"}),e.jsxs(n,{htmlFor:"height",children:["Height",e.jsx(o,{id:"height",name:"height",placeholder:"Enter your height",type:"number"})]}),e.jsx(s,{name:"height",component:"div"}),e.jsxs(n,{htmlFor:"weight",children:["Weight",e.jsx(o,{id:"weight",name:"weight",placeholder:"Enter your weight",type:"number"})]}),e.jsx(s,{name:"weight",component:"div"}),e.jsx(d,{type:"submit",onClick:i,disabled:t,children:"Next"}),e.jsx(h,{type:"button",onClick:a,children:"Back"})]}),J=({isSubmitting:i,prevStep:a})=>e.jsxs(c,{children:[e.jsx(l,{src:g,alt:"Activity Illustration"}),e.jsx(p,{children:"Your Activity"}),e.jsx(x,{children:"To correctly calculate calorie and water intake"}),e.jsxs(j,{role:"group","aria-labelledby":"activity-level-group",children:[e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"activityLevel",value:"1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"activityLevel",value:"1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"activityLevel",value:"1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"activityLevel",value:"1.725"}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(n,{children:[e.jsx(o,{type:"radio",name:"activityLevel",value:"1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]}),e.jsx(s,{name:"activityLevel",component:"div"}),e.jsx(d,{type:"submit",disabled:i,children:"Next"}),e.jsx(h,{type:"button",onClick:a,children:"Back"})]}),K={name:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activityLevel:""},O=L().shape({initialValues:F().required("Required")}),ee=()=>{const[i,a]=b.useState(0),t=[V,q,H,_,J],m=t[i],v=()=>a(i+1),w=()=>a(i-1),k=(u,f)=>{i<t.length-1?(v(),f.setTouched({}),f.setSubmitting(!1)):console.log(u)};return e.jsx(P,{initialValues:K,validationSchema:O[i],onSubmit:k,children:u=>e.jsx(B,{children:e.jsx(m,{...u,nextStep:v,prevStep:w,isLastStep:i===t.length-1})})})};export{ee as SignUpPage,ee as default};
