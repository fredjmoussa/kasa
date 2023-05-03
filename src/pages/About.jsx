import React from "react";
import aboutDescriptions from "../components/AboutDescription";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import "../styles/components/about.scss";

export default function About() {
  return (
    //tableau aboutDescriptions est parcouru à l'aide de la méthode "map" pour créer une liste de composants "Collapse". Chaque "Collapse" a un titre et une description. La propriété "key" est utilisée pour chaque élément de la liste
    <div>
      <Header />
      <Banner text="" className="bannerabout" />
      <section className="section">
        {aboutDescriptions.map((data) => {
          return (
            <div key={data.id} className="collapse">
              <Collapse titre={data.titre} description={data.description} />
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
}
