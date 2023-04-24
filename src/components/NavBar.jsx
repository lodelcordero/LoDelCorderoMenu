import React from "react";
import { NavLink } from "react-router-dom";
import '../style/navbar.css'

const Navbar = () =>{ 
    return(
        <ul>
            <NavLink to="/LodelCordero-menu/empanadas" className= {({isActive})=> isActive ? 'activo' :undefined }>Empanadas</NavLink>
            <NavLink to="/LodelCordero-menu/sangucheria" className={({isActive})=> isActive ? 'activo' :undefined } >Sangucheria</NavLink>
            <NavLink to="/LodelCordero-menu/papas" className={({isActive})=> isActive ? 'activo' :undefined }>Papas</NavLink>
            <NavLink to="/LodelCordero-menu/agregados" className={({isActive})=> isActive ? 'activo' :undefined }>Agregados</NavLink>
            <NavLink to="/LodelCordero-menu/bebidas" className={({isActive})=> isActive ? 'activo' :undefined }>Bebidas</NavLink>
            <NavLink to="/LodelCordero-menu"><i class="fa-solid fa-arrow-left" id="back"></i></NavLink>
        </ul>
    )
}

export default Navbar