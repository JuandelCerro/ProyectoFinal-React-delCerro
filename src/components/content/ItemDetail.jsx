import React, { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import ItemCount from './ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    const {agregarProducto} = useContext(CarritoContext)
    if (!producto) return

    const cantProducto = (operacion) => {
        if (operacion == "+") {
            if (cantidad < producto.stock) {
                setCantidad(cantidad + 1)
            }
        } else {
            if (cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }
    }

    const showToastMessage = () => {
        toast.success('Agregaste ' + `${producto.nombre}` + ' al Carrito!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    console.log("producto", producto.nombre)
    return (
        <>
            <div className='itemDetail'>
                <div className='itemDetailFlex'>
                    <div className="">
                        <img src={producto.img} className="countImg" alt="" />
                    </div>
                    <div className="divCard itemDetailInfoContainer">
                        <div className="card-body itemDetailInfo">
                            <h4 className="card-title">{producto.nombre}</h4>
                            <p className="card-text">{producto.descripcion}</p>
                            <h5 className="card-precio">$ {producto.precio}</h5>

                            <div className='contador'>
                                <button onClick={() => cantProducto('+')} className='btn btnContador btn-lg btn-primary'>+</button>
                                <h4>{cantidad}</h4>
                                <button onClick={() => cantProducto('-')} className='btn btnContador btn-lg btn-light'>-</button>
                            </div>

                            <button className='btn btn-lg btn-primary' onClick={() => {agregarProducto(producto, cantidad); showToastMessage()}} >Agregar al carrito</button>
                            <ToastContainer />
                            <ItemCount producto={producto}/>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ItemDetail;

