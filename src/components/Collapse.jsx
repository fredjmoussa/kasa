import React, { useState } from 'react';
import '../styles/components/collapse.scss';
import vector from '../assets/Vector.png';

export default function Collapse({titre, description}) {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className='collapse'>
        <h1 className='collapseTitre' onClick={() => setIsOpen(!isOpen )}>
            {titre}
            <img className={isOpen ? 'vector vectoropen' : 'vector vectorclosed'} src={vector} alt='description'/>
        </h1>    
            <div className={isOpen ? 'collapseDescription' : 'collapseNoDescription'}>
            {Array.isArray(description) ? description.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                )
                }) : description
            }
            </div>
            
        </div>
    )
}