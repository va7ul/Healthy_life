import{s as i,j as e,L as n}from"./index-c8be8ddf.js";import{i as a}from"./welcomepage-690c85c9.js";const o=i.li`
  color: white;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
 

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

  @media screen and (min-width:834px) {
    width: calc((100% - 16px) / 2);

   
  }

  @media screen and (min-width: 1440px ) {
    width: 100%;
  }
`,t=({children:r})=>e.jsx(o,{children:r}),d=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  color: var(--primary-color-white);
  max-width: 320px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 8px;

  @media screen  and (min-width: 834px) {
   max-width: 834px; 
   gap: 80px;
   padding-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: row;
    gap: 104px;
    justify-content:flex-start;
    align-items: flex-start;
   
    padding: 20px 150px;
  }
`,s=i.img`
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
`,l=i.div`
 display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 40px;

@media screen and (min-width: 834px ) {
 align-items: center;
gap: 80px;
}

@media screen and (min-width: 1440px) {
  padding-top: 80px;
  align-items: flex-start;
}
`,c=i.div`
display:flex;
flex-direction: column;
gap:24px;
`,p=i.div`
display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (min-width: 834px) {
          align-items: center;
    justify-content: center;
    }
`,x=i.h2`
  color: var(--primary-color-white);
  font-size: 24px;
  font-family: 'Poppins500';
  font-weight: 500;
  line-height: 1.25;
  
  
  @media screen  and (min-width: 834px) {
    font-size: 30px;
  
  }

 
`,m=i.p`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-family: 'Poppins400';
  font-weight: 400;
  line-height:1.3;
  word-wrap: break-word;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height:1.4;
     text-align: center;
    max-width: 444px;

  }

   @media screen and (min-width: 1440px) {
        text-align: start; 
  }
  
`,h=i.div`
  
  display: flex;
align-items: center;
gap: 16px;
  
@media screen and (min-width: 834px) {
  justify-content: center;
}

@media screen and (min-width: 1440px) {
  justify-content: flex-start;
}

`,g=i.button`
  background-color: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
padding: 8px 10px;
border-radius: 12px;
border: none;
width: 122px;
text-align: center;
font-weight: 500;
transition: background-color, var(--transition-dur-and-func);

  &:hover,
  &:focus {
    background-color: var(--primary-color-lite-green);
  }

  @media screen and (min-width: 834px) {
   width: 192px; 
  }
`,f=i.button`
  background-color: transparent;
  color: var(--primary-color-white);
  padding: 8px 10px;
border-radius: 12px;
border: 1px solid transparent ;
width: 122px;
text-align: center;
font-weight: 500;
transition: border-color, var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border-color:var(--primary-color-green-lite);
    
  }
`,w=i.ul`
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
       padding-left: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
        padding-left:0;
  }
`,j=()=>e.jsxs(d,{children:[e.jsx(s,{src:a,alt:"Activity trtacker"}),e.jsxs(l,{children:[e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(x,{children:"Set goals and achieve them"}),e.jsx(m,{children:"The service will help you set goals and follow them."})]}),e.jsxs(h,{children:[e.jsx(n,{to:"/signin",children:e.jsx(g,{children:"Sign in"})}),e.jsx(n,{to:"/signup",children:e.jsx(f,{children:"Sign up"})})]})]}),e.jsxs(w,{children:[e.jsx(t,{children:"Set goals"}),e.jsx(t,{children:"Watch your calories"}),e.jsx(t,{children:"Keep track of your water intake"}),e.jsx(t,{children:"Control your weight"})]})]})]});export{j as default};
