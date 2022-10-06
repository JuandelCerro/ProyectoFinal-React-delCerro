import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import '../styles/App.css';
import Navbar from './content/Navbar';
import ItemListContainer from './content/ItemListContainer';
import ItemDetail from './content/ItemDetail';
import About from './content/About';
import Contacto from './content/Contacto';
import Carrito from './content/Carrito';
import Footer from './content/Footer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
                <Route path="/Carrito" element={<Carrito/>}/>
                <Route path="/item/:id" element={<ItemDetail/>}/>

            </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
