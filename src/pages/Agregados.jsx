import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Agregados = () =>{
    return(
    <div>
    <Navbar/>
    <Cartas nombre='Jamon' descripcion='' precio='$40' />
    <Cartas nombre='Queso' descripcion='' precio='$400' />
    <Cartas nombre='Huevo' descripcion='' precio='$400' />
    <Cartas nombre='Cheddar' descripcion='' precio='$600' />
    <Cartas nombre='Bacon' descripcion='' precio='$600' />
    </div> 
    )
}

export default Agregados;