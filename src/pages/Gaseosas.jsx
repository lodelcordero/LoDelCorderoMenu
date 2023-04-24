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
          <Cartas nombre="Coca-cola" descripcion="1L" precio="$2500" />
          <Cartas nombre="Coca-cola" descripcion="1.5L" precio="$2500" />
          <Cartas nombre="Coca-cola Zero" descripcion="1.5L" precio="$2500" />
          <Cartas nombre="Fanta" descripcion="1L" precio="$2500" />
          <Cartas nombre="Fanta" descripcion="1.5L" precio="$2500" />
          <Cartas nombre="Fanta Zero" descripcion="1.5L" precio="$2500" />
          <Cartas nombre="Sprite" descripcion="1L" precio="$2500" />
          <Cartas nombre="Sprite" descripcion="1.5L" precio="$2500" />
          <Cartas nombre="Sprite Zero" descripcion="1.5L" precio="$2500" />
        </fieldset>
      
        <fieldset>
          <legend>Vinos</legend>
          <Cartas nombre="Malbec" descripcion="750ml" precio="$4500" />
          <Cartas nombre="Cabernet Sauvignon" descripcion="750ml" precio="$4500" />
          <Cartas nombre="Merlot" descripcion="750ml" precio="$4500" />
          <Cartas nombre="Chardonnay" descripcion="750ml" precio="$4500" />
        </fieldset>
      
        <fieldset>
          <legend>Cervezas</legend>
          <Cartas nombre="Stella Artois" descripcion="330ml" precio="$3500" />
          <Cartas nombre="Heineken" descripcion="330ml" precio="$3500" />
          <Cartas nombre="Corona" descripcion="330ml" precio="$3500" />
          <Cartas nombre="Club Colombia Dorada" descripcion="330ml" precio="$3500" />
        </fieldset>
      </div>
      
    )
}

export default Gaseosas
