import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PizzaContext from "./../context";

export default function Home() {
  const [product, setProduct] = useState("");
  const { data } = useContext(PizzaContext);
  const datos = data;
  const navigate = useNavigate();
  const gotoProduct = () => {
    navigate(`/Product/${product}`);
  };
  const pizzadata = datos.map((obj) => (
    //<li key={obj.id}>{obj.id}</li>
    <div key={obj.id} className="col-sm-6">
      <div className="card">
      <img src={obj.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{obj.name}</h5>
          <p className="card-text">Ingredientes:
            <ul>
              <li>{obj.ingredients[0]}</li>
              <li>{obj.ingredients[1]}</li>
              <li>{obj.ingredients[2]}</li>
              <li>{obj.ingredients[3]}</li>
              <li>{obj.ingredients[4]}</li>
            </ul>
          </p>
          <h3 className="card-title">$ {obj.price}</h3>
          <button className="btn btn-primary" onClick={gotoProduct}>Ver mas</button>
        </div>
      </div>
    </div>

  ));

  return (
    <div id="Home">
      <h1>¡Pizzería Mamma Mia!</h1>
      <h5>¡Tenemos las mejores pizzas que podrás encontrar!</h5>



      <div class="row">
        {pizzadata}

      </div>

    </div>
  );
}
