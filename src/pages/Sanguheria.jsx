import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Sangucheria = () =>{
    return(
        <div>
        <Navbar/>
        <Cartas nombre='Sanguche de milanesa' descripcion='' precio='$1600' />
        <Cartas nombre='Sanguche de milanesa especial' descripcion='Queso, jamon y huevo' precio='$2200' />
        <Cartas nombre='Sanguche de milanesa Cordero' descripcion='Cheddar y bacon' precio='$1800' />
        <Cartas nombre='Milanesa al plato' descripcion='' precio='$1700' />
        <Cartas nombre='Sanguche de lomito' descripcion='' precio='$1750' />
        <Cartas nombre='Sanguche de lomito Cordero' descripcion='Cheddar y bacon' precio='$2000' />
        <Cartas nombre='Lomito al plato' descripcion='Con ensalada' precio='$1900' />
        <Cartas nombre='Sanguche radical' descripcion='Lomo grueso' precio='$2000' />
        <Cartas nombre='Sanguche radical Cordero' descripcion='Lomo grueso, cheddar y bacon' precio='$2000' />
        <Cartas nombre='Radical al plato' descripcion='Con ensalada' precio='$2100' />
        <Cartas nombre='Hamburguesa' descripcion='' precio='$1350' />
        <Cartas nombre='Hamburguesa Cordero' descripcion='Cheddar y bacon' precio='$1600' />
        <Cartas nombre='Hamburguesa al plato' descripcion='Con ensalada' precio='$1400' />
        <Cartas nombre='Tostado de jamon y queso' descripcion='' precio='$1200' />
        <Cartas nombre='Tostado de ternera' descripcion='' precio='$1300' />
        <Cartas nombre='Vegetariano' descripcion='Huevo y queso' precio='$1100' />
        </div>
        
    )
}

export default Sangucheria;