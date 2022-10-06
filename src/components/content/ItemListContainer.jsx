import React, { useState, useEffect } from "react";
import { consultarBDD } from "../../utils/funciones";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultarBDD("./json/productos.json").then((productos) => {
      setProductos(productos);
    });
  }, []);

  return (
    <>
      <div className="divCards">
        <ItemList productos={productos} />
      </div>
    </>
  );
};

export default ItemListContainer;
