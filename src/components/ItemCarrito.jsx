import React, { useContext} from "react";
import PizzaContext from "../context/context";

const ItemCarrito = (props) => {
    const { obj } = props;
    const { increase, decrease, removeItem } = useContext(PizzaContext);
    return (
        <div className="list-item">
            <img className="list-item-image" src={obj.image} alt={obj.name} />
            <div className="list-item-info">
                <span>
                    <h3>{obj.name}</h3>
                    <small>{obj.id}</small>
                    <span>
                        <b>Precio:</b> & {obj.price.toFixed(2)} <br />
                    </span>
                    {obj.count > 1 && (
                        <>
                        <span style={{ marginLeft: '1rem'}}>
                            <b>Cuenta: </b>x{obj.count}
                        </span>
                        <span style={{ marginLeft: '1rem'}}>
                            <b>Total: </b>&{(obj.price * obj.count).toFixed(2)}
                        </span>
                        </>
                    )}
                </span>
                <div>
                    <button onClick={() => decrease(obj)} className="btn btn-primary">
                        {" "}
                        -{" "}
                    </button>
                    <button onClick={() => increase(obj.id)} className="btn btn-danger">
                        Eliminar
                    </button>
                    <button onClick={() => increase(obj)} className="btn btn-primary">
                        {" "}
                        +{" "}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ItemCarrito;