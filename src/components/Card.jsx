import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/card.scss';

const Card = () => {
    return (
        <div className='containers'>
            <ul>
                <NavLink to="/">
                    <li>container1</li>
                </NavLink>
                <NavLink to="/about">
                    <li>container2</li>
                </NavLink>
                <NavLink to="/">
                    <li>container3</li>
                </NavLink>
                <NavLink to="/about">
                    <li>container4</li>
                </NavLink>
                <NavLink to="/">
                    <li>container5</li>
                </NavLink>
                <NavLink to="/about">
                    <li>container6</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Card;

