import React, { useState } from "react";
import "../styles/components/carousel.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Slider({ pictures }) {
  const [index, setIndex] = useState(0);

  const getPreviousImage = () => {
    if (index === 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const getNextImage = () => {
    if (index === pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="slider">
      <div className="slideshow">
      <img src={pictures[index]} className="pictures" alt="pictures"/>
        <div className="arrows">
            <p onClick={() => getPreviousImage()}><FontAwesomeIcon icon={faAngleLeft} className="left"/></p>
            <p onClick={() => getNextImage()}><FontAwesomeIcon icon={faAngleRight} className="right"/></p>
        </div>
        <p className="number">
        {index + 1} / {pictures.length} </p> 
        </div>
    </div>
  );
}
export default Slider;









