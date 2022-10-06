import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import Contador from '../layouts/Contador';

const ItemDetail = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() =>{
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos  => {
            const producto1 = productos.find(productoArray => productoArray.id == id)
            setProducto(producto1)
            console.log(producto1)
        })
    }, [])

    return (
        <>
            <div className='itemDetail'>
                <div className='itemDetailFlex'>
                    <div className="">
                        <img src={`../img/${producto.img}`} className="countImg" alt="" />
                    </div>
                    <div className="divCard itemDetailInfoContainer">
                        <div className="card-body itemDetailInfo">
                            <h4 className="card-title">{producto.nombre}</h4>
                            <p className="card-text">{producto.descripcion}</p>
                            <h5 className="card-precio">$ {producto.precio}</h5>
                            <Contador/>
                            <button className='btn btn-lg btn-primary'>COMPRAR</button>
                            <ItemCount producto={producto}/>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ItemDetail;

