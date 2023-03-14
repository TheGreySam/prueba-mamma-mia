import { useContext } from "react";
import { useParams } from "react-router-dom"
import React from "react";
import PizzaContext from "./../context";

export default function Product() {
    const { data } = useContext(PizzaContext);
    const datos = data;
    const valor = useParams("");
    /* const pizzadataone = datos.filter(dato => dato.includes(valor)).map(filteredDato => (
        <h1>{filteredDato}</h1>
    )) */
    const PizzaDataOne = datos.filter(dato => {
        return dato.id === valor.id
    })
    console.log(PizzaDataOne)

    return (
        <div id="Product">
            <h1>Product: {valor.id}</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={PizzaDataOne[0].img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{PizzaDataOne[0].name}</h3>
                            <hr />
                            <p className="card-text">{PizzaDataOne[0].desc}</p>
                            <h4>Ingredientes</h4>
                            <ul>
                                <li>{PizzaDataOne[0].ingredients[0]}</li>
                                <li>{PizzaDataOne[0].ingredients[1]}</li>
                                <li>{PizzaDataOne[0].ingredients[2]}</li>
                                <li>{PizzaDataOne[0].ingredients[3]}</li>
                            </ul>
                            <h4 className="card-title">Precio: {PizzaDataOne[0].price} </h4>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};