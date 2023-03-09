import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import PizzaContext from './context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Carrito from './views/Carrito';

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
     <PizzaContext.Provider value={{ data, setData }}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Carrito' element={<Carrito />} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     </PizzaContext.Provider>
    </div>
  );
}

export default App;
