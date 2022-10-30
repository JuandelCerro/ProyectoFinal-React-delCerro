import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <>
            <div className="card border-primary mb-3" key={producto[0]} style={{ maxWidth: "20rem" }}>
                <img src={producto[1].img} alt={producto[1].nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto[1].nombre}</h5>
                    <p className="card-text">${producto[1].precio}</p>
                    <button className="btn btn-lg btn-primary" type="button"><Link className='nav-link' to={"/item/" + producto[0]}>Ver Producto</Link></button>
                </div>
            </div>
        </>
    );
}

export default Item;
