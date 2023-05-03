import React from "react";
import "../styles/components/banner.scss";

export default function Banner({ text, className }) {
  return (
    //hooks qui met image selon la classe que je donne
    <div className={`banner ${className}`}>
      <h2>{text}</h2>
    </div>
  );
}
