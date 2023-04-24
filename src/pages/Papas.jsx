import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Papas = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Papas comun' descripcion='' precio='$600' />
    <Cartas nombre='Papas gratinadas' descripcion='Con queso' precio='$700' />
    <Cartas nombre='Papas Cordero' descripcion='queso, bacon, cebolla de verdeo' precio='$950' />
    <Cartas nombre='Papas con cheddar y bacon' descripcion='' precio='$900' />
    <Cartas nombre='Revuelto Gramajo' descripcion='' precio='$900' />
    </div>
    )
}

export default Papas;