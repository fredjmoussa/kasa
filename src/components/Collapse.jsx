import React, { useState } from "react";
import "../styles/components/collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Collapse({ titre, description }) { // fonction qui est un composant React et qui prend deux propriétés (titre et description) en tant que paramètres.
  const [isOpen, setIsOpen] = useState(false); //La fonction déclare une variable d'état locale isOpen en utilisant le hook useState. Cette variable est initialisée avec une valeur false, ce qui signifie que la description est initialement cachée et que le composant est fermé.

  return ( //La fonction retourne un élément JSX qui représente le composant "collapse" (un élément qui peut être ouvert ou fermé).
  //Le titre du composant est affiché à l'aide d'un élément de titre (h1), qui est doté d'une classe CSS collapseTitre. Lorsque l'utilisateur clique sur le titre, la fonction fléchée passée à l'événement onClick est appelée. Cette fonction utilise la méthode setIsOpen pour inverser la valeur de la variable d'état isOpen. Ainsi, à chaque clic sur le titre, la valeur de isOpen est inversée, ce qui modifie l'affichage du composant en affichant ou cachant la description.
  //Le symbole flèche (<FontAwesomeIcon icon={faAngleUp} />) change en fonction de l'état de la variable isOpen et de l'état de l'élément "collapse". Si l'élément est ouvert, l'icône change pour un symbole de flèche vers le bas, sinon elle change pour un symbole de flèche vers le haut. Le composant utilise le paquet FontAwesome pour afficher les icônes.
  // Si isOpen est true, la classe collapseDescription est appliquée à l'élément div. Sinon, la classe collapseNoDescription est appliquée, ce qui permet de masquer la description.
  //Si la props description est un tableau (Array.isArray(description) renvoie true) , alors la fonction map est utilisée pour créer un paragraphe pour chaque élément du tableau avec la clé "index". Sinon, la description est simplement affichée.
    <div className="collapse"> 
      <h1 className="collapseTitre" onClick={() => setIsOpen(!isOpen)}>
        {titre} 
        <div className={isOpen ? "faAngleDown" : "faAngleUp"}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </h1> 
      <div className={isOpen ? "collapseDescription" : "collapseNoDescription"}>
        {Array.isArray(description)
          ? description.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          : description}
      </div>
    </div>
  );
}
