import React from "react";
import '../style/menu.css'

const Menu = ({titulo}) =>{
    return(
        <div className="lista-botones-menu">
            <button className="boton-menu">{titulo}<i class="fa-solid fa-chevron-right"></i></button>
        </div>
    )
}

export default Menu;