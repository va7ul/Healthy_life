import{s as r,j as e,ax as y,i as s,r as l,ao as p,n as R,ay as C}from"./index-54049dd3.js";const L=r.li`
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
`,b=r.img`
  width: 46px;
  height: 46px;
`,k=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,E=r.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  width: 150px;
`,W=r.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  width: 140px;
`,z=r.p`
  line-height: 1.4;
`,F=r.p`
  color: var(--primary-color-grey);
  font-weight: 500;
  line-height: 1.4;
`,x=({name:i,amount:a,img:o,calories:t})=>e.jsxs(L,{children:[e.jsx(b,{src:o,alt:"img"}),e.jsxs(k,{children:[e.jsx(E,{children:i}),e.jsxs(W,{children:[e.jsx(z,{children:a}),e.jsxs(F,{children:[t," calories"]})]})]})]}),m=i=>i.recommendedFoods.isLoading,h=i=>i.recommendedFoods.error,g=i=>i.recommendedFoods.recomendedFoods,S=r.div`
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
`,T=r.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.4;
  }
`,O=r(y)`
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
`,M=r.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
  align-items: center;

  &:hover,
  &:focus {
    fill: var(--primary-color-green-lite);
  }
`,N=r.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 3px;

  transition: color, var(--transition-dur-and-func);
  transition: fill, var(--transition-dur-and-func);
`,I=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`,f=r.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
  }
`,B=r.button`
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
`,P=r.div`
  margin: 0 auto;
  padding: 30px 0;
`,D=()=>{const i=s(g),a=s(m),o=s(h),[t,d]=l.useState(2);return l.useEffect(()=>{const n=()=>{window.innerWidth>=834?d(4):d(2)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),a?e.jsx(p,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"30vh auto 0 auto"}}):o?e.jsxs("div",{children:["Error: ",o]}):e.jsxs(S,{children:[e.jsx(T,{children:"Recommended food"}),e.jsx(f,{className:"rec-list",children:i.slice(0,t).map(n=>e.jsx(x,{...n},n.name))}),e.jsx(N,{children:e.jsxs(O,{to:"/recommended-food",children:["See more",e.jsx(M,{children:e.jsx("use",{href:`${R}#icon-arrowright`})})]})})]})},Q=()=>{const i=s(g),a=s(m),o=s(h),[t,d]=l.useState(0),[n,u]=l.useState(10),w=C.useMediaQuery({maxWidth:2440});if(a)return e.jsx(p,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"30vh auto 0 auto"}});if(o)return e.jsxs("div",{children:["Error: ",o]});const v=Math.floor(i.length/10),j=()=>{u(c=>c+10),d(t+1)};return e.jsxs(I,{children:[e.jsx(f,{children:i.slice(0,n).map(c=>e.jsx(x,{...c},c.name))}),w&&e.jsx(P,{children:t!==v?e.jsx(B,{onClick:j,children:"Load more"}):e.jsx("p",{children:"You have reached the end"})})]})};export{D as R,Q as a};
