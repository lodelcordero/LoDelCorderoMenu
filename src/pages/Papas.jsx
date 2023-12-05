import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Papas = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Papas comunes' descripcion='' precio='$1700' />
    <Cartas nombre='Papas gratinadas' descripcion='Con queso' precio='$1900' />
    <Cartas nombre='Papas Cordero' descripcion='queso, bacon, cebolla de verdeo' precio='$2000' />
    <Cartas nombre='Papas con cheddar y bacon' descripcion='' precio='$2900' />
    <Cartas nombre='Revuelto gramajo' descripcion='' precio='$3100' />
    <Cartas nombre='Medio revuelto' descripcion='' precio='$2400' />
    </div>
    )
}

export default Papas;