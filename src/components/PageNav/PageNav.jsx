// import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { NavBox, StyledLink } from "./PageNav.styled";

export const PageNav = () => {
    // const [active, setActive] = useState("Home");
    return (
        <NavBox  onClick={(event)=>setActive(event.target.textContent)}>
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