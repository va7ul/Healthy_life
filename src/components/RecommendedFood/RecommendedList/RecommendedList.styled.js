import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';

export const RecPageContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const RecPageWrapper = styled.div`
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
`;
export const RecPageTitle = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const RecImage = styled.img`
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
`;
export const RecForMainWrapper = styled.div`
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
`;

export const RecListTitle = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.4;
  }
`;

export const RecLink = styled(NavLink)`
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
`;

export const Image = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
  align-items: center;

  &:hover,
  &:focus {
    fill: var(--primary-color-green-lite);
  }
`;
export const RecLinkWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 3px;

  transition: color, var(--transition-dur-and-func);
  transition: fill, var(--transition-dur-and-func);
`;

export const RecList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const Btnwrapp = styled.div`
  margin: 0 auto;
  padding: 30px 0;
`;

export const SeeMoreBtn = styled.button`
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
`;
