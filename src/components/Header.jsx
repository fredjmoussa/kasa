import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import "../styles/components/header.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); //utilise le hook useLocation de React Router pour obtenir l'objet location.

  return ( //utilise la composante NavLink de React Router pour créer des liens vers les page d'accueil et à propos.
    <header className="header">
      <NavLink to="/">
        <img src={Logo} alt="kasa logo" className="kasa-logo" />
      </NavLink>
      <ul>
        <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
