import React from 'react';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import  PizzaContext from '../context/context';

const ListItem = (props) => {
  const { addToCart } = useContext(PizzaContext);
  const navigate = useNavigate();
  const gotoProduct = (valor) => {
    navigate(`/Product/${valor}`);
  };
  const { obj, cart } = props;

  return (
    
        <div key={obj.id} className="col p-2">
          <div className="card pizzacard">
            <img src={obj.img} className="pizzaimg card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{obj.name}</h5>
              <div className="card-text">Ingredientes:
                <ul>
                  <li>{obj.ingredients[0]}</li>
                  <li>{obj.ingredients[1]}</li>
                  <li>{obj.ingredients[2]}</li>
                  <li>{obj.ingredients[3]}</li>
                </ul>
              </div>
              <h3 className="card-title">$ {obj.price}</h3>
              <button
                className="btn btn-primary m-2"
                value={obj.id}
    
                onClick={({ target }) => gotoProduct(target.value)}>
                Ver mas
              </button>
              <button className="btn btn-danger m-2"
              onClick={() => addToCart(obj)}
              >Añadir</button>
              {cart.map((cartItem) =>
                cartItem.id === obj.id ? (
                  cartItem.count > 0 ? (
                    <div className='btn bg-success text-white px-3 m-2'
                     style={{ marginLeft: '5px' }}>
                      {' '}
                      {cartItem.count} en el carrito{' '}
                    </div>
                  ) : null
                ) : null
              )}
            </div>
          </div>
        </div>
      );
};

export default ListItem;
