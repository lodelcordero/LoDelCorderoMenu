import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Agregados = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Jamon' descripcion='' precio='$2500' />
    <Cartas nombre='Queso' descripcion='' precio='$2500' />
    <Cartas nombre='Huevo' descripcion='' precio='$2500' />
    <Cartas nombre='Cheddar' descripcion='' precio='$2500' />
    <Cartas nombre='Beacon' descripcion='' precio='$2500' />
    </div> 
    )
}

export default Agregados;