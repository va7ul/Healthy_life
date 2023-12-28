import{u as N,j as e,x as ce,ar as U,as as le,s as M,L as de,r as h,n as P,z as ue,i as B,C as xe}from"./index-f43616d8.js";import{i as he,C as pe,T as je,j as q,d as G,k as J,I as fe,R as ge,l as me,m as Ce,n as be,o as ye,p as ve,q as ke,r as Se,t as Me,B as K,D as Q,L as V,S as X,u as Ie,W as Re,v as Be,w as Fe,x as D,y as Pe,z as A,E as we,F as Le,G as De,N as H,H as Te,J as T,K as E,O as $,P as Ee,Q as $e,U as Ne,V as W,A as z,X as _,M as Oe,e as Ae,f as He,g as We,h as ze,Y as _e}from"./MealPopUpModal-7974d434.js";const Ue=({type:g,name:c,calories:C,carbogidrate:u,protein:a,fat:o,productId:i,setName:l,setCalories:I,setCarbogidrate:p,setProtein:R,setFat:j})=>{const b=N(),x=()=>{b(U(!1))},y={typeFood:g,userFood:{name:c,calories:C,nutrition:{carbogidrate:u,protein:a,fat:o}}},f=n=>{n.preventDefault(),console.log(y),b(le({id:i,food:y})),x()},v=n=>{if(n==="breakfast")return K;if(n==="dinner")return Q;if(n==="lunch")return V;if(n==="snack")return X};return e.jsx(he,{children:e.jsxs(pe,{children:[e.jsx(je,{children:"Record your meal"}),e.jsxs(q,{style:{marginTop:"24px"},children:[e.jsx(G,{src:v(g)}),e.jsx(J,{children:ce(g)})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs(fe,{children:[e.jsx(ge,{value:c,type:"string",placeholder:"The name of the product or dish",onChange:n=>{l(n.target.value)}}),e.jsx(me,{min:0,max:100,type:"number",onChange:n=>{p(n.target.value)},value:u,placeholder:"Carbonoh"}),e.jsx(Ce,{min:0,max:100,type:"number",onChange:n=>{R(n.target.value)},value:a,placeholder:"Protein"}),e.jsxs(be,{children:[e.jsx(ye,{min:0,max:100,type:"number",onChange:n=>{j(n.target.value)},value:o,placeholder:"Fat"}),e.jsx(ve,{min:0,max:400,type:"number",onChange:n=>{I(n.target.value)},value:C,placeholder:"Calories"})]})]}),e.jsxs(ke,{children:[e.jsx(Se,{type:"submit",children:"Confirm"}),e.jsx(Me,{onClick:x,type:"button",children:"Cancel"})]})]})]})})},qe=M(de)``,Ge=M.svg`
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
`,Je=M.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`,Ke=M.h2`
  font-size: 24px;
  font-weight: 500;
`,Qe=M.div`
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
`,Ve=M.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`,F=({title:g,meal:c,setFoodType:C,typefood:u,totalCarbs:a,totalProtein:o,totalFat:i,setProductId:l,setName:I,setCalories:p,setCarbogidrate:R,setProtein:j,setFat:b,src:x})=>{const y=N(),[f,v]=h.useState(!1),n=()=>v(!0),w=()=>v(!1),k=d=>{const S=d.currentTarget.dataset.set,m=c.find(L=>L._id===S);I(m.name),p(m.calories),R(m.nutrition.carbogidrate),j(m.nutrition.protein),b(m.nutrition.fat),l(S),C(`${u.toLowerCase()}`),y(U(!0))};return e.jsxs(Ie,{children:[e.jsxs(Re,{children:[e.jsxs(q,{style:{alignItems:"center"},children:[e.jsx(G,{src:x}),e.jsx(J,{children:`${g}`})]}),e.jsxs(Be,{children:[e.jsxs(Fe,{children:["Carbonohidrates: ",e.jsxs(D,{children:[" ",a||0," "]})]}),e.jsxs(Pe,{children:[e.jsxs(A,{children:["Protein: ",e.jsxs(D,{children:[" ",o||0," "]})]}),e.jsxs(A,{children:["Fat: ",e.jsx(D,{children:i||0})]})]})]})]}),e.jsxs(we,{children:[(c==null?void 0:c.length)>0?c.map((d,S)=>e.jsxs("div",{style:{position:"relative"},children:[e.jsxs(Le,{children:[e.jsxs(De,{children:[e.jsx(H,{children:S+1}),d.name]}),e.jsxs(Te,{children:[e.jsx(T,{children:e.jsxs(E,{children:[e.jsx($,{children:" Carb. "}),d.nutrition.carbogidrate]})}),e.jsx(T,{children:e.jsxs(E,{children:[e.jsx($,{children:" Prot. "}),d.nutrition.protein]})}),e.jsx(T,{children:e.jsxs(E,{children:[e.jsx($,{children:" Fat. "}),d.nutrition.fat]})})]})]}),e.jsxs(Ee,{"data-set":d._id,onClick:k,children:[e.jsx($e,{children:e.jsx("use",{href:`${P}#icon-edit-3`})}),e.jsx(Ne,{children:"Edit"})]})]},d._id)):e.jsxs(W,{onClick:n,children:[e.jsx(z,{children:"Record your meal"}),e.jsx(_,{children:e.jsx("use",{href:`${P}#icon-add-converted`})})]}),(c==null?void 0:c.length)>0?e.jsxs("div",{style:{display:"flex"},children:[e.jsx(H,{children:c.length+1}),e.jsxs(W,{onClick:n,children:[e.jsx(z,{children:"Record your meal"}),e.jsx(_,{children:e.jsx("use",{href:`${P}#icon-add-converted`})})]})]}):null,e.jsx(Oe,{closeModal:w,stateModal:f,typefood:u})]})]})},Xe=()=>{var O;const g=ue(),c=h.useRef(((O=g.state)==null?void 0:O.from)??"/"),[C,u]=h.useState(""),a=B(Ae),o=B(He),i=B(We),l=B(ze),[I,p]=h.useState(""),[R,j]=h.useState(""),[b,x]=h.useState(""),[y,f]=h.useState(""),[v,n]=h.useState(""),[w,k]=h.useState(""),d=N(),S=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),m=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),L=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),Y=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),Z=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),ee=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),te=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),ne=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),se=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),re=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ae=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),oe=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ie=B(_e);return h.useEffect(()=>{d(xe())},[d]),e.jsxs(Qe,{children:[e.jsxs(Je,{children:[e.jsx(qe,{to:c.current,children:e.jsx(Ge,{children:e.jsx("use",{href:`${P}#icon-arrowright`})})}),e.jsx(Ke,{children:"Diary"})]}),ie?e.jsx(Ue,{type:C,name:I,calories:R,carbogidrate:b,protein:y,fat:v,productId:w,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n}):null,e.jsxs(Ve,{children:[e.jsx(F,{totalCarbs:se,totalProtein:Z,totalFat:S,meal:a,title:"Breakfast",typefood:"breakfast",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n,setProductId:k,src:K}),e.jsx(F,{totalCarbs:ae,totalProtein:te,totalFat:L,meal:o,title:"Lunch",typefood:"lunch",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n,setProductId:k,src:V}),e.jsx(F,{totalCarbs:re,totalProtein:ee,totalFat:m,meal:i,title:"Dinner",typefood:"dinner",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n,setProductId:k,src:Q}),e.jsx(F,{totalCarbs:oe,totalProtein:ne,totalFat:Y,meal:l,title:"Snack",typefood:"snack",setFoodType:u,setName:p,setCalories:j,setCarbogidrate:x,setProtein:f,setFat:n,setProductId:k,src:X})]})]})},et=()=>e.jsx("div",{children:e.jsx(Xe,{})});export{et as default};
