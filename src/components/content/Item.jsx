import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <>
            <div className="card border-primary mb-3" key={producto.id} style={{ maxWidth: "20rem" }}>
                <img src={producto.img} alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">${producto.precio}</p>
                    <button className="btn btn-lg btn-primary" type="button"><Link className='nav-link' to={"/item/" + producto.id}>Ver Producto</Link></button>
                </div>
            </div>
        </>
    );
}

export default Item;
