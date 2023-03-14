import React from 'react';
import LogoFooter from '../assets/LOGOfooter.png';
import '../styles/components/footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={LogoFooter} alt='kasa logo' className='kasa-logo' />
            <h1>© 2020 Kasa. All rights reserved</h1>
        </footer>
    );
};

export default Footer;