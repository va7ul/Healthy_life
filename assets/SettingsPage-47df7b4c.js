import{r as B,g as X,f as Z,h as J,_ as p,i as Q,k as S,m as ee,j as i,B as ie,o as oe,p as te,q as s,v as re,s as n,w as ae,t as L,x as ne,a as se,F as E,y as H,z as I,A as g,C as h,D as V,L as le}from"./index-d4979413.js";import{c as de,a as q,e as pe,f as $,d as ue,F as ce,u as ge,b as he}from"./index.esm-876b98ee.js";function xe(o){return B.Children.toArray(o).filter(e=>B.isValidElement(e))}function me(o){return Z("MuiButtonGroup",o)}const be=X("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),a=be,ve=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],fe=(o,e)=>{const{ownerState:r}=o;return[{[`& .${a.grouped}`]:e.grouped},{[`& .${a.grouped}`]:e[`grouped${s(r.orientation)}`]},{[`& .${a.grouped}`]:e[`grouped${s(r.variant)}`]},{[`& .${a.grouped}`]:e[`grouped${s(r.variant)}${s(r.orientation)}`]},{[`& .${a.grouped}`]:e[`grouped${s(r.variant)}${s(r.color)}`]},{[`& .${a.firstButton}`]:e.firstButton},{[`& .${a.lastButton}`]:e.lastButton},{[`& .${a.middleButton}`]:e.middleButton},e.root,e[r.variant],r.disableElevation===!0&&e.disableElevation,r.fullWidth&&e.fullWidth,r.orientation==="vertical"&&e.vertical]},ye=o=>{const{classes:e,color:r,disabled:t,disableElevation:b,fullWidth:l,orientation:u,variant:c}=o,f={root:["root",c,u==="vertical"&&"vertical",l&&"fullWidth",b&&"disableElevation"],grouped:["grouped",`grouped${s(u)}`,`grouped${s(c)}`,`grouped${s(c)}${s(u)}`,`grouped${s(c)}${s(r)}`,t&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return re(f,me,e)},je=J("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:fe})(({theme:o,ownerState:e})=>p({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},e.variant==="contained"&&{boxShadow:(o.vars||o).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},e.orientation==="vertical"&&{flexDirection:"column"},{[`& .${a.grouped}`]:p({minWidth:40,"&:hover":p({},e.variant==="contained"&&{boxShadow:"none"})},e.variant==="contained"&&{boxShadow:"none"}),[`& .${a.firstButton},& .${a.middleButton}`]:p({},e.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},e.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},e.variant==="text"&&e.orientation==="horizontal"&&{borderRight:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${o.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${a.disabled}`]:{borderRight:`1px solid ${(o.vars||o).palette.action.disabled}`}},e.variant==="text"&&e.orientation==="vertical"&&{borderBottom:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${o.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${a.disabled}`]:{borderBottom:`1px solid ${(o.vars||o).palette.action.disabled}`}},e.variant==="text"&&e.color!=="inherit"&&{borderColor:o.vars?`rgba(${o.vars.palette[e.color].mainChannel} / 0.5)`:Q(o.palette[e.color].main,.5)},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"transparent"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"transparent"},e.variant==="contained"&&e.orientation==="horizontal"&&{borderRight:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${a.disabled}`]:{borderRight:`1px solid ${(o.vars||o).palette.action.disabled}`}},e.variant==="contained"&&e.orientation==="vertical"&&{borderBottom:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${a.disabled}`]:{borderBottom:`1px solid ${(o.vars||o).palette.action.disabled}`}},e.variant==="contained"&&e.color!=="inherit"&&{borderColor:(o.vars||o).palette[e.color].dark},{"&:hover":p({},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"currentColor"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${a.lastButton},& .${a.middleButton}`]:p({},e.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},e.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},e.variant==="outlined"&&e.orientation==="horizontal"&&{marginLeft:-1},e.variant==="outlined"&&e.orientation==="vertical"&&{marginTop:-1})})),Be=B.forwardRef(function(e,r){const t=S({props:e,name:"MuiButtonGroup"}),{children:b,className:l,color:u="primary",component:c="div",disabled:f=!1,disableElevation:R=!1,disableFocusRipple:k=!1,disableRipple:F=!1,fullWidth:z=!1,orientation:D="horizontal",size:G="medium",variant:P="outlined"}=t,N=ee(t,ve),M=p({},t,{color:u,component:c,disabled:f,disableElevation:R,disableFocusRipple:k,disableRipple:F,fullWidth:z,orientation:D,size:G,variant:P}),v=ye(M),U=B.useMemo(()=>({className:v.grouped,color:u,disabled:f,disableElevation:R,disableFocusRipple:k,disableRipple:F,fullWidth:z,size:G,variant:P}),[u,f,R,k,F,z,G,P,v.grouped]),T=xe(b),Y=T.length,K=C=>{const y=C===0,W=C===Y-1;return y&&W?"":y?v.firstButton:W?v.lastButton:v.middleButton};return i.jsx(je,p({as:c,role:"group",className:te(v.root,l),ref:r,ownerState:M},N,{children:i.jsx(ie.Provider,{value:U,children:T.map((C,y)=>i.jsx(oe.Provider,{value:K(y),children:C},y))})}))}),Ce=Be,$e=102400,we={image:["jpg","gif","png","jpeg","svg","webp"]};function Re(o,e){return o&&we[e].indexOf(o.split(".").pop())>-1}const ke=de().shape({name:q().min(2,"Too short name").max(20,"Too long name").required("Name should be filled"),image:pe().required("Required").test("is-valid-type","Not a valid image type",o=>Re(o&&o.name.toLowerCase(),"image")).test("is-valid-size","Max allowed size is 100KB",o=>o&&o.size<=$e),age:$().positive("Age should be positive").integer("Age should be integer").min(18,"Your should be older").required("Age should be filled"),gender:q().oneOf(["male","female"]).required(),height:$().positive("Height should be positive").integer("Height should be integer").required("Height should be filled"),weight:$().positive("Height should be positive").integer("Height should be integer").required("Height should be filled"),activity:$().oneOf([1.2,1.375,1.55,1.725,1.9]).required()}),Fe="/Healthy_life/assets/settings-page-image-b0655153.png",ze="/Healthy_life/assets/default-avatar-b71cfbcb.png",Ge=n.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 72px;
  }
`,Pe=n.h2`
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
`,Le=n.div`
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
`,Me=n.img`
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
`,Te=n(ue)`
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
`,j=n.label`
  font-family: 'Poppins500';
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,w=n(ce)`
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
`,A=n.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,We=n.div`
  width: 219px;
  display: flex;
  gap: 12px;
  margin-top: 12px;

  &:hover {
    cursor: pointer;
  }
`,Ee=n.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,He=n.label`
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
`,Ve=n.input`
  ${ae}
`,qe={gap:"12px",width:"300px",[L.breakpoints.up("tablet")]:{width:"212px"}},O={fontFamily:"Poppins500",fontSize:"14px",color:"white.main","&.Mui-focused":{color:"white.main"}},x={gap:"8px",margin:"0px","& .MuiTypography-root":{fontFamily:"Poppins400",fontWeight:400,fontSize:"14px"},"& .MuiButtonBase-root":{padding:"0px"}},m={color:"grey.main","&.Mui-checked":{color:"greenlite.main"},"& .MuiSvgIcon-root":{width:"12px",height:"12px"}},Ae={gap:"12px",width:"100%",[L.breakpoints.down("tablet")]:{flexDirection:"column"},"& .MuiButtonGroup-firstButton":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",margin:"0px",borderRightColor:"none"},"& .MuiButtonGroup-firstButton:hover":{borderRadius:"12px",color:"blacktwo.main",backgroundColor:"greenlite.main",border:"1px solid transparent",borderRightColor:"transparent"},"& .MuiButtonGroup-lastButton":{borderRadius:"12px",color:"grey.main",margin:"0px"},"& .MuiButtonGroup-lastButton:hover":{borderColor:"greenlite.main",color:"greenlite.main"}},_={width:"212px",padding:"8px 10px",border:"1px solid transparent",[L.breakpoints.down("tablet")]:{width:"100%"}},d=n.div`
  color: red;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-left: 4px;
`,Oe=o=>{const e=new FileReader;e.readAsDataURL(o);function r(t){return t&&t.type.split("/")[0]==="image"}return e.onload=()=>{r(o)&&e.result},e.result},_e=()=>{var b;const o=ne(),e=B.useRef(((b=o.state)==null?void 0:b.from)??"/main"),t=ge({initialValues:{name:"test",image:"",age:18,gender:"male",height:10,weight:10,activity:1.2},validationSchema:ke,onSubmit:l=>{t.values.activity=Number(l.activity),console.log(l)}});return i.jsxs(Ge,{children:[i.jsx(Pe,{children:"Profile setting"}),i.jsxs(Le,{children:[i.jsx(Me,{src:Fe,alt:"Page image"}),i.jsx(he,{children:i.jsxs(Te,{onSubmit:t.handleSubmit,children:[i.jsxs(j,{htmlFor:"name",children:["Your name",i.jsx(w,{id:"name",name:"name",value:t.values.name,onChange:t.handleChange}),t.errors.name&&t.touched.name&&i.jsx(d,{id:"feedback",name:"name",children:t.errors.name})]}),i.jsxs(j,{children:["Your photo",i.jsxs(We,{children:[t.values.image?i.jsx(A,{src:Oe(t.values.image),alt:"user avatar",file:t.values.image}):i.jsx(A,{src:ze,alt:"user avatar",file:t.values.image}),i.jsxs(He,{type:"button",htmlFor:"image",children:[i.jsx(Ve,{id:"image",name:"image",type:"file",accept:"image/png, .svg, .jpg, .gif, .jpeg, .webp",onChange:l=>{l.currentTarget.files&&t.setFieldValue("image",l.currentTarget.files[0])}}),i.jsx(Ee,{children:i.jsx("use",{href:`${se}#icon-direct-inbox`})}),i.jsx(Ie,{children:t.values.image.name?t.values.image.name:"Download new photo"})]})]})]}),i.jsxs(j,{htmlFor:"age",children:["Your age",i.jsx(w,{id:"age",name:"age",type:"number",value:t.values.age,onChange:t.handleChange}),t.errors.age&&t.touched.age&&i.jsx(d,{id:"feedback",name:"age",children:t.errors.age})]}),i.jsxs(E,{sx:qe,children:[i.jsx(H,{id:"gender",sx:O,children:"Gender"}),i.jsxs(I,{row:!0,sx:{gap:"16px"},"aria-labelledby":"gender",name:"gender",value:t.values.gender,onChange:t.handleChange,children:[i.jsx(g,{value:"male",sx:x,control:i.jsx(h,{sx:m}),label:"Male"}),i.jsx(g,{value:"female",sx:x,control:i.jsx(h,{sx:m}),label:"Female"}),t.errors.gender&&t.touched.gender&&i.jsx(d,{id:"feedback",name:"gender",children:t.errors.gender})]})]}),i.jsxs(j,{htmlFor:"height",children:["Height",i.jsx(w,{id:"height",name:"height",type:"number",value:t.values.height,onChange:t.handleChange}),t.errors.height&&t.touched.height&&i.jsx(d,{id:"feedback",name:"height",children:t.errors.height}),i.jsx(d,{name:"height",component:"span"})]}),i.jsxs(j,{htmlFor:"weight",children:["Weight",i.jsx(w,{id:"weight",name:"weight",type:"number",value:t.values.weight,onChange:t.handleChange}),t.errors.weight&&t.touched.weight&&i.jsx(d,{id:"feedback",name:"weight",children:t.errors.weight}),i.jsx(d,{name:"weight",component:"span"})]}),i.jsxs(E,{sx:{gap:"12px"},children:[i.jsx(H,{id:"activity",sx:O,children:"Your activity"}),i.jsxs(I,{row:!0,sx:{gap:"16px"},"aria-labelledby":"activity",name:"activity",type:"number",value:t.values.activity,onChange:t.handleChange,children:[i.jsx(g,{value:"1.2",sx:x,control:i.jsx(h,{sx:m}),label:"1.2 - if you do not have physical activity and sedentary work"}),i.jsx(g,{value:"1.375",sx:x,control:i.jsx(h,{sx:m}),label:`1.375 - if you do short runs or light gymnastics 1-3 times a
                  week`}),i.jsx(g,{value:"1.55",sx:x,control:i.jsx(h,{sx:m}),label:"1.55 - if you play sports with average loads 3-5 times a week"}),i.jsx(g,{value:"1.725",sx:x,control:i.jsx(h,{sx:m}),label:"1.725 - if you train fully 6-7 times a week"}),i.jsx(g,{value:"1.9",sx:x,control:i.jsx(h,{sx:m}),label:`1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program`}),t.errors.activity&&t.touched.activity&&i.jsx(d,{id:"feedback",name:"activity",children:t.errors.activity})]})]}),i.jsxs(Ce,{"aria-label":"button group",sx:Ae,children:[i.jsx(V,{sx:_,type:"submit",children:"Save"}),i.jsx(V,{sx:_,children:i.jsx(le,{to:e.current,children:"Cancel"})})]})]})})]})]})},Ue=()=>i.jsx(i.Fragment,{children:i.jsx(_e,{})});export{Ue as default};
