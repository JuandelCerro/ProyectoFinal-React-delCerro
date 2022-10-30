import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { crearOrdenCompra, getProducto } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import imgCarrito from './carrito.png';
import swal from 'sweetalert2';

const Carrito = () => {
  const { carrito, quitarProducto, suma, vaciarCarrito } = useContext(CarritoContext)
  const [carritoLocal, setCarritoLocal] = useState([]);
  useEffect(() => {
    const prodMostrar = carrito.map(producto =>
      <div className="card border-primary mb-3" key={producto.id} style={{ maxWidth: "20rem" }}>
        <img src={producto.img} alt={producto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">${producto.precio}</p>
          <p className="card-text">Cantidad: {producto.cantidad}</p>
          <p className="card-text">Precio Total: ${producto.precio * producto.cantidad}</p>
          <button className="btn btn-lg btn-primary" onClick={() => quitarProducto(producto)} type="button">Quitar del carrito</button>
        </div>
      </div>)
    setCarritoLocal(prodMostrar)
  }, [carrito]);

  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    nombre: '',
    apellido:'',
    email: '',
    dni: '',
    direccion: ''
  }) 

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }
 
  const enviarDatos = (event) => {
    event.preventDefault();
    
    crearOrdenCompra(datos.nombre, datos.apellido, datos.email, datos.dni, datos.direccion, suma).then(orden => {
      console.log("cant", carrito)

      swal.fire({
        title: "Compra realizada con exito!",
        text: `Orden de compra: ${orden.id}`,
        icon: "success",
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then ((result) => {
        if (result.isConfirmed){
          vaciarCarrito()
          navigate('/')
        }
      })
      
    })
  }

  const carritoCont = (carrito.length !== 0) ?
    <div className='row carrito'> {carritoLocal}
      <h3 className='totalCarrito'>TOTAL CARRITO: ${suma}</h3>
      <div className='finalizarCompra'>
        <button className="btn btn-lg btn-primary btnVaciarCarrito" onClick={() => vaciarCarrito()} type="button">Vaciar Carrito</button>
      </div>

      
      <div className="container containerForm">
      <h4>Complete el siguiente formulario para finalizar la compra</h4>
        <form onSubmit={enviarDatos}>
          <br/>
          <div className="mb-3 needs-validation">
            <input placeholder="Nombre" type="text" className="form-control" name="nombre" onChange={handleInputChange} id="validationCustom01" required/>
          </div>
          <div className="mb-3">
            <input placeholder="Apellido" type="text" className="form-control" name="apellido" onChange={handleInputChange} id="validationCustom01" required/>
          </div>
          <div className="mb-3">
            <input placeholder="Email" type="email" className="form-control" name="email" onChange={handleInputChange} id="validationCustom01" required/>
          </div>
          <div className="mb-3">
            <input placeholder="DNI" type="number" className="form-control" name="dni" onChange={handleInputChange} id="validationCustom01" required/>
          </div>
          <div className="mb-3">
            <input placeholder="Direccion" type="text" className="form-control" name="direccion" onChange={handleInputChange} id="validationCustom01" required/>
          </div>
          <div className='confirmarCompra'>
          <button className="btn btn-lg btn-primary btnFinalizarCompra" type="submit">Confirmar Compra</button>
          </div>
        </form>
      </div>
    </div> :
      



    <>
      <div className='carritoVacio'>
        <img src={imgCarrito} className="imgCarrito" alt="carrito vacio" />
        <h1>¡ Aún no agregaste ningún producto al carrito !</h1>
        <h5>Revisa nuestra amplia variedad de  <Link to="/">hamburgesas</Link>, no te quedes con las ganas.</h5>
      </div>
    </>

  return carritoCont
}



export default Carrito;
