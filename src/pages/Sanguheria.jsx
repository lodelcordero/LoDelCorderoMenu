import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Sangucheria = () =>{
    return(
        <div>
        <Navbar/>
        <Cartas nombre='Sanguche de milanesa' descripcion='' precio='$1800' />
        <Cartas nombre='Sanguche de milanesa especial' descripcion='Queso, jamon y huevo' precio='$2400' />
        <Cartas nombre='Sanguche de milanesa Cordero' descripcion='Cheddar y bacon' precio='$2400' />
        <Cartas nombre='Milanesa al plato' descripcion='' precio='$2100' />
        <Cartas nombre='Sanguche de lomito' descripcion='' precio='$2000' />
        <Cartas nombre='Sanguche de lomito Cordero' descripcion='Cheddar y bacon' precio='$2600' />
        <Cartas nombre='Lomito al plato' descripcion='Con ensalada' precio='$2300' />
        <Cartas nombre='Sanguche radical' descripcion='Lomo grueso' precio='$2300' />
        <Cartas nombre='Sanguche radical Cordero' descripcion='Lomo grueso, cheddar y bacon' precio='$2900' />
        <Cartas nombre='Radical al plato' descripcion='Con ensalada' precio='$2400' />
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