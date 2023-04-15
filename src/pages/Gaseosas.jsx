import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Gaseosas = () =>{
    return(
        <div>
        <Navbar/>
        <Cartas nombre='Coca-cola' descripcion='1L' precio='$2500' />
        <Cartas nombre='Coca-cola' descripcion='1.5L' precio='$2500' />
        <Cartas nombre='Coca-cola Zero' descripcion='1.5L' precio='$2500' />
        <Cartas nombre='Fanta' descripcion='1L' precio='$2500' />
        <Cartas nombre='Fanta' descripcion='1.5L' precio='$2500' />
        <Cartas nombre='Fanta Zero' descripcion='1.5L' precio='$2500' />
        <Cartas nombre='Sprite' descripcion='1L' precio='$2500' />
        <Cartas nombre='Sprite' descripcion='1.5L' precio='$2500' />
        <Cartas nombre='Sprite Zero' descripcion='1.5L' precio='$2500' />
        </div>
    )
}

export default Gaseosas