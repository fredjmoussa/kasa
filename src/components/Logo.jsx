import React from "react";
import { NavLink } from "react-router-dom";
import logokasa from "../assets/LOGO.png";
import "../styles/components/logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={logokasa} alt="logo kasa" />
      </NavLink>
    </div>
  );
};

export default Logo;
