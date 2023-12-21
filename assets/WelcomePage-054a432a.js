import{s as i,j as t,L as r}from"./index-3e47c4e9.js";import{i as a}from"./welcomepage-690c85c9.js";const l=i.li`
  color: white;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '•';
    color: var(--primary-color-green-lite);
    font-size: 20px;
    vertical-align: middle;
    padding-right: 10px;
  }
`,e=({children:n})=>t.jsx(l,{children:n}),c=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color-black-one);
  color: var(--primary-color-white);
  height: 100vh;
  /* padding: 10px 24px; */
`,s=i.img`
  height: 296px;
  width: 300px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
`,p=i.main`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,d=i.h2`
  color: var(--primary-color-white);
  font-size: 24px;
  font-family: 'Poppins500';
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
  margin-top: 24px;
`,x=i.p`
  color: var(--primary-color-grey);
  font-size: var(--main-font-size);
  font-family: 'Poppins400';
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  margin-top: 16px;
`,g=i.ul`
  list-style: none;
  padding: 0;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`,m=i.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  position: relative;
  margin-top: 24px;
  margin-bottom: 40px;
`,o=i.button`
  display: inline-flex;
  min-width: 142px;
  padding: 8px 10px;
  text-align: center;
  font-family: 'Poppins500';
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  color: var(--primary-color-black-two);
  border-radius: 12px;
  cursor: pointer;
  transition: border 0.3s var(--transition-dur-and-func);
  align-items: center;
  background-color: var(--primary-color-lite-green);
  flex-direction: column;
  gap: 10px;
  position: relative;

  & .div-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
  }

  & .text-wrapper {
    color: var(--primary-color-black-two);
    font-family: var(--button-text-1-font-family);
    font-size: var(--button-text-1-font-size);
    font-style: var(--button-text-1-font-style);
    font-weight: var(--button-text-1-font-weight);
    letter-spacing: var(--button-text-1-letter-spacing);
    line-height: var(--button-text-1-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 122px;
  }

  @media screen and (min-width: 768px) {
    min-width: 192px;
    padding: 16px 60px;
    font-size: 20px;
  }
`,h=i(o)`
  background-color: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);

  &:hover,
  &:focus {
    background-color: #22c55e;
  }
`,f=i(o)`
  background-color: transparent;
  color: var(--primary-color-white);

  &:hover,
  &:focus {
    border: 1px solid var(--primary-color-green-lite);
  }
`,w=()=>t.jsx(c,{children:t.jsxs(p,{children:[t.jsx(s,{src:a,alt:"Activity trtacker"}),t.jsx(d,{children:"Set goals and achieve them"}),t.jsx(x,{children:"The service will help you set goals and follow them."}),t.jsxs(m,{children:[t.jsx(r,{to:"/signin",children:t.jsx(h,{children:"Sign in"})}),t.jsx(r,{to:"/signup",children:t.jsx(f,{children:"Sign up"})})]}),t.jsxs(g,{children:[t.jsx(e,{children:"Set goals"}),t.jsx(e,{children:"Watch your calories"}),t.jsx(e,{children:"Keep track of your water intake"}),t.jsx(e,{children:"Control your weight"})]})]})});export{w as default};
