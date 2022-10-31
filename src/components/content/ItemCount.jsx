import React from 'react';

const ItemCount = ({ producto }) => {
    return (
        <>
            <div>
                <p className="card-text">Stock: {producto.stock}</p>
            </div>
        </>
    );
}

export default ItemCount;
