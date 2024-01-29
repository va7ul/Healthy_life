import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.nav`
  display: flex;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 834px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-right: 60px;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  padding-top: 0px;
  padding-bottom: 4px;
  transition: color var(--trans-dur-and-func);

  &.active::after {
    position: absolute;
    left: 0;
    bottom: -4px;
    content: '';
    width: 28px;
    height: 2px;
    background: var(--primary-color-green-lite);
    border-radius: 2px;
  }
`;
