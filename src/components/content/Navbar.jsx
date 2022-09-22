import React from "react";
import Form from "../layouts/Form";
import Secciones from "../layouts/Secciones";
import Logo from "../layouts/logoCope.png";
import Dropdown from "../layouts/Dropdown";
import CartWidget from "../layouts/CartWidget";

// AGREGAR ICONO DE CARRITO AL NAVBAR

const Navbar = () => {
  const listProductos = ["Burgers Clasicas", "Burgers Especiales", "Burgers Veggies", "Para picar"]

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary barraNavegacion">
        <div className="container-fluid">
          <img src={Logo} />
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Secciones/>
              <Dropdown lista={listProductos}/>
            </ul>
            <Form busqueda="Buscar Producto"/> {/*Defino la "busqueda" como parametro*/}
            <button className="btnCarrito"><CartWidget/></button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
