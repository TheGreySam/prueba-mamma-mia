import { useContext } from 'react';
import PizzaContext from '../context/context';
import Item from "../components/Item"

export default function Home() {
 
  const { state } = useContext(PizzaContext)
  ;

  return (
<div>
    <div className="card bg-primary p-3">
        <h1 className="card-title">¡Pizzería Mamma Mia!</h1>
        <h5 className="card-text">¡Tenemos las mejores pizzas que podrás encontrar!</h5>
      </div>
      <div className="row">
        { state.data.map((obj) => (
          <Item key={obj.id} obj={obj} cart={state.cart}></Item>
        ))}
      </div>
   </div>
  );
}
