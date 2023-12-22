import{r as R,k as X,m as Z,o as Q,_ as c,p as S,q as ee,v as oe,j as o,B as ie,w as te,x as ae,y as s,z as re,s as n,A as ne,t as T,C as se,g as le,D as de,b as pe,F as I,E as V,G as D,H as x,I as m,J as O,L as ue}from"./index-cba15a3a.js";import{c as ce,a as A,f as ge,e as z,b as he,d as xe,u as me,F as ve}from"./index.esm-b66139d1.js";function be(t){return R.Children.toArray(t).filter(e=>R.isValidElement(e))}function fe(t){return Z("MuiButtonGroup",t)}const ye=X("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),a=ye,je=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Be=(t,e)=>{const{ownerState:r}=t;return[{[`& .${a.grouped}`]:e.grouped},{[`& .${a.grouped}`]:e[`grouped${s(r.orientation)}`]},{[`& .${a.grouped}`]:e[`grouped${s(r.variant)}`]},{[`& .${a.grouped}`]:e[`grouped${s(r.variant)}${s(r.orientation)}`]},{[`& .${a.grouped}`]:e[`grouped${s(r.variant)}${s(r.color)}`]},{[`& .${a.firstButton}`]:e.firstButton},{[`& .${a.lastButton}`]:e.lastButton},{[`& .${a.middleButton}`]:e.middleButton},e.root,e[r.variant],r.disableElevation===!0&&e.disableElevation,r.fullWidth&&e.fullWidth,r.orientation==="vertical"&&e.vertical]},Ce=t=>{const{classes:e,color:r,disabled:p,disableElevation:g,fullWidth:B,orientation:l,variant:d}=t,h={root:["root",d,l==="vertical"&&"vertical",B&&"fullWidth",g&&"disableElevation"],grouped:["grouped",`grouped${s(l)}`,`grouped${s(d)}`,`grouped${s(d)}${s(l)}`,`grouped${s(d)}${s(r)}`,p&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return re(h,fe,e)},$e=Q("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:Be})(({theme:t,ownerState:e})=>c({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},e.orientation==="vertical"&&{flexDirection:"column"},{[`& .${a.grouped}`]:c({minWidth:40,"&:hover":c({},e.variant==="contained"&&{boxShadow:"none"})},e.variant==="contained"&&{boxShadow:"none"}),[`& .${a.firstButton},& .${a.middleButton}`]:c({},e.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},e.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},e.variant==="text"&&e.orientation==="horizontal"&&{borderRight:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${a.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},e.variant==="text"&&e.orientation==="vertical"&&{borderBottom:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${a.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},e.variant==="text"&&e.color!=="inherit"&&{borderColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:S(t.palette[e.color].main,.5)},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"transparent"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"transparent"},e.variant==="contained"&&e.orientation==="horizontal"&&{borderRight:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${a.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},e.variant==="contained"&&e.orientation==="vertical"&&{borderBottom:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${a.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},e.variant==="contained"&&e.color!=="inherit"&&{borderColor:(t.vars||t).palette[e.color].dark},{"&:hover":c({},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"currentColor"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${a.lastButton},& .${a.middleButton}`]:c({},e.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},e.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},e.variant==="outlined"&&e.orientation==="horizontal"&&{marginLeft:-1},e.variant==="outlined"&&e.orientation==="vertical"&&{marginTop:-1})})),we=R.forwardRef(function(e,r){const p=ee({props:e,name:"MuiButtonGroup"}),{children:g,className:B,color:l="primary",component:d="div",disabled:h=!1,disableElevation:C=!1,disableFocusRipple:k=!1,disableRipple:i=!1,fullWidth:f=!1,orientation:y="horizontal",size:L="medium",variant:P="outlined"}=p,_=oe(p,je),W=c({},p,{color:l,component:d,disabled:h,disableElevation:C,disableFocusRipple:k,disableRipple:i,fullWidth:f,orientation:y,size:L,variant:P}),j=Ce(W),Y=R.useMemo(()=>({className:j.grouped,color:l,disabled:h,disableElevation:C,disableFocusRipple:k,disableRipple:i,fullWidth:f,size:L,variant:P}),[l,h,C,k,i,f,L,P,j.grouped]),E=be(g),J=E.length,K=F=>{const $=F===0,H=F===J-1;return $&&H?"":$?j.firstButton:H?j.lastButton:j.middleButton};return o.jsx($e,c({as:d,role:"group",className:ae(j.root,B),ref:r,ownerState:W},_,{children:o.jsx(ie.Provider,{value:Y,children:E.map((F,$)=>o.jsx(te.Provider,{value:K($),children:F},$))})}))}),Re=we,ke=102400,Fe={image:["jpg","gif","png","jpeg","svg","webp"]};function ze(t,e){return t&&Fe[e].indexOf(t.split(".").pop())>-1}const Ge=ce().shape({name:A().min(2,"Too short name").max(20,"Too long name").required("Name should be filled"),image:ge().test("is-valid-type","Not a valid image type",t=>ze(t&&t.name.toLowerCase(),"image")).test("is-valid-size","Max allowed size is 100KB",t=>t&&t.size<=ke),age:z().positive("Age should be positive").integer("Age should be integer").min(16,"Incorrect data for calculation").max(120,"Are you serious?").required("Age should be filled"),gender:A().oneOf(["male","female"]).required(),height:z().positive("Height should be positive").integer("Height should be integer").min(140,"Incorrect data for calculation").max(250,"Incorrect data for calculation").required("Height should be filled"),weight:z().positive("Height should be positive").integer("Height should be integer").min(40,"Incorrect data for calculation").max(200,"Incorrect data for calculation").required("Height should be filled"),activity:z().oneOf([1.2,1.375,1.55,1.725,1.9]).required()}),Le="/Healthy_life/assets/settings-page-image-b0655153.png",Pe=n.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 72px;
  }
`,Me=n.h2`
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
`,Te=n.div`
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
`,We=n.img`
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
`,Ee=n(he)`
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
`,G=n(xe)`
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
`,U=n.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,He=n.div`
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
`,Ve=n.label`
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
`,Oe=n.input`
  ${ne}
`,Ae={gap:"12px",width:"300px",[T.breakpoints.up("tablet")]:{width:"212px"}},q={fontFamily:"Poppins500",fontSize:"14px",color:"white.main","&.Mui-focused":{color:"white.main"}},v={gap:"8px",margin:"0px","& .MuiTypography-root":{fontFamily:"Poppins400",fontWeight:400,fontSize:"14px"},"& .MuiButtonBase-root":{padding:"0px"}},b={color:"grey.main","&.Mui-checked":{color:"greenlite.main"},"& .MuiSvgIcon-root":{width:"12px",height:"12px"}},Ue={gap:"12px",width:"100%",[T.breakpoints.down("tablet")]:{flexDirection:"column"},"& .MuiButtonGroup-firstButton":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",margin:"0px",borderRightColor:"none"},"& .MuiButtonGroup-firstButton:hover":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-lastButton":{borderRadius:"12px",color:"grey.main",margin:"0px"},"& .MuiButtonGroup-lastButton:hover":{borderColor:"greenlite.main",color:"greenlite.main"}},N={width:"212px",padding:"8px 10px",border:"1px solid transparent",[T.breakpoints.down("tablet")]:{width:"100%"}},u=n.div`
  color: red;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-left: 4px;
`,M=new FormData,qe=()=>{var f;const t=se(),e=R.useRef(((f=t.state)==null?void 0:f.from)??"/main"),r=le(de),{name:p,avatar:g,age:B,gender:l,height:d,weight:h,activityLevel:C}=r,i=me({initialValues:{name:p,image:"",age:B,gender:l,height:d,weight:h,activity:C},validationSchema:Ge,onSubmit:y=>{i.values.activity=Number(y.activity),i.values.image===""?M.append("avatar",g,p):M.append("avatar",i.values.image,i.values.image.name),i.values.image=M,console.log(i.values.image),console.log(g),console.log(i.values)}});return o.jsxs(Pe,{children:[o.jsx(Me,{children:"Profile setting"}),o.jsxs(Te,{children:[o.jsx(We,{src:Le,alt:"Page image"}),o.jsx(ve,{children:o.jsxs(Ee,{onSubmit:i.handleSubmit,children:[o.jsxs(w,{htmlFor:"name",children:["Your name",o.jsx(G,{id:"name",name:"name",value:i.values.name,onChange:i.handleChange}),i.errors.name&&i.touched.name&&o.jsx(u,{id:"feedback",name:"name",children:i.errors.name})]}),o.jsxs(w,{children:["Your photo",o.jsxs(He,{children:[i.values.image!==""?o.jsx(U,{src:URL.createObjectURL(i.values.image),alt:"user avatar",file:i.values.image}):o.jsx(U,{src:g,alt:"user avatar",file:i.values.image}),o.jsxs(Ve,{type:"button",htmlFor:"image",children:[o.jsx(Oe,{id:"image",name:"image",type:"file",accept:"image/png, .svg, .jpg, .gif, .jpeg, .webp",onChange:y=>{y.currentTarget.files&&i.setFieldValue("image",y.currentTarget.files[0])}}),o.jsx(Ie,{children:o.jsx("use",{href:`${pe}#icon-direct-inbox`})}),o.jsx(De,{children:i.values.image.name?i.values.image.name:"Download new photo"})]})]})]}),o.jsxs(w,{htmlFor:"age",children:["Your age",o.jsx(G,{id:"age",name:"age",type:"number",value:i.values.age,onChange:i.handleChange}),i.errors.age&&i.touched.age&&o.jsx(u,{id:"feedback",name:"age",children:i.errors.age})]}),o.jsxs(I,{sx:Ae,children:[o.jsx(V,{id:"gender",sx:q,children:"Gender"}),o.jsxs(D,{row:!0,sx:{gap:"16px"},"aria-labelledby":"gender",name:"gender",value:i.values.gender,onChange:i.handleChange,children:[o.jsx(x,{value:"male",sx:v,control:o.jsx(m,{sx:b}),label:"Male"}),o.jsx(x,{value:"female",sx:v,control:o.jsx(m,{sx:b}),label:"Female"}),i.errors.gender&&i.touched.gender&&o.jsx(u,{id:"feedback",name:"gender",children:i.errors.gender})]})]}),o.jsxs(w,{htmlFor:"height",children:["Height",o.jsx(G,{id:"height",name:"height",type:"number",value:i.values.height,onChange:i.handleChange}),i.errors.height&&i.touched.height&&o.jsx(u,{id:"feedback",name:"height",children:i.errors.height}),o.jsx(u,{name:"height",component:"span"})]}),o.jsxs(w,{htmlFor:"weight",children:["Weight",o.jsx(G,{id:"weight",name:"weight",type:"number",value:i.values.weight,onChange:i.handleChange}),i.errors.weight&&i.touched.weight&&o.jsx(u,{id:"feedback",name:"weight",children:i.errors.weight}),o.jsx(u,{name:"weight",component:"span"})]}),o.jsxs(I,{sx:{gap:"12px"},children:[o.jsx(V,{id:"activity",sx:q,children:"Your activity"}),o.jsxs(D,{row:!0,sx:{gap:"16px"},"aria-labelledby":"activity",name:"activity",type:"number",value:i.values.activity,onChange:i.handleChange,children:[o.jsx(x,{value:"1.2",sx:v,control:o.jsx(m,{sx:b}),label:"1.2 - if you do not have physical activity and sedentary work"}),o.jsx(x,{value:"1.375",sx:v,control:o.jsx(m,{sx:b}),label:`1.375 - if you do short runs or light gymnastics 1-3 times a
                  week`}),o.jsx(x,{value:"1.55",sx:v,control:o.jsx(m,{sx:b}),label:"1.55 - if you play sports with average loads 3-5 times a week"}),o.jsx(x,{value:"1.725",sx:v,control:o.jsx(m,{sx:b}),label:"1.725 - if you train fully 6-7 times a week"}),o.jsx(x,{value:"1.9",sx:v,control:o.jsx(m,{sx:b}),label:`1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program`}),i.errors.activity&&i.touched.activity&&o.jsx(u,{id:"feedback",name:"activity",children:i.errors.activity})]})]}),o.jsxs(Re,{"aria-label":"button group",sx:Ue,children:[o.jsx(O,{sx:N,type:"submit",children:"Save"}),o.jsx(O,{sx:N,children:o.jsx(ue,{to:e.current,children:"Cancel"})})]})]})})]})]})},Ye=()=>o.jsx(o.Fragment,{children:o.jsx(qe,{})});export{Ye as default};
