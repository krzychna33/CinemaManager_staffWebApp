import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>CinemaStaff</h1>
        <NavLink to="/" activeClassName="activeLink" exact={true}>Showings</NavLink>
        <NavLink to="/movies" activeClassName="activeLink">Movies</NavLink>
    </div>
);

export default Header;