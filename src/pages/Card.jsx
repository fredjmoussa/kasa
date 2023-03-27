import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/components/logements.scss';
import slide1 from '../assets/BackgroundCard1.png'
import host from '../assets/Host.png';
import Collapse from '../components/Collapse';
import star from '../assets/star.png';
import nostar from '../assets/nostar.png';

const Card = () => {

    const cardDescriptions = [
		{}
        
	]

    return (
        <div className='logement'>
            <Header />
            <div className='slide'>
                <img src={slide1} alt="slide1" />
            </div>
            <div className='card'>
                <h1>Cozy loft on the Canal Saint-Martin</h1>
                <h2>Paris, Île-de-France</h2>
                <div className='tags'>
                    <p>Cozy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>
                </div>
                
            </div>

                <div className='host'>
						<div className='nameandimage'>
							<div className='namehost'>
								<p>Alexandre</p>
								<p>Dumas</p>
							</div>
							<img src={host} alt='host' />
						</div>
							
						<div className='stars'>
							<img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={nostar} alt='nostar' />
                            <img src={nostar} alt='nostar' />
						</div>
					</div>


            <main className='main'>
				{cardDescriptions.map(data => {
					return (
						<div key={data.id} className="maincollapse">
							<Collapse style={{margin:'30px 0'}}  titre={data.titre} description={data.description} />
                          
                            <Collapse style={{margin:'30px 0'}}  titre={data.titre} description={data.description} />
						</div>
        
					)}
				)}
			</main>

            <Footer />         
        </div>
    );
};

export default Card;