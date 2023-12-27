import{r as o,c as F,a as j,s as t,N as oe,j as e,F as x,b as N,d as H,E as w,e as A,u as se,f as ce}from"./index-64abedd7.js";import{n as P}from"./notiflix-notify-aio-4eec18ab.js";import{i as de}from"./welcomepage-690c85c9.js";import{i as le,a as pe}from"./eye-off-76003d9a.js";const L=(i,r)=>{const[s,p]=o.useState(i),[n,c]=o.useState(null),[l,g]=o.useState(!1);return o.useEffect(()=>{l&&r.validate(s).then(()=>c(null)).catch(m=>c(m.message))},[s,l,r]),{value:s,error:n,onChange:m=>{p(m.target.value)},onBlur:()=>{g(!0),r.validate(s).then(()=>c(null)).catch(m=>c(m.message))}}},u=F().shape({name:j().trim().strict().min(2,"Name is too short (minimum 2 characters)").max(50,"Name is too long (maximum 50 characters)").required("Name is required"),email:j().trim().strict().email("Invalid email format (example: example@mail.com)").required("Email is required"),password:j().trim().strict().min(6,"Password is too short (minimum 6 characters)").max(50,"Password is too long (maximum 50 characters)").required("Password is required")}),me=async(i,r,s,p)=>{try{await u.fields.name.validate(i),await u.fields.email.validate(r),await u.fields.password.validate(s),p(!0)}catch{p(!1)}},K={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},xe=t.div`
  margin: 0 auto;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,ge=t.div`
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
`,he=t.img`
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
`,ue=t.h1`
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
`,fe=t.h2`
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
`,be=t.form`
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
`,G=t.input`
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
`,we=t.button`
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
  margin-bottom: 80px;
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }

  &:disabled {
    background-color: var(--primary-color-green-lite);
    cursor: not-allowed;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-bottom: 168px;
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
`,V=t.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ve=t.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: 1440px) {
    max-width: 364px;
  }
`,ke=t.p`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 16px;
`,je=t(oe)`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
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
`;const W=t.div`
  color: ${i=>i.color||K.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -10px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,Fe=t.svg`
  width: 16px;
  height: 16px;
  stroke: ${K.iconStroke};
  cursor: pointer;
`,Se=t.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  display: flex;
  align-items: center;
`,ze=({onForm:i,nameValue:r,emailValue:s,passwordValue:p})=>{const n=L(r,u.fields.name),c=L(s,u.fields.email),l=L(p,u.fields.password),[g,y]=o.useState(!1),S=()=>{y(!g)},[m,z]=o.useState(!1),f=(C,q)=>q?"1px solid #e74a3b":C?"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",{value:B}=n,{value:v}=c,{value:$}=l;return o.useEffect(()=>{me(B,v,$,z)},[B,v,$,z]),e.jsxs(ge,{children:[e.jsx(he,{src:de,alt:"illustration-sport-and-fitness-tracker"}),e.jsxs(ye,{children:[e.jsx(ue,{children:"Sign up"}),e.jsx(fe,{children:"You need to register to use the service"}),e.jsxs(be,{onSubmit:i,children:[e.jsx(V,{children:e.jsx(G,{style:{border:f(n.touched,n.error)},type:"text",name:"name",placeholder:"Name",value:n.value,onChange:n.onChange,onBlur:n.onBlur,autoComplete:"off"})}),n.error&&e.jsx(W,{children:n.error}),e.jsx(V,{children:e.jsx(G,{style:{border:f(n.touched,n.error)},type:"email",name:"email",placeholder:"E-mail",value:c.value,onChange:c.onChange,onBlur:c.onBlur,autoComplete:"off"})}),c.error&&e.jsx(W,{children:c.error}),e.jsxs(V,{children:[e.jsx(G,{style:{border:f(n.touched,n.error)},type:g?"text":"password",name:"password",placeholder:"Password",value:l.value,id:"myInput",onChange:l.onChange,onBlur:l.onBlur,autoComplete:"off"}),e.jsx(Se,{children:e.jsx(Fe,{onClick:S,children:e.jsx("image",{href:g?le:pe})})})]}),l.error&&e.jsx(W,{children:l.error}),e.jsx(we,{type:"submit",disabled:!m,children:"Next"})]}),e.jsxs(ve,{children:[e.jsx(ke,{children:"Do you already have an account?"}),e.jsx(je,{to:"/signin",children:"Sign in"})]})]})]})},Be="/Healthy_life/assets/goals-8ade6549.png",R="/Healthy_life/assets/checked-icon-f2266a6d.svg",$e={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},E=t(x)`
  margin-right: 8px;
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  border: 1px solid var(--color-primary-gray, #b6b6b6);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &:checked {
    border-color: var(--color-primary-green-lite, #e3ffa8);
    background-image: url(${R});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`,I=t.label`
  font-family: 'Poppins', sans-serif;
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;

  ${E}:checked + & {
    color: var(--color-primary-green-lite, #e3ffa8);
  }
`;t.label`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;const Ce=t.div`
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
`,Pe=t.img`
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
`,Ee=t.div`
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
`,Ae=t.h1`
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
`,Ne=t.p`
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
`,He=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 834px) and (max-width: 1439px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;t.label`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;const qe=t.button`
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
    background-color: var(--secondary-color-yellow);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,Le=t.button`
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
    background-color: transparent;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,Ge=t.div`
  color: ${i=>i.color||$e.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -10px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,Ve=F().shape({goal:j().required("Selecting a goal is required")});function We({onForm:i,onBackPage:r}){return e.jsxs(Ce,{children:[e.jsx(Pe,{src:Be,alt:"illustration-summer-hiking"}),e.jsxs(Ee,{children:[e.jsx(Ae,{children:"Your goal"}),e.jsx(Ne,{children:"Choose a goal so that we can help you effectively"}),e.jsx(N,{initialValues:{goal:""},validationSchema:Ve,onSubmit:i,children:()=>e.jsxs(H,{children:[e.jsxs(He,{children:[e.jsxs(I,{children:[e.jsx(E,{type:"radio",name:"goal",value:"Lose Fat"}),"Lose Fat"]}),e.jsxs(I,{children:[e.jsx(E,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(I,{children:[e.jsx(E,{type:"radio",name:"goal",value:"Gain Muscle"}),"Gain Muscle"]})]}),e.jsx(w,{name:"goal",component:Ge}),e.jsx(qe,{type:"submit",children:"Next"}),e.jsx(Le,{type:"button",onClick:r,children:"Back"})]})})]})]})}const Ie="/Healthy_life/assets/genderAge-09560319.png",Te={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},Me=t.div`
  margin: 0 auto;
  padding: 10px;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 834px) {
    align-items: center;
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
`,Re=t.img`
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
`,Ue=t.div`
  @media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`,Ye=t.h1`
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
`,_e=t.p`
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
`,De=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (min-width: 480px) {
    // For tablets
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1024px) {
    // For desktops
    flex-direction: column;
    align-items: flex-start;
  }
`;t.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
`;t(x)`
  background-color: #222;
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;

  &::placeholder {
    color: #555;
  }
`;const Oe=t.button`
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
    background-color: var(--secondary-color-yellow);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,Qe=t.button`
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
    background-color: transparent;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,M=t(x)`
  margin-right: 8px;
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  border: 1px solid var(--color-primary-gray, #b6b6b6);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &:checked {
    border-color: var(--color-primary-green-lite, #e3ffa8);
    background-image: url(${R});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`,T=t.label`
  font-family: 'Poppins', sans-serif;
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;

  ${M}:checked + & {
    color: var(--color-primary-green-lite, #e3ffa8);
  }
`;t.label`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;const Je=t(x)`
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

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,_=t.p`
  color: var(--color-primary-gray, #b6b6b6);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,D=t.div`
  color: ${i=>i.color||Te.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -10px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,Ke=F().shape({gender:j().required("Gender is required"),age:A().positive("Age must be a positive number").integer("Age must be an integer").max(150,"Age must be less than 150").required("Age is required")});function Xe({onForm:i,onBackPage:r}){return e.jsxs(Me,{children:[e.jsx(Re,{src:Ie,alt:"illustration-gender-and-age"}),e.jsxs(Ue,{children:[e.jsx(Ye,{children:"Select gender, Age"}),e.jsx(_e,{children:"Choose a goal so that we can help you effectively"}),e.jsx(N,{initialValues:{gender:"",age:""},validationSchema:Ke,onSubmit:i,children:()=>e.jsxs(H,{children:[e.jsxs(De,{children:[e.jsx(_,{children:"Gender"}),e.jsxs(T,{children:[e.jsx(M,{type:"radio",name:"gender",value:"male"}),"Male"]}),e.jsxs(T,{children:[e.jsx(M,{type:"radio",name:"gender",value:"female"}),"Female"]}),e.jsx(w,{name:"gender",component:D})]}),e.jsx(_,{children:"Your Age"}),e.jsxs(T,{children:[e.jsx(Je,{type:"number",name:"age",placeholder:"Enter your age"}),e.jsx(w,{name:"age",component:D})]}),e.jsx(Oe,{type:"submit",children:"Next"}),e.jsx(Qe,{type:"button",onClick:r,children:"Back"})]})})]})]})}const Ze="/Healthy_life/assets/bodyParameters-6a189a74.png",et={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},tt=t.div`
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
`,it=t.img`
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
`,nt=t.div`
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
    flex-direction: column;
  }
`,rt=t.h1`
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
`,at=t.p`
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
`,ot=t.div`
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,O=t.label`
  color: var(--primary-color-white, #fff);
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
`,Q=t(x)`
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

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,st=t.button`
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
    background-color: var(--secondary-color-yellow);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,ct=t.button`
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
    background-color: transparent;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,J=t.div`
  color: ${i=>i.color||et.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -18px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,dt=F().shape({height:A().min(50,"Height must be at least 50cm").max(250,"Height must be less than 250cm").positive("Height must be a positive number").integer("Height must be an integer").required("Height is required"),weight:A().min(30,"Weight must be at least 30kg").max(150,"Weight must be less than 150kg").positive("Weight must be a positive number").integer("Weight must be an integer").required("Weight is required")});function lt({onForm:i,onBackPage:r}){return e.jsxs(tt,{children:[e.jsx(it,{src:Ze,alt:"Body parameters"}),e.jsxs(nt,{children:[e.jsx(rt,{children:"Body parameters"}),e.jsx(at,{children:"Enter your parameters for correct performance tracking"}),e.jsx(N,{initialValues:{height:"",weight:""},validationSchema:dt,onSubmit:i,children:e.jsx(H,{children:e.jsxs(ot,{children:[e.jsxs(O,{children:["Height",e.jsx(x,{as:Q,type:"number",name:"height",placeholder:"Enter your height (in cm)"}),e.jsx(w,{name:"height",component:J})]}),e.jsxs(O,{children:["Weight",e.jsx(x,{as:Q,type:"number",name:"weight",placeholder:"Enter your weight (in kg)"}),e.jsx(w,{name:"weight",component:J})]}),e.jsx(st,{type:"submit",children:"Next"}),e.jsx(ct,{type:"button",onClick:r,children:"Back"})]})})})]})]})}const pt="/Healthy_life/assets/activity-85fefe5b.png",mt={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},xt=t.div`
  margin: 0 auto;
  padding: 10px;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 834px) {
    padding: 10px;
    align-items: flex-start;
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
`,gt=t.img`
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
`,ht=t.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 80px;
    width: 438px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    align-items: flex-start;
    width: 328px;
  }
`,ut=t.h1`
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
    align-items: flex-start;
  }
`,ft=t.p`
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
    align-items: flex-start;
  }
`,bt=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    /* Adjust to tablet screen sizes */
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;

    > * {
      flex: 1 1 45%;
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    /* width: 308px; */
  }
`;t(x)`
  accent-color: #0f0;
`;const wt=t.button`
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
    background-color: var(--secondary-color-yellow);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,yt=t.button`
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
    background-color: transparent;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;t.div`
  color: ${i=>i.color||mt.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -18px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`;const b=t(x)`
  padding-left: 8px;
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  border: 1px solid var(--color-primary-gray, #b6b6b6);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &:checked {
    border-color: var(--color-primary-green-lite, #e3ffa8);
    background-image: url(${R});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`,k=t.label`
  font-family: 'Poppins', sans-serif;
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 16px;
  gap: 8px;

  ${b}:checked + & {
    color: var(--color-primary-green-lite, #e3ffa8);
  }
`;t.label`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;const vt=F().shape({activity:A().required("Selecting an activity level is required")});function kt({onBackPage:i,onForm:r}){return e.jsxs(xt,{children:[e.jsx(gt,{src:pt,alt:"Activity illustration"}),e.jsxs(ht,{children:[e.jsx(ut,{children:"Your Activity"}),e.jsx(ft,{children:"To correctly calculate calorie and water intake"}),e.jsx(N,{initialValues:{activityLevel:""},validationSchema:vt,onSubmit:r,children:e.jsxs(H,{children:[e.jsxs(bt,{children:[e.jsxs(k,{children:[e.jsx(b,{type:"radio",name:"activity",value:"1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(k,{children:[e.jsx(b,{type:"radio",name:"activity",value:"1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(k,{children:[e.jsx(b,{type:"radio",name:"activity",value:"1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(k,{children:[e.jsx(b,{type:"radio",name:"activity",value:"1.725"}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(k,{children:[e.jsx(b,{type:"radio",name:"activity",value:"1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]}),e.jsx(w,{name:"activity",component:"div"}),e.jsx(wt,{type:"submit",children:"Sign Up"}),e.jsx(yt,{onClick:i,children:"Back"})]})})]})]})}P.Notify.init({showOnlyTheLastOne:!0,cssAnimationStyle:"from-bottom",clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});const Bt=()=>{const[i,r]=o.useState(0),s=()=>{console.log("Next button clicked"),r(i+1)},p=()=>{console.log("Back button clicked"),r(i-1)},[n,c]=o.useState(""),[l,g]=o.useState(""),[y,S]=o.useState(""),[m,z]=o.useState("Lose Fat"),[f,B]=o.useState("male"),[v,$]=o.useState(""),[C,q]=o.useState(""),[U,X]=o.useState(""),[Z,Y]=o.useState("1.2"),ee=se(),te=async a=>{a.preventDefault();const d={name:a.target.name.value,email:a.target.email.value,password:a.target.password.value};try{await u.validate(d,{abortEarly:!1}),c(d.name),g(d.email),S(d.password),s()}catch(h){P.Notify.failure(h.errors.join(", "))}},ie=a=>{const d=a.goal;z(d),console.log("Form data being sent:",a),s()},ne=a=>{const d=a.gender,h=a.age;B(d),$(h),console.log("Form data being sent:",a),s()},re=a=>{const d=a.height,h=a.weight;q(d),X(h),console.log("Form data being sent:",a),s()},ae=a=>{const d=a.activity;Y(d),ee(ce({name:n,email:l,password:y,goal:m,gender:f,age:v,height:Number(C),weight:Number(U),activityLevel:Number(d)})).then(h=>{h.meta.requestStatus==="fulfilled"?P.Notify.success(`Hey ${n}, you're all set! Let's get started!`):P.Notify.failure("There was a problem with your registration.")})};return e.jsxs(xe,{children:[i===0&&e.jsx(ze,{onForm:te,nameValue:n,emailValue:l,passwordValue:y}),i===1&&e.jsx(We,{onForm:ie,onBackPage:p,goal:m}),i===2&&e.jsx(Xe,{onForm:ne,onBackPage:p,gender:f,ageValue:v}),i===3&&e.jsx(lt,{onForm:re,onBackPage:p,heightValue:C,weightValue:U}),i===4&&e.jsx(kt,{onForm:ae,onBackPage:p,activity:Z,setActivity:Y})]})};export{Bt as default};
