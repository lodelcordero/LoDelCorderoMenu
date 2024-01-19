import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Empanadas = () =>{
    return(
        <div>
            <Navbar/>
            <Cartas nombre='Empanadas de carne suave' descripcion='' precio='$500' />
            <Cartas nombre='Empanadas de carne picante' descripcion='' precio='$500' />
            <Cartas nombre='Empanadas de pollo suave' descripcion='' precio='$500' />
            <Cartas nombre='Empanadas de pollo picante' descripcion='' precio='$500' />
            <Cartas nombre='Empanadas de Jamon y queso' descripcion='' precio='$500' />
            <Cartas nombre='Empanadas de choclo' descripcion='Queso y choclo' precio='$500' />
            <Cartas nombre='Sfijas' descripcion='Empanadas Arabes' precio='$500' />
            <Cartas nombre='Cantimpalo' descripcion='Cantimpalo, queso y aceitunas negras' precio='$500' />
            <Cartas nombre='Roquefort' descripcion='Roquefort, apio, muzarella' precio='$500' />
            <Cartas nombre='Queso' descripcion='Queso, cebolla de verdeo y huevo' precio='$500' />
            <Cartas nombre='Queso aceituna y tomate' descripcion='' precio='$500' />
            <Cartas nombre='Ternera' descripcion='Queso y tomate' precio='$500' />

            <fieldset>
            <legend>Nueva</legend>
            <Cartas nombre='Doble Queso y cebolla' descripcion='Queso y cebolla caramelizada' precio='$500' />
            </fieldset>

            
            
            <fieldset>

            <legend>Por docena</legend>
            <Cartas nombre='Docena de empanadas' descripcion='12 unidades' precio='$6000' /> 
            
            </fieldset> 
                 
        </div>
    )
}

export default Empanadas