import{r as T,V as re,W as ne,X as le,M as m,ai as se,Y as de,_ as ce,j as e,aA as pe,aB as ue,N as he,y as s,a3 as ge,s as i,c as xe,a as W,e as me,f as E,aC as be,t as q,F as ve,b as fe,u as ye,k as te,aD as je,aE as Be,aF as Ce,d as we,o as $e,al as N,aa as O,aG as H,aH as d,aI as c,aJ as K,aK as X,aL as Q,aM as Z,aN as S,aO as ee,ap as Le}from"./index-995fca2a.js";import{n as I}from"./notiflix-notify-aio-a6d118c9.js";import{p as Re}from"./parse-9c30c6b3.js";import{c as ke}from"./dashboardSelectors-14fa5b63.js";function De(o){return T.Children.toArray(o).filter(a=>T.isValidElement(a))}function Fe(o){return ne("MuiButtonGroup",o)}const Me=re("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),n=Me,Ge=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Pe=(o,a)=>{const{ownerState:r}=o;return[{[`& .${n.grouped}`]:a.grouped},{[`& .${n.grouped}`]:a[`grouped${s(r.orientation)}`]},{[`& .${n.grouped}`]:a[`grouped${s(r.variant)}`]},{[`& .${n.grouped}`]:a[`grouped${s(r.variant)}${s(r.orientation)}`]},{[`& .${n.grouped}`]:a[`grouped${s(r.variant)}${s(r.color)}`]},{[`& .${n.firstButton}`]:a.firstButton},{[`& .${n.lastButton}`]:a.lastButton},{[`& .${n.middleButton}`]:a.middleButton},a.root,a[r.variant],r.disableElevation===!0&&a.disableElevation,r.fullWidth&&a.fullWidth,r.orientation==="vertical"&&a.vertical]},Ie=o=>{const{classes:a,color:r,disabled:g,disableElevation:b,fullWidth:p,orientation:u,variant:h}=o,v={root:["root",h,u==="vertical"&&"vertical",p&&"fullWidth",b&&"disableElevation"],grouped:["grouped",`grouped${s(u)}`,`grouped${s(h)}`,`grouped${s(h)}${s(u)}`,`grouped${s(h)}${s(r)}`,g&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return ge(v,Fe,a)},Te=le("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:Pe})(({theme:o,ownerState:a})=>m({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[2]},a.disableElevation&&{boxShadow:"none"},a.fullWidth&&{width:"100%"},a.orientation==="vertical"&&{flexDirection:"column"},{[`& .${n.grouped}`]:m({minWidth:40,"&:hover":m({},a.variant==="contained"&&{boxShadow:"none"})},a.variant==="contained"&&{boxShadow:"none"}),[`& .${n.firstButton},& .${n.middleButton}`]:m({},a.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},a.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},a.variant==="text"&&a.orientation==="horizontal"&&{borderRight:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${o.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${n.disabled}`]:{borderRight:`1px solid ${(o.vars||o).palette.action.disabled}`}},a.variant==="text"&&a.orientation==="vertical"&&{borderBottom:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${o.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${n.disabled}`]:{borderBottom:`1px solid ${(o.vars||o).palette.action.disabled}`}},a.variant==="text"&&a.color!=="inherit"&&{borderColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:se(o.palette[a.color].main,.5)},a.variant==="outlined"&&a.orientation==="horizontal"&&{borderRightColor:"transparent"},a.variant==="outlined"&&a.orientation==="vertical"&&{borderBottomColor:"transparent"},a.variant==="contained"&&a.orientation==="horizontal"&&{borderRight:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${n.disabled}`]:{borderRight:`1px solid ${(o.vars||o).palette.action.disabled}`}},a.variant==="contained"&&a.orientation==="vertical"&&{borderBottom:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${n.disabled}`]:{borderBottom:`1px solid ${(o.vars||o).palette.action.disabled}`}},a.variant==="contained"&&a.color!=="inherit"&&{borderColor:(o.vars||o).palette[a.color].dark},{"&:hover":m({},a.variant==="outlined"&&a.orientation==="horizontal"&&{borderRightColor:"currentColor"},a.variant==="outlined"&&a.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${n.lastButton},& .${n.middleButton}`]:m({},a.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},a.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},a.variant==="outlined"&&a.orientation==="horizontal"&&{marginLeft:-1},a.variant==="outlined"&&a.orientation==="vertical"&&{marginTop:-1})})),ze=T.forwardRef(function(a,r){const g=de({props:a,name:"MuiButtonGroup"}),{children:b,className:p,color:u="primary",component:h="div",disabled:v=!1,disableElevation:C=!1,disableFocusRipple:w=!1,disableRipple:D=!1,fullWidth:t=!1,orientation:j="horizontal",size:$="medium",variant:L="outlined"}=g,_=ce(g,Ge),F=m({},g,{color:u,component:h,disabled:v,disableElevation:C,disableFocusRipple:w,disableRipple:D,fullWidth:t,orientation:j,size:$,variant:L}),l=Ie(F),z=T.useMemo(()=>({className:l.grouped,color:u,disabled:v,disableElevation:C,disableFocusRipple:w,disableRipple:D,fullWidth:t,size:$,variant:L}),[u,v,C,w,D,t,$,L,l.grouped]),A=De(b),oe=A.length,ie=M=>{const R=M===0,J=M===oe-1;return R&&J?"":R?l.firstButton:J?l.lastButton:l.middleButton};return e.jsx(Te,m({as:h,role:"group",className:he(l.root,p),ref:r,ownerState:F},_,{children:e.jsx(pe.Provider,{value:z,children:A.map((M,R)=>e.jsx(ue.Provider,{value:ie(R),children:M},R))})}))}),We=ze,Ee="/Healthy_life/assets/settings-page-image-7ee4756a.png",Ne=i.div`
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
`,Ue=xe().shape({name:W().trim("Cannot include leading and trailing spaces").strict().min(2,"Too short name").max(20,"Too long name").required("Name should be filled"),birthDate:me().transform(function(o,a){return this.isType(o)?o:Re(a,"dd.MM.yyyy",new Date)}).min("1900-01-01","Date is too early").max(new Date,"Please enter a correct date").typeError("Please enter a valid date DD.MM.YYYY").required("Date of birth should be filled"),gender:W().oneOf(["male","female"]).required(),height:E().positive("Height should be positive").integer("Height should be integer").min(140,"Incorrect data for calculation").max(250,"Incorrect data for calculation").required("Height should be filled"),weight:E().positive("Weight should be positive").integer("Weight should be integer").min(40,"Incorrect data for calculation").max(200,"Incorrect data for calculation").required("Weight should be filled"),activityLevel:E().oneOf([1.2,1.375,1.55,1.725,1.9]).required(),goal:W().oneOf(["Lose Fat","Maintain","Gain muscle"]).required()}),Ye=i(ve)`
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
`,G=i(fe)`
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
`,Qe={gap:"12px",width:"300px",[q.breakpoints.up("tablet")]:{width:"212px"}},V={fontFamily:"Poppins500",fontSize:"14px",color:"white.main","&.Mui-focused":{color:"white.main"}},f={gap:"8px",margin:"0px","& .MuiTypography-root":{fontFamily:"Poppins400",fontWeight:400,fontSize:"14px"},"& .MuiButtonBase-root":{padding:"0px"}},y={color:"grey.main","&.Mui-checked":{color:"greenlite.main"},"& .MuiSvgIcon-root":{width:"12px",height:"12px"}},Ze={gap:"12px",width:"100%",[q.breakpoints.down("tablet")]:{flexDirection:"column"},"& .MuiButtonGroup-firstButton":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",margin:"0px",borderRightColor:"none"},"& .MuiButtonGroup-firstButton:hover":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"yellow.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-firstButton:focus":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"yellow.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-lastButton":{borderRadius:"12px",color:"grey.main",margin:"0px"},"& .MuiButtonGroup-lastButton:hover":{borderColor:"yellow.main",color:"yellow.main"},"& .MuiButtonGroup-lastButton:focus":{borderColor:"yellow.main",color:"yellow.main"}},ae={lineHeight:1.3,width:"212px",padding:"8px 10px",border:"1px solid transparent",[q.breakpoints.down("tablet")]:{width:"100%"}},x=i.div`
  color: #e74a3b;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-left: 4px;
`,Se=i.p`
  font-family: 'Poppins400', sans-serif;
  color: var(--primary-color-grey);
  margin-top: 8px;
`,U=i.div`
  border: 1px solid var(--secondary-color-grey-one);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
  padding: 10px;
`,B=i.img`
  width: 20px;
  height: 20px;
`,Y=i.div`
  border: 1px solid var(--primary-color-green-lite);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
  padding: 10px;
`;I.Notify.init({showOnlyTheLastOne:!0,cssAnimationStyle:"from-bottom",clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});let P;const ea=()=>{const o=ye(),a=te(je),{name:r,avatar:g,birthDate:b,gender:p,height:u,weight:h,goal:v,activityLevel:C}=a,w=b.slice(8,10)+"."+b.slice(5,7)+"."+b.slice(0,4),t=Be({initialValues:{name:r,avatar:g,birthDate:w,gender:p,height:u,weight:h,goal:v,activityLevel:C},validationSchema:Ue,onSubmit:j=>{t.values.activityLevel=Number(j.activityLevel);const $=t.values.birthDate.slice(0,2),L=t.values.birthDate.slice(3,5),F=`${t.values.birthDate.slice(6)}.${L}.${$}`;let l=new FormData;l.append("avatar",t.values.avatar),l.append("name",t.values.name),l.append("birthDate",F),l.append("gender",t.values.gender),l.append("height",t.values.height),l.append("weight",t.values.weight),l.append("goal",t.values.goal),l.append("activityLevel",t.values.activityLevel),o(Ce(l)).then(z=>{z.meta.requestStatus==="fulfilled"?I.Notify.success("Your profile was updated"):I.Notify.failure("Oops! Something went wrong!")})}});return e.jsx(we,{children:e.jsxs(Ye,{onSubmit:t.handleSubmit,onReset:t.handleReset,autoComplete:"off",children:[e.jsxs(k,{htmlFor:"name",children:["Your name",e.jsx(G,{id:"name",name:"name",value:t.values.name,onChange:t.handleChange}),t.errors.name&&t.touched.name&&e.jsx(x,{id:"feedback",name:"name",children:t.errors.name})]}),e.jsxs(k,{children:["Your photo",e.jsxs(_e,{children:[e.jsx(qe,{src:t.values.avatar?g:URL.createObjectURL(t.values.avatar),alt:"user avatar",file:t.values.avatar}),e.jsxs(Je,{type:"button",htmlFor:"avatar",children:[e.jsx(Xe,{id:"avatar",name:"avatar",type:"file",accept:"image/png, .svg, .jpg, .gif, .jpeg, .webp",onChange:j=>{if(!j.currentTarget.files){I.Notify.failure("Oops! No image selected");return}P=j.currentTarget.files[0],t.setFieldValue("avatar",P)}}),e.jsx(Ae,{children:e.jsx("use",{href:`${$e}#icon-direct-inbox`})}),e.jsx(Ke,{children:P?t.values.avatar.name:"Download new photo"})]})]})]}),e.jsxs(k,{htmlFor:"birthDate",children:["Date of birth",e.jsx(G,{id:"birthDate",name:"birthDate",placeholder:"00.00.0000",value:t.values.birthDate,onChange:t.handleChange}),t.errors.birthDate&&t.touched.birthDate&&e.jsx(x,{id:"feedback",name:"birthDate",children:t.errors.birthDate})]}),e.jsxs(N,{sx:Qe,children:[e.jsx(O,{id:"gender",sx:V,children:"Gender"}),e.jsxs(H,{row:!0,sx:{gap:"16px"},"aria-labelledby":"gender",name:"gender",value:t.values.gender,onChange:t.handleChange,children:[e.jsx(d,{value:"male",sx:f,control:e.jsx(c,{sx:y}),label:"Male"}),e.jsx(d,{value:"female",sx:f,control:e.jsx(c,{sx:y}),label:"Female"}),t.errors.gender&&t.touched.gender&&e.jsx(x,{id:"feedback",name:"gender",children:t.errors.gender})]})]}),e.jsxs(k,{htmlFor:"height",children:["Height",e.jsx(G,{id:"height",name:"height",type:"number",value:t.values.height,onChange:t.handleChange}),t.errors.height&&t.touched.height&&e.jsx(x,{id:"feedback",name:"height",children:t.errors.height}),e.jsx(x,{name:"height",component:"span"})]}),e.jsxs(k,{htmlFor:"weight",children:["Weight",e.jsx(G,{id:"weight",name:"weight",type:"number",value:t.values.weight,onChange:t.handleChange}),t.errors.weight&&t.touched.weight&&e.jsx(x,{id:"feedback",name:"weight",children:t.errors.weight}),e.jsx(x,{name:"weight",component:"span"})]}),e.jsxs(N,{sx:{gap:"12px"},children:[e.jsxs(O,{id:"goal",sx:V,children:["Target selection",e.jsx(Se,{children:"The service will adjust your calorie intake to your goal"})]}),e.jsxs(H,{row:!0,sx:{gap:"12px","& .MuiFormControlLabel-root .MuiFormControlLabel-label":{fontFamily:"Poppins400",fontSize:"14px",color:"white.main",marginLeft:"12px"}},"aria-labelledby":"goal",name:"goal",value:t.values.goal,onChange:t.handleChange,children:[e.jsx(d,{sx:{margin:"0px"},value:"Lose Fat",control:e.jsx(c,{sx:{padding:"0px"},icon:e.jsx(U,{children:e.jsx(B,{src:p==="male"?K:X,alt:"Lose fat"})}),checkedIcon:e.jsx(Y,{children:e.jsx(B,{src:p==="male"?K:X,alt:"Lose fat"})})}),label:"Lose Fat"}),e.jsx(d,{sx:{margin:"0px"},value:"Maintain",control:e.jsx(c,{sx:{padding:"0px"},icon:e.jsx(U,{children:e.jsx(B,{src:p==="male"?Q:Z,alt:"Maintain"})}),checkedIcon:e.jsx(Y,{children:e.jsx(B,{src:p==="male"?Q:Z,alt:"Maintain"})})}),label:"Maintain"}),e.jsx(d,{sx:{margin:"0px"},value:"Gain Muscle",control:e.jsx(c,{sx:{padding:"0px"},icon:e.jsx(U,{children:e.jsx(B,{src:S,alt:"Gain muscle"})}),checkedIcon:e.jsx(Y,{children:e.jsx(B,{src:S,alt:"Gain muscle"})})}),label:"Gain Muscle"})]})]}),e.jsxs(N,{sx:{gap:"12px"},children:[e.jsx(O,{id:"activityLevel",sx:V,children:"Your activity"}),e.jsxs(H,{row:!0,sx:{gap:"16px"},"aria-labelledby":"activityLevel",name:"activityLevel",type:"number",value:t.values.activityLevel,onChange:t.handleChange,children:[e.jsx(d,{value:"1.2",sx:f,control:e.jsx(c,{sx:y}),label:"If you do not have physical activity and sedentary work"}),e.jsx(d,{value:"1.375",sx:f,control:e.jsx(c,{sx:y}),label:`If you do short runs or light gymnastics 1-3 times a
                  week`}),e.jsx(d,{value:"1.55",sx:f,control:e.jsx(c,{sx:y}),label:"If you play sports with average loads 3-5 times a week"}),e.jsx(d,{value:"1.725",sx:f,control:e.jsx(c,{sx:y}),label:"If you train fully 6-7 times a week"}),e.jsx(d,{value:"1.9",sx:f,control:e.jsx(c,{sx:y}),label:`If your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program`}),t.errors.activityLevel&&t.touched.activityLevel&&e.jsx(x,{id:"feedback",name:"activityLevel",children:t.errors.activityLevel})]})]}),e.jsxs(We,{"aria-label":"button group",sx:Ze,children:[e.jsx(ee,{sx:ae,type:"submit",children:"Save"}),e.jsx(ee,{sx:ae,type:"reset",onClick:P=null,children:"Cancel"})]})]})})},aa=()=>e.jsxs(Ne,{children:[e.jsx(Oe,{children:"Profile setting"}),e.jsxs(He,{children:[e.jsx(Ve,{src:Ee,alt:"Page image"}),e.jsx(ea,{})]})]}),na=()=>{const o=te(ke);return e.jsx(e.Fragment,{children:o?e.jsx(Le,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"40vh auto 0 auto"}}):e.jsx(aa,{})})};export{na as default};
