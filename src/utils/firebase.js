import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDiRN4hlkiKddAFF7Il6eY5B3BcdwNpyIo",
  authDomain: "react-34755-2022-3809c.firebaseapp.com",
  projectId: "react-34755-2022-3809c",
  storageBucket: "react-34755-2022-3809c.appspot.com",
  messagingSenderId: "910776498497",
  appId: "1:910776498497:web:69d2804c5fa713655b89c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (producto) => {
    await addDoc(collection(db, "productos"), {
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      categoria: producto.idCategoria,
      stock: producto.stock,
      img: producto.img
    })
  })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = { ...producto.data(), id: producto.id }
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

const deleteProducto = async (id) => {
  const estado = await deleteDoc(doc(db, "productos", id))
  return estado
}

const createProducto = async (producto) => {
  const estado = await addDoc(collection(db, "productos"), {
    nombre: producto.nombre,
    precio: producto.precio,
    descripcion: producto.descripcion,
    categoria: producto.idCategoria,
    stock: producto.stock,
    img: producto.img
  })
  return estado
}

const crearOrdenCompra = async (nombre, apellido, email, dni, direccion, preTotal) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion: direccion,
    precioTotal: preTotal
  })
  return ordenCompra
  }

  const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
}

export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, crearOrdenCompra, getOrdenCompra}