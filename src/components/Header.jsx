import React from "react";
import '../style/header.css'

const Header = () => {
    return (
        <header className="cabecera">
        <div className="imagen">
            <a href="/LodelCordero-menu"><img src="img/LOGO.jpeg" alt="" max-width="20%" height="180vh" /></a>
        </div>
        {/* <div className="nombre">
            <h1 className="titulo">LO DEL CORDERO</h1>
            <h3>Empandadería & Sangucheria</h3>
            <h4>-DESDE EL 2005-</h4>
        </div> */}
    </header>
    )
}

export default Header;