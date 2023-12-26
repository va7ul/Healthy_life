import{s as i}from"./index-2cc3b39a.js";const e=t=>t.dailyStatisticsFood.consumedFood.breakfast,a=t=>t.dailyStatisticsFood.consumedFood.lunch,n=t=>t.dailyStatisticsFood.consumedFood.dinner,r=t=>t.dailyStatisticsFood.consumedFood.snack,p=t=>t.dailyStatisticsFood.isOpen,d=t=>t.dailyStatisticsFood.consumedFood.totalCalories,s=t=>t.dailyStatisticsFood.consumedFood.totalCarbs,l=t=>t.dailyStatisticsFood.consumedFood.totalProtein,c=t=>t.dailyStatisticsFood.consumedFood.totalFat,x=i.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin-right: 196px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  }
`,m=i.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 16px 12px;
  height: 232px;
  background: #0f0f0f;
  /* background: #fff; */
  /* borderRadius: 52px; */
  border-radius: 13px;
  max-width: 300px;
  position: relative;
  /* width: 834px; */
  @media screen and (min-width: 834px) {
    max-width: 780px;
    padding: 32px 14px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 240px;
  }
`,h=i.img`
  width: 32px;
  height: 32px;
`,g=i.div`
  width: 178px;
  @media screen and (min-width: 834px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,f=i.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`,y=i.p`
  font-size: 18px;
  font-weight: 800;
`,w=i.p`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
`,u=i.div`
  max-width: 676px;
  margin-bottom: 24px;
`,b=i.div`
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`,v=i.p`
  color: var(--primary-color-white);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  max-height: 25px;
`,k=i.div`
  @media screen and (min-width: 834px) {
    /* width: 834px; */
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`,F=i.div`
  display: flex;
  gap: 6px;
  height: 20px;
  position: absolute;
  top: 14px;
  right: 14px;
  color: var(--primary-color-green-lite);
`,S=i.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  /* visibility: hidden; */
  /* opacity: 0;    */

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,B=i.div`
  position: relative;
  padding: 10px;
  width: 300px;
  height: 546px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    width: 756px;
    height: 452px;
    padding: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,z=i.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`,C=i.input`
  width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 100px;
  }

  @media screen and (min-width: 1440px) {
  }
`;i.input`
  width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 255px;
  }

  @media screen and (min-width: 1440px) {
  }
`;const M=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  /* justify-content: center;
  align-items: center; */
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
  }
`,P=i.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`,T=i.input`
  display: flex;
  width: 120px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`,I=i.div`
  margin-top: 60px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    position: absolute;
    right: 24px;
    bottom: 24px;
    gap: 86px;
  }

  @media screen and (min-width: 1440px) {
  }
`,j=i.button`
  display: block;
  width: 256px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  /* Button text/1 */
  font-family: 'Poppins500';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  margin-left: auto;
  margin-right: auto;
  border: none;
`,R=i.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`,D=i.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`;export{R as A,I as B,B as C,F as E,M as I,x as M,w as N,C as R,P as S,z as T,k as W,s as a,l as b,c,h as d,y as e,j as f,D as g,p as h,e as i,a as j,n as k,r as l,S as m,T as n,u as o,g as p,f as q,m as r,d as s,b as t,v as u};
