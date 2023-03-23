import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/card.scss';

const Card = () => {
    return (
        <div className='containers'>
            <ul>
                <NavLink to="/">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/about">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/about">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/about">
                    <li>Titre de la location</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Card;

