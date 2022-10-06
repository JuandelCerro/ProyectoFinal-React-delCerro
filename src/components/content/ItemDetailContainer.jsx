import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

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
    }, [id])



    return (
        <>
            <ItemDetail producto={producto}/>
        </>
    );
}

export default ItemDetailContainer;
