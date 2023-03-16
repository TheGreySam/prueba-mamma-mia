import { useContext } from "react";
import { useParams } from "react-router-dom"
import React from "react";
import PizzaContext from "./../context";

export default function Carrito() {
    const { data } = useContext(PizzaContext);
    const datos = data;
    return (
        <div id="Carrito">
            <div className="container">
                <div className="card">
                    <h3 className="card-title">Detalles del pedido:</h3>
                    <div className="card-text">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">Salame</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};