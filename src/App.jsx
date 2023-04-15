import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Empanadas from "./pages/Empanadas";
import Sangucheria from "./pages/Sanguheria";
import Papas from "./pages/Papas";
import Agregados from "./pages/Agregados";
import Gaseosas from "./pages/Gaseosas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/style/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="menu">
        <BrowserRouter>
          <h1 className="menu_titulo">MENU</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/empanadas" element={<Empanadas />} />
            <Route path="/sangucheria" element={<Sangucheria />} />
            <Route path="/papas" element={<Papas />} />

            <Route path="/agregados" element={<Agregados />} />

            <Route path="/bebidas" element={<Gaseosas />} />

          </Routes>
        </BrowserRouter>
      </section>
      <Footer />
    </div>
  );
}

export default App;
