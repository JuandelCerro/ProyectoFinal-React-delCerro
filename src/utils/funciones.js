export const consultarBDD = async () => {
  const response = await fetch("./json/productos.json");
  const productos = await response.json();
  console.log(productos);

  return productos;


};

