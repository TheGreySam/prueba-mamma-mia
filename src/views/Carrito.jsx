import React, { useContext } from "react";

import PizzaContext from "../context/context";
import ItemCarrito from "../components/ItemCarrito"

const Carrito = () => {
    const { state } = useContext(PizzaContext);
  //  const datos = data;
    return (
        <div id="Carrito">
            <div className="container">
                <div className="card m-5 p-4 pb-5">
                    <h3 className="card-title p-2">Detalles del pedido:</h3>
                    {state.cart.map((obj) => (
                        <ItemCarrito key={obj.id} obj={obj} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Carrito;