import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Empanadas = () =>{
    return(
        <div>
            <Navbar/>
            <Cartas nombre='Empanadas de carne suave' descripcion='' precio='$350' />
            <Cartas nombre='Empanadas de carne picante' descripcion='' precio='$350' />
            <Cartas nombre='Empanadas de pollo suave' descripcion='' precio='$350' />
            <Cartas nombre='Empanadas de pollo picante' descripcion='' precio='$350' />
            <Cartas nombre='Empanadas de Jamon y queso' descripcion='' precio='$350' />
            <Cartas nombre='Empanadas de choclo' descripcion='Queso y choclo' precio='$350' />
            <Cartas nombre='Sfijas' descripcion='Empanadas Arabes' precio='$350' />
            <Cartas nombre='Cantimpalo' descripcion='Cantimpalo, queso y aceitunas negras' precio='$350' />
            <Cartas nombre='Roquefort' descripcion='Roquefort, apio, muzarella' precio='$350' />
            <Cartas nombre='Queso' descripcion='Queso, cebolla de verdeo y huevo' precio='$350' />
            <Cartas nombre='Queso aceituna y tomate' descripcion='' precio='$350' />
            <Cartas nombre='Ternera' descripcion='Queso y tomate' precio='$350' />
            <Cartas nombre='Docena de empanadas' descripcion='12 unidades' precio='$4200' />
     
        </div>
    )
}

export default Empanadas