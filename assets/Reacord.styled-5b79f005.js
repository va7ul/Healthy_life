import{s as i}from"./index-09f96f6c.js";const o=t=>t.dailyStatisticsFood.consumedFood.breakfast,n=t=>t.dailyStatisticsFood.consumedFood.lunch,a=t=>t.dailyStatisticsFood.consumedFood.dinner,r=t=>t.dailyStatisticsFood.consumedFood.snack,p=t=>t.dailyStatisticsFood.isOpen,d=t=>t.dailyStatisticsFood.consumedFood.totalCalories,s=t=>t.dailyStatisticsFood.consumedFood.totalCarbs,l=t=>t.dailyStatisticsFood.consumedFood.totalProtein,c=t=>t.dailyStatisticsFood.consumedFood.totalFat,x=i.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin-right: 150px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  }
`,m=i.div`
  margin-top: 12px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
    margin-top: 6px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 240px;
  }
`,h=i.img`
  width: 32px;
  height: 32px;
`,g=i.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
  margin-top: 12px;
  width: 100%;
  @media screen and (min-width: 834px) {
    margin-top: 0px;
    width: auto;
  }

  @media screen and (min-width: 1440px) {
  }
`,w=i.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`,y=i.div`
  display: flex;
  gap: 20px;
`,u=i.p`
  font-size: 18px;
  font-weight: 800;
`,b=i.p`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
`,v=i.div`
  max-width: 780px;

  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`,k=i.div`
  position: relative;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 12px;
`,F=i.p`
  color: var(--primary-color-white);
  width: calc(100% - 30px);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  @media screen and (min-width: 834px) {
    width: 105px;
  }

  @media screen and (min-width: 1440px) {
  }
`,S=i.p`
  margin-left: 20px;
  color: var(--primary-color-white);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  max-height: 25px;
  @media screen and (min-width: 834px) {
    min-width: 80px;
    position: relative;
    left: 120px;
  }
`,B=i.div`
  @media screen and (min-width: 834px) {
    /* width: 834px; */
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`,z=i.div`
  display: flex;
  gap: 6px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 15px;
  @media screen and (min-width: 834px) {
    /* position: static; */
    top: 0px;
  }
`,M=i.div`
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
`,C=i.div`
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
`,P=i.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`,T=i.input`
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
`;const I=i.div`
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
`,R=i.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`,j=i.input`
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
`,W=i.div`
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
`,D=i.button`
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
`,N=i.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`,A=i.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`;export{N as A,W as B,C,z as E,I,x as M,b as N,T as R,R as S,P as T,B as W,s as a,l as b,c,h as d,u as e,D as f,A as g,p as h,o as i,n as j,a as k,r as l,M as m,j as n,v as o,g as p,f as q,y as r,d as s,w as t,m as u,k as v,F as w,S as x};
