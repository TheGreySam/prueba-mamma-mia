import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import PizzaContext from './context/context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Carrito from './views/Carrito';
import Product from './views/Product';
import Pizzas from "./pizzas.json";

function App() {
  const [state, setState] = useState({
    data: Pizzas,
    cart: [],
  });

  const addToCart = (obj) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === obj.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === obj.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...obj, count: 1 }],
    });
  };

  const increase = (obj) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === obj.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (obj) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === obj.id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  const removeItem = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

/*   const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  ); */
  console.log(Pizzas)
  const BGimage = state.data[2].img
  console.log(BGimage )
  

  return (
    <div className="App">
     <PizzaContext.Provider 
     value={{ state: state, addToCart, increase, decrease, removeItem }}
     >
      <BrowserRouter>
      <Navbar ></Navbar>
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
