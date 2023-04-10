import React from 'react';
import '../styles/components/carousel.scss';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Slider () {
    return (
        <Carousel>
          <div>slide1</div>
          <div>slider2</div> 
          <div>slider3</div>  
        </Carousel>
    );
}
export default Slider;

/*
function Slider () {
    const { id } = useParams();
    const [logement, SetLogement] = useState(null);
    const imgSlider= {logement.pictures};
    return (
        <Carousel>
            {logement.map((slide)=>{
                <div key={slide.id}></div>
                <img src={slide.pictures} alt="slidershow" />
            })}
          <div>{logement.pictures}</div>
          <div>slider2</div> 
          <div>slider3</div>  
        </Carousel>
    );
}

export default Slider;
*/


