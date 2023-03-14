import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/components/home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Card />
            <Footer />
        </div>
    );
};

export default Home;
