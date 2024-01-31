import{s as i,u as o,A as c,r as s,B as r,j as e,L as p,o as x}from"./index-e10ab8d3.js";import{a as m}from"./RecommendedList-7288aba9.js";const h="/Healthy_life/assets/recommendedPage-3bc9c0df.png",l=i.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
`,g=i.div`
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
`,f=i.div`
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
    justify-content: flex-end;
  }
`,w=i.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,u=i.img`
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
`,j=i.svg`
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
`,y=()=>{var n;const t=o(),a=c(),d=s.useRef(((n=a.state)==null?void 0:n.from)??"/");return s.useEffect(()=>{t(r())},[t]),e.jsxs(l,{children:[e.jsxs(g,{children:[e.jsx(p,{to:d.current,children:e.jsx(j,{children:e.jsx("use",{href:`${x}#icon-arrowright`})})}),e.jsx(w,{children:"Recommended food"})]}),e.jsxs(f,{children:[e.jsx(u,{src:h,alt:"Page image"}),e.jsx(m,{})]})]})},L=()=>e.jsx(y,{});export{L as default};
