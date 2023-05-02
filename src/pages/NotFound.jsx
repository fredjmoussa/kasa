import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/components/notfound.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <Header />
      <h1>404</h1>
      <br />
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <br />
      <NavLink to="/">
        <h3>Retourner sur la page d’accueil</h3>
      </NavLink>
      <Footer />
    </div>
  );
};

export default NotFound;
