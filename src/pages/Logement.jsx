import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/components/logements.scss";
import slide1 from "../assets/BackgroundCard1.png";
import host from "../assets/Host.png";
import Collapse from "../components/Collapse";
import star from "../assets/star.png";
import nostar from "../assets/nostar.png";
import Slider from "../components/Carousel";
//import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar } from '@fortawesome/fontawesome-svg-core/import.macro';

/*<FontAwesomeIcon icon={faStar} />*/

/*
const Card = () => {
  const [imageSlider, setImageSlider] = useState([]);

  useEffect(() => {
    const fetchAppartments = async () => {
      const response = await fetch("/logements.json");
      const appartments = await response.json();
      setAppartment(appartments.find avec id qu'on a recup dans url);
    };
    fetchAppartments();
  }, []);

  return (
    <div className="containers">
      {cardsList.map((logement) => (
        <Card key={logement.id} appartment={logement} />
      ))}
    </div>
  );
};

export default CardsList;
*/





const Card = () => {
  const cardDescriptions = [{}];
  /*

  //const [imgSlider, setImgSlider] = useState([]);
  //const [appartments, setAppartments] = useState([]);

  
  const { id } = useParams();
  const idDescription = useParams("id").id;
  const logementsIdDescription = appartment 
*/

  return (
    
    <div className="logement">
      <Header />
      <div className="slide">
        <img src={slide1} alt="slide1" />
      </div>
      <div className="card">
        <h1>Cozy loft on the Canal Saint-Martin</h1>
        <h2>Paris, Île-de-France</h2>
        <div className="tags">
          <p>Cozy</p>
          <p>Canal</p>
          <p>Paris 10</p>
        </div>
      </div>

      <Routes>
        <Route path="/logement/:id" element={<Card />} />
      </Routes>

      <div className="host">
        <div className="nameandimage">
          <div className="namehost">
            <p>Alexandre</p>
            <p>Dumas</p>
          </div>
          <img src={host} alt="host" />
        </div>

        <div className="stars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={nostar} alt="nostar" />
          <img src={nostar} alt="nostar" />
        </div>
      </div>


      <div className="collapseLogement">
        {cardDescriptions.map((data) => {
          return (
            <div key={data.id} className="collapseDescriptions">
              <Collapse title={"Description"}/>

              <Collapse title={"Equipements"}/>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>

  );
};

export default Card;
