import{u as B,r as i,j as e,aq as M,s as m,k as x,A as $}from"./index-0d6d12b0.js";import{B as A,C as E,T as H,d as S,M as D,e as P,I as N,R as g,S as L,f as k,g as W,h as q,i as z,j as O,W as _,k as G,l as f,m as J,n as K,N as C,o as p,A as w,s as Q,a as U,b as V,c as X}from"./Reacord.styled-2f7970b7.js";const Y=({isOpen:l,type:r})=>{const t=B(),c="src/assets/images/sprite.svg",[a,n]=i.useState(""),[o,j]=i.useState(""),[d,h]=i.useState(""),[y,R]=i.useState(""),[v,T]=i.useState(""),F={typeFood:r,userFood:[{name:a,calories:o,nutrition:{carbogidrate:d,protein:y,fat:v}}]},I=s=>{s.preventDefault(),t(M(F)),l(!1)};return e.jsx(A,{children:e.jsxs(E,{children:[e.jsx(H,{children:"Record your meal"}),e.jsxs(S,{style:{marginTop:"24px"},children:[e.jsx(D,{src:"src/assets/images/Breakfast.png"}),e.jsx(P,{children:"Breakfast"})]}),e.jsxs("form",{onSubmit:I,children:[e.jsxs(N,{children:[e.jsx(g,{value:a,placeholder:"The name of the product or dish",onChange:s=>{n(s.target.value)}}),e.jsx(g,{onChange:s=>{h(s.target.value)},value:d,placeholder:"Carbonoh"}),e.jsx(g,{onChange:s=>{R(s.target.value)},value:y,placeholder:"Protein"}),e.jsxs(L,{children:[e.jsx(k,{onChange:s=>{T(s.target.value)},value:v,placeholder:"Fat"}),e.jsx(k,{onChange:s=>{j(s.target.value)},value:o,placeholder:"Calories"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${c}#trash-delete`})})]})]}),e.jsxs(W,{children:[e.jsx(q,{type:"submit",value:"Confirm"}),e.jsx(z,{onClick:()=>l(!1),children:"Cancel"})]})]})]})})},Z=m.p`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Poppins500';
`,ee=m.div`
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
`,se=m.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`,b="src/assets/images/sprite.svg",u=({title:l,meal:r,setOpen:t,setFoodType:c,typefood:a})=>e.jsxs(O,{children:[e.jsxs(_,{children:[e.jsxs(S,{style:{alignItems:"center"},children:[e.jsx(D,{src:`src/assets/images/${l}.png`}),e.jsx(P,{children:`${l}`})]}),e.jsxs(G,{children:[e.jsx(f,{children:"Carbonohidrates:"}),e.jsx(f,{children:"Protein:"}),e.jsx(f,{children:"Fat:"})]})]}),e.jsxs(J,{style:{marginTop:"20px"},onClick:()=>c(`${a}`),children:[r[0].name!==""?r.map((n,o)=>e.jsxs(K,{children:[e.jsx(C,{children:o+1}),e.jsx(p,{children:n.name}),e.jsxs(p,{children:["Carbs: ",n.nutrition.carbogidrate]}),e.jsxs(p,{children:["Protein: ",n.nutrition.protein]}),e.jsxs(p,{children:["Fat: ",n.nutrition.fat]})]},n._id)):e.jsxs("div",{style:{width:"170px",flexDirection:"row-reverse",display:"flex",gap:"8px",maxHeight:"20px"},children:[e.jsx(w,{onClick:()=>t(!0),children:"Record your meal"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${b}#icon-add-converted`})})]}),r[0].name?e.jsxs("div",{style:{display:"flex"},children:[e.jsx(C,{children:r.length+1}),e.jsxs("div",{style:{width:"170px",flexDirection:"row-reverse",display:"flex",gap:"8px",maxHeight:"20px"},children:[e.jsx(w,{onClick:()=>t(!0),children:"Record your meal"}),e.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"white"},children:e.jsx("use",{href:`${b}#icon-add-converted`})})]})]}):null]})]}),te=()=>{const l="src/assets/images/sprite.svg",[r,t]=i.useState(!1),[c,a]=i.useState(""),n=x(Q),o=x(U),j=x(V),d=x(X),h=B();return i.useEffect(()=>{h($())},[h]),e.jsxs(ee,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginBottom:"20px"},children:[e.jsx("svg",{style:{display:"inline-block",width:"16px",height:" 16px",fill:"white",rotate:"180deg"},children:e.jsx("use",{href:`${l}#icon-arrowright`})}),e.jsx(Z,{children:"Diary"})]}),r?e.jsx(Y,{isOpen:t,type:c}):null,e.jsxs(se,{children:[e.jsx(u,{meal:n,title:"Breakfast",typefood:"breakfast",setOpen:t,setFoodType:a}),e.jsx(u,{meal:o,title:"Lunch",typefood:"lunch",setOpen:t,setFoodType:a}),e.jsx(u,{meal:j,title:"Dinner",typefood:"dinner",setOpen:t,setFoodType:a}),e.jsx(u,{meal:d,title:"Snack",typefood:"snack",setOpen:t,setFoodType:a})]})]})},re=()=>e.jsx("div",{children:e.jsx(te,{})});export{re as default};
