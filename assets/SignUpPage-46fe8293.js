import{r as s,s as t,N as J,j as e,u as K,a as X}from"./index-92df332f.js";import{n as N}from"./notiflix-notify-aio-40b53da6.js";import{i as Z}from"./welcomepage-690c85c9.js";import{c as w,a as T,F as k,b as S,d as i,E as x,e as G}from"./index.esm-cb4f64da.js";const B=(n="",o={})=>{const[l,m]=s.useState(n),[d,c]=s.useState(null),[g,a]=s.useState(!1),f=()=>{if(!o)return;const{required:b,minLength:h,maxLength:y,pattern:j}=o;b&&!l.trim()?c("This field is required"):h&&l.length<h?c(`Minimum length is ${h} characters`):y&&l.length>y?c(`Maximum length is ${y} characters`):j&&!j.test(l)?c("Invalid format"):c(null)};return{value:l,error:d,touched:g,onChange:b=>{m(b.target.value),g&&f()},onBlur:()=>{a(!0),f()}}},ee=()=>{const n=document.getElementById("myInput");n.type==="password"?n.type="text":n.type="password"},te="/Healthy_life/assets/eye-1e855825.svg",ne="/Healthy_life/assets/eye-off-89186890.svg",ie=t.div`
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
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: width 0.5s ease;

  @media screen and (min-width: 834px) {
    padding: 40px 0;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 104px;
    align-items: end;
    padding-left: 116px;
    padding-right: 116px;
  }
`,ae=t.img`
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
`,re=t.h1`
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
    width: 444px;
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
`,$=t.input`
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
`,de=t(J)`
  display: block;
  width: 142px;
  padding: 8px 10px 8px 0;
  border-radius: 12px;
  text-decoration: none;
  background: inherit;
  color: var(--color-primary-white, #fff);
  text-align: start;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    width: 192px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,ge=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`,z=t.label`
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
    background-image: url(${ne}#eye-off);
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
`,me=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`,he=t.p`
  color: var(--color-primary-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
    padding-left: 42px;
  }
`,ue=({onForm:n,nameValue:o,emailValue:l,passwordValue:m})=>{const d=B(o,{isEmpty:!0,isName:!0}),c=B(l,{isEmpty:!0,isEmail:!0}),g=B(m,{isEmpty:!0,isPassword:!0});return e.jsxs(oe,{children:[e.jsx(ae,{src:Z,alt:"illustration-sport-and-fitness-tracker"}),e.jsxs(ge,{children:[e.jsx(re,{children:"Sign up"}),e.jsx(se,{children:"You need to register to use the service"}),e.jsxs(le,{onSubmit:n,children:[e.jsx(z,{children:e.jsx($,{type:"text",name:"name",placeholder:"Name",value:d.value,onChange:a=>d.onChange(a),onBlur:a=>d.onBlur(a),autoComplete:"off"})}),e.jsx(z,{children:e.jsx($,{type:"email",name:"email",placeholder:"E-mail",value:c.value,onChange:a=>c.onChange(a),onBlur:a=>c.onBlur(a),autoComplete:"off"})}),e.jsxs(z,{children:[e.jsx($,{type:"password",name:"password",placeholder:"Password",value:g.value,id:"myInput",onChange:a=>g.onChange(a),onBlur:a=>g.onBlur(a),autoComplete:"off"}),e.jsx(pe,{type:"checkbox",onChange:ee})]}),e.jsx(ce,{type:"submit",children:"Next"})]}),e.jsxs(me,{children:[e.jsx(he,{children:" Do you already have an account?"}),e.jsx(de,{to:"/signin",children:"Sign in"})]})]})]})},xe="/Healthy_life/assets/goals-8ade6549.png",fe=t.div`
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
`,C=t.label`
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
`,Ae=w().shape({goal:T().required("Selecting a goal is required")});function Be({onForm:n,onBackPage:o}){return e.jsxs(fe,{children:[e.jsx(be,{src:xe,alt:"illustration-summer-hiking"}),e.jsxs(ye,{children:[e.jsx(je,{children:"Your goal"}),e.jsx(ve,{children:"Choose a goal so that we can help you effectively"}),e.jsx(k,{initialValues:{goal:""},validationSchema:Ae,onSubmit:n,children:()=>e.jsxs(S,{children:[e.jsxs(we,{children:[e.jsxs(C,{children:[e.jsx(i,{type:"radio",name:"goal",value:"Lose Fat"}),"Lose Fat"]}),e.jsxs(C,{children:[e.jsx(i,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(C,{children:[e.jsx(i,{type:"radio",name:"goal",value:"Gain Muscle"}),"Gain Muscle"]})]}),e.jsx(x,{name:"goal",component:"div"}),e.jsx(ke,{type:"submit",children:"Next"}),e.jsx(Se,{type:"button",onClick:o,children:"Back"})]})})]})]})}const $e="/Healthy_life/assets/genderAge-09560319.png",ze=t.div`
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
`,Le=t.div`
  width: 100%;
  max-width: 320px; /* Adjust width as per your design */
`,Ne=t.h1`
  font-size: 24px; /* Adjust as per your design */
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`,Ge=t.p`
  font-size: 16px; /* Adjust as per your design */
  text-align: center;
  margin-bottom: 20px;
`,Te=t.div`
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
`;const Ee=t.button`
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
`,Fe=t.button`
  background: none;
  border: none;
  color: #fff; /* Text color as in the design */
  margin-top: 10px;
  font-size: 16px;
`,qe=w().shape({gender:T().required("Gender is required"),age:G().positive("Age must be a positive number").integer("Age must be an integer").max(150,"Age must be less than 150").required("Age is required")});function Pe({onForm:n,onBackPage:o}){return e.jsxs(ze,{children:[e.jsx(Ce,{src:$e,alt:"illustration-gender-and-age"}),e.jsxs(Le,{children:[e.jsx(Ne,{children:"Select gender, Age"}),e.jsx(Ge,{children:"Choose a goal so that we can help you effectively"}),e.jsx(k,{initialValues:{gender:"",age:""},validationSchema:qe,onSubmit:n,children:e.jsxs(S,{children:[e.jsxs(Te,{children:[e.jsxs(L,{children:[e.jsx(i,{type:"radio",name:"gender",value:"male"}),"Male"]}),e.jsxs(L,{children:[e.jsx(i,{type:"radio",name:"gender",value:"female"}),"Female"]}),e.jsx(x,{name:"gender",component:"div"})]}),e.jsxs(L,{children:["Age",e.jsx(i,{type:"number",name:"age",placeholder:"Enter your age"}),e.jsx(x,{name:"age",component:"div"})]}),e.jsx(Ee,{type:"submit",children:"Next"}),e.jsx(Fe,{type:"button",onClick:o,children:"Back"})]})})]})]})}const Ie="/Healthy_life/assets/bodyParameters-6a189a74.png",We=t.div`
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
`,I=t.label`
  font-size: 1rem; // Label font size
  margin-bottom: 0.5rem;
`,W=t(i)`
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
`,De=w().shape({height:G().positive("Height must be a positive number").integer("Height must be an integer").required("Height is required"),weight:G().positive("Weight must be a positive number").integer("Weight must be an integer").required("Weight is required")});function Ye({onForm:n,onBackPage:o}){return e.jsxs(We,{children:[e.jsx(He,{src:Ie,alt:"Body parameters"}),e.jsxs(Ve,{children:[e.jsx(Me,{children:"Body parameters"}),e.jsx(Re,{children:"Enter your parameters for correct performance tracking"}),e.jsx(k,{initialValues:{height:"",weight:""},validationSchema:De,onSubmit:n,children:e.jsxs(S,{children:[e.jsxs(I,{children:["Height",e.jsx(i,{as:W,type:"number",name:"height",placeholder:"Enter your height (in cm)"}),e.jsx(x,{name:"height",component:"div"})]}),e.jsxs(I,{children:["Weight",e.jsx(i,{as:W,type:"number",name:"weight",placeholder:"Enter your weight (in kg)"}),e.jsx(x,{name:"weight",component:"div"})]}),e.jsx(Ue,{type:"submit",children:"Next"}),e.jsx(_e,{type:"button",onClick:o,children:"Back"})]})})]})]})}const Oe="/Healthy_life/assets/activity-85fefe5b.png",Qe=t.div`
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
`,it=w().shape({activityLevel:T().required("Selecting an activity level is required")});function ot({onBackPage:n,onForm:o}){return e.jsxs(Qe,{children:[e.jsx(Je,{src:Oe,alt:"Activity illustration"}),e.jsxs(Ke,{children:[e.jsx(Xe,{children:"Your Activity"}),e.jsx(Ze,{children:"To correctly calculate calorie and water intake"}),e.jsx(k,{initialValues:{activity:""},validationSchema:it,onSubmit:o,children:e.jsxs(S,{children:[e.jsxs(et,{children:[e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.725"}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(v,{children:[e.jsx(i,{type:"radio",name:"activity",value:"1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]}),e.jsx(x,{name:"activity",component:"div"}),e.jsx(tt,{type:"submit",children:"Sign Up"}),e.jsx(nt,{onClick:n,children:"Back"})]})})]})]})}N.Notify.init({showOnlyTheLastOne:!0,cssAnimationStyle:"from-bottom",clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});const ct=()=>{const[n,o]=s.useState(0),l=()=>{console.log("Next button clicked"),o(n+1)},m=()=>{console.log("Back button clicked"),o(n-1)},[d,c]=s.useState(""),[g,a]=s.useState(""),[f,E]=s.useState(""),[A,b]=s.useState("Lose Fat"),[h,y]=s.useState("male"),[j,H]=s.useState(""),[F,V]=s.useState(""),[q,M]=s.useState(""),[R,P]=s.useState("1.2"),U=K(),_=r=>{r.preventDefault(),c(r.target.name.value),a(r.target.email.value),E(r.target.password.value),l(),console.log("handleSignUp called")},D=r=>{const p=r.goal;b(p),l(),console.log("handleGoal called")},Y=r=>{const p=r.gender,u=r.age;y(p),H(u),l(),console.log("Gender called")},O=r=>{const p=r.height,u=r.weight;V(p),M(u),l(),console.log("Gender called")},Q=r=>{const p=r.activityLevel;P(p),console.log(p),U(X({name:d,email:g,password:f,goal:A,gender:h,age:j,height:Number(F),weight:Number(q),activityLevel:Number(p)})).then(u=>{console.log(u),u.meta.requestStatus==="fulfilled"?N.Notify.success(`Hey ${d}, you're all set! Let's get started!`):N.Notify.failure("There was a problem with your registration.")})};return e.jsxs(ie,{children:[n===0&&e.jsx(ue,{onForm:_,nameValue:d,emailValue:g,passwordValue:f}),n===1&&e.jsx(Be,{onForm:D,onBackPage:m,goal:A}),n===2&&e.jsx(Pe,{onForm:Y,onBackPage:m,gender:h,ageValue:j}),n===3&&e.jsx(Ye,{onForm:O,onBackPage:m,heightValue:F,weightValue:q}),n===4&&e.jsx(ot,{onForm:Q,onBackPage:m,activity:R,setActivity:P})]})};export{ct as default};
