import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Papas = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Papas comunes' descripcion='' precio='$700' />
    <Cartas nombre='Papas gratinadas' descripcion='Con queso' precio='$800' />
    <Cartas nombre='Papas Cordero' descripcion='queso, bacon, cebolla de verdeo' precio='$1100' />
    <Cartas nombre='Papas con cheddar y bacon' descripcion='' precio='$1300' />
    <Cartas nombre='Revuelto gramajo' descripcion='' precio='$1500' />
    <Cartas nombre='Medio revuelto' descripcion='' precio='$800' />
    </div>
    )
}

export default Papas;