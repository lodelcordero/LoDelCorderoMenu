import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Agregados = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Jamon' descripcion='' precio='$200' />
    <Cartas nombre='Queso' descripcion='' precio='$200' />
    <Cartas nombre='Huevo' descripcion='' precio='$200' />
    <Cartas nombre='Cheddar' descripcion='' precio='$300' />
    <Cartas nombre='Bacon' descripcion='' precio='$300' />
    </div> 
    )
}

export default Agregados;