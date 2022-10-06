import React from 'react';
import ItemCount from './ItemCount';
import Contador from '../layouts/Contador';

const ItemDetail = ({producto}) => {

    if (!producto) return <></>;
    
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

