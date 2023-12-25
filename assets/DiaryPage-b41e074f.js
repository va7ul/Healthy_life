import{s as k,u as P,j as t,z as H,r as b,k as x,C as I}from"./index-895674c0.js";import{i as O,W as E,j as z,M as A,k as N,l as W,m as y,n as _,o as q,N as w,p as f,A as C,e as G,f as J,g as K,h as Q,d as U,R as V}from"./Record-b678aa60.js";const X=k.p`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Poppins500';
`,Y=k.div`
  width: 320px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,Z=k.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`,v="src/assets/images/sprite.svg",j=({title:p,meal:o,setOpen:d,setFoodType:l,typefood:c,totalCarbs:i,totalProtein:r,totalFat:h})=>{const g=P(),u=()=>{g(H(!0))};return t.jsxs(O,{children:[t.jsxs(E,{children:[t.jsxs(z,{style:{alignItems:"center"},children:[t.jsx(A,{src:`src/assets/images/${p}.png`}),t.jsx(N,{children:`${p}`})]}),t.jsxs(W,{children:[t.jsxs(y,{children:["Carbonohidrates: ",i||0]}),t.jsxs(y,{children:["Protein: ",r||0]}),t.jsxs(y,{children:["Fat: ",h||0]})]})]}),t.jsxs(_,{style:{marginTop:"20px"},onClick:()=>l(`${c}`),children:[o.length>0?o.map((a,m)=>t.jsxs(q,{children:[t.jsx(w,{children:m+1}),t.jsx(f,{children:a.name}),t.jsxs(f,{children:["Carbs: ",a.nutrition.carbogidrate]}),t.jsxs(f,{children:["Protein: ",a.nutrition.protein]}),t.jsxs(f,{children:["Fat: ",a.nutrition.fat]})]},a._id)):t.jsxs("div",{style:{width:"170px",flexDirection:"row-reverse",display:"flex",gap:"8px",maxHeight:"20px"},children:[t.jsx(C,{onClick:u,children:"Record your meal"}),t.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:t.jsx("use",{href:`${v}#icon-add-converted`})})]}),o.length>0?t.jsxs("div",{style:{display:"flex"},children:[t.jsx(w,{children:o.length+1}),t.jsxs("div",{style:{width:"170px",flexDirection:"row-reverse",display:"flex",gap:"8px",maxHeight:"20px"},children:[t.jsx(C,{onClick:u,children:"Record your meal"}),t.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:t.jsx("use",{href:`${v}#icon-add-converted`})})]})]}):null]})]})},tt=()=>{const p="src/assets/images/sprite.svg",[o,d]=b.useState(""),l=x(G),c=x(J),i=x(K),r=x(Q),h=P(),g=l.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.fat)},0),u=i.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.fat)},0),a=c.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.fat)},0),m=r.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.fat)},0),D=l.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.protein)},0),F=i.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.protein)},0),M=c.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.protein)},0),S=r.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.protein)},0),R=l.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.carbogidrate)},0),B=i.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.carbogidrate)},0),T=c.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.carbogidrate)},0),$=r.reduce((n,s)=>{var e;return n+((e=s.nutrition)==null?void 0:e.carbogidrate)},0),L=x(U);return b.useEffect(()=>{h(I())},[h]),t.jsxs(Y,{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginBottom:"20px"},children:[t.jsx("svg",{style:{display:"inline-block",width:"16px",height:" 16px",fill:"white",rotate:"180deg"},children:t.jsx("use",{href:`${p}#icon-arrowright`})}),t.jsx(X,{children:"Diary"})]}),L?t.jsx(V,{type:o}):null,t.jsxs(Z,{children:[t.jsx(j,{totalCarbs:R,totalProtein:D,totalFat:g,meal:l,title:"Breakfast",typefood:"breakfast",setFoodType:d}),t.jsx(j,{totalCarbs:T,totalProtein:M,totalFat:a,meal:c,title:"Lunch",typefood:"lunch",setFoodType:d}),t.jsx(j,{totalCarbs:B,totalProtein:F,totalFat:u,meal:i,title:"Dinner",typefood:"dinner",setFoodType:d}),t.jsx(j,{totalCarbs:$,totalProtein:S,totalFat:m,meal:r,title:"Snack",typefood:"snack",setFoodType:d})]})]})},st=()=>t.jsx("div",{children:t.jsx(tt,{})});export{st as default};
