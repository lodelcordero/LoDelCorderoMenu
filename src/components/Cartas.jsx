import React from "react";
import '../style/cartas.css'

const Cartas = ({nombre, descripcion, precio}) =>{
 return(
    <div class="menu-item">
  <div class="menu-item-info">
    <h3>{nombre}</h3>
    <p>{descripcion}</p>
  </div>
  <div class="menu-item-price">
    <p>{precio}</p>
  </div>
</div>
 )

}
export default Cartas;