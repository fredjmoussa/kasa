import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/components/notfound.scss';

const NotFound = () => {
    return (
        <div>
            <Header />
            <h1>404</h1>
            <br />
                <p>Oups! La page que vous demandez n'existe pas.</p>
            <br />
            <NavLink to="/">
                    <h2>Retourner sur la page d’accueil</h2>
            </NavLink>
            <Footer />
        </div>
    );
};

export default NotFound;