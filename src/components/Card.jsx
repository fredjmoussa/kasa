import "../styles/components/card.scss";

const Card = ({ appartment }) => { //Définition d'un composant fonctionnel Card qui prend une prop appartment.
  return ( //Le composant retourne une div avec la classe "cards".
  //Lorsqu'on clique sur la carte, on est redirigé vers la page de détail de l'appartement.
  //Dans la div, il y a une image avec l'url de l'image (appartment.cover) et un texte correspondant au titre de l'appartement (appartment.title).
    <div className="cards"> 
      <a href={`/logement/${appartment.id}`}> 
        <img src={appartment.cover} alt={appartment} />
        <p>{appartment.title}</p>
      </a>
    </div>
  );
};

export default Card;
