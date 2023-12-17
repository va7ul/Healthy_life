import { styled } from 'styled-components';

export const Title = styled.p`
  font-size: 24px;
  fontWeight: : 500;
  font-family: 'Poppins500';
`;
export const Container = styled.div`
  width: 320px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 834px) {
    width: 834px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const MealTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
  /* font-family: 'Poppins400'; */
`;

export const MealContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 150px;
`;

export const MealImage = styled.img``;

export const MealSubscription = styled.div`
  width: 178px;
  @media screen and (min-width: 834px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const MealSubText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  /* font-family: 'Poppins400'; */

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const MealDashbord = styled.div`
  height: 232px;
  background: #0f0f0f;
  /* background: #fff; */
  /* borderRadius: 52px; */
  border-radius: 13px;
  max-width: 300px;
  /* width: 834px; */
  @media screen and (min-width: 834px) {
    max-width: 834px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`;