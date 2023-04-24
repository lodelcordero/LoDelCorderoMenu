import React from "react";
import "../style/footer.css";
const Footer = () => {
  return (
    <footer>
      <section id="redes-sociales">
        <h1>
          <i className="fa-solid fa-phone"></i> Comunicate con nosotros
        </h1>

        <div className="numeros">
          <a href="tel:+544250359"> 42503595</a>
          <a href="tel:+544852218"> 4852218</a>
          <a href="tel:+543815880485"> 3815880485</a>
        </div>
        <div className="insta">
          <h1 className="insta-titulo">Seguinos en:</h1>
          <a href="https://www.instagram.com/lodelcordero.ok/">
            <i class="fa-brands fa-instagram"></i> Instagram
          </a>
        </div>
      </section>
      <section id="informacion-ubicacion">
        <h3>ENCONTRANOS EN:</h3>
        <div className="informacion">
          <div className="icono">
            <i className="fa-sharp fa-solid fa-location-dot"></i>
          </div>
          <div className="direccion">
            <p>
              Pje. Santiago del Estero 1494, T4107, Yerba Buena, Tucumán,
              Argentina
            </p>
          </div>
        </div>
        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.271921564416!2d-65.2939005873431!3d-26.822649553649484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422432ea28223f9%3A0xfe909cdb30fe08b8!2sLo%20del%20Cordero!5e0!3m2!1ses-419!2sar!4v1681086804894!5m2!1ses-419!2sar"
            width="300"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
