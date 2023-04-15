import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Sangucheria = () =>{
    return(
        <div>
        <Navbar/>
        <Cartas nombre='Sanguche de milanesa' descripcion='' precio='$2500' />
        <Cartas nombre='Sanguche de milanesa Cordero' descripcion='Cheddar y beacon' precio='$2500' />
        <Cartas nombre='Milanesa al plato' descripcion='' precio='$2500' />
        <Cartas nombre='Sanguche de lomito' descripcion='' precio='$2500' />
        <Cartas nombre='Sanguche de lomito Cordero' descripcion='Cheddar y beacon' precio='$2500' />
        <Cartas nombre='Lomito al plato' descripcion='Con ensalada' precio='$2500' />
        <Cartas nombre='Sanguche radical' descripcion='Lomo grueso' precio='$2500' />
        <Cartas nombre='Sanguche radical Cordero' descripcion='Lomo grueso, cheddar y beacon' precio='$2500' />
        <Cartas nombre='Radical al plato' descripcion='Con ensalada' precio='$2500' />
        <Cartas nombre='Hamburguesa' descripcion='' precio='$2500' />
        <Cartas nombre='Hamburguesa Cordero' descripcion='Cheddar y beacon' precio='$2500' />
        <Cartas nombre='Hamburguesa al plato' descripcion='Con ensalada' precio='$2500' />
        <Cartas nombre='Tostado de jamon y queso' descripcion='' precio='$2500' />
        <Cartas nombre='Tostado de ternera' descripcion='' precio='$2500' />
        <Cartas nombre='Vegetariano' descripcion='Huevo y queso' precio='$2500' />




        </div>
        
    )
}

export default Sangucheria;