import{u as O,j as e,x as ce,ar as A,as as de,s as S,L as le,r as u,n as F,z as ue,i as R,C as xe}from"./index-78cbebac.js";import{i as he,C as pe,T as je,j as G,d as J,k as K,I as fe,R as me,l as ge,m as Ce,n as be,o as ye,p as ve,q as ke,r as Se,t as we,B as Q,D as V,L as X,S as Y,u as Me,W as Ie,v as Re,w as Be,x as E,y as Fe,z as W,E as Pe,F as Le,G as De,N as z,H as Ee,J as T,K as $,O as N,P as Te,Q as $e,U as Ne,V as _,A as U,X as q,M as Oe,e as Ae,f as He,g as We,h as ze,Y as _e}from"./MealPopUpModal-aaf8a3ed.js";const Ue=({type:m,name:c,calories:C,carbogidrate:x,protein:a,fat:o,productId:i,setName:d,setCalories:w,setCarbogidrate:p,setProtein:M,setFat:j})=>{const b=O(),h=()=>{b(A(!1))},I={typeFood:m,userFood:{name:c,calories:C,nutrition:{carbogidrate:x,protein:a,fat:o}}},f=s=>{s.preventDefault(),b(de({id:i,food:I})),h()},y=s=>{if(s==="breakfast")return Q;if(s==="dinner")return V;if(s==="lunch")return X;if(s==="snack")return Y};return e.jsx(he,{children:e.jsxs(pe,{children:[e.jsx(je,{children:"Record your meal"}),e.jsxs(G,{style:{marginTop:"24px"},children:[e.jsx(J,{src:y(m)}),e.jsx(K,{children:ce(m)})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs(fe,{children:[e.jsx(me,{value:c,type:"string",placeholder:"The name of the product or dish",onChange:s=>{d(s.target.value)}}),e.jsx(ge,{min:0,max:100,type:"number",onChange:s=>{p(s.target.value)},value:x,placeholder:"Carbonoh"}),e.jsx(Ce,{min:0,max:100,type:"number",onChange:s=>{M(s.target.value)},value:a,placeholder:"Protein"}),e.jsxs(be,{children:[e.jsx(ye,{min:0,max:100,type:"number",onChange:s=>{j(s.target.value)},value:o,placeholder:"Fat"}),e.jsx(ve,{min:0,max:400,type:"number",onChange:s=>{w(s.target.value)},value:C,placeholder:"Calories"})]})]}),e.jsxs(ke,{children:[e.jsx(Se,{type:"submit",children:"Confirm"}),e.jsx(we,{onClick:h,type:"button",children:"Cancel"})]})]})]})})},qe=S(le)``,Ge=S.svg`
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
`,Je=S.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`,Ke=S.h2`
  font-size: 24px;
  font-weight: 500;
`,Qe=S.div`
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
`,Ve=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`,B=({title:m,meal:c,setFoodType:C,typefood:x,totalCarbs:a,totalProtein:o,totalFat:i,setProductId:d,setName:w,setCalories:p,setCarbogidrate:M,setProtein:j,setFat:b,src:h})=>{const I=O(),[f,y]=u.useState(!1),s=()=>y(!0),P=()=>y(!1),v=l=>{const k=l.currentTarget.dataset.set,g=c.find(L=>L._id===k);w(g.name),p(g.calories),M(g.nutrition.carbogidrate),j(g.nutrition.protein),b(g.nutrition.fat),d(k),C(`${x.toLowerCase()}`),I(A(!0))};return e.jsxs(Me,{children:[e.jsxs(Ie,{children:[e.jsxs(G,{style:{alignItems:"center"},children:[e.jsx(J,{src:h}),e.jsx(K,{children:`${m}`})]}),e.jsxs(Re,{children:[e.jsxs(Be,{children:["Carbonohidrates: ",e.jsxs(E,{children:[" ",a||0," "]})]}),e.jsxs(Fe,{children:[e.jsxs(W,{children:["Protein: ",e.jsxs(E,{children:[" ",o||0," "]})]}),e.jsxs(W,{children:["Fat: ",e.jsx(E,{children:i||0})]})]})]})]}),e.jsxs(Pe,{children:[(c==null?void 0:c.length)>0?c.map((l,k)=>e.jsxs("div",{style:{position:"relative"},children:[e.jsxs(Le,{children:[e.jsxs(De,{children:[e.jsx(z,{children:k+1}),l.name]}),e.jsxs(Ee,{children:[e.jsx(T,{children:e.jsxs($,{children:[e.jsx(N,{children:" Carb. "}),l.nutrition.carbogidrate]})}),e.jsx(T,{children:e.jsxs($,{children:[e.jsx(N,{children:" Prot. "}),l.nutrition.protein]})}),e.jsx(T,{children:e.jsxs($,{children:[e.jsx(N,{children:" Fat. "}),l.nutrition.fat]})})]})]}),e.jsxs(Te,{"data-set":l._id,onClick:v,children:[e.jsx($e,{children:e.jsx("use",{href:`${F}#icon-edit-3`})}),e.jsx(Ne,{children:"Edit"})]})]},l._id)):e.jsxs(_,{onClick:s,children:[e.jsx(U,{children:"Record your meal"}),e.jsx(q,{children:e.jsx("use",{href:`${F}#icon-add-converted`})})]}),(c==null?void 0:c.length)>0?e.jsxs("div",{style:{display:"flex"},children:[e.jsx(z,{children:c.length+1}),e.jsxs(_,{onClick:s,children:[e.jsx(U,{children:"Record your meal"}),e.jsx(q,{children:e.jsx("use",{href:`${F}#icon-add-converted`})})]})]}):null,e.jsx(Oe,{closeModal:P,stateModal:f,typefood:x})]})]})},Xe=()=>{var H;const m=ue(),c=u.useRef(((H=m.state)==null?void 0:H.from)??"/"),[C,x]=u.useState(""),a=R(Ae),o=R(He),i=R(We),d=R(ze),[w,p]=u.useState(""),[M,j]=u.useState(""),[b,h]=u.useState(""),[I,f]=u.useState(""),[y,s]=u.useState(""),[P,v]=u.useState(""),l=O(),k=a==null?void 0:a.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.fat)},0),g=i==null?void 0:i.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.fat)},0),L=o==null?void 0:o.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.fat)},0),Z=d==null?void 0:d.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.fat)},0),ee=a==null?void 0:a.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.protein)},0),te=i==null?void 0:i.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.protein)},0),ne=o==null?void 0:o.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.protein)},0),se=d==null?void 0:d.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.protein)},0),re=a==null?void 0:a.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ae=i==null?void 0:i.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),oe=o==null?void 0:o.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ie=d==null?void 0:d.reduce((n,r)=>{var t;return n+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),D=R(_e);return u.useEffect(()=>{const n=r=>{r.code==="Escape"&&l(A(!1))};return D?(document.addEventListener("keydown",n),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",n),document.body.style.overflow="unset"}},[D,l]),u.useEffect(()=>{l(xe())},[l]),e.jsxs(Qe,{children:[e.jsxs(Je,{children:[e.jsx(qe,{to:c.current,children:e.jsx(Ge,{children:e.jsx("use",{href:`${F}#icon-arrowright`})})}),e.jsx(Ke,{children:"Diary"})]}),D?e.jsx(Ue,{type:C,name:w,calories:M,carbogidrate:b,protein:I,fat:y,productId:P,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:s}):null,e.jsxs(Ve,{children:[e.jsx(B,{totalCarbs:re,totalProtein:ee,totalFat:k,meal:a,title:"Breakfast",typefood:"breakfast",setFoodType:x,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:s,setProductId:v,src:Q}),e.jsx(B,{totalCarbs:oe,totalProtein:ne,totalFat:L,meal:o,title:"Lunch",typefood:"lunch",setFoodType:x,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:s,setProductId:v,src:X}),e.jsx(B,{totalCarbs:ae,totalProtein:te,totalFat:g,meal:i,title:"Dinner",typefood:"dinner",setFoodType:x,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:s,setProductId:v,src:V}),e.jsx(B,{totalCarbs:ie,totalProtein:se,totalFat:Z,meal:d,title:"Snack",typefood:"snack",setFoodType:x,setName:p,setCalories:j,setCarbogidrate:h,setProtein:f,setFat:s,setProductId:v,src:Y})]})]})},et=()=>e.jsx("div",{children:e.jsx(Xe,{})});export{et as default};
