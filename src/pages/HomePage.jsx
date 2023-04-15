import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import '../style/homepages.css'

const HomePage = () => {
  return (
    <div>
      <Link to="/empanadas">
        <Menu titulo="Empanadas" />
      </Link>
      <Link to="sangucheria">
        <Menu titulo="Sangucheria" />
      </Link>
      <Link to="papas">
        <Menu titulo="Papas" />
      </Link>
      <Link to="agregados">
        <Menu titulo="Agregados" />
      </Link>
      <Link to="bebidas">
        <Menu titulo="Bebidas" />
      </Link>
    </div>
  );
};

export default HomePage;
