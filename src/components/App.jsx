import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import '../styles/App.css';
import Navbar from './content/Navbar';
import ItemListContainer from './content/ItemListContainer';
import ItemDetailContainer from './content/ItemDetailContainer';
import About from './content/About';
import Contacto from './content/Contacto';
import Carrito from './content/Carrito';
import Footer from './content/Footer';
import Categoria from './content/ListCategoria';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/categoria/:categoria" element={<Categoria/>} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
                <Route path="/Carrito" element={<Carrito/>}/>
                <Route path="*" element={<h1>Error 404</h1>}/>
            </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
