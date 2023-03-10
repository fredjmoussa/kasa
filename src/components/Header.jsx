import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/LOGO.png';
import '../styles/components/header.scss';

const Header = () => {
    return (
        <header className='header'>
            <img src={Logo} alt='kasa logo' className='kasa-logo' />
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;