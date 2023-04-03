import React, { useEffect, useState } from "react";
import "../styles/components/card.scss";
import Card from "./Card";

const CardsList = () => {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    const fetchAppartments = async () => {
      const response = await fetch("/logements.json");
      const appartments = await response.json();
      setCardsList(appartments);
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
