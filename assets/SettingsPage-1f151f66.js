import{r as F,w as K,x as Q,y as X,_ as c,z as Z,A as S,B as ee,j as e,C as oe,D as te,E as ae,F as s,G as ie,s as n,H as re,t as T,I as ne,g as le,J as se,b as de,K as I,M as D,O,P as x,Q as m,S as V,L as pe}from"./index-92df332f.js";import{c as ue,a as U,e as P,b as ce,d as ge,u as he,F as xe}from"./index.esm-cb4f64da.js";function me(a){return F.Children.toArray(a).filter(o=>F.isValidElement(o))}function ve(a){return Q("MuiButtonGroup",a)}const be=K("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),i=be,fe=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],ye=(a,o)=>{const{ownerState:r}=a;return[{[`& .${i.grouped}`]:o.grouped},{[`& .${i.grouped}`]:o[`grouped${s(r.orientation)}`]},{[`& .${i.grouped}`]:o[`grouped${s(r.variant)}`]},{[`& .${i.grouped}`]:o[`grouped${s(r.variant)}${s(r.orientation)}`]},{[`& .${i.grouped}`]:o[`grouped${s(r.variant)}${s(r.color)}`]},{[`& .${i.firstButton}`]:o.firstButton},{[`& .${i.lastButton}`]:o.lastButton},{[`& .${i.middleButton}`]:o.middleButton},o.root,o[r.variant],r.disableElevation===!0&&o.disableElevation,r.fullWidth&&o.fullWidth,r.orientation==="vertical"&&o.vertical]},je=a=>{const{classes:o,color:r,disabled:g,disableElevation:$,fullWidth:w,orientation:d,variant:p}=a,h={root:["root",p,d==="vertical"&&"vertical",w&&"fullWidth",$&&"disableElevation"],grouped:["grouped",`grouped${s(d)}`,`grouped${s(p)}`,`grouped${s(p)}${s(d)}`,`grouped${s(p)}${s(r)}`,g&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return ie(h,ve,o)},Be=X("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:ye})(({theme:a,ownerState:o})=>c({display:"inline-flex",borderRadius:(a.vars||a).shape.borderRadius},o.variant==="contained"&&{boxShadow:(a.vars||a).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${i.grouped}`]:c({minWidth:40,"&:hover":c({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"}),[`& .${i.firstButton},& .${i.middleButton}`]:c({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${i.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${i.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},o.variant==="text"&&o.color!=="inherit"&&{borderColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.5)`:Z(a.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${i.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${i.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(a.vars||a).palette[o.color].dark},{"&:hover":c({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${i.lastButton},& .${i.middleButton}`]:c({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1})})),Ce=F.forwardRef(function(o,r){const g=S({props:o,name:"MuiButtonGroup"}),{children:$,className:w,color:d="primary",component:p="div",disabled:h=!1,disableElevation:R=!1,disableFocusRipple:z=!1,disableRipple:t=!1,fullWidth:f=!1,orientation:y="horizontal",size:l="medium",variant:j="outlined"}=g,q=ee(g,fe),W=c({},g,{color:d,component:p,disabled:h,disableElevation:R,disableFocusRipple:z,disableRipple:t,fullWidth:f,orientation:y,size:l,variant:j}),B=je(W),_=F.useMemo(()=>({className:B.grouped,color:d,disabled:h,disableElevation:R,disableFocusRipple:z,disableRipple:t,fullWidth:f,size:l,variant:j}),[d,h,R,z,t,f,l,j,B.grouped]),H=me($),Y=H.length,J=G=>{const k=G===0,E=G===Y-1;return k&&E?"":k?B.firstButton:E?B.lastButton:B.middleButton};return e.jsx(Be,c({as:p,role:"group",className:ae(B.root,w),ref:r,ownerState:W},q,{children:e.jsx(oe.Provider,{value:_,children:H.map((G,k)=>e.jsx(te.Provider,{value:J(k),children:G},k))})}))}),$e=Ce,we=ue().shape({name:U().min(2,"Too short name").max(20,"Too long name").required("Name should be filled"),age:P().positive("Age should be positive").integer("Age should be integer").min(16,"Incorrect data for calculation").max(120,"Are you serious?").required("Age should be filled"),gender:U().oneOf(["male","female"]).required(),height:P().positive("Height should be positive").integer("Height should be integer").min(140,"Incorrect data for calculation").max(250,"Incorrect data for calculation").required("Height should be filled"),weight:P().positive("Height should be positive").integer("Height should be integer").min(40,"Incorrect data for calculation").max(200,"Incorrect data for calculation").required("Height should be filled"),activityLevel:P().oneOf([1.2,1.375,1.55,1.725,1.9]).required()}),Re="/Healthy_life/assets/settings-page-image-b0655153.png",ke=n.div`
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
`,M=n(ge)`
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
`,Me=n.div`
  width: 219px;
  display: flex;
  gap: 12px;
  margin-top: 12px;

  &:hover {
    cursor: pointer;
  }
`,Te=n.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,We=n.label`
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
`,Ie={gap:"12px",width:"300px",[T.breakpoints.up("tablet")]:{width:"212px"}},A={fontFamily:"Poppins500",fontSize:"14px",color:"white.main","&.Mui-focused":{color:"white.main"}},v={gap:"8px",margin:"0px","& .MuiTypography-root":{fontFamily:"Poppins400",fontWeight:400,fontSize:"14px"},"& .MuiButtonBase-root":{padding:"0px"}},b={color:"grey.main","&.Mui-checked":{color:"greenlite.main"},"& .MuiSvgIcon-root":{width:"12px",height:"12px"}},De={gap:"12px",width:"100%",[T.breakpoints.down("tablet")]:{flexDirection:"column"},"& .MuiButtonGroup-firstButton":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",margin:"0px",borderRightColor:"none"},"& .MuiButtonGroup-firstButton:hover":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-lastButton":{borderRadius:"12px",color:"grey.main",margin:"0px"},"& .MuiButtonGroup-lastButton:hover":{borderColor:"greenlite.main",color:"greenlite.main"}},N={width:"212px",padding:"8px 10px",border:"1px solid transparent",[T.breakpoints.down("tablet")]:{width:"100%"}},u=n.div`
  color: red;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-left: 4px;
`;let C;const Oe=()=>{var f;const a=ne(),o=F.useRef(((f=a.state)==null?void 0:f.from)??"/main"),r=le(se),{name:g,avatar:$,age:w,gender:d,height:p,weight:h,activityLevel:R}=r,t=he({initialValues:{name:g,avatar:"",age:w,gender:d,height:p,weight:h,activityLevel:R},validationSchema:we,onSubmit:y=>{t.values.activityLevel=Number(y.activityLevel);let l=new FormData;C&&l.append("avatar",t.values.avatar),l.append("name",t.values.name),l.append("age",t.values.age),l.append("gender",t.values.gender),l.append("height",t.values.height),l.append("weight",t.values.weight),l.append("activityLevel",t.values.activityLevel);for(let j of l.entries())console.log(j[0]+", "+j[1]),C=null}});return e.jsxs(ke,{children:[e.jsx(Le,{children:"Profile setting"}),e.jsxs(Fe,{children:[e.jsx(ze,{src:Re,alt:"Page image"}),e.jsx(xe,{children:e.jsxs(Ge,{onSubmit:t.handleSubmit,children:[e.jsxs(L,{htmlFor:"name",children:["Your name",e.jsx(M,{id:"name",name:"name",value:t.values.name,onChange:t.handleChange}),t.errors.name&&t.touched.name&&e.jsx(u,{id:"feedback",name:"name",children:t.errors.name})]}),e.jsxs(L,{children:["Your photo",e.jsxs(Me,{children:[e.jsx(Pe,{src:C?URL.createObjectURL(t.values.avatar):$,alt:"user avatar",file:t.values.avatar}),e.jsxs(We,{type:"button",htmlFor:"avatar",children:[e.jsx(Ee,{id:"avatar",name:"avatar",type:"file",accept:"image/png, .svg, .jpg, .gif, .jpeg, .webp",onChange:y=>{y.currentTarget.files&&(C=y.currentTarget.files[0],t.setFieldValue("avatar",C))}}),e.jsx(Te,{children:e.jsx("use",{href:`${de}#icon-direct-inbox`})}),e.jsx(He,{children:C?t.values.avatar.name:"Download new photo"})]})]})]}),e.jsxs(L,{htmlFor:"age",children:["Your age",e.jsx(M,{id:"age",name:"age",type:"number",value:t.values.age,onChange:t.handleChange}),t.errors.age&&t.touched.age&&e.jsx(u,{id:"feedback",name:"age",children:t.errors.age})]}),e.jsxs(I,{sx:Ie,children:[e.jsx(D,{id:"gender",sx:A,children:"Gender"}),e.jsxs(O,{row:!0,sx:{gap:"16px"},"aria-labelledby":"gender",name:"gender",value:t.values.gender,onChange:t.handleChange,children:[e.jsx(x,{value:"male",sx:v,control:e.jsx(m,{sx:b}),label:"Male"}),e.jsx(x,{value:"female",sx:v,control:e.jsx(m,{sx:b}),label:"Female"}),t.errors.gender&&t.touched.gender&&e.jsx(u,{id:"feedback",name:"gender",children:t.errors.gender})]})]}),e.jsxs(L,{htmlFor:"height",children:["Height",e.jsx(M,{id:"height",name:"height",type:"number",value:t.values.height,onChange:t.handleChange}),t.errors.height&&t.touched.height&&e.jsx(u,{id:"feedback",name:"height",children:t.errors.height}),e.jsx(u,{name:"height",component:"span"})]}),e.jsxs(L,{htmlFor:"weight",children:["Weight",e.jsx(M,{id:"weight",name:"weight",type:"number",value:t.values.weight,onChange:t.handleChange}),t.errors.weight&&t.touched.weight&&e.jsx(u,{id:"feedback",name:"weight",children:t.errors.weight}),e.jsx(u,{name:"weight",component:"span"})]}),e.jsxs(I,{sx:{gap:"12px"},children:[e.jsx(D,{id:"activityLevel",sx:A,children:"Your activity"}),e.jsxs(O,{row:!0,sx:{gap:"16px"},"aria-labelledby":"activityLevel",name:"activityLevel",type:"number",value:t.values.activityLevel,onChange:t.handleChange,children:[e.jsx(x,{value:"1.2",sx:v,control:e.jsx(m,{sx:b}),label:"1.2 - if you do not have physical activity and sedentary work"}),e.jsx(x,{value:"1.375",sx:v,control:e.jsx(m,{sx:b}),label:`1.375 - if you do short runs or light gymnastics 1-3 times a
                  week`}),e.jsx(x,{value:"1.55",sx:v,control:e.jsx(m,{sx:b}),label:"1.55 - if you play sports with average loads 3-5 times a week"}),e.jsx(x,{value:"1.725",sx:v,control:e.jsx(m,{sx:b}),label:"1.725 - if you train fully 6-7 times a week"}),e.jsx(x,{value:"1.9",sx:v,control:e.jsx(m,{sx:b}),label:`1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program`}),t.errors.activityLevel&&t.touched.activityLevel&&e.jsx(u,{id:"feedback",name:"activityLevel",children:t.errors.activityLevel})]})]}),e.jsxs($e,{"aria-label":"button group",sx:De,children:[e.jsx(V,{sx:N,type:"submit",children:"Save"}),e.jsx(V,{sx:N,children:e.jsx(pe,{to:o.current,children:"Cancel"})})]})]})})]})]})},Ae=()=>e.jsx(e.Fragment,{children:e.jsx(Oe,{})});export{Ae as default};
