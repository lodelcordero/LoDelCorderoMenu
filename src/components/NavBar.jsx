import React from "react";
import { NavLink } from "react-router-dom";
import '../style/navbar.css'

const Navbar = () =>{ 
    return(
        <ul>
            <NavLink to="/empanadas" className= {({isActive})=> isActive ? 'activo' :undefined }>Empanadas</NavLink>
            <NavLink to="/sangucheria" className={({isActive})=> isActive ? 'activo' :undefined } >Sangucheria</NavLink>
            <NavLink to="/papas" className={({isActive})=> isActive ? 'activo' :undefined }>Papas</NavLink>
            <NavLink to="/agregados" className={({isActive})=> isActive ? 'activo' :undefined }>Agregados</NavLink>
            <NavLink to="/bebidas" className={({isActive})=> isActive ? 'activo' :undefined }>Bebidas</NavLink>
        </ul>
    )
}

export default Navbar