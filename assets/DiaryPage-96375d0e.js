import{u as N,j as e,x as ce,ar as U,as as le,s as S,L as de,r as h,n as P,z as ue,i as B,C as xe}from"./index-f11a40ab.js";import{i as he,C as pe,T as je,j as q,d as G,k as J,I as fe,R as me,l as ge,m as Ce,n as be,o as ye,p as ve,q as ke,r as Se,t as Me,B as K,D as Q,L as V,S as X,u as Ie,W as Re,v as Be,w as Fe,x as D,y as Pe,z as A,E as we,F as Le,G as De,N as H,H as Te,J as T,K as E,O as $,P as Ee,Q as $e,U as Ne,V as W,A as z,X as _,M as Oe,e as Ae,f as He,g as We,h as ze,Y as _e}from"./MealPopUpModal-092d8e23.js";const Ue=({type:m,name:c,calories:C,carbogidrate:u,protein:a,fat:o,productId:i,setName:l,setCalories:M,setCarbogidrate:p,setProtein:I,setFat:j})=>{const b=N(),x=()=>{b(U(!1))},R={typeFood:m,userFood:{name:c,calories:C,nutrition:{carbogidrate:u,protein:a,fat:o}}},f=n=>{n.preventDefault(),b(le({id:i,food:R})),x()},y=n=>{if(n==="breakfast")return K;if(n==="dinner")return Q;if(n==="lunch")return V;if(n==="snack")return X};return e.jsx(he,{children:e.jsxs(pe,{children:[e.jsx(je,{children:"Record your meal"}),e.jsxs(q,{style:{marginTop:"24px"},children:[e.jsx(G,{src:y(m)}),e.jsx(J,{children:ce(m)})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs(fe,{children:[e.jsx(me,{value:c,type:"string",placeholder:"The name of the product or dish",onChange:n=>{l(n.target.value)}}),e.jsx(ge,{min:0,max:100,type:"number",onChange:n=>{p(n.target.value)},value:u,placeholder:"Carbonoh"}),e.jsx(Ce,{min:0,max:100,type:"number",onChange:n=>{I(n.target.value)},value:a,placeholder:"Protein"}),e.jsxs(be,{children:[e.jsx(ye,{min:0,max:100,type:"number",onChange:n=>{j(n.target.value)},value:o,placeholder:"Fat"}),e.jsx(ve,{min:0,max:400,type:"number",onChange:n=>{M(n.target.value)},value:C,placeholder:"Calories"})]})]}),e.jsxs(ke,{children:[e.jsx(Se,{type:"submit",children:"Confirm"}),e.jsx(Me,{onClick:x,type:"button",children:"Cancel"})]})]})]})})},qe=S(de)``,Ge=S.svg`
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
`,F=({title:m,meal:c,setFoodType:C,typefood:u,totalCarbs:a,totalProtein:o,totalFat:i,setProductId:l,setName:M,setCalories:p,setCarbogidrate:I,setProtein:j,setFat:b,src:x})=>{const R=N(),[f,y]=h.useState(!1),n=()=>y(!0),w=()=>y(!1),v=d=>{const k=d.currentTarget.dataset.set,g=c.find(L=>L._id===k);M(g.name),p(g.calories),I(g.nutrition.carbogidrate),j(g.nutrition.protein),b(g.nutrition.fat),l(k),C(`${u.toLowerCase()}`),R(U(!0))};return e.jsxs(Ie,{children:[e.jsxs(Re,{children:[e.jsxs(q,{style:{alignItems:"center"},children:[e.jsx(G,{src:x}),e.jsx(J,{children:`${m}`})]}),e.jsxs(Be,{children:[e.jsxs(Fe,{children:["Carbonohidrates: ",e.jsxs(D,{children:[" ",a||0," "]})]}),e.jsxs(Pe,{children:[e.jsxs(A,{children:["Protein: ",e.jsxs(D,{children:[" ",o||0," "]})]}),e.jsxs(A,{children:["Fat: ",e.jsx(D,{children:i||0})]})]})]})]}),e.jsxs(we,{children:[(c==null?void 0:c.length)>0?c.map((d,k)=>e.jsxs("div",{style:{position:"relative"},children:[e.jsxs(Le,{children:[e.jsxs(De,{children:[e.jsx(H,{children:k+1}),d.name]}),e.jsxs(Te,{children:[e.jsx(T,{children:e.jsxs(E,{children:[e.jsx($,{children:" Carb. "}),d.nutrition.carbogidrate]})}),e.jsx(T,{children:e.jsxs(E,{children:[e.jsx($,{children:" Prot. "}),d.nutrition.protein]})}),e.jsx(T,{children:e.jsxs(E,{children:[e.jsx($,{children:" Fat. "}),d.nutrition.fat]})})]})]}),e.jsxs(Ee,{"data-set":d._id,onClick:v,children:[e.jsx($e,{children:e.jsx("use",{href:`${P}#icon-edit-3`})}),e.jsx(Ne,{children:"Edit"})]})]},d._id)):e.jsxs(W,{onClick:n,children:[e.jsx(z,{children:"Record your meal"}),e.jsx(_,{children:e.jsx("use",{href:`${P}#icon-add-converted`})})]}),(c==null?void 0:c.length)>0?e.jsxs("div",{style:{display:"flex"},children:[e.jsx(H,{children:c.length+1}),e.jsxs(W,{onClick:n,children:[e.jsx(z,{children:"Record your meal"}),e.jsx(_,{children:e.jsx("use",{href:`${P}#icon-add-converted`})})]})]}):null,e.jsx(Oe,{closeModal:w,stateModal:f,typefood:u})]})]})},Xe=()=>{var O;const m=ue(),c=h.useRef(((O=m.state)==null?void 0:O.from)??"/"),[C,u]=h.useState(""),a=B(Ae),o=B(He),i=B(We),l=B(ze),[M,p]=h.useState(""),[I,j]=h.useState(""),[b,x]=h.useState(""),[R,f]=h.useState(""),[y,n]=h.useState(""),[w,v]=h.useState(""),d=N(),k=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),g=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),L=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),Y=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),Z=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),ee=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),te=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),ne=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),se=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),re=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ae=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),oe=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ie=B(_e);return h.useEffect(()=>{d(xe())},[d]),e.jsxs(Qe,{children:[e.jsxs(Je,{children:[e.jsx(qe,{to:c.current,children:e.jsx(Ge,{children:e.jsx("use",{href:`${P}#icon-arrowright`})})}),e.jsx(Ke,{children:"Diary"})]}),ie?e.jsx(Ue,{type:C,name:M,calories:I,carbogidrate:b,protein:R,fat:y,productId:w,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n}):null,e.jsxs(Ve,{children:[e.jsx(F,{totalCarbs:se,totalProtein:Z,totalFat:k,meal:a,title:"Breakfast",typefood:"breakfast",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n,setProductId:v,src:K}),e.jsx(F,{totalCarbs:ae,totalProtein:te,totalFat:L,meal:o,title:"Lunch",typefood:"lunch",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n,setProductId:v,src:V}),e.jsx(F,{totalCarbs:re,totalProtein:ee,totalFat:g,meal:i,title:"Dinner",typefood:"dinner",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n,setProductId:v,src:Q}),e.jsx(F,{totalCarbs:oe,totalProtein:ne,totalFat:Y,meal:l,title:"Snack",typefood:"snack",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n,setProductId:v,src:X})]})]})},et=()=>e.jsx("div",{children:e.jsx(Xe,{})});export{et as default};
