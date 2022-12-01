import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to='/'>Home</NavLink>
            <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to='/'>Google & Github Login</NavLink>
            <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to='/bootstrapForm'>Email Login</NavLink>
        </nav>
    );
};

export default Header;