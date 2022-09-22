import React, {useState} from 'react';

const Contador = () => {
    
    const [contador, setContador] = useState(0);

    function modificarContador(operacion) {
      if (operacion == "+") {
        setContador(contador + 1);
      } else if (contador > 1) {
        {
          setContador(contador - 1);
        }
      }
    }

    return (
        <>
        <button onClick={() => modificarContador('+')} className='btn btnContador btn-lg btn-primary'>+</button>
          <h4>{contador}</h4>
        <button onClick={() => modificarContador('-')} className='btn btnContador btn-lg btn-light'>-</button>
        </>
    );


}

export default Contador;
