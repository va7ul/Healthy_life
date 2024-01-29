import { NavBox, StyledLink } from "./PageNav.styled";

export const PageNav = () => {
    
    return (
        <NavBox>
            <StyledLink to="/main">
                Home
            </StyledLink>
            <StyledLink to="/dashboard">
                Dashboard
            </StyledLink>
            <StyledLink to="/diary">
                Diary
            </StyledLink>
            <StyledLink to="/recommended-food">
                Recommended
            </StyledLink>
        </NavBox>
    )
};