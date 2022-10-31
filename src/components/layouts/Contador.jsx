import React, { useState } from 'react';

const Contador = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  function modificarCantidad(operacion) {
    if (operacion == "+") {
      if (cantidad < producto.stock) {
        setCantidad(cantidad + 1);
      }
    } else if (cantidad > 1) {
      {
        setCantidad(cantidad - 1);
      }
    }
  }

  return (
    <>
      <div className='contador'>
        <button onClick={() => modificarCantidad('+')} className='btn btnContador btn-lg btn-primary'>+</button>
        <h4>{cantidad}</h4>
        <button onClick={() => modificarCantidad('-')} className='btn btnContador btn-lg btn-light'>-</button>
      </div>
    </>
  );
}

export default Contador;
