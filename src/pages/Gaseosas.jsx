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
          <Cartas nombre="Agua" descripcion="500 ml" precio="$400" />
          <Cartas nombre="Soda" descripcion="500 ml" precio="$400" />
        </fieldset>

        <fieldset>
          <legend>Gaseosas</legend>
          <Cartas nombre="Coca-Cola" descripcion="350ml" precio="$400" />
          <Cartas nombre="Coca-Cola" descripcion="1L" precio="$600" />
          <Cartas nombre="Coca-Cola" descripcion="1.5L" precio="$700" />
          <Cartas nombre="Coca-cola Zero" descripcion="1.5L" precio="$700" />
          <Cartas nombre="Fanta" descripcion="1L" precio="$600" />
          <Cartas nombre="Fanta" descripcion="1.5L" precio="$700" />
          <Cartas nombre="Fanta Zero" descripcion="1.5L" precio="$700" />
          <Cartas nombre="Sprite" descripcion="1L" precio="$600" />
          <Cartas nombre="Sprite" descripcion="1.5L" precio="$700" />
          <Cartas nombre="Sprite Zero" descripcion="1.5L" precio="$700" />
        </fieldset>
      
        <fieldset>
          <legend>Vinos</legend>
          <Cartas nombre="Casco Viejo" descripcion="750ml" precio="$1500" />
          <Cartas nombre="Fabre" descripcion="750ml" precio="$2300" />
          <Cartas nombre="La linda" descripcion="750ml" precio="$2500" />
        </fieldset>
      
        <fieldset>
          <legend>Cervezas</legend>
          <Cartas nombre="Porroncito/Lata" descripcion="330ml" precio="$700" />
          <Cartas nombre="Imperial Golden" descripcion="330ml" precio="$700" />
          <Cartas nombre="Imperial" descripcion="1L" precio="$1000" />
          <Cartas nombre="Heineken" descripcion="1L" precio="$1200" />
          <Cartas nombre="Miller" descripcion="1L" precio="$1200" />
        </fieldset>

        <fieldset>
          <legend>Promos Especiales</legend>
          <Cartas nombre="En construccion..." descripcion="" precio="0" />
        </fieldset>
      </div>

      
    )
}

export default Gaseosas
