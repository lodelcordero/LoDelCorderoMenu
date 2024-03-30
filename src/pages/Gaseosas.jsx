import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";
import "../style/gaseosa.css";

const Gaseosas = () =>{
    return(
      <div>
        <Navbar />
        <fieldset>
          <legend>Bebidas sin alcohol</legend>
          <Cartas nombre="Agua" descripcion="500 ml" precio="" />
          <Cartas nombre="Soda" descripcion="500 ml" precio="" />
        </fieldset>

        <fieldset>
          <legend>Gaseosas</legend>
          <Cartas nombre="Coca-Cola" descripcion="350ml" precio="" />
          <Cartas nombre="Coca-Cola" descripcion="1L" precio="" />
          <Cartas nombre="Coca-Cola" descripcion="1.5L" precio="" />
          <Cartas nombre="Coca-cola Zero" descripcion="1.5L" precio="" />
          <Cartas nombre="Fanta" descripcion="1L" precio="" />
          <Cartas nombre="Fanta" descripcion="1.5L" precio="" />
          <Cartas nombre="Fanta Zero" descripcion="1.5L" precio="" />
          <Cartas nombre="Sprite" descripcion="1L" precio="" />
          <Cartas nombre="Sprite" descripcion="1.5L" precio="" />
          <Cartas nombre="Sprite Zero" descripcion="1.5L" precio="" />
        </fieldset>
      
        <fieldset>
          <legend>Vinos</legend>
          <Cartas nombre="Casco Viejo" descripcion="750ml" precio="" />
          <Cartas nombre="Fabre" descripcion="750ml" precio="" />
          <Cartas nombre="La linda" descripcion="750ml" precio="" />
          <Cartas nombre="Conte Grand Malbec" descripcion="750ml" precio="" />
        </fieldset>
      
        <fieldset>
          <legend>Cervezas</legend>
          <Cartas nombre="Porroncito/Lata" descripcion="330ml" precio="" />
          <Cartas nombre="Imperial Golden" descripcion="330ml" precio="" />
          <Cartas nombre="Imperial" descripcion="1L" precio="" />
          <Cartas nombre="Heineken" descripcion="1L" precio="" />
          <Cartas nombre="Quilmes" descripcion="1L" precio="" />
          <Cartas nombre="Norte" descripcion="1L" precio="" />
          <Cartas nombre="Miller" descripcion="1L" precio="" />
        </fieldset>

        <fieldset>
          <legend>Promos Especiales</legend>
          <Cartas nombre="En construccion..." descripcion="" precio="0" />
        </fieldset>
      </div>

      
    )
}

export default Gaseosas
