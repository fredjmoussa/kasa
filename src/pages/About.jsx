import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/components/about.scss';

const About = () => {
    return (
        <div>
            <Header />
            <h1>Fiabilité</h1>
            <br />
            <h2>Respect</h2>
            <br />
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            <br />
            <h3>Service</h3>
            <br />
            <h4>Responsabilité</h4>
            <Footer />
        </div>
    );
};

export default About;