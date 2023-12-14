import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Papas = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Papas comunes' descripcion='' precio='$2200' />
    <Cartas nombre='Papas gratinadas' descripcion='Con queso' precio='$2700' />
    <Cartas nombre='Papas Cordero' descripcion='queso, bacon, cebolla de verdeo' precio='$2800' />
    <Cartas nombre='Papas con cheddar y bacon' descripcion='' precio='$3500' />
    <Cartas nombre='Revuelto gramajo' descripcion='' precio='$3600' />
    <Cartas nombre='Medio revuelto' descripcion='' precio='$2900' />
    </div>
    )
}

export default Papas;