import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import '../style/homepages.css'

const HomePage = () => {
  return (
    <div>
      <Link to="/LodelCordero-menu/empanadas">
        <Menu titulo="Empanadas" />
      </Link>
      <Link to="/LodelCordero-menu/sangucheria">
        <Menu titulo="Sangucheria" />
      </Link>
      <Link to="/LodelCordero-menu/papas">
        <Menu titulo="Papas" />
      </Link>
      <Link to="/LodelCordero-menu/agregados">
        <Menu titulo="Agregados" />
      </Link>
      <Link to="/LodelCordero-menu/bebidas">
        <Menu titulo="Bebidas" />
      </Link>
    </div>
  );
};

export default HomePage;
