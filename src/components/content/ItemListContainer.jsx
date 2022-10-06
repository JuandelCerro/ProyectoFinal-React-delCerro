import React, { useState, useEffect } from 'react';
import { consultarBDD } from '../../utils/funciones';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(productos => {
            const carProducto = productos.map((producto) => (
                <div className="card border-primary mb-3" key={producto.id} style={{ maxWidth: "20rem" }}>
                    <img src={"./img/" + producto.img} alt={producto.nombre} />
                    <div className="card-body">
                        <h4 className="card-title">{producto.nombre}</h4>
                        <p className="card-text">${producto.precio}</p>
                        <button class="btn btn-lg btn-primary" type="button"><Link className='nav-link' to={"/item/" + producto.id}>Ver Producto</Link></button>
                    </div>
                </div>
            ));


            setProductos(carProducto)
        })
    }, []);

    return (
        <>
            <div className='divCards'>
                {productos}
            </div>
        </>
    );
}

export default ItemListContainer;

