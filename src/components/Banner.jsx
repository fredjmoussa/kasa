import React from 'react';
import imgbanner from '../assets/IMG.png';
import '../styles/components/banner.scss';

function Banner() {
  const title = 'Chez vous partout et ailleurs'
  return (
        <div className='banner'>
            <img src={imgbanner} alt='Chez vous, partout et ailleurs' className='img-banner' />
            <h1 className='title-banner'>{title}</h1>
        </div>
    )
}

export default Banner