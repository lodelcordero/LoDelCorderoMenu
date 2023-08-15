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
          <Cartas nombre="Agua" descripcion="500 ml" precio="$500" />
          <Cartas nombre="Soda" descripcion="500 ml" precio="$500" />
        </fieldset>

        <fieldset>
          <legend>Gaseosas</legend>
          <Cartas nombre="Coca-Cola" descripcion="350ml" precio="$500" />
          <Cartas nombre="Coca-Cola" descripcion="1L" precio="$700" />
          <Cartas nombre="Coca-Cola" descripcion="1.5L" precio="$800" />
          <Cartas nombre="Coca-cola Zero" descripcion="1.5L" precio="$800" />
          <Cartas nombre="Fanta" descripcion="1L" precio="$700" />
          <Cartas nombre="Fanta" descripcion="1.5L" precio="$800" />
          <Cartas nombre="Fanta Zero" descripcion="1.5L" precio="$800" />
          <Cartas nombre="Sprite" descripcion="1L" precio="$700" />
          <Cartas nombre="Sprite" descripcion="1.5L" precio="$800" />
          <Cartas nombre="Sprite Zero" descripcion="1.5L" precio="$800" />
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
          <Cartas nombre="Imperial" descripcion="1L" precio="$1400" />
          <Cartas nombre="Heineken" descripcion="1L" precio="$1600" />
          <Cartas nombre="Quilmes" descripcion="1L" precio="$1400" />
          <Cartas nombre="Norte" descripcion="1L" precio="$1400" />
          <Cartas nombre="Miller" descripcion="1L" precio="$1400" />
        </fieldset>

        <fieldset>
          <legend>Promos Especiales</legend>
          <Cartas nombre="En construccion..." descripcion="" precio="0" />
        </fieldset>
      </div>

      
    )
}

export default Gaseosas
