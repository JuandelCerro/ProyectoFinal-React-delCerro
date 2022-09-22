import React from "react";
import Contador from "./Contador";
import BodyProductos from "./BodyProductos"

const CardsProductos = ({producto}) => {

  return (
    <>
      <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
        <h4 className="card-header">{producto[0]}</h4>
          <div className="card-body">
            <BodyProductos/>
            <div class="flex">
            <Contador/>
          </div>
          <button class="btn btn-lg btn-primary" type="button">Agregar al carrito</button>
        </div>
      </div>
      <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
        <h4 className="card-header">{producto[1]}</h4>
          <div className="card-body">
            <BodyProductos/>
            <div class="flex">
            <Contador/>
          </div>
          <button class="btn btn-lg btn-primary" type="button">Agregar al carrito</button>
        </div>
      </div>
      <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
        <h4 className="card-header">{producto[2]}</h4>
          <div className="card-body">
            <BodyProductos/>
            <div class="flex">
            <Contador/>
          </div>
          <button class="btn btn-lg btn-primary" type="button">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default CardsProductos;
