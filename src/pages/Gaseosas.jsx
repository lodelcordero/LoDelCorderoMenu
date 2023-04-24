import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";
import "../style/gaseosa.css";

const Gaseosas = () =>{
    return(
      <div>
        <Navbar />
        <fieldset>
          <legend>Gaseosas</legend>
          <Cartas nombre="Coca-cola" descripcion="1L" precio="$600" />
          <Cartas nombre="Coca-cola" descripcion="1.5L" precio="$700" />
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
          <Cartas nombre="Fabre" descripcion="750ml" precio="$2300" />
          <Cartas nombre="La linda" descripcion="750ml" precio="$2500" />
        </fieldset>
      
        <fieldset>
          <legend>Cervezas</legend>
          <Cartas nombre="Imperial" descripcion="330ml" precio="$600" />
          <Cartas nombre="Imperial" descripcion="1L" precio="$900" />
          <Cartas nombre="Heineken" descripcion="330ml" precio="$1100" />
        </fieldset>
      </div>
      
    )
}

export default Gaseosas
