import React from "react";
import "../styles/components/banner.scss";

export default function Banner({ text, className }) {
  return ( //génère une image sela la classe, une bannière contenant un titre, avec une classe pouvant être passée en tant que prop, et le texte du titre également passé en tant que prop.
    <div className={`banner ${className}`}>
      <h2>{text}</h2>
    </div>
  );
}
