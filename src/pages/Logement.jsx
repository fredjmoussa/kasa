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
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchAppartments = async () => {
      const response = await fetch("/logements.json");
      const appartments = await response.json();
      setLogement(appartments.find((appartments) => appartments.id === id));
    };
    fetchAppartments();
  }, [id]);

  console.log(logement);

  return (
    <div className="logement">
      <Header />
      {logement !== null && (
        <section className="content">
          <Slider pictures={logement.pictures} />
          <div className="card">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <div className="tags">
              {logement.tags.map((tag) => (
                <p>{tag}</p>
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
              {[...Array(5)].map((x, index) => (
                <FontAwesomeIcon
                  icon={faStar}
                  className={
                    index + 1 > Number(logement.rating) ? "star-grey" : ""
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
