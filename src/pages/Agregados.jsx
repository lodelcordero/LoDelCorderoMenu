import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Agregados = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Jamon' descripcion='' precio='$350' />
    <Cartas nombre='Queso' descripcion='' precio='$350' />
    <Cartas nombre='Huevo' descripcion='' precio='$350' />
    <Cartas nombre='Cheddar' descripcion='' precio='$500' />
    <Cartas nombre='Bacon' descripcion='' precio='$500' />
    </div> 
    )
}

export default Agregados;