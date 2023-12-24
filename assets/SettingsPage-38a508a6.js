import{r as L,B as K,G as Q,H as Z,z as g,Q as X,J as S,_ as ee,j as e,Z as te,$ as oe,A as ae,O as s,K as ie,s as n,a0 as re,t as M,u as ne,U as le,d as se,a1 as de,h as pe,F as D,a2 as U,a3 as O,a4 as m,a5 as v,a6 as V,L as ue,a7 as ce}from"./index-022e5f0c.js";import{c as ge,a as A,e as T,b as he,d as xe,u as me,F as ve}from"./index.esm-bcaa8d79.js";function be(a){return L.Children.toArray(a).filter(t=>L.isValidElement(t))}function fe(a){return Q("MuiButtonGroup",a)}const ye=K("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),i=ye,je=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Be=(a,t)=>{const{ownerState:r}=a;return[{[`& .${i.grouped}`]:t.grouped},{[`& .${i.grouped}`]:t[`grouped${s(r.orientation)}`]},{[`& .${i.grouped}`]:t[`grouped${s(r.variant)}`]},{[`& .${i.grouped}`]:t[`grouped${s(r.variant)}${s(r.orientation)}`]},{[`& .${i.grouped}`]:t[`grouped${s(r.variant)}${s(r.color)}`]},{[`& .${i.firstButton}`]:t.firstButton},{[`& .${i.lastButton}`]:t.lastButton},{[`& .${i.middleButton}`]:t.middleButton},t.root,t[r.variant],r.disableElevation===!0&&t.disableElevation,r.fullWidth&&t.fullWidth,r.orientation==="vertical"&&t.vertical]},Ce=a=>{const{classes:t,color:r,disabled:h,disableElevation:j,fullWidth:B,orientation:d,variant:p}=a,x={root:["root",p,d==="vertical"&&"vertical",B&&"fullWidth",j&&"disableElevation"],grouped:["grouped",`grouped${s(d)}`,`grouped${s(p)}`,`grouped${s(p)}${s(d)}`,`grouped${s(p)}${s(r)}`,h&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return ie(x,fe,t)},$e=Z("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:Be})(({theme:a,ownerState:t})=>g({display:"inline-flex",borderRadius:(a.vars||a).shape.borderRadius},t.variant==="contained"&&{boxShadow:(a.vars||a).shadows[2]},t.disableElevation&&{boxShadow:"none"},t.fullWidth&&{width:"100%"},t.orientation==="vertical"&&{flexDirection:"column"},{[`& .${i.grouped}`]:g({minWidth:40,"&:hover":g({},t.variant==="contained"&&{boxShadow:"none"})},t.variant==="contained"&&{boxShadow:"none"}),[`& .${i.firstButton},& .${i.middleButton}`]:g({},t.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},t.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},t.variant==="text"&&t.orientation==="horizontal"&&{borderRight:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${i.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},t.variant==="text"&&t.orientation==="vertical"&&{borderBottom:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${i.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},t.variant==="text"&&t.color!=="inherit"&&{borderColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:X(a.palette[t.color].main,.5)},t.variant==="outlined"&&t.orientation==="horizontal"&&{borderRightColor:"transparent"},t.variant==="outlined"&&t.orientation==="vertical"&&{borderBottomColor:"transparent"},t.variant==="contained"&&t.orientation==="horizontal"&&{borderRight:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${i.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},t.variant==="contained"&&t.orientation==="vertical"&&{borderBottom:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${i.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},t.variant==="contained"&&t.color!=="inherit"&&{borderColor:(a.vars||a).palette[t.color].dark},{"&:hover":g({},t.variant==="outlined"&&t.orientation==="horizontal"&&{borderRightColor:"currentColor"},t.variant==="outlined"&&t.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${i.lastButton},& .${i.middleButton}`]:g({},t.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},t.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},t.variant==="outlined"&&t.orientation==="horizontal"&&{marginLeft:-1},t.variant==="outlined"&&t.orientation==="vertical"&&{marginTop:-1})})),we=L.forwardRef(function(t,r){const h=S({props:t,name:"MuiButtonGroup"}),{children:j,className:B,color:d="primary",component:p="div",disabled:x=!1,disableElevation:C=!1,disableFocusRipple:$=!1,disableRipple:F=!1,fullWidth:o=!1,orientation:z="horizontal",size:u="medium",variant:l="outlined"}=h,G=ee(h,je),H=g({},h,{color:d,component:p,disabled:x,disableElevation:C,disableFocusRipple:$,disableRipple:F,fullWidth:o,orientation:z,size:u,variant:l}),y=Ce(H),_=L.useMemo(()=>({className:y.grouped,color:d,disabled:x,disableElevation:C,disableFocusRipple:$,disableRipple:F,fullWidth:o,size:u,variant:l}),[d,x,C,$,F,o,u,l,y.grouped]),E=be(j),Y=E.length,J=P=>{const w=P===0,I=P===Y-1;return w&&I?"":w?y.firstButton:I?y.lastButton:y.middleButton};return e.jsx($e,g({as:p,role:"group",className:ae(y.root,B),ref:r,ownerState:H},G,{children:e.jsx(te.Provider,{value:_,children:E.map((P,w)=>e.jsx(oe.Provider,{value:J(w),children:P},w))})}))}),Re=we,ke=ge().shape({name:A().trim("Cannot include leading and trailing spaces").strict().min(2,"Too short name").max(20,"Too long name").required("Name should be filled"),age:T().positive("Age should be positive").integer("Age should be integer").min(16,"Incorrect data for calculation").max(120,"Are you serious?").required("Age should be filled"),gender:A().oneOf(["male","female"]).required(),height:T().positive("Height should be positive").integer("Height should be integer").min(140,"Incorrect data for calculation").max(250,"Incorrect data for calculation").required("Height should be filled"),weight:T().positive("Height should be positive").integer("Height should be integer").min(40,"Incorrect data for calculation").max(200,"Incorrect data for calculation").required("Height should be filled"),activityLevel:T().oneOf([1.2,1.375,1.55,1.725,1.9]).required()}),Le="/Healthy_life/assets/settings-page-image-b0655153.png",Fe=n.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 72px;
  }
`,ze=n.h2`
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
`,Ge=n.div`
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
`,Te=n(he)`
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
`,R=n.label`
  font-family: 'Poppins500';
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,W=n(xe)`
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
`,We=n.img`
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
`,He=n.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Ee=n.label`
  background-color: var(--primary-color-black-one);
  padding: 0px;
  border: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    cursor: pointer;
  }
`,Ie=n.span`
  color: var(--primary-color-white);
  font-family: 'Poppins400';
  font-size: 13.5px;
`,De=n.input`
  ${re}
`,Ue={gap:"12px",width:"300px",[M.breakpoints.up("tablet")]:{width:"212px"}},N={fontFamily:"Poppins500",fontSize:"14px",color:"white.main","&.Mui-focused":{color:"white.main"}},b={gap:"8px",margin:"0px","& .MuiTypography-root":{fontFamily:"Poppins400",fontWeight:400,fontSize:"14px"},"& .MuiButtonBase-root":{padding:"0px"}},f={color:"grey.main","&.Mui-checked":{color:"greenlite.main"},"& .MuiSvgIcon-root":{width:"12px",height:"12px"}},Oe={gap:"12px",width:"100%",[M.breakpoints.down("tablet")]:{flexDirection:"column"},"& .MuiButtonGroup-firstButton":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",margin:"0px",borderRightColor:"none"},"& .MuiButtonGroup-firstButton:hover":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-lastButton":{borderRadius:"12px",color:"grey.main",margin:"0px"},"& .MuiButtonGroup-lastButton:hover":{borderColor:"greenlite.main",color:"greenlite.main"}},q={width:"212px",padding:"8px 10px",border:"1px solid transparent",[M.breakpoints.down("tablet")]:{width:"100%"}},c=n.div`
  color: #e74a3b;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-left: 4px;
`;let k;const Ve=()=>{var z;const a=ne(),t=le(),r=L.useRef(((z=t.state)==null?void 0:z.from)??"/main"),h=se(de),{name:j,avatar:B,age:d,gender:p,height:x,weight:C,activityLevel:$}=h,o=me({initialValues:{name:j,avatar:"",age:d,gender:p,height:x,weight:C,activityLevel:$},validationSchema:ke,onSubmit:u=>{o.values.activityLevel=Number(u.activityLevel);let l=new FormData;l.append("avatar",o.values.avatar),l.append("name",o.values.name),l.append("age",o.values.age),l.append("gender",o.values.gender),l.append("height",o.values.height),l.append("weight",o.values.weight),l.append("activityLevel",o.values.activityLevel);for(let G of l.entries())console.log(G[0]+", "+G[1]),k=null;a(ce(l))}});return e.jsxs(Fe,{children:[e.jsx(ze,{children:"Profile setting"}),e.jsxs(Ge,{children:[e.jsx(Pe,{src:Le,alt:"Page image"}),e.jsx(ve,{children:e.jsxs(Te,{onSubmit:o.handleSubmit,children:[e.jsxs(R,{htmlFor:"name",children:["Your name",e.jsx(W,{id:"name",name:"name",value:o.values.name,onChange:o.handleChange}),o.errors.name&&o.touched.name&&e.jsx(c,{id:"feedback",name:"name",children:o.errors.name})]}),e.jsxs(R,{children:["Your photo",e.jsxs(Me,{children:[e.jsx(We,{src:k?URL.createObjectURL(o.values.avatar):B,alt:"user avatar",file:o.values.avatar}),e.jsxs(Ee,{type:"button",htmlFor:"avatar",children:[e.jsx(De,{id:"avatar",name:"avatar",type:"file",accept:"image/png, .svg, .jpg, .gif, .jpeg, .webp",onChange:u=>{u.currentTarget.files&&(k=u.currentTarget.files[0],o.setFieldValue("avatar",k))}}),e.jsx(He,{children:e.jsx("use",{href:`${pe}#icon-direct-inbox`})}),e.jsx(Ie,{children:k?o.values.avatar.name:"Download new photo"})]})]})]}),e.jsxs(R,{htmlFor:"age",children:["Your age",e.jsx(W,{id:"age",name:"age",type:"number",value:o.values.age,onChange:o.handleChange}),o.errors.age&&o.touched.age&&e.jsx(c,{id:"feedback",name:"age",children:o.errors.age})]}),e.jsxs(D,{sx:Ue,children:[e.jsx(U,{id:"gender",sx:N,children:"Gender"}),e.jsxs(O,{row:!0,sx:{gap:"16px"},"aria-labelledby":"gender",name:"gender",value:o.values.gender,onChange:o.handleChange,children:[e.jsx(m,{value:"male",sx:b,control:e.jsx(v,{sx:f}),label:"Male"}),e.jsx(m,{value:"female",sx:b,control:e.jsx(v,{sx:f}),label:"Female"}),o.errors.gender&&o.touched.gender&&e.jsx(c,{id:"feedback",name:"gender",children:o.errors.gender})]})]}),e.jsxs(R,{htmlFor:"height",children:["Height",e.jsx(W,{id:"height",name:"height",type:"number",value:o.values.height,onChange:o.handleChange}),o.errors.height&&o.touched.height&&e.jsx(c,{id:"feedback",name:"height",children:o.errors.height}),e.jsx(c,{name:"height",component:"span"})]}),e.jsxs(R,{htmlFor:"weight",children:["Weight",e.jsx(W,{id:"weight",name:"weight",type:"number",value:o.values.weight,onChange:o.handleChange}),o.errors.weight&&o.touched.weight&&e.jsx(c,{id:"feedback",name:"weight",children:o.errors.weight}),e.jsx(c,{name:"weight",component:"span"})]}),e.jsxs(D,{sx:{gap:"12px"},children:[e.jsx(U,{id:"activityLevel",sx:N,children:"Your activity"}),e.jsxs(O,{row:!0,sx:{gap:"16px"},"aria-labelledby":"activityLevel",name:"activityLevel",type:"number",value:o.values.activityLevel,onChange:o.handleChange,children:[e.jsx(m,{value:"1.2",sx:b,control:e.jsx(v,{sx:f}),label:"1.2 - if you do not have physical activity and sedentary work"}),e.jsx(m,{value:"1.375",sx:b,control:e.jsx(v,{sx:f}),label:`1.375 - if you do short runs or light gymnastics 1-3 times a
                  week`}),e.jsx(m,{value:"1.55",sx:b,control:e.jsx(v,{sx:f}),label:"1.55 - if you play sports with average loads 3-5 times a week"}),e.jsx(m,{value:"1.725",sx:b,control:e.jsx(v,{sx:f}),label:"1.725 - if you train fully 6-7 times a week"}),e.jsx(m,{value:"1.9",sx:b,control:e.jsx(v,{sx:f}),label:`1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program`}),o.errors.activityLevel&&o.touched.activityLevel&&e.jsx(c,{id:"feedback",name:"activityLevel",children:o.errors.activityLevel})]})]}),e.jsxs(Re,{"aria-label":"button group",sx:Oe,children:[e.jsx(V,{sx:q,type:"submit",children:"Save"}),e.jsx(V,{sx:q,children:e.jsx(ue,{to:r.current,children:"Cancel"})})]})]})})]})]})},qe=()=>e.jsx(e.Fragment,{children:e.jsx(Ve,{})});export{qe as default};
