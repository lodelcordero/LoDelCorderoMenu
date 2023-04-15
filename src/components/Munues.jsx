import React from "react";
import '../style/menues.css'

const Menues = (props) => {
  return (
    <div className="menu-item">
      <div className="menu-item-info">
        <h3>{props.nombre}</h3>
        <p>{props.descripcion}</p>
      </div>
      <div classname="menu-item-price">
        <p>{props.precio}</p>
      </div>
    </div>
  );
};

export default Menues;
