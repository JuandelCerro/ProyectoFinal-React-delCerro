import React, {useState, useEffect} from 'react';
import { getProducto } from '../../utils/firebase';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() =>{
            getProducto(id).then(prod => {
            // prod.find(productoArray => productoArray.id == id)
            setProducto(prod)
            console.log(prod)
        })
    }, [id])



    return (
        <>
            <ItemDetail producto={producto}/>
        </>
    );
}

export default ItemDetailContainer;
