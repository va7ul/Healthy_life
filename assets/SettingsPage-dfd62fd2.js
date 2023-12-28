import{r as G,S as X,U as Z,V as S,J as h,ag as ee,W as oe,_ as te,j as e,az as ae,aA as ie,K as re,x as s,a1 as ne,s as n,c as le,a as I,e as k,aB as se,t as W,F as de,b as pe,u as ue,i as A,aC as ce,aD as ge,aE as he,d as xe,n as me,aj as O,a8 as D,aF as N,aG as m,aH as v,aI as H,ao as ve}from"./index-a4c02358.js";import{n as q}from"./notiflix-notify-aio-832785fd.js";import{c as be}from"./dashboardSelectors-14fa5b63.js";function fe(a){return G.Children.toArray(a).filter(o=>G.isValidElement(o))}function ye(a){return Z("MuiButtonGroup",a)}const je=X("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),i=je,Be=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Ce=(a,o)=>{const{ownerState:r}=a;return[{[`& .${i.grouped}`]:o.grouped},{[`& .${i.grouped}`]:o[`grouped${s(r.orientation)}`]},{[`& .${i.grouped}`]:o[`grouped${s(r.variant)}`]},{[`& .${i.grouped}`]:o[`grouped${s(r.variant)}${s(r.orientation)}`]},{[`& .${i.grouped}`]:o[`grouped${s(r.variant)}${s(r.color)}`]},{[`& .${i.firstButton}`]:o.firstButton},{[`& .${i.lastButton}`]:o.lastButton},{[`& .${i.middleButton}`]:o.middleButton},o.root,o[r.variant],r.disableElevation===!0&&o.disableElevation,r.fullWidth&&o.fullWidth,r.orientation==="vertical"&&o.vertical]},we=a=>{const{classes:o,color:r,disabled:u,disableElevation:j,fullWidth:B,orientation:d,variant:p}=a,x={root:["root",p,d==="vertical"&&"vertical",B&&"fullWidth",j&&"disableElevation"],grouped:["grouped",`grouped${s(d)}`,`grouped${s(p)}`,`grouped${s(p)}${s(d)}`,`grouped${s(p)}${s(r)}`,u&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return ne(x,ye,o)},$e=S("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:Ce})(({theme:a,ownerState:o})=>h({display:"inline-flex",borderRadius:(a.vars||a).shape.borderRadius},o.variant==="contained"&&{boxShadow:(a.vars||a).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${i.grouped}`]:h({minWidth:40,"&:hover":h({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"}),[`& .${i.firstButton},& .${i.middleButton}`]:h({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${i.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${i.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},o.variant==="text"&&o.color!=="inherit"&&{borderColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.5)`:ee(a.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${i.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${i.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(a.vars||a).palette[o.color].dark},{"&:hover":h({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${i.lastButton},& .${i.middleButton}`]:h({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1})})),Re=G.forwardRef(function(o,r){const u=oe({props:o,name:"MuiButtonGroup"}),{children:j,className:B,color:d="primary",component:p="div",disabled:x=!1,disableElevation:$=!1,disableFocusRipple:t=!1,disableRipple:c=!1,fullWidth:l=!1,orientation:_="horizontal",size:z="medium",variant:P="outlined"}=u,Y=te(u,Be),M=h({},u,{color:d,component:p,disabled:x,disableElevation:$,disableFocusRipple:t,disableRipple:c,fullWidth:l,orientation:_,size:z,variant:P}),y=we(M),J=G.useMemo(()=>({className:y.grouped,color:d,disabled:x,disableElevation:$,disableFocusRipple:t,disableRipple:c,fullWidth:l,size:z,variant:P}),[d,x,$,t,c,l,z,P,y.grouped]),T=fe(j),K=T.length,Q=R=>{const C=R===0,E=R===K-1;return C&&E?"":C?y.firstButton:E?y.lastButton:y.middleButton};return e.jsx($e,h({as:p,role:"group",className:re(y.root,B),ref:r,ownerState:M},Y,{children:e.jsx(ae.Provider,{value:J,children:T.map((R,C)=>e.jsx(ie.Provider,{value:Q(C),children:R},C))})}))}),ke=Re,Le="/Healthy_life/assets/settings-page-image-7ee4756a.png",Fe=n.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 72px;
  }
`,Ge=n.h2`
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
`,ze=n.div`
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
`,Pe=n.img`
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
`,We=le().shape({name:I().trim("Cannot include leading and trailing spaces").strict().min(2,"Too short name").max(20,"Too long name").required("Name should be filled"),age:k().positive("Age should be positive").integer("Age should be integer").min(16,"Incorrect data for calculation").max(120,"Are you serious?").required("Age should be filled"),gender:I().oneOf(["male","female"]).required(),height:k().positive("Height should be positive").integer("Height should be integer").min(140,"Incorrect data for calculation").max(250,"Incorrect data for calculation").required("Height should be filled"),weight:k().positive("Weight should be positive").integer("Weight should be integer").min(40,"Incorrect data for calculation").max(200,"Incorrect data for calculation").required("Weight should be filled"),activityLevel:k().oneOf([1.2,1.375,1.55,1.725,1.9]).required()}),Me=n(de)`
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
`,w=n.label`
  font-family: 'Poppins500';
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,L=n(pe)`
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
`,Te=n.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Ee=n.div`
  width: 219px;
  display: flex;
  gap: 12px;
  margin-top: 12px;

  &:hover {
    cursor: pointer;
  }
`,Ie=n.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Oe=n.label`
  background-color: var(--primary-color-black-one);
  padding: 0px;
  border: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    cursor: pointer;
  }
`,De=n.span`
  color: var(--primary-color-white);
  font-family: 'Poppins400';
  font-size: 13.5px;
`,Ne=n.input`
  ${se}
`,He={gap:"12px",width:"300px",[W.breakpoints.up("tablet")]:{width:"212px"}},U={fontFamily:"Poppins500",fontSize:"14px",color:"white.main","&.Mui-focused":{color:"white.main"}},b={gap:"8px",margin:"0px","& .MuiTypography-root":{fontFamily:"Poppins400",fontWeight:400,fontSize:"14px"},"& .MuiButtonBase-root":{padding:"0px"}},f={color:"grey.main","&.Mui-checked":{color:"greenlite.main"},"& .MuiSvgIcon-root":{width:"12px",height:"12px"}},Ue={gap:"12px",width:"100%",[W.breakpoints.down("tablet")]:{flexDirection:"column"},"& .MuiButtonGroup-firstButton":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",margin:"0px",borderRightColor:"none"},"& .MuiButtonGroup-firstButton:hover":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"yellow.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-firstButton:focus":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"yellow.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-lastButton":{borderRadius:"12px",color:"grey.main",margin:"0px"},"& .MuiButtonGroup-lastButton:hover":{borderColor:"yellow.main",color:"yellow.main"},"& .MuiButtonGroup-lastButton:focus":{borderColor:"yellow.main",color:"yellow.main"}},V={width:"212px",padding:"8px 10px",border:"1px solid transparent",[W.breakpoints.down("tablet")]:{width:"100%"}},g=n.div`
  color: #e74a3b;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-left: 4px;
`;q.Notify.init({showOnlyTheLastOne:!0,cssAnimationStyle:"from-bottom",clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});let F;const Ve=()=>{const a=ue(),o=A(ce),{name:r,avatar:u,age:j,gender:B,height:d,weight:p,activityLevel:x}=o,t=ge({initialValues:{name:r,avatar:u,age:j,gender:B,height:d,weight:p,activityLevel:x},validationSchema:We,onSubmit:c=>{t.values.activityLevel=Number(c.activityLevel);let l=new FormData;l.append("avatar",t.values.avatar),l.append("name",t.values.name),l.append("age",t.values.age),l.append("gender",t.values.gender),l.append("height",t.values.height),l.append("weight",t.values.weight),l.append("activityLevel",t.values.activityLevel),a(he(l))}});return e.jsx(xe,{children:e.jsxs(Me,{onSubmit:t.handleSubmit,onReset:t.handleReset,autoComplete:"off",children:[e.jsxs(w,{htmlFor:"name",children:["Your name",e.jsx(L,{id:"name",name:"name",value:t.values.name,onChange:t.handleChange}),t.errors.name&&t.touched.name&&e.jsx(g,{id:"feedback",name:"name",children:t.errors.name})]}),e.jsxs(w,{children:["Your photo",e.jsxs(Ee,{children:[e.jsx(Te,{src:t.values.avatar?u:URL.createObjectURL(t.values.avatar),alt:"user avatar",file:t.values.avatar}),e.jsxs(Oe,{type:"button",htmlFor:"avatar",children:[e.jsx(Ne,{id:"avatar",name:"avatar",type:"file",accept:"image/png, .svg, .jpg, .gif, .jpeg, .webp",onChange:c=>{if(!c.currentTarget.files){q.Notify.failure("Oops! No image selected");return}F=c.currentTarget.files[0],t.setFieldValue("avatar",F)}}),e.jsx(Ie,{children:e.jsx("use",{href:`${me}#icon-direct-inbox`})}),e.jsx(De,{children:F?t.values.avatar.name:"Download new photo"})]})]})]}),e.jsxs(w,{htmlFor:"age",children:["Your age",e.jsx(L,{id:"age",name:"age",type:"number",value:t.values.age,onChange:t.handleChange}),t.errors.age&&t.touched.age&&e.jsx(g,{id:"feedback",name:"age",children:t.errors.age})]}),e.jsxs(O,{sx:He,children:[e.jsx(D,{id:"gender",sx:U,children:"Gender"}),e.jsxs(N,{row:!0,sx:{gap:"16px"},"aria-labelledby":"gender",name:"gender",value:t.values.gender,onChange:t.handleChange,children:[e.jsx(m,{value:"male",sx:b,control:e.jsx(v,{sx:f}),label:"Male"}),e.jsx(m,{value:"female",sx:b,control:e.jsx(v,{sx:f}),label:"Female"}),t.errors.gender&&t.touched.gender&&e.jsx(g,{id:"feedback",name:"gender",children:t.errors.gender})]})]}),e.jsxs(w,{htmlFor:"height",children:["Height",e.jsx(L,{id:"height",name:"height",type:"number",value:t.values.height,onChange:t.handleChange}),t.errors.height&&t.touched.height&&e.jsx(g,{id:"feedback",name:"height",children:t.errors.height}),e.jsx(g,{name:"height",component:"span"})]}),e.jsxs(w,{htmlFor:"weight",children:["Weight",e.jsx(L,{id:"weight",name:"weight",type:"number",value:t.values.weight,onChange:t.handleChange}),t.errors.weight&&t.touched.weight&&e.jsx(g,{id:"feedback",name:"weight",children:t.errors.weight}),e.jsx(g,{name:"weight",component:"span"})]}),e.jsxs(O,{sx:{gap:"12px"},children:[e.jsx(D,{id:"activityLevel",sx:U,children:"Your activity"}),e.jsxs(N,{row:!0,sx:{gap:"16px"},"aria-labelledby":"activityLevel",name:"activityLevel",type:"number",value:t.values.activityLevel,onChange:t.handleChange,children:[e.jsx(m,{value:"1.2",sx:b,control:e.jsx(v,{sx:f}),label:"1.2 - if you do not have physical activity and sedentary work"}),e.jsx(m,{value:"1.375",sx:b,control:e.jsx(v,{sx:f}),label:`1.375 - if you do short runs or light gymnastics 1-3 times a
                  week`}),e.jsx(m,{value:"1.55",sx:b,control:e.jsx(v,{sx:f}),label:"1.55 - if you play sports with average loads 3-5 times a week"}),e.jsx(m,{value:"1.725",sx:b,control:e.jsx(v,{sx:f}),label:"1.725 - if you train fully 6-7 times a week"}),e.jsx(m,{value:"1.9",sx:b,control:e.jsx(v,{sx:f}),label:`1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program`}),t.errors.activityLevel&&t.touched.activityLevel&&e.jsx(g,{id:"feedback",name:"activityLevel",children:t.errors.activityLevel})]})]}),e.jsxs(ke,{"aria-label":"button group",sx:Ue,children:[e.jsx(H,{sx:V,type:"submit",children:"Save"}),e.jsx(H,{sx:V,type:"reset",onClick:F=null,children:"Cancel"})]})]})})},Ae=()=>e.jsxs(Fe,{children:[e.jsx(Ge,{children:"Profile setting"}),e.jsxs(ze,{children:[e.jsx(Pe,{src:Le,alt:"Page image"}),e.jsx(Ve,{})]})]}),Je=()=>{const a=A(be);return e.jsx(e.Fragment,{children:a?e.jsx(ve,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"40vh auto 0 auto"}}):e.jsx(Ae,{})})};export{Je as default};
