import{s as r}from"./index-6bf3420c.js";import{F as i}from"./index.esm-5a326af2.js";const o={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},s=r(i)`
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: ${t=>t.border||`1px solid ${o.inputBorder}`};
  padding: 14px;
  color: ${o.text};
  background-color: ${o.background};
  transition: border var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 1px solid ${o.inputBorderHover};
    outline: none;
  }
`,p=r.div`
  color: ${t=>t.color||o.error};
  margin-top: 4px;
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
`,c=r.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,l=r.svg`
  width: 16px;
  height: 16px;
  stroke: ${o.iconStroke};
  cursor: pointer;
`,d=r.svg`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  fill: ${t=>t.fill||o.error};
`,g=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,x=r.label`
  position: relative;
  display: block;
`,v=r.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  display: flex;
  align-items: center;
`,m=r.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`,u=r.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
`,h=r.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,e=r.button`
  background-color: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  padding: 15px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    background-color: #22c55e;
  }
`;r(e)`
  background-color: transparent;
  color: var(--primary-color-grey);
`;export{p as E,s as I,x as L,e as N,l as S,c as W,v as a,m as b,u as c,h as d,g as e,d as f};
