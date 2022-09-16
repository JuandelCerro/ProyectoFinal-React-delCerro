import React from "react";
import Form from "./Form";
import Secciones from "./Secciones";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Secciones />
            </ul>
            <Form busqueda="Buscar Producto"/> {/*Defino la "busqueda" como parametro*/}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
