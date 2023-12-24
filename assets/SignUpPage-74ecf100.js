import{r as d,s as t,N as J,j as e,F as B,a as $,b as n,E as u,u as K,c as X}from"./index-d81440de.js";import{n as S}from"./notiflix-notify-aio-b1f0b324.js";import{i as Z}from"./welcomepage-690c85c9.js";import{i as ee,a as te}from"./eye-off-f08dcaf5.js";import{c as k,a as j,b as z}from"./index.esm-38e7689f.js";const A=(i="",a={})=>{const[c,x]=d.useState(i),[p,l]=d.useState(null),[m,r]=d.useState(!1),f=()=>{if(!a)return;const{required:b,minLength:h,maxLength:y,pattern:w}=a;b&&!c.trim()?l("This field is required"):h&&c.length<h?l(`Minimum length is ${h} characters`):y&&c.length>y?l(`Maximum length is ${y} characters`):w&&!w.test(c)?l("Invalid format"):l(null)};return{value:c,error:p,touched:m,onChange:b=>{x(b.target.value),m&&f()},onBlur:()=>{r(!0),f()}}},ie=()=>{const i=document.getElementById("myInput");i.type==="password"?i.type="text":i.type="password"},ne=t.div`
  margin: 0 auto;
  padding: 10px;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,ae=t.div`
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
    padding-bottom: 72px;
  }
`,re=t.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 0;
  }
`,oe=t.h1`
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
`,se=t.h2`
  color: var(--color-primary-gray, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 430px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,de=t.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }

  button:disabled {
    background-color: #b6b6b6;
  }
`,N=t.input`
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
`,ce=t.button`
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
`,le=t(J)`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,pe=t.div`
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
`,q=t.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,me=t.input.attrs({type:"checkbox"})`
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
    background-image: url(${ee}#eye-off);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% +8px);
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    background-color: var(--color-primary-black-2, #0f0f0f);
    background-image: url(${te}#eye);
    visibility: visible;
  }

  @media screen and (max-width: 834px) {
    top: 50%;
    left: 55%;
  }
`,xe=t.div`
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
`,ge=t.p`
  color: var(--color-primary-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
  }
`;t.p`
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;const he=({onForm:i,nameValue:a,emailValue:c,passwordValue:x})=>{const p=A(a,{isEmpty:!0,isName:!0}),l=A(c,{isEmpty:!0,isEmail:!0}),m=A(x,{isEmpty:!0,isPassword:!0});return e.jsxs(ae,{children:[e.jsx(re,{src:Z,alt:"illustration-sport-and-fitness-tracker"}),e.jsxs(pe,{children:[e.jsx(oe,{children:"Sign up"}),e.jsx(se,{children:"You need to register to use the service"}),e.jsxs(de,{onSubmit:i,children:[e.jsx(q,{children:e.jsx(N,{type:"text",name:"name",placeholder:"Name",value:p.value,onChange:r=>p.onChange(r),onBlur:r=>p.onBlur(r),autoComplete:"off"})}),e.jsx(q,{children:e.jsx(N,{type:"email",name:"email",placeholder:"E-mail",value:l.value,onChange:r=>l.onChange(r),onBlur:r=>l.onBlur(r),autoComplete:"off"})}),e.jsxs(q,{children:[e.jsx(N,{type:"password",name:"password",placeholder:"Password",value:m.value,id:"myInput",onChange:r=>m.onChange(r),onBlur:r=>m.onBlur(r),autoComplete:"off"}),e.jsx(me,{type:"checkbox",onChange:ie})]}),e.jsx(ce,{type:"submit",children:"Next"})]}),e.jsxs(xe,{children:[e.jsx(ge,{children:" Do you already have an account?"}),e.jsx(le,{to:"/signin",children:"Sign in"})]})]})]})},ue="/Healthy_life/assets/goals-8ade6549.png",fe=t.div`
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
`,be=t.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`,ye=t.div`
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
`,we=t.h1`
  color: var(--color-primary-white, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,ve=t.p`
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
`,je=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,E=t.label`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
`,ke=t.button`
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
`,Se=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: #b6b6b6;
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
`,ze=k().shape({goal:j().required("Selecting a goal is required")});function Be({onForm:i,onBackPage:a}){return e.jsxs(fe,{children:[e.jsx(be,{src:ue,alt:"illustration-summer-hiking"}),e.jsxs(ye,{children:[e.jsx(we,{children:"Your goal"}),e.jsx(ve,{children:"Choose a goal so that we can help you effectively"}),e.jsx(B,{initialValues:{goal:""},validationSchema:ze,onSubmit:i,children:()=>e.jsxs($,{children:[e.jsxs(je,{children:[e.jsxs(E,{children:[e.jsx(n,{type:"radio",name:"goal",value:"Lose Fat"}),"Lose Fat"]}),e.jsxs(E,{children:[e.jsx(n,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(E,{children:[e.jsx(n,{type:"radio",name:"goal",value:"Gain Muscle"}),"Gain Muscle"]})]}),e.jsx(u,{name:"goal",component:"div"}),e.jsx(ke,{type:"submit",children:"Next"}),e.jsx(Se,{type:"button",onClick:a,children:"Back"})]})})]})]})}const $e="/Healthy_life/assets/genderAge-09560319.png",Ce=t.div`
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
`,Ae=t.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`,Ne=t.div`
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
`,qe=t.h1`
  color: var(--color-primary-white, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,Ee=t.p`
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
`,Le=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,L=t.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px; /* Adjust as per your design */

  // Custom radio button styles may be required here
`;t(n)`
  // Add styles for input fields here, for example:
  background-color: #222; /* Input background */
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 10px; /* Space between inputs */
  padding: 10px;
  width: 100%;

  &::placeholder {
    color: #555; /* Placeholder text color */
  }
`;const Pe=t.button`
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
`,Ge=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: #b6b6b6;
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
`,Fe=k().shape({gender:j().required("Gender is required"),age:z().positive("Age must be a positive number").integer("Age must be an integer").max(150,"Age must be less than 150").required("Age is required")});function Ie({onForm:i,onBackPage:a}){return e.jsxs(Ce,{children:[e.jsx(Ae,{src:$e,alt:"illustration-gender-and-age"}),e.jsxs(Ne,{children:[e.jsx(qe,{children:"Select gender, Age"}),e.jsx(Ee,{children:"Choose a goal so that we can help you effectively"}),e.jsx(B,{initialValues:{gender:"",age:""},validationSchema:Fe,onSubmit:i,children:e.jsxs($,{children:[e.jsxs(Le,{children:[e.jsxs(L,{children:[e.jsx(n,{type:"radio",name:"gender",value:"male"}),"Male"]}),e.jsxs(L,{children:[e.jsx(n,{type:"radio",name:"gender",value:"female"}),"Female"]}),e.jsx(u,{name:"gender",component:"div"})]}),e.jsxs(L,{children:["Age",e.jsx(n,{type:"number",name:"age",placeholder:"Enter your age"}),e.jsx(u,{name:"age",component:"div"})]}),e.jsx(Pe,{type:"submit",children:"Next"}),e.jsx(Ge,{type:"button",onClick:a,children:"Back"})]})})]})]})}const We="/Healthy_life/assets/bodyParameters-6a189a74.png",He=t.div`
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
`,Te=t.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`,Ve=t.div`
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
`,Me=t.h1`
  color: var(--color-primary-white, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,Ue=t.p`
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
`,W=t.label`
  color: var(--primary-color-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
`,H=t(n)`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--color-primary-green-lite, #e3ffa8);
  background: var(--color-primary-black-2, #0f0f0f);
  color: var(--primary-color-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;
  margin-top: 12px;
  margin-bottom: 24px;

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
`,Re=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 16px;
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
`,De=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: #b6b6b6;
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
`,_e=k().shape({height:z().positive("Height must be a positive number").integer("Height must be an integer").required("Height is required"),weight:z().positive("Weight must be a positive number").integer("Weight must be an integer").required("Weight is required")});function Ye({onForm:i,onBackPage:a}){return e.jsxs(He,{children:[e.jsx(Te,{src:We,alt:"Body parameters"}),e.jsxs(Ve,{children:[e.jsx(Me,{children:"Body parameters"}),e.jsx(Ue,{children:"Enter your parameters for correct performance tracking"}),e.jsx(B,{initialValues:{height:"",weight:""},validationSchema:_e,onSubmit:i,children:e.jsxs($,{children:[e.jsxs(W,{children:["Height",e.jsx(n,{as:H,type:"number",name:"height",placeholder:"Enter your height (in cm)"}),e.jsx(u,{name:"height",component:"div"})]}),e.jsxs(W,{children:["Weight",e.jsx(n,{as:H,type:"number",name:"weight",placeholder:"Enter your weight (in kg)"}),e.jsx(u,{name:"weight",component:"div"})]}),e.jsx(Re,{type:"submit",children:"Next"}),e.jsx(De,{type:"button",onClick:a,children:"Back"})]})})]})]})}const Oe="/Healthy_life/assets/activity-85fefe5b.png",Qe=t.div`
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
`,Je=t.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`,Ke=t.div`
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
`,Xe=t.h1`
  color: var(--color-primary-white, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,Ze=t.p`
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
`,et=t.div`
  display: flex;
  flex-direction: column;
`,v=t.label`
  background-color: #222; /* Adjust as needed */
  border-radius: 4px;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;t(n)`
  accent-color: #0f0;
`;const tt=t.button`
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
`,it=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: #b6b6b6;
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
`,nt=k().shape({activity:z().required("Selecting an activity level is required")});function at({onBackPage:i,onForm:a}){return e.jsxs(Qe,{children:[e.jsx(Je,{src:Oe,alt:"Activity illustration"}),e.jsxs(Ke,{children:[e.jsx(Xe,{children:"Your Activity"}),e.jsx(Ze,{children:"To correctly calculate calorie and water intake"}),e.jsx(B,{initialValues:{activityLevel:""},validationSchema:nt,onSubmit:a,children:e.jsxs($,{children:[e.jsxs(et,{children:[e.jsxs(v,{children:[e.jsx(n,{type:"radio",name:"activity",value:"1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(v,{children:[e.jsx(n,{type:"radio",name:"activity",value:"1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(v,{children:[e.jsx(n,{type:"radio",name:"activity",value:"1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(v,{children:[e.jsx(n,{type:"radio",name:"activity",value:"1.725"}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(v,{children:[e.jsx(n,{type:"radio",name:"activity",value:"1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]}),e.jsx(u,{name:"activity",component:"div"}),e.jsx(tt,{type:"submit",children:"Sign Up"}),e.jsx(it,{onClick:i,children:"Back"})]})})]})]})}const rt=k().shape({name:j().min(2,"Name is too short (minimum 2 characters)").max(50,"Name is too long (maximum 50 characters)").required("Name is required"),email:j().email("Invalid email format (example: example@mail.com)").required("Email is required"),password:j().min(6,"Password is too short (minimum 6 characters)").max(50,"Password is too long (maximum 50 characters)").required("Password is required")});S.Notify.init({showOnlyTheLastOne:!0,cssAnimationStyle:"from-bottom",clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});const pt=()=>{const[i,a]=d.useState(0),c=()=>{console.log("Next button clicked"),a(i+1)},x=()=>{console.log("Back button clicked"),a(i-1)},[p,l]=d.useState(""),[m,r]=d.useState(""),[f,P]=d.useState(""),[C,b]=d.useState("Lose Fat"),[h,y]=d.useState("male"),[w,T]=d.useState(""),[G,V]=d.useState(""),[F,M]=d.useState(""),[U,I]=d.useState("1.2"),R=K(),D=async o=>{o.preventDefault();const s={name:o.target.name.value,email:o.target.email.value,password:o.target.password.value};try{await rt.validate(s,{abortEarly:!1}),l(s.name),r(s.email),P(s.password),c()}catch(g){S.Notify.failure(g.errors.join(", "))}},_=o=>{const s=o.goal;b(s),c()},Y=o=>{const s=o.gender,g=o.age;y(s),T(g),c()},O=o=>{const s=o.height,g=o.weight;V(s),M(g),c()},Q=o=>{const s=o.activity;I(s),R(X({name:p,email:m,password:f,goal:C,gender:h,age:w,height:Number(G),weight:Number(F),activityLevel:Number(s)})).then(g=>{g.meta.requestStatus==="fulfilled"?S.Notify.success(`Hey ${p}, you're all set! Let's get started!`):S.Notify.failure("There was a problem with your registration.")})};return e.jsxs(ne,{children:[i===0&&e.jsx(he,{onForm:D,nameValue:p,emailValue:m,passwordValue:f}),i===1&&e.jsx(Be,{onForm:_,onBackPage:x,goal:C}),i===2&&e.jsx(Ie,{onForm:Y,onBackPage:x,gender:h,ageValue:w}),i===3&&e.jsx(Ye,{onForm:O,onBackPage:x,heightValue:G,weightValue:F}),i===4&&e.jsx(at,{onForm:Q,onBackPage:x,activity:U,setActivity:I})]})};export{pt as default};
