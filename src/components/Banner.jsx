import React from 'react';
import img from '../assets/img/IMG.png'
import '../styles/components/banner.scss'

const Banner = () => {
  return (
        <div className='IMG'>
            <img src='../assets/img/IMG.png' alt='image banner' />
            <h1 className='Chez vous, partout et ailleurs'>{title}</h1>
        </div>
    )
}

export default Banner