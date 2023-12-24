import{r as F,B as K,G as Q,H as Z,z as c,Q as X,J as S,_ as ee,j as e,Z as te,$ as oe,A as ae,O as s,K as ie,s as n,a0 as re,t as W,U as ne,d as le,a1 as se,h as de,F as I,a2 as D,a3 as O,a4 as x,a5 as m,a6 as U,L as pe}from"./index-d7d548af.js";import{c as ue,a as V,e as P,b as ce,d as ge,u as he,F as xe}from"./index.esm-9352f8b2.js";function me(a){return F.Children.toArray(a).filter(t=>F.isValidElement(t))}function ve(a){return Q("MuiButtonGroup",a)}const be=K("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),i=be,fe=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],ye=(a,t)=>{const{ownerState:r}=a;return[{[`& .${i.grouped}`]:t.grouped},{[`& .${i.grouped}`]:t[`grouped${s(r.orientation)}`]},{[`& .${i.grouped}`]:t[`grouped${s(r.variant)}`]},{[`& .${i.grouped}`]:t[`grouped${s(r.variant)}${s(r.orientation)}`]},{[`& .${i.grouped}`]:t[`grouped${s(r.variant)}${s(r.color)}`]},{[`& .${i.firstButton}`]:t.firstButton},{[`& .${i.lastButton}`]:t.lastButton},{[`& .${i.middleButton}`]:t.middleButton},t.root,t[r.variant],r.disableElevation===!0&&t.disableElevation,r.fullWidth&&t.fullWidth,r.orientation==="vertical"&&t.vertical]},je=a=>{const{classes:t,color:r,disabled:g,disableElevation:$,fullWidth:w,orientation:d,variant:p}=a,h={root:["root",p,d==="vertical"&&"vertical",w&&"fullWidth",$&&"disableElevation"],grouped:["grouped",`grouped${s(d)}`,`grouped${s(p)}`,`grouped${s(p)}${s(d)}`,`grouped${s(p)}${s(r)}`,g&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return ie(h,ve,t)},Be=Z("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:ye})(({theme:a,ownerState:t})=>c({display:"inline-flex",borderRadius:(a.vars||a).shape.borderRadius},t.variant==="contained"&&{boxShadow:(a.vars||a).shadows[2]},t.disableElevation&&{boxShadow:"none"},t.fullWidth&&{width:"100%"},t.orientation==="vertical"&&{flexDirection:"column"},{[`& .${i.grouped}`]:c({minWidth:40,"&:hover":c({},t.variant==="contained"&&{boxShadow:"none"})},t.variant==="contained"&&{boxShadow:"none"}),[`& .${i.firstButton},& .${i.middleButton}`]:c({},t.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},t.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},t.variant==="text"&&t.orientation==="horizontal"&&{borderRight:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${i.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},t.variant==="text"&&t.orientation==="vertical"&&{borderBottom:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${i.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},t.variant==="text"&&t.color!=="inherit"&&{borderColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:X(a.palette[t.color].main,.5)},t.variant==="outlined"&&t.orientation==="horizontal"&&{borderRightColor:"transparent"},t.variant==="outlined"&&t.orientation==="vertical"&&{borderBottomColor:"transparent"},t.variant==="contained"&&t.orientation==="horizontal"&&{borderRight:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${i.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},t.variant==="contained"&&t.orientation==="vertical"&&{borderBottom:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${i.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},t.variant==="contained"&&t.color!=="inherit"&&{borderColor:(a.vars||a).palette[t.color].dark},{"&:hover":c({},t.variant==="outlined"&&t.orientation==="horizontal"&&{borderRightColor:"currentColor"},t.variant==="outlined"&&t.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${i.lastButton},& .${i.middleButton}`]:c({},t.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},t.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},t.variant==="outlined"&&t.orientation==="horizontal"&&{marginLeft:-1},t.variant==="outlined"&&t.orientation==="vertical"&&{marginTop:-1})})),Ce=F.forwardRef(function(t,r){const g=S({props:t,name:"MuiButtonGroup"}),{children:$,className:w,color:d="primary",component:p="div",disabled:h=!1,disableElevation:R=!1,disableFocusRipple:z=!1,disableRipple:o=!1,fullWidth:f=!1,orientation:y="horizontal",size:l="medium",variant:j="outlined"}=g,q=ee(g,fe),M=c({},g,{color:d,component:p,disabled:h,disableElevation:R,disableFocusRipple:z,disableRipple:o,fullWidth:f,orientation:y,size:l,variant:j}),B=je(M),_=F.useMemo(()=>({className:B.grouped,color:d,disabled:h,disableElevation:R,disableFocusRipple:z,disableRipple:o,fullWidth:f,size:l,variant:j}),[d,h,R,z,o,f,l,j,B.grouped]),H=me($),Y=H.length,J=G=>{const k=G===0,E=G===Y-1;return k&&E?"":k?B.firstButton:E?B.lastButton:B.middleButton};return e.jsx(Be,c({as:p,role:"group",className:ae(B.root,w),ref:r,ownerState:M},q,{children:e.jsx(te.Provider,{value:_,children:H.map((G,k)=>e.jsx(oe.Provider,{value:J(k),children:G},k))})}))}),$e=Ce,we=ue().shape({name:V().trim("Cannot include leading and trailing spaces").min(2,"Too short name").max(20,"Too long name").required("Name should be filled"),age:P().trim("Cannot include leading and trailing spaces").positive("Age should be positive").integer("Age should be integer").min(16,"Incorrect data for calculation").max(120,"Are you serious?").required("Age should be filled"),gender:V().oneOf(["male","female"]).required(),height:P().trim("Cannot include leading and trailing spaces").positive("Height should be positive").integer("Height should be integer").min(140,"Incorrect data for calculation").max(250,"Incorrect data for calculation").required("Height should be filled"),weight:P().trim("Cannot include leading and trailing spaces").positive("Height should be positive").integer("Height should be integer").min(40,"Incorrect data for calculation").max(200,"Incorrect data for calculation").required("Height should be filled"),activityLevel:P().oneOf([1.2,1.375,1.55,1.725,1.9]).required()}),Re="/Healthy_life/assets/settings-page-image-b0655153.png",ke=n.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 72px;
  }
`,Le=n.h2`
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
`,Fe=n.div`
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
`,ze=n.img`
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
`,Ge=n(ce)`
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
`,L=n.label`
  font-family: 'Poppins500';
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,T=n(ge)`
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
    border-color: var(--primary-color-green-lite);
  }
`,Pe=n.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Te=n.div`
  width: 219px;
  display: flex;
  gap: 12px;
  margin-top: 12px;

  &:hover {
    cursor: pointer;
  }
`,We=n.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Me=n.label`
  background-color: var(--primary-color-black-one);
  padding: 0px;
  border: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    cursor: pointer;
  }
`,He=n.span`
  color: var(--primary-color-white);
  font-family: 'Poppins400';
  font-size: 13.5px;
`,Ee=n.input`
  ${re}
`,Ie={gap:"12px",width:"300px",[W.breakpoints.up("tablet")]:{width:"212px"}},A={fontFamily:"Poppins500",fontSize:"14px",color:"white.main","&.Mui-focused":{color:"white.main"}},v={gap:"8px",margin:"0px","& .MuiTypography-root":{fontFamily:"Poppins400",fontWeight:400,fontSize:"14px"},"& .MuiButtonBase-root":{padding:"0px"}},b={color:"grey.main","&.Mui-checked":{color:"greenlite.main"},"& .MuiSvgIcon-root":{width:"12px",height:"12px"}},De={gap:"12px",width:"100%",[W.breakpoints.down("tablet")]:{flexDirection:"column"},"& .MuiButtonGroup-firstButton":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",margin:"0px",borderRightColor:"none"},"& .MuiButtonGroup-firstButton:hover":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-lastButton":{borderRadius:"12px",color:"grey.main",margin:"0px"},"& .MuiButtonGroup-lastButton:hover":{borderColor:"greenlite.main",color:"greenlite.main"}},N={width:"212px",padding:"8px 10px",border:"1px solid transparent",[W.breakpoints.down("tablet")]:{width:"100%"}},u=n.div`
  color: #e74a3b;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-left: 4px;
`;let C;const Oe=()=>{var f;const a=ne(),t=F.useRef(((f=a.state)==null?void 0:f.from)??"/main"),r=le(se),{name:g,avatar:$,age:w,gender:d,height:p,weight:h,activityLevel:R}=r,o=he({initialValues:{name:g,avatar:"",age:w,gender:d,height:p,weight:h,activityLevel:R},validationSchema:we,onSubmit:y=>{o.values.activityLevel=Number(y.activityLevel);let l=new FormData;C&&l.append("avatar",o.values.avatar),l.append("name",o.values.name),l.append("age",o.values.age),l.append("gender",o.values.gender),l.append("height",o.values.height),l.append("weight",o.values.weight),l.append("activityLevel",o.values.activityLevel);for(let j of l.entries())console.log(j[0]+", "+j[1]),C=null}});return e.jsxs(ke,{children:[e.jsx(Le,{children:"Profile setting"}),e.jsxs(Fe,{children:[e.jsx(ze,{src:Re,alt:"Page image"}),e.jsx(xe,{children:e.jsxs(Ge,{onSubmit:o.handleSubmit,children:[e.jsxs(L,{htmlFor:"name",children:["Your name",e.jsx(T,{id:"name",name:"name",value:o.values.name,onChange:o.handleChange}),o.errors.name&&o.touched.name&&e.jsx(u,{id:"feedback",name:"name",children:o.errors.name})]}),e.jsxs(L,{children:["Your photo",e.jsxs(Te,{children:[e.jsx(Pe,{src:C?URL.createObjectURL(o.values.avatar):$,alt:"user avatar",file:o.values.avatar}),e.jsxs(Me,{type:"button",htmlFor:"avatar",children:[e.jsx(Ee,{id:"avatar",name:"avatar",type:"file",accept:"image/png, .svg, .jpg, .gif, .jpeg, .webp",onChange:y=>{y.currentTarget.files&&(C=y.currentTarget.files[0],o.setFieldValue("avatar",C))}}),e.jsx(We,{children:e.jsx("use",{href:`${de}#icon-direct-inbox`})}),e.jsx(He,{children:C?o.values.avatar.name:"Download new photo"})]})]})]}),e.jsxs(L,{htmlFor:"age",children:["Your age",e.jsx(T,{id:"age",name:"age",type:"number",value:o.values.age,onChange:o.handleChange}),o.errors.age&&o.touched.age&&e.jsx(u,{id:"feedback",name:"age",children:o.errors.age})]}),e.jsxs(I,{sx:Ie,children:[e.jsx(D,{id:"gender",sx:A,children:"Gender"}),e.jsxs(O,{row:!0,sx:{gap:"16px"},"aria-labelledby":"gender",name:"gender",value:o.values.gender,onChange:o.handleChange,children:[e.jsx(x,{value:"male",sx:v,control:e.jsx(m,{sx:b}),label:"Male"}),e.jsx(x,{value:"female",sx:v,control:e.jsx(m,{sx:b}),label:"Female"}),o.errors.gender&&o.touched.gender&&e.jsx(u,{id:"feedback",name:"gender",children:o.errors.gender})]})]}),e.jsxs(L,{htmlFor:"height",children:["Height",e.jsx(T,{id:"height",name:"height",type:"number",value:o.values.height,onChange:o.handleChange}),o.errors.height&&o.touched.height&&e.jsx(u,{id:"feedback",name:"height",children:o.errors.height}),e.jsx(u,{name:"height",component:"span"})]}),e.jsxs(L,{htmlFor:"weight",children:["Weight",e.jsx(T,{id:"weight",name:"weight",type:"number",value:o.values.weight,onChange:o.handleChange}),o.errors.weight&&o.touched.weight&&e.jsx(u,{id:"feedback",name:"weight",children:o.errors.weight}),e.jsx(u,{name:"weight",component:"span"})]}),e.jsxs(I,{sx:{gap:"12px"},children:[e.jsx(D,{id:"activityLevel",sx:A,children:"Your activity"}),e.jsxs(O,{row:!0,sx:{gap:"16px"},"aria-labelledby":"activityLevel",name:"activityLevel",type:"number",value:o.values.activityLevel,onChange:o.handleChange,children:[e.jsx(x,{value:"1.2",sx:v,control:e.jsx(m,{sx:b}),label:"1.2 - if you do not have physical activity and sedentary work"}),e.jsx(x,{value:"1.375",sx:v,control:e.jsx(m,{sx:b}),label:`1.375 - if you do short runs or light gymnastics 1-3 times a
                  week`}),e.jsx(x,{value:"1.55",sx:v,control:e.jsx(m,{sx:b}),label:"1.55 - if you play sports with average loads 3-5 times a week"}),e.jsx(x,{value:"1.725",sx:v,control:e.jsx(m,{sx:b}),label:"1.725 - if you train fully 6-7 times a week"}),e.jsx(x,{value:"1.9",sx:v,control:e.jsx(m,{sx:b}),label:`1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program`}),o.errors.activityLevel&&o.touched.activityLevel&&e.jsx(u,{id:"feedback",name:"activityLevel",children:o.errors.activityLevel})]})]}),e.jsxs($e,{"aria-label":"button group",sx:De,children:[e.jsx(U,{sx:N,type:"submit",children:"Save"}),e.jsx(U,{sx:N,children:e.jsx(pe,{to:t.current,children:"Cancel"})})]})]})})]})]})},Ae=()=>e.jsx(e.Fragment,{children:e.jsx(Oe,{})});export{Ae as default};
