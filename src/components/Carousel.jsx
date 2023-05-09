import React, { useState } from "react";
import "../styles/components/carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Slider({ pictures }) { // définit une fonction nommée "Slider" avec un objet "pictures" comme paramètre.
  const [index, setIndex] = useState(0); //utilise le hook d'état "useState" pour initialiser la variable "index" à la valeur 0. "index" est utilisé pour suivre l'indice de l'image actuellement affichée dans le composant Slider. La fonction "setIndex" est également créée par le hook d'état pour mettre à jour la valeur de "index". Lorsque "setIndex" est appelée avec une nouvelle valeur, React réexécutera la fonction Slider avec la nouvelle valeur pour "index".

  const getPreviousImage = () => { //définit une fonction nommée "getPreviousImage".
    if (index === 0) { // Si l'index est égal à 0, alors on met l'index à la dernière image du tableau. Sinon, on décrémente l'index de 1.
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const getNextImage = () => { //définit une fonction nommée "getNextImage".
    if (index === pictures.length - 1) { //Si l'index est égal à la dernière image du tableau, alors on met l'index à 0. Sinon, on incrémente l'index de 1.
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return ( //affiche l'image en cours de lecture avec la source de l'image égale à l'élément du tableau "pictures" correspondant à l'index en cours.
  //<img src={pictures[index]} className="pictures" alt="pictures" /> : affiche l'image en cours de lecture avec la source de l'image égale à l'élément du tableau "pictures" correspondant à l'index en cours.
  //crée un élément "p" avec un événement "onClick" qui appelle la fonction "getPreviousImage" et "getNextImage" lorsqu'on clique dessus.
  //affiche le numéro de l'image actuelle et le nombre total d'images.
    <div className="slider">
      <div className="slideshow">
        <img src={pictures[index]} className="pictures" alt="pictures" />
        <div className="arrows">
          <p onClick={() => getPreviousImage()}>
            <FontAwesomeIcon icon={faAngleLeft} className="left" />
          </p>
          <p onClick={() => getNextImage()}>
            <FontAwesomeIcon icon={faAngleRight} className="right" />
          </p>
        </div>
        <p className="number">
          {index + 1} / {pictures.length}{" "}
        </p>
      </div>
    </div>
  );
}
export default Slider;
