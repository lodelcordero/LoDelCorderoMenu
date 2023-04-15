import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Papas = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Papas comun' descripcion='' precio='$2500' />
    <Cartas nombre='Papas gratinadas' descripcion='Con queso' precio='$2500' />
    <Cartas nombre='Papas Cordero' descripcion='queso, beacon, cebolla de verdeo' precio='$2500' />
    <Cartas nombre='Papas con cheddar y beacon' descripcion='' precio='$2500' />
    <Cartas nombre='Revuelto Gramajo' descripcion='' precio='$2500' />
    </div>
    )
}

export default Papas;