import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Empanadas = () =>{
    return(
        <div>
            <Navbar/>
            <Cartas nombre='Empanadas de carne suave' descripcion='' precio='' />
            <Cartas nombre='Empanadas de carne picante' descripcion='' precio='' />
            <Cartas nombre='Empanadas de pollo suave' descripcion='' precio='' />
            <Cartas nombre='Empanadas de pollo picante' descripcion='' precio='' />
            <Cartas nombre='Empanadas de Jamon y queso' descripcion='' precio='' />
            <Cartas nombre='Empanadas de choclo' descripcion='Queso y choclo' precio='' />
            <Cartas nombre='Sfijas' descripcion='Empanadas Arabes' precio='' />
            <Cartas nombre='Cantimpalo' descripcion='Cantimpalo, queso y aceitunas negras' precio='' />
            <Cartas nombre='Roquefort' descripcion='Roquefort, apio, muzarella' precio='' />
            <Cartas nombre='Queso' descripcion='Queso, cebolla de verdeo y huevo' precio='' />
            <Cartas nombre='Queso aceituna y tomate' descripcion='' precio='' />
            <Cartas nombre='Ternera' descripcion='Queso y tomate' precio='' />

            <fieldset>
            <legend>Nueva</legend>
            <Cartas nombre='Doble Queso y cebolla' descripcion='Queso y cebolla caramelizada' precio='' />
            </fieldset>

            
            
            <fieldset>

            <legend>Por docena</legend>
            <Cartas nombre='Docena de empanadas' descripcion='12 unidades' precio='' /> 
            
            </fieldset> 
                 
        </div>
    )
}

export default Empanadas