import { NavLink } from 'react-router-dom';
import { NavBox } from "./PageNav.styled";

export const PageNav = () => {
    return (
        <NavBox>
            <NavLink to="/welcome">
                Home
            </NavLink>
            <NavLink to="/dashboard">
                Dashboard
            </NavLink>
            <NavLink to="/diary">
                Diary
            </NavLink>
            <NavLink to="/recommended-food">
                Recommended
            </NavLink>
        </NavBox>
    )
};