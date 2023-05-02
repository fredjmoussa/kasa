import React, { useState } from "react";
import "../styles/components/collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Collapse({ titre, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
