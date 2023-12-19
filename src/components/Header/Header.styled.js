import styled from 'styled-components';

export const ContainerNav = styled.nav`
  padding: 18px 10px;
  background-color: var(--primary-color-black-two);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 26px 27px;
  }

  @media screen and (min-width: 1440px) {
    padding: 26px 36px 26px 34px;
  }
`;