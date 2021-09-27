import React from "react";
import "./styles/Footer.css";
const logos = [
  {
    textoAlternativo: "cineArTV",
    srcDelLogo: "http://cine.ar/img/tv.cine.ar.svg",
  },
  {
    textoAlternativo: "cineArPlay",
    srcDelLogo: "http://cine.ar/img/play.cine.ar.svg",
  },
  {
    textoAlternativo: "cineArEstrenos",
    srcDelLogo: "http://cine.ar/img/estrenos.cine.ar.svg",
  },
];

const transformarLogos = logos.map(({ textoAlternativo, srcDelLogo }) => (
  <li className="li-logo">
    <a className="a-logo" href="/">
      <img className="img-logo" src={srcDelLogo} alt={textoAlternativo} />
    </a>
  </li>
));

const PieDePagina = () => {
  return (
    <footer>
      <div className="logosCineAr">
        <ul>{transformarLogos}</ul>
      </div>
      <div className="DDA">
        <p>
          Todos los derechos reservados 2003-2021. República Argentina. INCAA
        </p>
        <p>Lima 319; Código Postal: C1073AAG, CABA; República Argentina.</p>
      </div>
    </footer>
  );
};

export default PieDePagina;
