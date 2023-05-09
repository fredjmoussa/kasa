import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import "../styles/components/logements.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "../components/Carousel";
import { useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams(); //On utilise la fonction useParams() de react-router-dom pour récupérer l'id du logement dans l'URL.
  const [logement, setLogement] = useState(null); //On utilise useState() pour initialiser la variable logement à null(signifie que lorsque le composant Card est monté pour la première fois, il n'a pas encore reçu les détails du logement. En d'autres termes, les informations sur le logement ne sont pas encore disponibles et le composant doit attendre la fin du chargement des données pour afficher les informations du logement), une fonction "setLogement"  sera utilisée pour modifier la valeur de "logement" ultérieurement.

  useEffect(() => { //On utilise useEffect() pour charger les détails du logement depuis un fichier JSON avec une requête fetch(). Cette fonction se déclenche à chaque fois que l'id change.
    const fetchAppartments = async () => { //Cette constante définit une fonction asynchrone nommée "fetchAppartments" qui va effectuer une requête pour récupérer les données des appartements depuis un fichier json.
      const response = await fetch("/logements.json"); //La constante "response" stocke la réponse de la requête HTTP GET effectuée sur le fichier "logements.json" qui contient les données des appartements.
      const appartments = await response.json(); // La constante "appartments" stocke le résultat de la transformation de la réponse HTTP en JSON.
      setLogement(appartments.find((appartments) => appartments.id === id)); //La méthode "find()" est utilisée pour parcourir l'ensemble des appartements de notre source de données, et renvoyer celui dont l'ID correspond à la valeur de "id". Le tout met à jour le state "logement" avec l'appartement qui correspond à l'id passé en paramètre dans l'URL.
    };
    fetchAppartments(); //La fonction fetchAppartments() est définie pour effectuer cette requête, puis analyser les données JSON renvoyées et trouver le logement dont l'ID correspond à celui dans l'URL. La fonction setLogement() est ensuite appelée pour mettre à jour la valeur de "logement" avec les données du logement trouvé.
  }, [id]); //Le tableau de dépendances [id] dans useEffect() indique que l'effet ne doit être déclenché que lorsqu'une nouvelle valeur d'ID est détectée, c'est-à-dire lorsqu'un utilisateur navigue vers un nouveau logement.

  return (
    <div className="logement">
      <Header />
      {logement !== null && ( // On affiche la section uniquement si les détails du logement ont été chargés.
        <section className="content"> 
          <Slider pictures={logement.pictures} /> 
          <div className="card">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <div className="tags">
              {logement.tags.map((tag,index) => ( //On utilise une boucle map pour afficher les différents tags du logement.
                <p key={index}>{tag}</p> //ajout de la key index pour chaque tag
              ))}
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
              {[...Array(5)].map((x, index) => ( //On crée un tableau de 5 éléments et on le mappe
                <FontAwesomeIcon
                  key={index} //ajout de la key index pour chaque étoile
                  icon={faStar}
                  className={
                    index + 1 > Number(logement.rating) ? "star-grey" : "" // Si l'indice est plus grand que la notation, on applique la classe "star-grey"
                  }
                />
              ))}
            </div>
          </div>

          <div className="collapseLogement">
            <div className="description">
              <Collapse
                titre="Description"
                description={logement.description}
              />
            </div>
            <div className="equipements">
              <Collapse titre="Equipements" description={logement.equipments} />
            </div>
          </div>
        </section>
      )}
      ;
      <Footer />
    </div>
  );
};

export default Card;
