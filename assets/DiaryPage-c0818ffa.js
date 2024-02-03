import{u as A,j as e,y as ie,as as N,at as ce,s as S,L as de,r as x,o as I,au as le,A as ue,k as F,D as he}from"./index-995fca2a.js";import{i as xe,C as pe,T as je,j as q,d as G,k as J,I as fe,R as me,l as ge,m as Ce,n as be,o as ye,p as ve,q as ke,r as we,t as Se,B as K,D as Q,L as V,S as X,u as Me,W as Pe,v as Fe,w as Ie,x as Re,y as T,z as Be,E as Le,P as De,F as Te,G as Ee,H as $e,J as Oe,K as Ae,N as H,O as Ne,Q as E,U as $,V as O,X as _e,Y as He,Z as We,_ as W,A as z,$ as U,M as ze,e as Ue,f as qe,g as Ge,h as Je,a0 as Ke}from"./MealPopUpModal-3d93ecbc.js";const Qe=({type:m,name:d,calories:C,carbogidrate:u,protein:a,fat:o,productId:i,setName:l,setCalories:M,setCarbogidrate:p,setProtein:P,setFat:j})=>{const b=A(),h=()=>{b(N(!1))},y={typeFood:m,userFood:{name:d,calories:C,nutrition:{carbogidrate:u,protein:a,fat:o}}},f=n=>{n.preventDefault(),b(ce({id:i,food:y})),h()},v=n=>{if(n==="breakfast")return K;if(n==="dinner")return Q;if(n==="lunch")return V;if(n==="snack")return X};return e.jsx(xe,{onClick:h,children:e.jsxs(pe,{onClick:n=>n.stopPropagation(),children:[e.jsx(je,{children:"Record your meal"}),e.jsxs(q,{style:{marginTop:"24px"},children:[e.jsx(G,{src:v(m)}),e.jsx(J,{children:ie(m)})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs(fe,{children:[e.jsx(me,{value:d,type:"string",placeholder:"The name of the product or dish",onChange:n=>{l(n.target.value)}}),e.jsx(ge,{min:0,max:200,type:"number",onChange:n=>{p(n.target.value)},value:u,placeholder:"Carbonoh"}),e.jsx(Ce,{min:0,max:200,type:"number",onChange:n=>{P(n.target.value)},value:a,placeholder:"Protein"}),e.jsxs(be,{children:[e.jsx(ye,{min:0,max:200,type:"number",onChange:n=>{j(n.target.value)},value:o,placeholder:"Fat"}),e.jsx(ve,{min:0,max:3e3,type:"number",onChange:n=>{M(n.target.value)},value:C,placeholder:"Calories"})]})]}),e.jsxs(ke,{children:[e.jsx(we,{type:"submit",children:"Confirm"}),e.jsx(Se,{onClick:h,type:"button",children:"Cancel"})]})]})]})})},Ve=S(de)``,Xe=S.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  rotate: 180deg;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }

  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`,Ye=S.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    width: 780px;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`,Ze=S.h2`
  font-size: 24px;
  font-weight: 500;
`,et=S.div`
  width: 300px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,tt=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`,R=({title:m,meal:d,setFoodType:C,typefood:u,totalCarbs:a,totalProtein:o,totalFat:i,setProductId:l,setName:M,setCalories:p,setCarbogidrate:P,setProtein:j,setFat:b,src:h})=>{const y=A(),[f,v]=x.useState(!1),n=()=>v(!0),B=()=>v(!1),k=c=>{const w=c.currentTarget.dataset.set,g=d.find(L=>L._id===w);M(g.name),p(g.calories),P(g.nutrition.carbogidrate),j(g.nutrition.protein),b(g.nutrition.fat),l(w),C(`${u.toLowerCase()}`),y(N(!0))};return e.jsxs(Me,{children:[e.jsxs(Pe,{children:[e.jsxs(q,{children:[e.jsx(G,{src:h}),e.jsx(J,{children:`${m}`})]}),e.jsxs(Fe,{children:[e.jsxs(Ie,{children:[e.jsx(Re,{children:"Carbonohidrates: "}),e.jsxs(T,{children:[" ",a||0," "]})]}),e.jsxs(Be,{children:[e.jsxs(Le,{children:[e.jsx(De,{children:"Protein: "}),e.jsxs(T,{children:[" ",o||0," "]})]}),e.jsxs(Te,{children:[e.jsx(Ee,{children:"Fat: "}),e.jsx(T,{children:i||0})]})]})]})]}),e.jsxs($e,{children:[(d==null?void 0:d.length)>0?d.map((c,w)=>e.jsxs("div",{style:{position:"relative"},children:[e.jsxs(Oe,{children:[e.jsxs(Ae,{children:[e.jsx(H,{children:w+1}),c.name]}),e.jsxs(Ne,{children:[e.jsx(E,{children:e.jsxs($,{children:[e.jsx(O,{children:" Carb. "}),c.nutrition.carbogidrate]})}),e.jsx(E,{children:e.jsxs($,{children:[e.jsx(O,{children:" Prot. "}),c.nutrition.protein]})}),e.jsx(E,{children:e.jsxs($,{children:[e.jsx(O,{children:" Fat. "}),c.nutrition.fat]})})]})]}),e.jsxs(_e,{children:[e.jsx(He,{"data-set":c._id,onClick:k,children:e.jsx("use",{href:`${I}#icon-edit-3`})}),e.jsx(We,{"data-set":c._id,onClick:()=>y(le({id:c._id,foodType:u})),children:e.jsx("use",{href:`${I}#trash-delete`})})]})]},c._id)):e.jsxs(W,{onClick:n,children:[e.jsx(z,{children:"Record your meal"}),e.jsx(U,{children:e.jsx("use",{href:`${I}#icon-add-converted`})})]}),(d==null?void 0:d.length)>0?e.jsxs("div",{style:{display:"flex"},children:[e.jsx(H,{children:d.length+1}),e.jsxs(W,{onClick:n,children:[e.jsx(z,{children:"Record your meal"}),e.jsx(U,{children:e.jsx("use",{href:`${I}#icon-add-converted`})})]})]}):null,e.jsx(ze,{closeModal:B,stateModal:f,typefood:u})]})]})},nt=()=>{var _;const m=ue(),d=x.useRef(((_=m.state)==null?void 0:_.from)??"/"),[C,u]=x.useState(""),a=F(Ue),o=F(qe),i=F(Ge),l=F(Je),[M,p]=x.useState(""),[P,j]=x.useState(""),[b,h]=x.useState(""),[y,f]=x.useState(""),[v,n]=x.useState(""),[B,k]=x.useState(""),c=A(),w=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),g=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),L=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),Y=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),Z=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),ee=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),te=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),ne=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),se=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),re=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ae=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),oe=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),D=F(Ke);return x.useEffect(()=>{const s=r=>{r.code==="Escape"&&c(N(!1))};return D?(document.addEventListener("keydown",s),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[D,c]),x.useEffect(()=>{c(he())},[c]),e.jsxs(et,{children:[e.jsxs(Ye,{children:[e.jsx(Ve,{to:d.current,children:e.jsx(Xe,{children:e.jsx("use",{href:`${I}#icon-arrowright`})})}),e.jsx(Ze,{children:"Diary"})]}),D?e.jsx(Qe,{type:C,name:M,calories:P,carbogidrate:b,protein:y,fat:v,productId:B,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:n}):null,e.jsxs(tt,{children:[e.jsx(R,{totalCarbs:se,totalProtein:Z,totalFat:w,meal:a,title:"Breakfast",typefood:"breakfast",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:n,setProductId:k,src:K}),e.jsx(R,{totalCarbs:ae,totalProtein:te,totalFat:L,meal:o,title:"Lunch",typefood:"lunch",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:n,setProductId:k,src:V}),e.jsx(R,{totalCarbs:re,totalProtein:ee,totalFat:g,meal:i,title:"Dinner",typefood:"dinner",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:n,setProductId:k,src:Q}),e.jsx(R,{totalCarbs:oe,totalProtein:ne,totalFat:Y,meal:l,title:"Snack",typefood:"snack",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:n,setProductId:k,src:X})]})]})},at=()=>e.jsx("div",{children:e.jsx(nt,{})});export{at as default};
