import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import "../styles/components/logements.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from "../components/Carousel";
import { useParams } from 'react-router-dom';

const Card = () => {
  const { id } = useParams();
  const [logement, SetLogement] = useState(null);
  
  useEffect(() => {
    const fetchAppartments = async () => {
      const response = await fetch("/logements.json");
      const appartments = await response.json();
      SetLogement(appartments.find(appartments => appartments.id === id));
    };
    fetchAppartments();
  }, [id]);

  return (
    
    <div className="logement">
      <Header />
      
      {logement !== null && (
      <section className="content">
        <Slider />
        <div className="card">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div className="tags">
            <p>{logement.tags}</p>
          </div>
        </div>

        <div className="host">
          <div className="nameandimage">
            <div className="namehost">
              <p>{logement.host.name}</p>
            </div>
            <img src={logement.host.picture} alt="host" />
          </div>

          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>

        <div className="collapseLogement">
          <div className="description">
            <Collapse titre='Description' description={logement.description} />
          </div>
          <div className="equipements">
            <Collapse titre='Equipements' description={logement.equipments} />
          </div>
        </div>
      </section>
      )};
      <Footer />
    </div>

  );
};

export default Card;


//sliderShow
/*
<Carousel />
*/

//stars pb with <FontAwesomeIcon icon="fa-regular fa-star" /> <FontAwesomeIcon icon="fa-solid fa-star" />
/*
            <div className="accomodation_content_host_stars">
							{[...Array(5)].map((faStar, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= logement.rating ? {faStar} : {faStar}} alt="stars" />
								)
							})}
						</div>
*/

//tags
/*{
         {logement.map((logement) => (
              <p> key={logement.id} appartment={logement.tags} </p>
              //console.log({logement.tags});          
            ))}
}*/