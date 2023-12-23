import{r as s,s as t,N as J,j as e,u as K,a as X}from"./index-460f92c2.js";import{n as T}from"./notiflix-notify-aio-d746e22c.js";import{i as Z}from"./welcomepage-690c85c9.js";import{i as ee,a as te}from"./eye-off-bc8ccc66.js";import{c as k,a as W,F as S,b as A,d as i,E as u,e as w}from"./index.esm-f04f1cc0.js";const $=(n="",o={})=>{const[l,p]=s.useState(n),[d,c]=s.useState(null),[m,r]=s.useState(!1),x=()=>{if(!o)return;const{required:f,minLength:h,maxLength:b,pattern:y}=o;f&&!l.trim()?c("This field is required"):h&&l.length<h?c(`Minimum length is ${h} characters`):b&&l.length>b?c(`Maximum length is ${b} characters`):y&&!y.test(l)?c("Invalid format"):c(null)};return{value:l,error:d,touched:m,onChange:f=>{p(f.target.value),m&&x()},onBlur:()=>{r(!0),x()}}},ne=()=>{const n=document.getElementById("myInput");n.type==="password"?n.type="text":n.type="password"},ie=t.div`
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
`,oe=t.div`
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
`,ae=t.h1`
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
`,le=t.form`
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
`,z=t.input`
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
`,de=t(J)`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,me=t.div`
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
`,C=t.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,pe=t.input.attrs({type:"checkbox"})`
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
`,ge=t.div`
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
`,he=t.p`
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
`;const ue=({onForm:n,nameValue:o,emailValue:l,passwordValue:p})=>{const d=$(o,{isEmpty:!0,isName:!0}),c=$(l,{isEmpty:!0,isEmail:!0}),m=$(p,{isEmpty:!0,isPassword:!0});return e.jsxs(oe,{children:[e.jsx(re,{src:Z,alt:"illustration-sport-and-fitness-tracker"}),e.jsxs(me,{children:[e.jsx(ae,{children:"Sign up"}),e.jsx(se,{children:"You need to register to use the service"}),e.jsxs(le,{onSubmit:n,children:[e.jsx(C,{children:e.jsx(z,{type:"text",name:"name",placeholder:"Name",value:d.value,onChange:r=>d.onChange(r),onBlur:r=>d.onBlur(r),autoComplete:"off"})}),e.jsx(C,{children:e.jsx(z,{type:"email",name:"email",placeholder:"E-mail",value:c.value,onChange:r=>c.onChange(r),onBlur:r=>c.onBlur(r),autoComplete:"off"})}),e.jsxs(C,{children:[e.jsx(z,{type:"password",name:"password",placeholder:"Password",value:m.value,id:"myInput",onChange:r=>m.onChange(r),onBlur:r=>m.onBlur(r),autoComplete:"off"}),e.jsx(pe,{type:"checkbox",onChange:ne})]}),e.jsx(ce,{type:"submit",children:"Next"})]}),e.jsxs(ge,{children:[e.jsx(he,{children:" Do you already have an account?"}),e.jsx(de,{to:"/signin",children:"Sign in"})]})]})]})},xe="/Healthy_life/assets/goals-8ade6549.png",fe=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(
    --primary-color-black-one
  ); // Black background as seen in the image
  color: #fff;
  height: 100vh; // Full viewport height
  padding: 20px;
  font-family: 'Poppins'; // Replace with the actual font used in the design
`,be=t.img`
  max-width: 100%;
  margin-bottom: 2rem; // Adjust spacing as needed based on the design
`,ye=t.div`
  width: 100%;
  max-width: 320px; // Adjust the width as per your design requirement
`,je=t.h1`
  font-size: 2rem; // Title font size, adjust as needed
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`,ve=t.p`
  font-size: 1rem; // Subtitle font size, adjust as needed
  text-align: center;
  margin-bottom: 2rem;
`,we=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px; // Adjust the spacing as needed
`,N=t.label`
  margin-bottom: 1rem;
  font-size: 1rem; // Adjust the font size as needed
  line-height: 1.5; // Adjust the line height as needed
  display: flex;
  align-items: center;
`,ke=t.button`
  background-color: var(
    --primary-color-green-lite
  ); // Bright green button as seen in the design
  color: #000; // Text color for the button
  border: none;
  border-radius: 12px;
  padding: 0.5rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 1rem; // Adjust the margin as needed
`,Se=t.button`
  background: none;
  border: none;
  color: #fff; // White text color as seen in the design
  margin-top: 1rem; // Adjust the margin as needed
  font-size: 1rem;
`,Ae=k().shape({goal:W().required("Selecting a goal is required")});function Be({onForm:n,onBackPage:o}){return e.jsxs(fe,{children:[e.jsx(be,{src:xe,alt:"illustration-summer-hiking"}),e.jsxs(ye,{children:[e.jsx(je,{children:"Your goal"}),e.jsx(ve,{children:"Choose a goal so that we can help you effectively"}),e.jsx(S,{initialValues:{goal:""},validationSchema:Ae,onSubmit:n,children:()=>e.jsxs(A,{children:[e.jsxs(we,{children:[e.jsxs(N,{children:[e.jsx(i,{type:"radio",name:"goal",value:"Lose Fat"}),"Lose Fat"]}),e.jsxs(N,{children:[e.jsx(i,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(N,{children:[e.jsx(i,{type:"radio",name:"goal",value:"Gain Muscle"}),"Gain Muscle"]})]}),e.jsx(u,{name:"goal",component:"div"}),e.jsx(ke,{type:"submit",children:"Next"}),e.jsx(Se,{type:"button",onClick:o,children:"Back"})]})})]})]})}const $e="/Healthy_life/assets/genderAge-09560319.png",ze=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; /* Assuming a black background as in the image */
  color: #fff;
  height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif; /* Replace with the actual font used in the design */
`,Ce=t.img`
  width: 100%;
  margin-bottom: 30px; /* Adjust as needed */
`,Ne=t.div`
  width: 100%;
  max-width: 320px; /* Adjust width as per your design */
`,Le=t.h1`
  font-size: 24px; /* Adjust as per your design */
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`,Te=t.p`
  font-size: 16px; /* Adjust as per your design */
  text-align: center;
  margin-bottom: 20px;
`,Ee=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,L=t.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px; /* Adjust as per your design */

  // Custom radio button styles may be required here
`;t(i)`
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
`;const Fe=t.button`
  background-color: var(
    --primary-color-green-lite
  ); /* Bright green color for the button */
  color: #000; /* Text color for button */
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px; /* Space below the button */
`,qe=t.button`
  background: none;
  border: none;
  color: #fff; /* Text color as in the design */
  margin-top: 10px;
  font-size: 16px;
`,Ge=k().shape({gender:W().required("Gender is required"),age:w().positive("Age must be a positive number").integer("Age must be an integer").max(150,"Age must be less than 150").required("Age is required")});function Pe({onForm:n,onBackPage:o}){return e.jsxs(ze,{children:[e.jsx(Ce,{src:$e,alt:"illustration-gender-and-age"}),e.jsxs(Ne,{children:[e.jsx(Le,{children:"Select gender, Age"}),e.jsx(Te,{children:"Choose a goal so that we can help you effectively"}),e.jsx(S,{initialValues:{gender:"",age:""},validationSchema:Ge,onSubmit:n,children:e.jsxs(A,{children:[e.jsxs(Ee,{children:[e.jsxs(L,{children:[e.jsx(i,{type:"radio",name:"gender",value:"male"}),"Male"]}),e.jsxs(L,{children:[e.jsx(i,{type:"radio",name:"gender",value:"female"}),"Female"]}),e.jsx(u,{name:"gender",component:"div"})]}),e.jsxs(L,{children:["Age",e.jsx(i,{type:"number",name:"age",placeholder:"Enter your age"}),e.jsx(u,{name:"age",component:"div"})]}),e.jsx(Fe,{type:"submit",children:"Next"}),e.jsx(qe,{type:"button",onClick:o,children:"Back"})]})})]})]})}const Ie="/Healthy_life/assets/bodyParameters-6a189a74.png",We=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; // Assuming a black background as in the image
  color: #fff; // White text color
  height: 100vh; // Full viewport height
  padding: 20px;
`,He=t.img`
  max-width: 100%;
  margin-bottom: 2rem; // Space below the image
`,Ve=t.div`
  width: 100%;
  max-width: 320px; // Container max width
`,Me=t.h1`
  font-size: 2rem; // Title font size
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`,Re=t.p`
  font-size: 1rem; // Subtitle font size
  text-align: center;
  margin-bottom: 2rem; // Space above the form fields
`,P=t.label`
  font-size: 1rem; // Label font size
  margin-bottom: 0.5rem;
`,I=t(i)`
  background-color: #222; // Input background
  border: none;
  border-radius: 4px;
  color: #fff; // Input text color
  margin-bottom: 1rem; // Space between inputs
  padding: 0.5rem;
  width: 100%;

  &::placeholder {
    color: #555; // Placeholder text color
  }
`,Ue=t.button`
  background-color: var(
    --primary-color-green-lite
  ); // Bright green color for the button
  color: #000; // Text color for button
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 1rem; // Space below the button
`,_e=t.button`
  background: none;
  border: none;
  color: #fff; // Text color as in the design
  font-size: 1rem;
  margin-top: 1rem;
`,De=k().shape({height:w().positive("Height must be a positive number").integer("Height must be an integer").required("Height is required"),weight:w().positive("Weight must be a positive number").integer("Weight must be an integer").required("Weight is required")});function Ye({onForm:n,onBackPage:o}){return e.jsxs(We,{children:[e.jsx(He,{src:Ie,alt:"Body parameters"}),e.jsxs(Ve,{children:[e.jsx(Me,{children:"Body parameters"}),e.jsx(Re,{children:"Enter your parameters for correct performance tracking"}),e.jsx(S,{initialValues:{height:"",weight:""},validationSchema:De,onSubmit:n,children:e.jsxs(A,{children:[e.jsxs(P,{children:["Height",e.jsx(i,{as:I,type:"number",name:"height",placeholder:"Enter your height (in cm)"}),e.jsx(u,{name:"height",component:"div"})]}),e.jsxs(P,{children:["Weight",e.jsx(i,{as:I,type:"number",name:"weight",placeholder:"Enter your weight (in kg)"}),e.jsx(u,{name:"weight",component:"div"})]}),e.jsx(Ue,{type:"submit",children:"Next"}),e.jsx(_e,{type:"button",onClick:o,children:"Back"})]})})]})]})}const Oe="/Healthy_life/assets/activity-85fefe5b.png",Qe=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; /* Assuming a black background */
  color: #fff;
  height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif; /* Replace with the actual font used in the design */
`,Je=t.img`
  width: 100%;
  margin-bottom: 30px; /* Adjust as needed */
`,Ke=t.div`
  width: 100%;
  max-width: 320px; /* Adjust width as per your design */
`,Xe=t.h1`
  font-size: 24px; /* Adjust as per your design */
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`,Ze=t.p`
  font-size: 16px; /* Adjust as per your design */
  text-align: center;
  margin-bottom: 20px;
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
`;t(i)`
  accent-color: #0f0; /* Adjust this to match the color of the radio button in your design */
`;const tt=t.button`
  background-color: var(
    --primary-color-green-lite
  ); /* Adjust as per the button color in the design */
  color: #000; /* Adjust as per the button text color in the design */
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-weight: bold;
  width: 100%;
  margin-top: 20px; /* Space above the button */
  margin-bottom: 10px; /* Space below the button */
`,nt=t.button`
  background: none;
  border: none;
  color: #fff; /* Adjust as per the button text color in the design */
  margin-top: 10px;
  font-size: 16px;
`,it=k().shape({activity:w().required("Selecting an activity level is required")});function ot({onBackPage:n,onForm:o}){return e.jsxs(Qe,{children:[e.jsx(Je,{src:Oe,alt:"Activity illustration"}),e.jsxs(Ke,{children:[e.jsx(Xe,{children:"Your Activity"}),e.jsx(Ze,{children:"To correctly calculate calorie and water intake"}),e.jsx(S,{initialValues:{activityLevel:""},validationSchema:it,onSubmit:o,children:e.jsxs(A,{children:[e.jsxs(et,{children:[e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.725"}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]}),e.jsx(u,{name:"activity",component:"div"}),e.jsx(tt,{type:"submit",children:"Sign Up"}),e.jsx(nt,{onClick:n,children:"Back"})]})})]})]})}T.Notify.init({showOnlyTheLastOne:!0,cssAnimationStyle:"from-bottom",clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});const dt=()=>{const[n,o]=s.useState(0),l=()=>{console.log("Next button clicked"),o(n+1)},p=()=>{console.log("Back button clicked"),o(n-1)},[d,c]=s.useState(""),[m,r]=s.useState(""),[x,E]=s.useState(""),[B,f]=s.useState("Lose Fat"),[h,b]=s.useState("male"),[y,H]=s.useState(""),[F,V]=s.useState(""),[q,M]=s.useState(""),[R,G]=s.useState("1.2"),U=K(),_=a=>{a.preventDefault(),c(a.target.name.value),r(a.target.email.value),E(a.target.password.value),l()},D=a=>{const g=a.goal;f(g),l()},Y=a=>{const g=a.gender,j=a.age;b(g),H(j),l()},O=a=>{const g=a.height,j=a.weight;V(g),M(j),l()},Q=a=>{const g=a.activity;G(g),U(X({name:d,email:m,password:x,goal:B,gender:h,age:y,height:Number(F),weight:Number(q),activityLevel:Number(g)})).then(j=>{j.meta.requestStatus==="fulfilled"?T.Notify.success(`Hey ${d}, you're all set! Let's get started!`):T.Notify.failure("There was a problem with your registration.")})};return e.jsxs(ie,{children:[n===0&&e.jsx(ue,{onForm:_,nameValue:d,emailValue:m,passwordValue:x}),n===1&&e.jsx(Be,{onForm:D,onBackPage:p,goal:B}),n===2&&e.jsx(Pe,{onForm:Y,onBackPage:p,gender:h,ageValue:y}),n===3&&e.jsx(Ye,{onForm:O,onBackPage:p,heightValue:F,weightValue:q}),n===4&&e.jsx(ot,{onForm:Q,onBackPage:p,activity:R,setActivity:G})]})};export{dt as default};
