import React, { useEffect, useState } from "react";
import "../styles/components/card.scss";
import Card from "./Card";

const CardsList = () => { //déclare une fonction CardsList qui ne prend pas d'argument.
  const [cardsList, setCardsList] = useState([]); //utilise le hook useState pour créer un état initial cardsList vide, et une fonction setCardsList qui sera utilisée pour mettre à jour l'état.

  useEffect(() => { // utilise le hook useEffect pour effectuer une action après que le composant a été chargé.
    const fetchAppartments = async () => { //Cet effet déclare une fonction fetchAppartments asynchrone qui envoie une requête pour récupérer les données d'un fichier JSON /logements.json
      const response = await fetch("/logements.json"); //utilise la méthode fetch() pour effectuer une requête HTTP asynchrone pour récupérer les données d'un fichier JSON logements.json.
      const appartments = await response.json(); //La méthode json() transforme le corps de la réponse en un objet JavaScript, en utilisant la syntaxe JSON. Cet objet peut alors être stocké dans la variable appartments, à d'await qui attend la résolution de la promesse renvoyée par la méthode json().
      setCardsList(appartments); //met à jour l'état cardsList à l'aide de la fonction setCardsList, en lui passant la valeur de appartments, qui contient les données récupérées à partir du fichier JSON.
    }; //ce qui suit fait appel au hook useEffect pour définir un effet à exécuter après que le composant a été monté (chargé).
    fetchAppartments(); //la fonction envoie une requête HTTP pour récupérer les données d'un fichier JSON logements.json, puis stocke les données récupérées dans l'état local cardsList à l'aide de la fonction setCardsList.
  }, []); //Le tableau vide [] en deuxième argument du hook useEffect indique que cet effet doit être déclenché uniquement lors du montage du composant, et pas à chaque mise à jour de l'état ou des propriétés du composant. En d'autres termes, cet effet est exécuté une seule fois, au moment où le composant est chargé pour la première fois.
//En appelant fetchAppartments() à l'intérieur de cet effet, la requête pour récupérer les données est lancée automatiquement au moment où le composant est chargé. Les données sont alors stockées dans l'état local, et le composant est mis à jour pour afficher ces données à l'écran.
  return ( //HTML qui sera rendu à l'écran : une div avec la classe containers, qui contient une liste de cartes
    <div className="containers">
      {cardsList.map((logement) => ( //La liste est générée en utilisant la méthode map sur cardsList pour créer une carte pour chaque élément. 
        <Card key={logement.id} appartment={logement} /> //Chaque carte est créée avec le composant Card, qui prend deux propriétés : une clé key qui identifie chaque carte de manière unique, et un objet appartment qui contient les données à afficher dans la carte.
      ))}
    </div>
  );
};

export default CardsList;
