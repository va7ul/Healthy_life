import{s as i,j as e,N as g,e as o,r as c,b as f}from"./index-460f92c2.js";const w=i.li`
border-radius: 12px;
background: var(--primary-color-black-two);

display: flex;
gap: 20px;

width: 100%;
padding: 20px 80px 20px 24px;
align-items: flex-start;

@media screen and (min-width: 834px) {

   width: calc((100% - 20px) / 2 );
}

@media screen and (min-width: 1440px) {
  
}

`,u=i.img`
width: 46px;
height: 46px;
`,v=i.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2px;
`,j=i.h3`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 0.75;
margin-bottom: 2px;
`,y=i.div`
display: flex;
align-items: flex-start;
gap: 6px;
`,R=i.p`
line-height: 1.4;
`,L=i.p`
color: var(--primary-color-grey);
font-weight: 500;
line-height: 1.4;
`,l=({name:n,amount:d,img:r,calories:t})=>e.jsxs(w,{children:[e.jsx(u,{src:r,alt:"img"}),e.jsxs(v,{children:[e.jsx(j,{children:n}),e.jsxs(y,{children:[e.jsx(R,{children:d}),e.jsxs(L,{children:[t," calories"]})]})]})]}),p=n=>n.recommendedFoods.isLoading,x=n=>n.recommendedFoods.error,m=n=>n.recommendedFoods.recomendedFoods,T=i.div`
padding: 16px 10px;

@media screen and (min-width: 834px){
    padding: 24px 27px;
}

@media screen and (min-width: 1440px){

    padding: 20px 34px;
}
`,k=i.div`
display:flex;
flex-direction:column;

gap: 24px;
align-items: center;

@media screen and (min-width: 834px){
    
}

@media screen and (min-width: 1440px){
  flex-direction: row;
  gap: 44px;  
}

`,I=i.h2`
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 0.8 ;

@media screen  and (min-width: 834px){
  font-size: 30px;
  line-height: 0.8 ;
}
 

`,N=i.img`
width : 300px;
height: 312px;


@media screen and (min-width: 834px) {
   width : 380px;
height: 396px;
  }

  @media screen and (min-width: 1440px) {
width : 536px;
height: 560px;
  }


`,C=i.div`
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
`,z=i.h2`
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 0.7 ;



`,b=i(g)`
font-size: 15px;
display: flex ; 
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: 500;
line-height: 0.7;
color: var(--primary-color-grey );
&:hover,
  &:focus {
    color:var(--primary-color-green-lite);
    
  }

`,E=i.svg`
width: 16px;
height: 16px;
fill: var(--primary-color-grey);
align-items: center;

&:hover,
  &:focus {
    fill :var(--primary-color-green-lite);
    
  }

`,F=i.div`
display: flex ; 
gap: 6px;
align-items: center;
padding: 3px;
 
transition: color, var(--transition-dur-and-func);
transition: fill , var(--transition-dur-and-func);
`,h=i.ul`
display:flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
flex-wrap: wrap;


 @media screen and (min-width: 834px) {
    flex-direction: row;  
    align-items: center;
  
}
`,P=()=>{const n=o(m),d=o(p),r=o(x),[t,a]=c.useState(2);return c.useEffect(()=>{const s=()=>{window.innerWidth>=834?a(4):a(2)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),d?e.jsx("div",{children:"Loading..."}):r?e.jsxs("div",{children:["Error: ",r]}):e.jsxs(C,{children:[e.jsx(z,{children:"Recommended food"}),e.jsx(h,{className:"rec-list",children:n.slice(0,t).map(s=>e.jsx(l,{...s},s.name))}),e.jsx(F,{children:e.jsxs(b,{to:"/recommended-food",children:["See more",e.jsx(E,{children:e.jsx("use",{href:`${f}#icon-arrowright`})})]})})]})},S=()=>{const n=o(m),d=o(p),r=o(x);return d?e.jsx("div",{children:"Loading..."}):r?e.jsxs("div",{children:["Error: ",r]}):e.jsx(h,{children:n.slice(0,10).map(t=>e.jsx(l,{...t},t.name))})};export{P as R,T as a,I as b,k as c,N as d,S as e};
