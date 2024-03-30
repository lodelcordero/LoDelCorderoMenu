import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Papas = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Papas comunes' descripcion='' precio='' />
    <Cartas nombre='Papas gratinadas' descripcion='Con queso' precio='' />
    <Cartas nombre='Papas Cordero' descripcion='queso, bacon, cebolla de verdeo' precio='' />
    <Cartas nombre='Papas con cheddar y bacon' descripcion='' precio='' />
    <Cartas nombre='Revuelto gramajo' descripcion='' precio='' />
    <Cartas nombre='Medio revuelto' descripcion='' precio='' />
    </div>
    )
}

export default Papas;