import{r as a,c as F,a as j,s as t,L as oe,j as e,F as N,b as h,d as D,E as b,e as se,f as V,u as ce,g as le}from"./index-2cd840f4.js";import{n as E}from"./notiflix-notify-aio-77d3af1f.js";import{i as de}from"./welcomepage-479bde8c.js";import{i as pe,a as me}from"./eye-off-73bba721.js";import{p as he}from"./parse-9c30c6b3.js";const L=(i,n)=>{const[o,p]=a.useState(i),[r,c]=a.useState(null),[d,x]=a.useState(!1);return a.useEffect(()=>{d&&n.validate(o).then(()=>c(null)).catch(m=>c(m.message))},[o,d,n]),{value:o,error:r,onChange:m=>{p(m.target.value)},onBlur:()=>{x(!0),n.validate(o).then(()=>c(null)).catch(m=>c(m.message))}}},xe=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,u=F().shape({name:j().trim().strict().min(2,"Name is too short (minimum 2 characters)").max(50,"Name is too long (maximum 50 characters)").required("Name is required"),email:j().trim().strict().matches(xe,"Oops! That doesn´t look like a valid email address. Try again?").required("Email is required"),password:j().trim().strict().min(6,"Password is too short (minimum 6 characters)").max(50,"Password is too long (maximum 50 characters)").required("Password is required")}),ge=async(i,n,o,p)=>{try{await u.fields.name.validate(i),await u.fields.email.validate(n),await u.fields.password.validate(o),p(!0)}catch{p(!1)}},X={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},ue=t.div`
  margin: 0 auto;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 834px) {
    padding-top: 20px;
  }
`,fe=t.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
  }
`,ye=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
  }
`,be=t.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`,we=t.h1`
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
`,ve=t.h2`
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
`,ke=t.form`
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
`,je=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }

  &:disabled {
    background-color: var(--primary-color-green-lite) !important;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,I=t.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Fe=t.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 54px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 145px;
    justify-content: flex-start;
  }
`,Se=t.p`
  flex-shrink: 0;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,ze=t(oe)`
  color: var(--primary-color-white);
  line-height: 1.42;
  font-weight: 500;
  flex-shrink: 0;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
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
`;const A=t.div`
  color: ${i=>i.color||X.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -10px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,Be=t.svg`
  width: 16px;
  height: 16px;
  stroke: ${X.iconStroke};
  cursor: pointer;
`,$e=t.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  display: flex;
  align-items: center;
`,Ce=({onForm:i,nameValue:n,emailValue:o,passwordValue:p})=>{const r=L(n,u.fields.name),c=L(o,u.fields.email),d=L(p,u.fields.password),[x,w]=a.useState(!1),S=()=>{w(!x)},[m,z]=a.useState(!1),f=(C,H)=>H?"1px solid #e74a3b":C?"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",{value:B}=r,{value:v}=c,{value:$}=d;return a.useEffect(()=>{ge(B,v,$,z)},[B,v,$,z]),e.jsxs(ye,{children:[e.jsx(be,{src:de,alt:"illustration-sport-and-fitness-tracker"}),e.jsxs(fe,{children:[e.jsx(we,{children:"Sign up"}),e.jsx(ve,{children:"You need to register to use the service"}),e.jsxs(ke,{onSubmit:i,children:[e.jsx(I,{children:e.jsx(G,{style:{border:f(r.touched,r.error)},type:"text",name:"name",placeholder:"Name",value:r.value,onChange:r.onChange,onBlur:r.onBlur,autoComplete:"off"})}),r.error&&e.jsx(A,{children:r.error}),e.jsx(I,{children:e.jsx(G,{style:{border:f(r.touched,r.error)},type:"email",name:"email",placeholder:"E-mail",value:c.value,onChange:c.onChange,onBlur:c.onBlur,autoComplete:"off"})}),c.error&&e.jsx(A,{children:c.error}),e.jsxs(I,{children:[e.jsx(G,{style:{border:f(r.touched,r.error)},type:x?"text":"password",name:"password",placeholder:"Password",value:d.value,id:"myInput",onChange:d.onChange,onBlur:d.onBlur,autoComplete:"off"}),e.jsx($e,{children:e.jsx(Be,{onClick:S,children:e.jsx("image",{href:x?pe:me})})})]}),d.error&&e.jsx(A,{children:d.error}),e.jsx(je,{type:"submit",disabled:!m,children:"Next"})]}),e.jsxs(Fe,{children:[e.jsx(Se,{children:"Do you already have an account?"}),e.jsx(ze,{to:"/signin",children:"Sign in"})]})]})]})},Ee="/Healthy_life/assets/goals-941daa22.png",M="/Healthy_life/assets/checked-icon-f2266a6d.svg",Pe={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},Ne=t(N)`
  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`,P=t(h)`
  margin-right: 8px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--primary-color-grey);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &:checked {
    border-color: var(--primary-color-green-lite);
    background-image: url(${M});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`,q=t.label`
  color: var(--primary-color-white);
  line-height: 1.42;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${P}:checked + & {
    color: var(--primary-color-green-lite);
  }
`;t.label`
  color: var(--primary-color-white);
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;const De=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0;

  @media screen and (min-width: 834px) {
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 72px;
  }
`,He=t.img`
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
`,Le=t.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
  }
`,Ge=t.h1`
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
`,Ie=t.p`
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
`,Ae=t.div`
  display: flex;
  flex-direction: column;

  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (min-width: 834px) and (max-width: 1439px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
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
  margin-top: 24px;
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
`,Ve=t.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 24px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: var(--primary-color-grey);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,We=t.div`
  color: ${i=>i.color||Pe.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -10px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,Me=F().shape({goal:j().required("Selecting a goal is required")});function Te({onForm:i,onBackPage:n}){return e.jsxs(De,{children:[e.jsx(He,{src:Ee,alt:"illustration-summer-hiking"}),e.jsxs(Le,{children:[e.jsx(Ge,{children:"Your goal"}),e.jsx(Ie,{children:"Choose a goal so that we can help you effectively"}),e.jsx(D,{initialValues:{goal:""},validationSchema:Me,onSubmit:i,children:()=>e.jsxs(Ne,{children:[e.jsxs(Ae,{children:[e.jsxs(q,{children:[e.jsx(P,{type:"radio",name:"goal",value:"Lose Fat"}),"Lose Fat"]}),e.jsxs(q,{children:[e.jsx(P,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(q,{children:[e.jsx(P,{type:"radio",name:"goal",value:"Gain Muscle"}),"Gain Muscle"]})]}),e.jsx(b,{name:"goal",component:We}),e.jsx(qe,{type:"submit",children:"Next"}),e.jsx(Ve,{type:"button",onClick:n,children:"Back"})]})})]})]})}const Re="/Healthy_life/assets/genderAge-63bb302d.png",Ye={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},Ue=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 834px) {
    align-items: center;
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,_e=t.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 570px;
  }
`,Oe=t.div`
  @media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`,Qe=t.h1`
  color: var(--primary-color-white);
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
  color: var(--primary-color-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 360px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,Xe=t(N)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,Je=t.div`
  margin-bottom: 24px;
  width: 234px;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`,Ke=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    gap: 16px;
    justify-content: center;
    flex-direction: column;
    align-items: start;
  }
`;t.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
`;t(h)`
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
`;const et=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 40px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }
`,tt=t.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 24px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: var(--primary-color-grey);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,W=t(h)`
  margin-right: 8px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--primary-color-grey);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &:checked {
    border-color: var(--primary-color-green-lite);
    background-image: url(${M});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`,Y=t.label`
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.42;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    justify-content: start;
  }

  ${W}:checked + & {
    color: var(--primary-color-green-lite);
  }
`;t.label`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: start;
  margin-bottom: 24px;
`;t.div``;const it=t(h)`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--primary-color-green-lite);
  background: transparent;
  color: var(--primary-color-grey);
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

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`,U=t.p`
  margin-bottom: 12px;
  color: var(--primary-color-white);
  line-height: 1.42;
  text-align: start;
`,_=t.div`
  color: ${i=>i.color||Ye.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: 5px;
  font-size: 12px;
`,nt=F().shape({gender:j().required("Gender is required"),birthDate:se().transform(function(i,n){return this.isType(i)?i:he(n,"dd.MM.yyyy",new Date)}).min("1900-01-01","Date is too early").max(new Date,"Please enter a correct date").typeError("Please enter a valid date DD.MM.YYYY").required("Date of birth should be filled")});function rt({onForm:i,onBackPage:n}){return e.jsxs(Ue,{children:[e.jsx(_e,{src:Re,alt:"illustration-gender-and-age"}),e.jsxs(Oe,{children:[e.jsx(Qe,{children:"Select gender, Age"}),e.jsx(Ze,{children:"Choose a goal so that we can help you effectively"}),e.jsx(D,{initialValues:{gender:"",birthDate:""},validationSchema:nt,onSubmit:i,children:()=>e.jsxs(Xe,{children:[e.jsxs(Je,{children:[e.jsx(U,{children:"Gender"}),e.jsxs(Ke,{children:[e.jsxs(Y,{children:[e.jsx(W,{type:"radio",name:"gender",value:"male"}),"Male"]}),e.jsxs(Y,{children:[e.jsx(W,{type:"radio",name:"gender",value:"female"}),"Female"]})]}),e.jsx(b,{name:"gender",component:_})]}),e.jsx(U,{children:"Date of birth"}),e.jsx(it,{name:"birthDate",placeholder:"00.00.0000"}),e.jsx(b,{name:"birthDate",component:_}),e.jsx(et,{type:"submit",children:"Next"}),e.jsx(tt,{type:"button",onClick:n,children:"Back"})]})})]})]})}const at="/Healthy_life/assets/bodyParameters-dbc57aec.png",ot={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},st=t.div`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    gap: 60px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,ct=t.img`
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
`,lt=t.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
    flex-direction: column;
  }
`,dt=t.h2`
  color: var(--primary-color-white);
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
`,pt=t.h2`
  color: var(--primary-color-grey);
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
`,mt=t.div`
  @media screen and (min-width: 834px) {
    margin: 0 auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`,O=t.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
`,Q=t(h)`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
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

  @media screen and (min-width: 1440px) {
    width: 212px;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`,ht=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 40px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
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
`,xt=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  margin-bottom: 24px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: var(--primary-color-grey);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,Z=t.div`
  color: ${i=>i.color||ot.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  /* margin-top: 5px; */
  /* margin-left: 9px; */
  font-size: 12px;
  font-family: 'Poppins400';
`,gt=F().shape({height:V().min(50,"Height must be at least 50cm").max(250,"Height must be less than 250cm").positive("Height must be a positive number").integer("Height must be an integer").required("Height is required"),weight:V().min(30,"Weight must be at least 30kg").max(150,"Weight must be less than 150kg").positive("Weight must be a positive number").integer("Weight must be an integer").required("Weight is required")});function ut({onForm:i,onBackPage:n}){return e.jsxs(st,{children:[e.jsx(ct,{src:at,alt:"Body parameters"}),e.jsxs(lt,{children:[e.jsx(dt,{children:"Body parameters"}),e.jsx(pt,{children:"Enter your parameters for correct performance tracking"}),e.jsx(D,{initialValues:{height:"",weight:""},validationSchema:gt,onSubmit:i,children:e.jsx(N,{children:e.jsxs(mt,{children:[e.jsxs(O,{children:["Height",e.jsx(h,{as:Q,type:"number",name:"height",placeholder:"Enter your height (in cm)"}),e.jsx(b,{name:"height",component:Z})]}),e.jsxs(O,{style:{marginTop:"24px"},children:["Weight",e.jsx(h,{as:Q,type:"number",name:"weight",placeholder:"Enter your weight (in kg)"}),e.jsx(b,{name:"weight",component:Z})]}),e.jsx(ht,{type:"submit",children:"Next"}),e.jsx(xt,{type:"button",onClick:n,children:"Back"})]})})})]})]})}const ft="/Healthy_life/assets/activity-0332f4f4.png",yt={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},bt=t.div`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    gap: 60px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,wt=t.img`
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
`,vt=t.div`
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
    margin-top: 80px;
    align-items: flex-start;
    width: 328px;
  }
`,kt=t.h2`
  color: var(--primary-color-white);
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
    align-items: flex-start;
  }
`,jt=t.h3`
  color: var(--primary-color-grey);
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
`,Ft=t.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 24px;
  gap: 16px;
  flex-shrink: 0;

  @media screen and (min-width: 834px) {
    width: 470px;
    margin: 0 auto;
    > * {
      flex: 1 1 45%;
    }
  }

  @media screen and (min-width: 1440px) {
    align-items: start;
    width: 336px;
  }
`;t(h)`
  accent-color: #0f0;
`;const St=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
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
    margin-right: auto;
    margin-left: auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 0;
    margin-left: 0;
    width: 212px;
  }
`,zt=t.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 24px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: var(--primary-color-grey);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,Bt=t.div`
  color: ${i=>i.color||yt.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -18px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,y=t(h)`
  padding-left: 8px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--primary-color-grey);
  border-radius: 100%;
  width: 12px;
  height: 12px;
  position: relative;
  flex-shrink: 0;

  &:checked {
    border-color: var(--primary-color-green-lite);
    background-image: url(${M});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`,k=t.label`
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.42;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 8px;
  flex-shrink: 0;

  ${y}:checked + & {
    color: var(--primary-color-green-lite);
  }
`;t.label`
  color: var(--primary-color-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;const $t=F().shape({activity:V().required("Selecting an activity level is required")});function Ct({onBackPage:i,onForm:n}){return e.jsxs(bt,{children:[e.jsx(wt,{src:ft,alt:"Activity illustration"}),e.jsxs(vt,{children:[e.jsx(kt,{children:"Your Activity"}),e.jsx(jt,{children:"To correctly calculate calorie and water intake"}),e.jsx(D,{initialValues:{activityLevel:""},validationSchema:$t,onSubmit:n,children:e.jsxs(N,{children:[e.jsxs(Ft,{children:[e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.2"}),"If you do not have physical activity and sedentary work"]}),e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.375"}),"If you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.55"}),"If you play sports with average loads 3-5 times a week"]}),e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.725"}),"If you train fully 6-7 times a week"]}),e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.9"}),"If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]}),e.jsx(b,{name:"activity",component:Bt}),e.jsx(St,{type:"submit",children:"Sign Up"}),e.jsx(zt,{onClick:i,children:"Back"})]})})]})]})}E.Notify.init({showOnlyTheLastOne:!0,cssAnimationStyle:"from-bottom",clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});const Lt=()=>{const[i,n]=a.useState(0),o=()=>{n(i+1)},p=()=>{n(i-1)},[r,c]=a.useState(""),[d,x]=a.useState(""),[w,S]=a.useState(""),[m,z]=a.useState("Lose Fat"),[f,B]=a.useState("male"),[v,$]=a.useState(""),[C,H]=a.useState(""),[T,J]=a.useState(""),[K,R]=a.useState("1.2"),ee=ce(),te=async s=>{s.preventDefault();const l={name:s.target.name.value,email:s.target.email.value,password:s.target.password.value};try{await u.validate(l,{abortEarly:!1}),c(l.name),x(l.email),S(l.password),o()}catch(g){E.Notify.failure(g.errors.join(", "))}},ie=s=>{const l=s.goal;z(l),o()},ne=s=>{const l=s.gender,g=s.birthDate;B(l),$(g),o()},re=s=>{const l=s.height,g=s.weight;H(l),J(g),o()},ae=s=>{const l=s.activity;R(l),ee(le({name:r,email:d,password:w,goal:m,gender:f,birthDate:v,height:Number(C),weight:Number(T),activityLevel:Number(l)})).then(g=>{g.meta.requestStatus==="fulfilled"?E.Notify.success(`Hey ${r}, you're all set! Let's get started!`):E.Notify.failure("There was a problem with your registration.")})};return e.jsxs(ue,{children:[i===0&&e.jsx(Ce,{onForm:te,nameValue:r,emailValue:d,passwordValue:w}),i===1&&e.jsx(Te,{onForm:ie,onBackPage:p,goal:m}),i===2&&e.jsx(rt,{onForm:ne,onBackPage:p,gender:f,birthDateValue:v}),i===3&&e.jsx(ut,{onForm:re,onBackPage:p,heightValue:C,weightValue:T}),i===4&&e.jsx(Ct,{onForm:ae,onBackPage:p,activity:K,setActivity:R})]})};export{Lt as default};
