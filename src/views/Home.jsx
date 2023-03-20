import { useContext } from 'react';
import PizzaContext from '../context/context';
import Item from "../components/Item"

export default function Home() {
 
  const { state } = useContext(PizzaContext);
//  const pizzaHomeimg = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
 const pizzaHomeimg = state.data[0].img
console.log(pizzaHomeimg)

  return (
<div>
<div className="card text-bg-dark">
  <img src={pizzaHomeimg} className="card-img pizzahome" alt="..." />
  <div className="card-img-overlay py-5 my-5  pizzatext">
  <h1 className="card-title">¡Pizzería Mamma Mia!</h1>
        <h5 className="card-text">¡Tenemos las mejores pizzas que podrás encontrar!</h5>
  </div>
</div>
      <div className="row p-3 pb-5">
        { state.data.map((obj) => (
          <Item key={obj.id} obj={obj} cart={state.cart}></Item>
        ))}
      </div>
   </div>
  );
}
