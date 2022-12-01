import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Google & Github Login</NavLink>
            <NavLink to='/bootstrapForm'>Email Login</NavLink>
        </nav>
    );
};

export default Header;