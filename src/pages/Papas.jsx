import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Papas = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Papas comunes' descripcion='' precio='$1000' />
    <Cartas nombre='Papas gratinadas' descripcion='Con queso' precio='$1200' />
    <Cartas nombre='Papas Cordero' descripcion='queso, bacon, cebolla de verdeo' precio='$1400' />
    <Cartas nombre='Papas con cheddar y bacon' descripcion='' precio='$1300' />
    <Cartas nombre='Revuelto gramajo' descripcion='' precio='$1900' />
    <Cartas nombre='Medio revuelto' descripcion='' precio='$1200' />
    </div>
    )
}

export default Papas;