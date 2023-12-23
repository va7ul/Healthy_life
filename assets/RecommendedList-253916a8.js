import{s as i,j as e,N as g,e as s,r as c,b as f}from"./index-c53e05d9.js";const w=i.li`
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

`,y=i.h3`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 1.3;

width: 150px;
`,j=i.div`
display: flex;
align-items: flex-start;
gap: 6px;
width: 140px;
`,R=i.p`
line-height: 1.4;
`,L=i.p`
color: var(--primary-color-grey);
font-weight: 500;
line-height: 1.4;
`,l=({name:n,amount:d,img:r,calories:t})=>e.jsxs(w,{children:[e.jsx(u,{src:r,alt:"img"}),e.jsxs(v,{children:[e.jsx(y,{children:n}),e.jsxs(j,{children:[e.jsx(R,{children:d}),e.jsxs(L,{children:[t," calories"]})]})]})]}),p=n=>n.recommendedFoods.isLoading,x=n=>n.recommendedFoods.error,m=n=>n.recommendedFoods.recomendedFoods,W=i.div`
display: flex;
    justify-content: flex-start;
    flex-direction: column;
padding: 16px 10px;

@media screen and (min-width: 834px){
    padding: 24px 27px;
}

@media screen and (min-width: 1440px){

    padding: 20px 34px;
}
`,T=i.div`
display:flex;
flex-direction:column;

gap: 24px;
align-items: center;

@media screen and (min-width: 834px){
    
}

@media screen and (min-width: 1440px){
  flex-direction: row;
  gap: 44px;  
  align-items: flex-start;
}

`,S=i.h2`
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 1.3 ;

@media screen  and (min-width: 834px){
  font-size: 30px;
  line-height: 1.2 ;
}
 

`,I=i.img`
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


`,b=i.div`
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: wrap;
gap: 16px;


@media screen and (min-width: 834px) {
 max-width: 780px;
}

@media screen and (min-width: 1440px) {
  max-width: 676px;
}
`,C=i.h2`
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.3 ;

@media screen and (min-width: 834px) {
  font-size: 22px;
  line-height: 1.4;
}



`,z=i(g)`
font-size: 15px;
display: flex ; 
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: 500;
line-height: 1.3;
color: var(--primary-color-grey );
&:hover,
  &:focus {
    color:var(--primary-color-green-lite);
    
  }

`,k=i.svg`
width: 16px;
height: 16px;
fill: var(--primary-color-grey);
align-items: center;

&:hover,
  &:focus {
    fill :var(--primary-color-green-lite);
    
  }

`,E=i.div`
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
`,N=i.div`
margin: 0 auto;
padding: 30px 0;
`,P=i.button`

  background-color: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  padding: 8px 10px;
  border-radius: 12px;
  border: none;
  width: 122px;
  height: 36px;
  text-align: center;
  font-weight: 500;
  transition: background-color, var(--transition-dur-and-func);

  &:hover,
  &:focus {
    background-color: var(--primary-color-lite-green);
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }

`,B=()=>{const n=s(m),d=s(p),r=s(x),[t,a]=c.useState(2);return c.useEffect(()=>{const o=()=>{window.innerWidth>=834?a(4):a(2)};return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),d?e.jsx("div",{children:"Loading..."}):r?e.jsxs("div",{children:["Error: ",r]}):e.jsxs(b,{children:[e.jsx(C,{children:"Recommended food"}),e.jsx(h,{className:"rec-list",children:n.slice(0,t).map(o=>e.jsx(l,{...o},o.name))}),e.jsx(E,{children:e.jsxs(z,{to:"/recommended-food",children:["See more",e.jsx(k,{children:e.jsx("use",{href:`${f}#icon-arrowright`})})]})})]})},M=({numberOfCardsToRender:n})=>{const d=s(m),r=s(p),t=s(x);return r?e.jsx("div",{children:"Loading..."}):t?e.jsxs("div",{children:["Error: ",t]}):e.jsx(h,{children:d.slice(0,n).map(a=>e.jsx(l,{...a},a.name))})};export{N as B,B as R,P as S,W as a,S as b,T as c,I as d,M as e};
