import React, { createContext, useState, useEffect } from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [suma, setSuma] = useState(0)
    useEffect(() => {
        totalCarrito()
    }, [carrito])

    const agregarProducto = (prod, cant) => {
        const aux = [...carrito]
        let indice = aux.findIndex(producto => producto.id === prod.id)
        if (indice != -1) {
            aux[indice].cantidad = cant
        } else {
            const prodCarrito = { ...prod, cantidad: cant }
            aux.push(prodCarrito)
        }
        setCarrito([...aux])
    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id === prod.id)
        aux.splice(indice, 1)
        setCarrito([...aux])
    }

    const totalCarrito = () => {
        let suma = 0
        carrito.forEach(producto => suma += (producto.precio * producto.cantidad))
        setSuma(suma)
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <>
            <CarritoContext.Provider value={{ carrito, agregarProducto, quitarProducto, suma, vaciarCarrito }}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export { CarritoContext, CarritoProvider };
