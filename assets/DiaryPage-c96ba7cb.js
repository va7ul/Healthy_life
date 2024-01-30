import{u as O,j as e,x as ie,ar as A,as as ce,s as w,L as de,r as x,n as I,z as le,i as P,C as ue}from"./index-f697e106.js";import{i as xe,C as he,T as pe,j as q,d as G,k as J,I as je,R as fe,l as me,m as ge,n as Ce,o as be,p as ye,q as ve,r as ke,t as we,B as K,D as Q,L as V,S as X,u as Se,W as Me,v as Fe,w as Pe,x as Ie,y as T,z as Re,E as Be,P as Le,F as De,G as Te,H as Ee,J as $e,K as Ne,N as W,O as Oe,Q as E,U as $,V as N,X as Ae,Y as He,Z as We,_ as z,A as _,$ as U,M as ze,e as _e,f as Ue,g as qe,h as Ge,a0 as Je}from"./MealPopUpModal-11b854fd.js";const Ke=({type:m,name:c,calories:C,carbogidrate:h,protein:a,fat:o,productId:i,setName:d,setCalories:S,setCarbogidrate:p,setProtein:M,setFat:j})=>{const b=O(),u=()=>{b(A(!1))},F={typeFood:m,userFood:{name:c,calories:C,nutrition:{carbogidrate:h,protein:a,fat:o}}},f=n=>{n.preventDefault(),b(ce({id:i,food:F})),u()},y=n=>{if(n==="breakfast")return K;if(n==="dinner")return Q;if(n==="lunch")return V;if(n==="snack")return X};return e.jsx(xe,{onClick:u,children:e.jsxs(he,{onClick:n=>n.stopPropagation(),children:[e.jsx(pe,{children:"Record your meal"}),e.jsxs(q,{style:{marginTop:"24px"},children:[e.jsx(G,{src:y(m)}),e.jsx(J,{children:ie(m)})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs(je,{children:[e.jsx(fe,{value:c,type:"string",placeholder:"The name of the product or dish",onChange:n=>{d(n.target.value)}}),e.jsx(me,{min:0,max:100,type:"number",onChange:n=>{p(n.target.value)},value:h,placeholder:"Carbonoh"}),e.jsx(ge,{min:0,max:100,type:"number",onChange:n=>{M(n.target.value)},value:a,placeholder:"Protein"}),e.jsxs(Ce,{children:[e.jsx(be,{min:0,max:100,type:"number",onChange:n=>{j(n.target.value)},value:o,placeholder:"Fat"}),e.jsx(ye,{min:0,max:400,type:"number",onChange:n=>{S(n.target.value)},value:C,placeholder:"Calories"})]})]}),e.jsxs(ve,{children:[e.jsx(ke,{type:"submit",children:"Confirm"}),e.jsx(we,{onClick:u,type:"button",children:"Cancel"})]})]})]})})},Qe=w(de)``,Ve=w.svg`
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
`,Xe=w.div`
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
`,Ye=w.h2`
  font-size: 24px;
  font-weight: 500;
`,Ze=w.div`
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
`,et=w.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`,R=({title:m,meal:c,setFoodType:C,typefood:h,totalCarbs:a,totalProtein:o,totalFat:i,setProductId:d,setName:S,setCalories:p,setCarbogidrate:M,setProtein:j,setFat:b,src:u})=>{const F=O(),[f,y]=x.useState(!1),n=()=>y(!0),B=()=>y(!1),v=l=>{const k=l.currentTarget.dataset.set,g=c.find(L=>L._id===k);S(g.name),p(g.calories),M(g.nutrition.carbogidrate),j(g.nutrition.protein),b(g.nutrition.fat),d(k),C(`${h.toLowerCase()}`),F(A(!0))};return e.jsxs(Se,{children:[e.jsxs(Me,{children:[e.jsxs(q,{children:[e.jsx(G,{src:u}),e.jsx(J,{children:`${m}`})]}),e.jsxs(Fe,{children:[e.jsxs(Pe,{children:[e.jsx(Ie,{children:"Carbonohidrates: "}),e.jsxs(T,{children:[" ",a||0," "]})]}),e.jsxs(Re,{children:[e.jsxs(Be,{children:[e.jsx(Le,{children:"Protein: "}),e.jsxs(T,{children:[" ",o||0," "]})]}),e.jsxs(De,{children:[e.jsx(Te,{children:"Fat: "}),e.jsx(T,{children:i||0})]})]})]})]}),e.jsxs(Ee,{children:[(c==null?void 0:c.length)>0?c.map((l,k)=>e.jsxs("div",{style:{position:"relative"},children:[e.jsxs($e,{children:[e.jsxs(Ne,{children:[e.jsx(W,{children:k+1}),l.name]}),e.jsxs(Oe,{children:[e.jsx(E,{children:e.jsxs($,{children:[e.jsx(N,{children:" Carb. "}),l.nutrition.carbogidrate]})}),e.jsx(E,{children:e.jsxs($,{children:[e.jsx(N,{children:" Prot. "}),l.nutrition.protein]})}),e.jsx(E,{children:e.jsxs($,{children:[e.jsx(N,{children:" Fat. "}),l.nutrition.fat]})})]})]}),e.jsxs(Ae,{"data-set":l._id,onClick:v,children:[e.jsx(He,{children:e.jsx("use",{href:`${I}#icon-edit-3`})}),e.jsx(We,{children:e.jsx("use",{href:`${I}#trash-delete`})})]})]},l._id)):e.jsxs(z,{onClick:n,children:[e.jsx(_,{children:"Record your meal"}),e.jsx(U,{children:e.jsx("use",{href:`${I}#icon-add-converted`})})]}),(c==null?void 0:c.length)>0?e.jsxs("div",{style:{display:"flex"},children:[e.jsx(W,{children:c.length+1}),e.jsxs(z,{onClick:n,children:[e.jsx(_,{children:"Record your meal"}),e.jsx(U,{children:e.jsx("use",{href:`${I}#icon-add-converted`})})]})]}):null,e.jsx(ze,{closeModal:B,stateModal:f,typefood:h})]})]})},tt=()=>{var H;const m=le(),c=x.useRef(((H=m.state)==null?void 0:H.from)??"/"),[C,h]=x.useState(""),a=P(_e),o=P(Ue),i=P(qe),d=P(Ge),[S,p]=x.useState(""),[M,j]=x.useState(""),[b,u]=x.useState(""),[F,f]=x.useState(""),[y,n]=x.useState(""),[B,v]=x.useState(""),l=O(),k=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),g=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),L=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),Y=d==null?void 0:d.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),Z=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),ee=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),te=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),ne=d==null?void 0:d.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),se=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),re=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ae=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),oe=d==null?void 0:d.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),D=P(Je);return x.useEffect(()=>{const s=r=>{r.code==="Escape"&&l(A(!1))};return D?(document.addEventListener("keydown",s),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[D,l]),x.useEffect(()=>{l(ue())},[l]),e.jsxs(Ze,{children:[e.jsxs(Xe,{children:[e.jsx(Qe,{to:c.current,children:e.jsx(Ve,{children:e.jsx("use",{href:`${I}#icon-arrowright`})})}),e.jsx(Ye,{children:"Diary"})]}),D?e.jsx(Ke,{type:C,name:S,calories:M,carbogidrate:b,protein:F,fat:y,productId:B,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n}):null,e.jsxs(et,{children:[e.jsx(R,{totalCarbs:se,totalProtein:Z,totalFat:k,meal:a,title:"Breakfast",typefood:"breakfast",setFoodType:h,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n,setProductId:v,src:K}),e.jsx(R,{totalCarbs:ae,totalProtein:te,totalFat:L,meal:o,title:"Lunch",typefood:"lunch",setFoodType:h,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n,setProductId:v,src:V}),e.jsx(R,{totalCarbs:re,totalProtein:ee,totalFat:g,meal:i,title:"Dinner",typefood:"dinner",setFoodType:h,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n,setProductId:v,src:Q}),e.jsx(R,{totalCarbs:oe,totalProtein:ne,totalFat:Y,meal:d,title:"Snack",typefood:"snack",setFoodType:h,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n,setProductId:v,src:X})]})]})},rt=()=>e.jsx("div",{children:e.jsx(tt,{})});export{rt as default};
