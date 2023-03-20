import React, { useContext } from "react";
import PizzaContext from "../context/context";

const ItemCarrito = (props) => {
    const { obj } = props;
    const { increase, decrease, removeItem } = useContext(PizzaContext);
    return (
        <div className="card m-2" >
            <div className="row g-0">
                <div className="col">
                    <img className="img-fluid rounded-start" src={obj.img} alt={obj.name} style={{ height: '8rem'}}/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h3 className="card-title">{obj.name}</h3>

                        <h5 className="card-text">
                            <span style={{ marginLeft: '1rem' }}>
                                <b>Precio: </b>{(obj.price).toFixed(2)}
                            </span>
                        </h5>
                    </div>
                </div>
                <div className="col">
                    <div className="card-body">
                        {obj.count > 1 && (
                            <>
                                <span style={{ marginLeft: '1rem' }}>
                                    <b>Total: </b>$ {(obj.price * obj.count).toFixed(2)}
                                </span>
                            </>
                        )}
                        <div className="p-2">
                            <button onClick={() => decrease(obj)} className="btn btn-primary">
                                {" "}
                                -{" "}
                            </button>
                            <span class="badge bg-success m-2 p-2">{obj.count}</span>
                
                            <button onClick={() => increase(obj)} className="btn btn-primary">
                                {" "}
                                +{" "}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-body">
                        {obj.count > 1 && (
                            <>
                                <span style={{ marginLeft: '1rem' }}>
                                    <b>Total: </b>$ {(obj.price * obj.count).toFixed(2)}
                                </span>
                            </>
                        )}
                        <div className="p-2">
                           
                            <button onClick={() => removeItem(obj.id)} className="btn btn-danger">
                                Eliminar
                            </button>
                          
                        </div>
                    </div>
                </div>
                <div>
                </div>

            </div>
        </div>
    );
};

export default ItemCarrito;