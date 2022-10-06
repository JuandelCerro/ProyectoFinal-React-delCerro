import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/funciones';

const Categoria = () => {

    const [productos, setProductos] = useState([]);
    const {categoria} = useParams()
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.Categoria === categoria )
            console.log(productosCategoria)
            const cardProducto = productosCategoria.map(producto => 
                <div className="card cardProducto" key={producto.id}>
                    <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">${producto.precio}</p>
                        <button class="btn btn-lg btn-primary" type="button"><Link className='nav-link' to={"/item/" + producto.id}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
        })
    }, [categoria]);
    return (
        <div className='categoria'>
            <div className="row">
                {productos}
            </div>
        </div>
            
        
    );
}

export default Categoria;

