import { useContext } from "react";
import { useParams } from "react-router-dom"
import React from "react";
import PizzaContext from "../context/context";

export default function Product() {
    const { state } = useContext(PizzaContext);
    //const datos = data;
    
    const valor = useParams("");
    console.log(valor)
    console.log(state.data)

     const PizzaDataOne = state.data.filter(dato => {
        return dato.id === valor.id
    })
    console.log(PizzaDataOne)

    return (
        <div id="Product">
            
             <div className="container">
            <div className="card m-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={PizzaDataOne[0].img} className="img-fluid rounded-start image" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{PizzaDataOne[0].name}</h2>
                            <hr />
                            <p className="card-text">{PizzaDataOne[0].desc}</p>
                            <h4>Ingredientes</h4>
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">{PizzaDataOne[0].ingredients[0]}</li>
                                <li className="list-group-item list-group-item-action">{PizzaDataOne[0].ingredients[1]}</li>
                                <li className="list-group-item list-group-item-action">{PizzaDataOne[0].ingredients[2]}</li>
                                <li className="list-group-item list-group-item-action">{PizzaDataOne[0].ingredients[3]}</li>
                            </ul>
                            <h4 className="card-title">Precio: {PizzaDataOne[0].price} </h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};