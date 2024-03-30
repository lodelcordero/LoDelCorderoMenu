import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Agregados = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Jamon' descripcion='' precio='' />
    <Cartas nombre='Queso' descripcion='' precio='' />
    <Cartas nombre='Huevo' descripcion='' precio='' />
    <Cartas nombre='Cheddar' descripcion='' precio='' />
    <Cartas nombre='Bacon' descripcion='' precio='' />
    </div> 
    )
}

export default Agregados;