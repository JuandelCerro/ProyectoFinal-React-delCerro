import {Link} from "react-router-dom";
import React from "react";

const Secciones = () => {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link " to="/About">About Us</Link>           
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/Contacto">Contacto</Link>           
          </li>
        </ul>
      </div>
    </>
  );
};

export default Secciones;
