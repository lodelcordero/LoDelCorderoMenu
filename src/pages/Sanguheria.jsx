import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Sangucheria = () =>{
    return(
        <div>
        <Navbar/>
        <Cartas nombre='Sanguche de milanesa' descripcion='' precio='$3000' />
        <Cartas nombre='Sanguche de milanesa especial' descripcion='Queso, jamon y huevo' precio='$4200' />
        <Cartas nombre='Sanguche de milanesa Cordero' descripcion='Cheddar y bacon' precio='$3600' />
        <Cartas nombre='Milanesa al plato' descripcion='' precio='$2700' />
        <Cartas nombre='Sanguche de lomito' descripcion='' precio='$3300' />
        <Cartas nombre='Sanguche de lomito Cordero' descripcion='Cheddar y bacon' precio='$3600' />
        <Cartas nombre='Lomito al plato' descripcion='Con ensalada' precio='$2900' />
        <Cartas nombre='Sanguche radical' descripcion='Lomo grueso' precio='$3900' />
        <Cartas nombre='Sanguche radical Cordero' descripcion='Lomo grueso, cheddar y bacon' precio='$4500' />
        <Cartas nombre='Radical al plato' descripcion='Con ensalada' precio='$3300' />
        <Cartas nombre='Hamburguesa' descripcion='' precio='$2500' />
        <Cartas nombre='Hamburguesa Cordero' descripcion='Cheddar y bacon' precio='$3300' />
        <Cartas nombre='Tostado de jamon y queso' descripcion='' precio='$2500' />
        <Cartas nombre='Tostado de ternera' descripcion='' precio='$3000' />
        <Cartas nombre='Vegetariano' descripcion='Huevo y queso' precio='$2200' />
        </div>
        
    )
}

export default Sangucheria;