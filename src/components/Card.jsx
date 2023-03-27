import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/card.scss';

/*
/*
export default function Card({id, title, cover}) {

    return (
        <div className='containers'>
            <ul>
                <NavLink to={"/Card/${id}"} className="cards">
                    <img src={cover} alt={title} />
                    <li>{title}</li>
                </NavLink>
            </ul>
        </div>
    )
}
*/

const Card = () => {
    return (
        <div className='containers'>
            <ul>
                <NavLink to="/card">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/card">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/card">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/card">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/card">
                    <li>Titre de la location</li>
                </NavLink>
                <NavLink to="/card">
                    <li>Titre de la location</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Card;


