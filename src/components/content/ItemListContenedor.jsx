import React from "react";
import CardsProductos from "../layouts/CardsProductos";

const ItemListContenedor = () => {
  const listComida = ["Hamburgesa Clasica", "Hamburguesa Especial", "Hamburguesa Veggie"]

  return (
    <>
      <div className='divCards'>
        <CardsProductos producto={listComida}/>
      </div>
    </>
  );
};


export default ItemListContenedor;
