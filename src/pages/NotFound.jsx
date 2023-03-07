import React from 'react';
import Header from '../components/Header';

const NotFound = () => {
    return (
        <div>
            <Header />
            <h1>404</h1>
            <br />
                <p>Oups! La page que vous demandez n'existe pas.</p>
            <br />
            <h2>Retourner sur la page d’accueil</h2>
        </div>
    );
};

export default NotFound;