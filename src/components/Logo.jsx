import React from 'react';
import logokasa from '../assets/LOGO.png';
import '../styles/components/logo.scss';

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logokasa} alt='logo kasa' />
        </div>
    );
};

export default Logo;