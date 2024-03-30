import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Sangucheria = () =>{
    return(
        <div>
        <Navbar/>
        <Cartas nombre='Sanguche de milanesa' descripcion='' precio='' />
        <Cartas nombre='Sanguche de milanesa especial' descripcion='Queso, jamon y huevo' precio='' />
        <Cartas nombre='Sanguche de milanesa Cordero' descripcion='Cheddar y bacon' precio='' />
        <Cartas nombre='Milanesa al plato' descripcion='' precio='' />
        <Cartas nombre='Sanguche de lomito' descripcion='' precio='' />
        <Cartas nombre='Sanguche de lomito Cordero' descripcion='Cheddar y bacon' precio='' />
        <Cartas nombre='Lomito al plato' descripcion='Con ensalada' precio='' />
        <Cartas nombre='Sanguche radical' descripcion='Lomo grueso' precio='' />
        <Cartas nombre='Sanguche radical Cordero' descripcion='Lomo grueso, cheddar y bacon' precio='' />
        <Cartas nombre='Radical al plato' descripcion='Con ensalada' precio='' />
        <Cartas nombre='Hamburguesa' descripcion='' precio='' />
        <Cartas nombre='Hamburguesa Cordero' descripcion='Cheddar y bacon' precio='' />
        <Cartas nombre='Tostado de jamon y queso' descripcion='' precio='' />
        <Cartas nombre='Tostado de ternera' descripcion='' precio='' />
        <Cartas nombre='Vegetariano' descripcion='Huevo y queso' precio='' />
        </div>
        
    )
}

export default Sangucheria;