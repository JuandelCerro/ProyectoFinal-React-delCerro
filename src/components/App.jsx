import React from 'react';
import Navbar from './content/Navbar';
import ItemListContenedor from '../components/content/ItemListContenedor';
import '../styles/App.css';

const App = () => {

    return (
        <>
            <Navbar/>
            <ItemListContenedor/>
        </>
    );
}

export default App;
