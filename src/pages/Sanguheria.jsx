import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Sangucheria = () =>{
    return(
        <div>
        <Navbar/>
        <Cartas nombre='Sanguche de milanesa' descripcion='' precio='$1200' />
        <Cartas nombre='Sanguche de milanesa Cordero' descripcion='Cheddar y bacon' precio='$1400' />
        <Cartas nombre='Milanesa al plato' descripcion='' precio='$1400' />
        <Cartas nombre='Sanguche de lomito' descripcion='' precio='$1300' />
        <Cartas nombre='Sanguche de lomito Cordero' descripcion='Cheddar y bacon' precio='$1500' />
        <Cartas nombre='Lomito al plato' descripcion='Con ensalada' precio='$1500' />
        <Cartas nombre='Sanguche radical' descripcion='Lomo grueso' precio='$1500' />
        <Cartas nombre='Sanguche radical Cordero' descripcion='Lomo grueso, cheddar y bacon' precio='$1700' />
        <Cartas nombre='Radical al plato' descripcion='Con ensalada' precio='$1700' />
        <Cartas nombre='Hamburguesa' descripcion='' precio='$1000' />
        <Cartas nombre='Hamburguesa Cordero' descripcion='Cheddar y bacon' precio='$1100' />
        <Cartas nombre='Hamburguesa al plato' descripcion='Con ensalada' precio='$1000' />
        <Cartas nombre='Tostado de jamon y queso' descripcion='' precio='$950' />
        <Cartas nombre='Tostado de ternera' descripcion='' precio='$900' />
        <Cartas nombre='Vegetariano' descripcion='Huevo y queso' precio='$750' />
        </div>
        
    )
}

export default Sangucheria;