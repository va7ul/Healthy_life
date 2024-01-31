import{r as z,V as re,W as ne,X as le,M as m,ai as se,Y as de,_ as ce,j as e,az as pe,aA as ue,N as ge,y as s,a3 as he,s as i,c as xe,a as I,e as me,f as T,aB as be,t as U,F as ve,b as fe,u as ye,k as ee,aC as je,aD as Ce,aE as Be,d as we,o as $e,al as W,aa as E,aF as N,aG as d,aH as c,aI as A,aJ as J,aK as K,aL as X,aM as Q,aN as Z,ap as Le}from"./index-034287c7.js";import{n as P}from"./notiflix-notify-aio-b9979cb6.js";import{p as Re}from"./parse-9c30c6b3.js";import{c as ke}from"./dashboardSelectors-14fa5b63.js";function De(t){return z.Children.toArray(t).filter(a=>z.isValidElement(a))}function Fe(t){return ne("MuiButtonGroup",t)}const Me=re("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),n=Me,Ge=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Pe=(t,a)=>{const{ownerState:r}=t;return[{[`& .${n.grouped}`]:a.grouped},{[`& .${n.grouped}`]:a[`grouped${s(r.orientation)}`]},{[`& .${n.grouped}`]:a[`grouped${s(r.variant)}`]},{[`& .${n.grouped}`]:a[`grouped${s(r.variant)}${s(r.orientation)}`]},{[`& .${n.grouped}`]:a[`grouped${s(r.variant)}${s(r.color)}`]},{[`& .${n.firstButton}`]:a.firstButton},{[`& .${n.lastButton}`]:a.lastButton},{[`& .${n.middleButton}`]:a.middleButton},a.root,a[r.variant],r.disableElevation===!0&&a.disableElevation,r.fullWidth&&a.fullWidth,r.orientation==="vertical"&&a.vertical]},ze=t=>{const{classes:a,color:r,disabled:h,disableElevation:b,fullWidth:p,orientation:u,variant:g}=t,v={root:["root",g,u==="vertical"&&"vertical",p&&"fullWidth",b&&"disableElevation"],grouped:["grouped",`grouped${s(u)}`,`grouped${s(g)}`,`grouped${s(g)}${s(u)}`,`grouped${s(g)}${s(r)}`,h&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return he(v,Fe,a)},Ie=le("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:Pe})(({theme:t,ownerState:a})=>m({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},a.variant==="contained"&&{boxShadow:(t.vars||t).shadows[2]},a.disableElevation&&{boxShadow:"none"},a.fullWidth&&{width:"100%"},a.orientation==="vertical"&&{flexDirection:"column"},{[`& .${n.grouped}`]:m({minWidth:40,"&:hover":m({},a.variant==="contained"&&{boxShadow:"none"})},a.variant==="contained"&&{boxShadow:"none"}),[`& .${n.firstButton},& .${n.middleButton}`]:m({},a.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},a.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},a.variant==="text"&&a.orientation==="horizontal"&&{borderRight:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${n.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},a.variant==="text"&&a.orientation==="vertical"&&{borderBottom:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${n.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},a.variant==="text"&&a.color!=="inherit"&&{borderColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / 0.5)`:se(t.palette[a.color].main,.5)},a.variant==="outlined"&&a.orientation==="horizontal"&&{borderRightColor:"transparent"},a.variant==="outlined"&&a.orientation==="vertical"&&{borderBottomColor:"transparent"},a.variant==="contained"&&a.orientation==="horizontal"&&{borderRight:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${n.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},a.variant==="contained"&&a.orientation==="vertical"&&{borderBottom:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${n.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},a.variant==="contained"&&a.color!=="inherit"&&{borderColor:(t.vars||t).palette[a.color].dark},{"&:hover":m({},a.variant==="outlined"&&a.orientation==="horizontal"&&{borderRightColor:"currentColor"},a.variant==="outlined"&&a.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${n.lastButton},& .${n.middleButton}`]:m({},a.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},a.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},a.variant==="outlined"&&a.orientation==="horizontal"&&{marginLeft:-1},a.variant==="outlined"&&a.orientation==="vertical"&&{marginTop:-1})})),Te=z.forwardRef(function(a,r){const h=de({props:a,name:"MuiButtonGroup"}),{children:b,className:p,color:u="primary",component:g="div",disabled:v=!1,disableElevation:w=!1,disableFocusRipple:$=!1,disableRipple:D=!1,fullWidth:o=!1,orientation:j="horizontal",size:l="medium",variant:L="outlined"}=h,ae=ce(h,Ge),Y=m({},h,{color:u,component:g,disabled:v,disableElevation:w,disableFocusRipple:$,disableRipple:D,fullWidth:o,orientation:j,size:l,variant:L}),C=ze(Y),oe=z.useMemo(()=>({className:C.grouped,color:u,disabled:v,disableElevation:w,disableFocusRipple:$,disableRipple:D,fullWidth:o,size:l,variant:L}),[u,v,w,$,D,o,l,L,C.grouped]),q=De(b),te=q.length,ie=F=>{const R=F===0,_=F===te-1;return R&&_?"":R?C.firstButton:_?C.lastButton:C.middleButton};return e.jsx(Ie,m({as:g,role:"group",className:ge(C.root,p),ref:r,ownerState:Y},ae,{children:e.jsx(pe.Provider,{value:oe,children:q.map((F,R)=>e.jsx(ue.Provider,{value:ie(R),children:F},R))})}))}),We=Te,Ee="/Healthy_life/assets/settings-page-image-7ee4756a.png",Ne=i.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 72px;
  }
`,Oe=i.h2`
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;

  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;

    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`,He=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 160px;
  }
`,Ve=i.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 376px;
    height: 374px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 528px;
    margin-left: 116px;
  }
`,Ue=xe().shape({name:I().trim("Cannot include leading and trailing spaces").strict().min(2,"Too short name").max(20,"Too long name").required("Name should be filled"),birthDate:me().transform(function(t,a){return this.isType(t)?t:Re(a,"dd.MM.yyyy",new Date)}).min("1900-01-01","Date is too early").max(new Date,"Please enter a correct date").typeError("Please enter a valid date DD.MM.YYYY").required("Date of birth should be filled"),gender:I().oneOf(["male","female"]).required(),height:T().positive("Height should be positive").integer("Height should be integer").min(140,"Incorrect data for calculation").max(250,"Incorrect data for calculation").required("Height should be filled"),weight:T().positive("Weight should be positive").integer("Weight should be integer").min(40,"Incorrect data for calculation").max(200,"Incorrect data for calculation").required("Weight should be filled"),activityLevel:T().oneOf([1.2,1.375,1.55,1.725,1.9]).required(),goal:I().oneOf(["Lose Fat","Maintain","Gain muscle"]).required()}),Ye=i(ve)`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 834px) {
    max-width: 491px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px 60px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 69px;
  }
`,k=i.label`
  font-family: 'Poppins500';
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,M=i(fe)`
  margin-top: 12px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  color: var(--primary-color-white);
  border: 1px solid var(--primary-color-grey);
  background: var(--primary-color-black-two);
  font-family: 'Poppins400';

  &:focus,
  &:hover {
    border-color: var(--secondary-color-yellow);
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`,qe=i.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,_e=i.div`
  width: 219px;
  display: flex;
  gap: 12px;
  margin-top: 12px;

  &:hover {
    cursor: pointer;
  }
`,Ae=i.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Je=i.label`
  background-color: var(--primary-color-black-one);
  padding: 0px;
  border: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    cursor: pointer;
  }
`,Ke=i.span`
  color: var(--primary-color-white);
  font-family: 'Poppins400';
  font-size: 13.5px;
`,Xe=i.input`
  ${be}
`,Qe={gap:"12px",width:"300px",[U.breakpoints.up("tablet")]:{width:"212px"}},O={fontFamily:"Poppins500",fontSize:"14px",color:"white.main","&.Mui-focused":{color:"white.main"}},f={gap:"8px",margin:"0px","& .MuiTypography-root":{fontFamily:"Poppins400",fontWeight:400,fontSize:"14px"},"& .MuiButtonBase-root":{padding:"0px"}},y={color:"grey.main","&.Mui-checked":{color:"greenlite.main"},"& .MuiSvgIcon-root":{width:"12px",height:"12px"}},Ze={gap:"12px",width:"100%",[U.breakpoints.down("tablet")]:{flexDirection:"column"},"& .MuiButtonGroup-firstButton":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",margin:"0px",borderRightColor:"none"},"& .MuiButtonGroup-firstButton:hover":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"yellow.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-firstButton:focus":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"yellow.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-lastButton":{borderRadius:"12px",color:"grey.main",margin:"0px"},"& .MuiButtonGroup-lastButton:hover":{borderColor:"yellow.main",color:"yellow.main"},"& .MuiButtonGroup-lastButton:focus":{borderColor:"yellow.main",color:"yellow.main"}},S={lineHeight:1.3,width:"212px",padding:"8px 10px",border:"1px solid transparent",[U.breakpoints.down("tablet")]:{width:"100%"}},x=i.div`
  color: #e74a3b;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-left: 4px;
`,Se=i.p`
  font-family: 'Poppins400', sans-serif;
  color: var(--primary-color-grey);
  margin-top: 8px;
`,H=i.div`
  border: 1px solid var(--secondary-color-grey-one);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
  padding: 10px;
`,B=i.img`
  width: 20px;
  height: 20px;
`,V=i.div`
  border: 1px solid var(--primary-color-green-lite);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
  padding: 10px;
`;P.Notify.init({showOnlyTheLastOne:!0,cssAnimationStyle:"from-bottom",clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});let G;const ea=()=>{const t=ye(),a=ee(je),{name:r,avatar:h,birthDate:b,gender:p,height:u,weight:g,goal:v,activityLevel:w}=a,$=b.slice(8,10)+"."+b.slice(5,7)+"."+b.slice(0,4),o=Ce({initialValues:{name:r,avatar:h,birthDate:$,gender:p,height:u,weight:g,goal:v,activityLevel:w},validationSchema:Ue,onSubmit:j=>{o.values.activityLevel=Number(j.activityLevel),console.log(o.values.birthDate),console.log(typeof o.values.birthDate),console.log(o.values.goal),console.log(typeof o.values.goal);let l=new FormData;l.append("avatar",o.values.avatar),l.append("name",o.values.name),l.append("birthDate",o.values.birthDate),l.append("gender",o.values.gender),l.append("height",o.values.height),l.append("weight",o.values.weight),l.append("goal",o.values.goal),l.append("activityLevel",o.values.activityLevel),t(Be(l)).then(L=>{L.meta.requestStatus==="fulfilled"?P.Notify.success("Your profile was updated"):P.Notify.failure("Oops! Something went wrong!")})}});return e.jsx(we,{children:e.jsxs(Ye,{onSubmit:o.handleSubmit,onReset:o.handleReset,autoComplete:"off",children:[e.jsxs(k,{htmlFor:"name",children:["Your name",e.jsx(M,{id:"name",name:"name",value:o.values.name,onChange:o.handleChange}),o.errors.name&&o.touched.name&&e.jsx(x,{id:"feedback",name:"name",children:o.errors.name})]}),e.jsxs(k,{children:["Your photo",e.jsxs(_e,{children:[e.jsx(qe,{src:o.values.avatar?h:URL.createObjectURL(o.values.avatar),alt:"user avatar",file:o.values.avatar}),e.jsxs(Je,{type:"button",htmlFor:"avatar",children:[e.jsx(Xe,{id:"avatar",name:"avatar",type:"file",accept:"image/png, .svg, .jpg, .gif, .jpeg, .webp",onChange:j=>{if(!j.currentTarget.files){P.Notify.failure("Oops! No image selected");return}G=j.currentTarget.files[0],o.setFieldValue("avatar",G)}}),e.jsx(Ae,{children:e.jsx("use",{href:`${$e}#icon-direct-inbox`})}),e.jsx(Ke,{children:G?o.values.avatar.name:"Download new photo"})]})]})]}),e.jsxs(k,{htmlFor:"birthDate",children:["Date of birth",e.jsx(M,{id:"birthDate",name:"birthDate",placeholder:"00.00.0000",value:o.values.birthDate,onChange:o.handleChange}),o.errors.birthDate&&o.touched.birthDate&&e.jsx(x,{id:"feedback",name:"birthDate",children:o.errors.birthDate})]}),e.jsxs(W,{sx:Qe,children:[e.jsx(E,{id:"gender",sx:O,children:"Gender"}),e.jsxs(N,{row:!0,sx:{gap:"16px"},"aria-labelledby":"gender",name:"gender",value:o.values.gender,onChange:o.handleChange,children:[e.jsx(d,{value:"male",sx:f,control:e.jsx(c,{sx:y}),label:"Male"}),e.jsx(d,{value:"female",sx:f,control:e.jsx(c,{sx:y}),label:"Female"}),o.errors.gender&&o.touched.gender&&e.jsx(x,{id:"feedback",name:"gender",children:o.errors.gender})]})]}),e.jsxs(k,{htmlFor:"height",children:["Height",e.jsx(M,{id:"height",name:"height",type:"number",value:o.values.height,onChange:o.handleChange}),o.errors.height&&o.touched.height&&e.jsx(x,{id:"feedback",name:"height",children:o.errors.height}),e.jsx(x,{name:"height",component:"span"})]}),e.jsxs(k,{htmlFor:"weight",children:["Weight",e.jsx(M,{id:"weight",name:"weight",type:"number",value:o.values.weight,onChange:o.handleChange}),o.errors.weight&&o.touched.weight&&e.jsx(x,{id:"feedback",name:"weight",children:o.errors.weight}),e.jsx(x,{name:"weight",component:"span"})]}),e.jsxs(W,{sx:{gap:"12px"},children:[e.jsxs(E,{id:"goal",sx:O,children:["Target selection",e.jsx(Se,{children:"The service will adjust your calorie intake to your goal"})]}),e.jsxs(N,{row:!0,sx:{gap:"12px","& .MuiFormControlLabel-root .MuiFormControlLabel-label":{fontFamily:"Poppins400",fontSize:"14px",color:"white.main",marginLeft:"12px"}},"aria-labelledby":"goal",name:"goal",value:o.values.goal,onChange:o.handleChange,children:[e.jsx(d,{sx:{margin:"0px"},value:"Lose Fat",control:e.jsx(c,{sx:{padding:"0px"},icon:e.jsx(H,{children:e.jsx(B,{src:p==="male"?A:J,alt:"Lose fat"})}),checkedIcon:e.jsx(V,{children:e.jsx(B,{src:p==="male"?A:J,alt:"Lose fat"})})}),label:"Lose Fat"}),e.jsx(d,{sx:{margin:"0px"},value:"Maintain",control:e.jsx(c,{sx:{padding:"0px"},icon:e.jsx(H,{children:e.jsx(B,{src:p==="male"?K:X,alt:"Maintain"})}),checkedIcon:e.jsx(V,{children:e.jsx(B,{src:p==="male"?K:X,alt:"Maintain"})})}),label:"Maintain"}),e.jsx(d,{sx:{margin:"0px"},value:"Gain Muscle",control:e.jsx(c,{sx:{padding:"0px"},icon:e.jsx(H,{children:e.jsx(B,{src:Q,alt:"Gain muscle"})}),checkedIcon:e.jsx(V,{children:e.jsx(B,{src:Q,alt:"Gain muscle"})})}),label:"Gain Muscle"})]})]}),e.jsxs(W,{sx:{gap:"12px"},children:[e.jsx(E,{id:"activityLevel",sx:O,children:"Your activity"}),e.jsxs(N,{row:!0,sx:{gap:"16px"},"aria-labelledby":"activityLevel",name:"activityLevel",type:"number",value:o.values.activityLevel,onChange:o.handleChange,children:[e.jsx(d,{value:"1.2",sx:f,control:e.jsx(c,{sx:y}),label:"If you do not have physical activity and sedentary work"}),e.jsx(d,{value:"1.375",sx:f,control:e.jsx(c,{sx:y}),label:`If you do short runs or light gymnastics 1-3 times a
                  week`}),e.jsx(d,{value:"1.55",sx:f,control:e.jsx(c,{sx:y}),label:"If you play sports with average loads 3-5 times a week"}),e.jsx(d,{value:"1.725",sx:f,control:e.jsx(c,{sx:y}),label:"If you train fully 6-7 times a week"}),e.jsx(d,{value:"1.9",sx:f,control:e.jsx(c,{sx:y}),label:`If your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program`}),o.errors.activityLevel&&o.touched.activityLevel&&e.jsx(x,{id:"feedback",name:"activityLevel",children:o.errors.activityLevel})]})]}),e.jsxs(We,{"aria-label":"button group",sx:Ze,children:[e.jsx(Z,{sx:S,type:"submit",children:"Save"}),e.jsx(Z,{sx:S,type:"reset",onClick:G=null,children:"Cancel"})]})]})})},aa=()=>e.jsxs(Ne,{children:[e.jsx(Oe,{children:"Profile setting"}),e.jsxs(He,{children:[e.jsx(Ve,{src:Ee,alt:"Page image"}),e.jsx(ea,{})]})]}),na=()=>{const t=ee(ke);return e.jsx(e.Fragment,{children:t?e.jsx(Le,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"40vh auto 0 auto"}}):e.jsx(aa,{})})};export{na as default};
