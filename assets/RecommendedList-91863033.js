import{s as r,j as e,N as f,k as s,r as c,au as l,o as w}from"./index-9a6f27e5.js";const u=r.li`
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

`,v=r.img`
width: 46px;
height: 46px;
`,y=r.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2px;

`,j=r.h3`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 1.3;

width: 150px;
`,R=r.div`
display: flex;
align-items: flex-start;
gap: 6px;
width: 140px;
`,b=r.p`
line-height: 1.4;
`,L=r.p`
color: var(--primary-color-grey);
font-weight: 500;
line-height: 1.4;
`,p=({name:i,amount:a,img:n,calories:t})=>e.jsxs(u,{children:[e.jsx(v,{src:n,alt:"img"}),e.jsxs(y,{children:[e.jsx(j,{children:i}),e.jsxs(R,{children:[e.jsx(b,{children:a}),e.jsxs(L,{children:[t," calories"]})]})]})]}),x=i=>i.recommendedFoods.isLoading,m=i=>i.recommendedFoods.error,h=i=>i.recommendedFoods.recomendedFoods,T=r.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`,S=r.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
  align-items: center;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 44px;
    align-items: flex-start;
  }
`,I=r.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,N=r.img`
  width: 300px;
  height: 312px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 396px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 560px;
  }
`,C=r.div`
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
`,k=r.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.4;
  }
`,z=r(f)`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--primary-color-grey);
  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,E=r.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
  align-items: center;

  &:hover,
  &:focus {
    fill: var(--primary-color-green-lite);
  }
`,F=r.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 3px;

  transition: color, var(--transition-dur-and-func);
  transition: fill, var(--transition-dur-and-func);
`,g=r.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
  }
`,O=r.div`
  margin: 0 auto;
  padding: 30px 0;
`,P=r.button`
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

  &:hover {
    background-color: var(--secondary-color-yellow);
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,B=()=>{const i=s(h),a=s(x),n=s(m),[t,d]=c.useState(2);return c.useEffect(()=>{const o=()=>{window.innerWidth>=834?d(4):d(2)};return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),a?e.jsx(l,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"30vh auto 0 auto"}}):n?e.jsxs("div",{children:["Error: ",n]}):e.jsxs(C,{children:[e.jsx(k,{children:"Recommended food"}),e.jsx(g,{className:"rec-list",children:i.slice(0,t).map(o=>e.jsx(p,{...o},o.name))}),e.jsx(F,{children:e.jsxs(z,{to:"/recommended-food",children:["See more",e.jsx(E,{children:e.jsx("use",{href:`${w}#icon-arrowright`})})]})})]})},M=({numberOfCardsToRender:i})=>{const a=s(h),n=s(x),t=s(m);return n?e.jsx(l,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"30vh auto 0 auto"}}):t?e.jsxs("div",{children:["Error: ",t]}):e.jsx(g,{children:a.slice(0,i).map(d=>e.jsx(p,{...d},d.name))})};export{O as B,B as R,P as S,T as a,I as b,S as c,N as d,M as e,h as s};
