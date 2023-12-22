import{s as t,j as i,L as n}from"./index-a3bd04cf.js";import{i as a}from"./welcomepage-690c85c9.js";const d=t.li`
  color: white;
  font-size: 14px;
  font-family: 'Poppins400';
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '•';
    color: var(--primary-color-green-lite);
    font-size: 30px;
    vertical-align: middle;
    padding-right: 8px;
  }
/* 
  @media screen and (min-width: 834px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  } */
`,e=({children:r})=>i.jsx(d,{children:r}),o=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  color: var(--primary-color-white);
  max-width: 320px;
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    max-width: 834px;
    gap: 80px;
    padding-top: 16px;
    padding-bottom: 286px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;

    padding-top: 20px;
    padding-bottom: 72px;
  }
`,c=t.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`,p=t.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    align-items: flex-start;
  }
`,l=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,s=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: 834px) {
    align-items: center;
    justify-content: center;
  }
`,x=t.h2`
  color: var(--primary-color-white);
  font-size: 24px;
  font-family: 'Poppins500';
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 0px;
  }
`,h=t.p`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-family: 'Poppins400';
  font-weight: 400;
  line-height: 1.3;
  word-wrap: break-word;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    max-width: 430px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,m=t.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 834px) {
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`,g=t.button`
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
`,w=t.button`
  background-color: transparent;
  color: var(--primary-color-white);
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid transparent;
  width: 122px;
  height: 36px;
  text-align: center;
  font-weight: 500;
  transition: border-color, var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border-color: var(--primary-color-green-lite);
  }
`,f=t.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 444px;

    :nth-child(1) {
      width: 250px;
    }
    :nth-child(2) {
      width: 170px;
    }
    :nth-child(3) {
      width: 250px;
    }
    :nth-child(4) {
      width: 170px;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
  :nth-child(1) {
    width: 100%;
  }
  :nth-child(2) {
    width: 100%;
  }
  :nth-child(3) {
    width: 100%;
  }
  :nth-child(4) {
    width: 100%;
  }
`,j=()=>i.jsxs(o,{children:[i.jsx(c,{src:a,alt:"Activity trtacker"}),i.jsxs(p,{children:[i.jsxs(l,{children:[i.jsxs(s,{children:[i.jsx(x,{children:"Set goals and achieve them"}),i.jsx(h,{children:"The service will help you set goals and follow them."})]}),i.jsxs(m,{children:[i.jsx(n,{to:"/signin",children:i.jsx(g,{children:"Sign in"})}),i.jsx(n,{to:"/signup",children:i.jsx(w,{children:"Sign up"})})]})]}),i.jsxs(f,{children:[i.jsx(e,{children:"Set goals"}),i.jsx(e,{children:"Watch your calories"}),i.jsx(e,{children:"Keep track of your water intake"}),i.jsx(e,{children:"Control your weight"})]})]})]});export{j as default};
