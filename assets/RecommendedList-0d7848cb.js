import{s as r,j as e,ax as f,i as s,r as c,ao as l,n as u}from"./index-0c5bba7c.js";const w=r.li`
  border-radius: 12px;
  background: var(--primary-color-black-two);

  display: flex;
  gap: 20px;

  width: 100%;
  padding: 20px 80px 20px 24px;
  align-items: flex-start;

  @media screen and (min-width: 834px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,v=r.img`
  width: 46px;
  height: 46px;
`,y=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,b=r.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  width: 150px;
`,j=r.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  width: 140px;
`,k=r.p`
  line-height: 1.4;
`,R=r.p`
  color: var(--primary-color-grey);
  font-weight: 500;
  line-height: 1.4;
`,p=({name:i,amount:a,img:n,calories:o})=>e.jsxs(w,{children:[e.jsx(v,{src:n,alt:"img"}),e.jsxs(y,{children:[e.jsx(b,{children:i}),e.jsxs(j,{children:[e.jsx(k,{children:a}),e.jsxs(R,{children:[o," calories"]})]})]})]}),x=i=>i.recommendedFoods.isLoading,m=i=>i.recommendedFoods.error,h=i=>i.recommendedFoods.recomendedFoods,L=r.div`
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
`,C=r.h2`
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
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
    max-height: 510px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 4px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: var(--primary-color-black-one);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--primary-color-grey);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color-green-lite);
    }
    &::-webkit-scrollbar-thumb:active {
      background: var(--primary-color-green-lite);
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 680px;
  }
`,T=()=>{const i=s(h),a=s(x),n=s(m),[o,d]=c.useState(2);return c.useEffect(()=>{const t=()=>{window.innerWidth>=834?d(4):d(2)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),a?e.jsx(l,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"30vh auto 0 auto"}}):n?e.jsxs("div",{children:["Error: ",n]}):e.jsxs(L,{children:[e.jsx(C,{children:"Recommended food"}),e.jsx(g,{className:"rec-list",children:i.slice(0,o).map(t=>e.jsx(p,{...t},t.name))}),e.jsx(F,{children:e.jsxs(z,{to:"/recommended-food",children:["See more",e.jsx(E,{children:e.jsx("use",{href:`${u}#icon-arrowright`})})]})})]})},O=()=>{const i=s(h),a=s(x),n=s(m);return a?e.jsx(l,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"30vh auto 0 auto"}}):n?e.jsxs("div",{children:["Error: ",n]}):e.jsx(g,{children:i.map(o=>e.jsx(p,{...o},o.name))})};export{T as R,O as a};
