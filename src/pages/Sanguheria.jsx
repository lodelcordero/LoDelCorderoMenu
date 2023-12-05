import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Sangucheria = () =>{
    return(
        <div>
        <Navbar/>
        <Cartas nombre='Sanguche de milanesa' descripcion='' precio='$2200' />
        <Cartas nombre='Sanguche de milanesa especial' descripcion='Queso, jamon y huevo' precio='$3250' />
        <Cartas nombre='Sanguche de milanesa Cordero' descripcion='Cheddar y bacon' precio='$3100' />
        <Cartas nombre='Milanesa al plato' descripcion='' precio='$2700' />
        <Cartas nombre='Sanguche de lomito' descripcion='' precio='$2500' />
        <Cartas nombre='Sanguche de lomito Cordero' descripcion='Cheddar y bacon' precio='$3300' />
        <Cartas nombre='Lomito al plato' descripcion='Con ensalada' precio='$2900' />
        <Cartas nombre='Sanguche radical' descripcion='Lomo grueso' precio='$3000' />
        <Cartas nombre='Sanguche radical Cordero' descripcion='Lomo grueso, cheddar y bacon' precio='$3800' />
        <Cartas nombre='Radical al plato' descripcion='Con ensalada' precio='$3300' />
        <Cartas nombre='Hamburguesa' descripcion='' precio='$1900' />
        <Cartas nombre='Hamburguesa Cordero' descripcion='Cheddar y bacon' precio='$2700' />
        <Cartas nombre='Tostado de jamon y queso' descripcion='' precio='$1900' />
        <Cartas nombre='Tostado de ternera' descripcion='' precio='$2100' />
        <Cartas nombre='Vegetariano' descripcion='Huevo y queso' precio='$1600' />
        </div>
        
    )
}

export default Sangucheria;