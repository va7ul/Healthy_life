import { styled } from 'styled-components';

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Poppins500';
`;
export const Container = styled.div`
  width: 300px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
