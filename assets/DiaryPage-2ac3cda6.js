import{u as F,r as u,j as e,av as $,B as A,s as D,o as B,k as f,H as q}from"./index-49fe0aca.js";import{m as z,C as _,T as G,M as H,d as E,e as L,I as J,R as P,S as K,n as M,B as Q,f as U,g as V,o as X,W as Y,p as Z,q as ee,r as te,t as R,u as se,v as ne,N as I,w as v,E as re,A as T,i as ae,j as ie,k as oe,l as le,h as ce}from"./Reacord.styled-4f6b5b02.js";const de=({type:p,secondType:o})=>{const d=F(),l="src/assets/images/sprite.svg",[r,i]=u.useState(""),[a,j]=u.useState(""),[x,h]=u.useState(""),[g,b]=u.useState(""),[m,w]=u.useState(""),y=()=>{d($(!1))},k={typeFood:p===void 0?o:p,userFood:[{name:r,calories:a,nutrition:{carbogidrate:x,protein:g,fat:m}}]},S=c=>{c.preventDefault(),d(A(k)),y()};return e.jsx(z,{children:e.jsxs(_,{children:[e.jsx(G,{children:"Record your meal"}),e.jsxs(H,{style:{marginTop:"24px"},children:[e.jsx(E,{src:"src/assets/images/Breakfast.png"}),e.jsx(L,{children:o===void 0?o:p})]}),e.jsxs("form",{onSubmit:S,children:[e.jsxs(J,{children:[e.jsx(P,{value:r,placeholder:"The name of the product or dish",onChange:c=>{i(c.target.value)}}),e.jsx(P,{type:"number",min:1,onChange:c=>{h(c.target.value)},value:x,placeholder:"Carbonoh"}),e.jsx(P,{min:1,type:"number",onChange:c=>{b(c.target.value)},value:g,placeholder:"Protein"}),e.jsxs(K,{children:[e.jsx(M,{min:1,type:"number",onChange:c=>{w(c.target.value)},value:m,placeholder:"Fat"}),e.jsx(M,{min:1,type:"number",onChange:c=>{j(c.target.value)},value:a,placeholder:"Calories"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${l}#trash-delete`})})]})]}),e.jsxs(Q,{children:[e.jsx(U,{type:"submit",children:"Confirm"}),e.jsx(V,{onClick:y,type:"button",children:"Cancel"})]})]})]})})},he=D.p`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Poppins500';
`,pe=D.div`
  width: 320px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding-bottom: 52px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,xe=D.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`,C=({title:p,meal:o,setFoodType:d,typefood:l,totalCarbs:r,totalProtein:i,totalFat:a})=>{const j=F(),x=()=>{j($(!0))};return e.jsxs(X,{children:[e.jsxs(Y,{children:[e.jsxs(H,{style:{alignItems:"center"},children:[e.jsx(E,{src:`src/assets/images/${p}.png`}),e.jsx(L,{children:`${p}`})]}),e.jsxs(Z,{children:[e.jsxs(ee,{children:["Carbonohidrates: ",r||0]}),e.jsxs(te,{children:[e.jsxs(R,{children:["Protein: ",i||0]}),e.jsxs(R,{children:["Fat: ",a||0]})]})]})]}),e.jsxs(se,{style:{marginTop:"20px"},onClick:()=>d(`${l}`),children:[(o==null?void 0:o.length)>0?o.map((h,g)=>e.jsxs(ne,{children:[e.jsx(I,{children:g+1}),e.jsx(v,{children:h.name}),e.jsxs(v,{children:["Carbs: ",h.nutrition.carbogidrate]}),e.jsxs(v,{children:["Protein: ",h.nutrition.protein]}),e.jsxs(v,{children:["Fat: ",h.nutrition.fat]}),e.jsxs(re,{children:[e.jsx("svg",{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:`${B}#edit-2`})}),e.jsx("p",{children:"Edit"})]})]},h._id)):e.jsxs("div",{style:{width:"170px",flexDirection:"row-reverse",display:"flex",gap:"8px",maxHeight:"20px"},children:[e.jsx(T,{onClick:x,children:"Record your meal"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${B}#icon-add-converted`})})]}),(o==null?void 0:o.length)>0?e.jsxs("div",{style:{display:"flex"},children:[e.jsx(I,{children:o.length+1}),e.jsxs("div",{style:{width:"170px",flexDirection:"row-reverse",display:"flex",gap:"8px",maxHeight:"20px"},children:[e.jsx(T,{onClick:x,children:"Record your meal"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${B}#icon-add-converted`})})]})]}):null]})]})},ue=()=>{const p="src/assets/images/sprite.svg",[o,d]=u.useState(""),l=f(ae),r=f(ie),i=f(oe),a=f(le),j=F(),x=l==null?void 0:l.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.fat)},0),h=i==null?void 0:i.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.fat)},0),g=r==null?void 0:r.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.fat)},0),b=a==null?void 0:a.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.fat)},0),m=l==null?void 0:l.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.protein)},0),w=i==null?void 0:i.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.protein)},0),y=r==null?void 0:r.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.protein)},0),k=a==null?void 0:a.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.protein)},0),S=l==null?void 0:l.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.carbogidrate)},0),c=i==null?void 0:i.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.carbogidrate)},0),W=r==null?void 0:r.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.carbogidrate)},0),N=a==null?void 0:a.reduce((s,n)=>{var t;return s+((t=n.nutrition)==null?void 0:t.carbogidrate)},0),O=f(ce);return u.useEffect(()=>{j(q())},[j]),e.jsxs(pe,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginBottom:"20px"},children:[e.jsx("svg",{style:{display:"inline-block",width:"16px",height:" 16px",fill:"white",rotate:"180deg"},children:e.jsx("use",{href:`${p}#icon-arrowright`})}),e.jsx(he,{children:"Diary"})]}),O?e.jsx(de,{type:o}):null,e.jsxs(xe,{children:[e.jsx(C,{totalCarbs:S,totalProtein:m,totalFat:x,meal:l,title:"Breakfast",typefood:"breakfast",setFoodType:d}),e.jsx(C,{totalCarbs:W,totalProtein:y,totalFat:g,meal:r,title:"Lunch",typefood:"lunch",setFoodType:d}),e.jsx(C,{totalCarbs:c,totalProtein:w,totalFat:h,meal:i,title:"Dinner",typefood:"dinner",setFoodType:d}),e.jsx(C,{totalCarbs:N,totalProtein:k,totalFat:b,meal:a,title:"Snack",typefood:"snack",setFoodType:d})]})]})},fe=()=>e.jsx("div",{children:e.jsx(ue,{})});export{fe as default};
