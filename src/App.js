import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import PizzaContext from './context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Carrito from './views/Carrito';
import Product from './views/Product';
import Pizzas from "./pizzas.json";

function App() {
  const [data, setData] = useState(Pizzas);
  console.log(Pizzas)

  return (
    <div className="App">
     <PizzaContext.Provider value={{ data, setData }}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Product/:id' element={<Product />} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     </PizzaContext.Provider>
    </div>
  );
}

export default App;
