import React, { useState, useEffect } from "react";
import { getProductos } from "../../utils/firebase";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then(productos => {
      setProductos(productos)
    })
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
