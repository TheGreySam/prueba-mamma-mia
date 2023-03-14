import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PizzaContext from "./../context";

export default function Home() {
  //const [product, setProduct] = useState("");
  const { data } = useContext(PizzaContext);
  const datos = data;
  const navigate = useNavigate();
  const gotoProduct = (valor) => {
    navigate(`/Product/${valor}`);
  };
 /*  const verProduct = (valor) => {
    console.log("valor: ", valor)
    //setProduct(valor) 
    gotoProduct(valor)
  } */
  const pizzadata = datos.map((obj) => (
    <div key={obj.id} className="col">
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
              <li>{obj.ingredients[4]}</li>
            </ul>
          </div>
          <h3 className="card-title">$ {obj.price}</h3>
          <button
            className="btn btn-primary m-2"
            value={obj.id}

            onClick={ ({target}) => gotoProduct(target.value) }>
            Ver mas
          </button>
          <button className="btn btn-danger m-2" >Añadir</button>
        </div>
      </div>
    </div>

  ));

  return (
    <div id="Home">
      <div className="card bg-primary p-3">
        <h1 className="card-title">¡Pizzería Mamma Mia!</h1>
        <h5 className="card-text">¡Tenemos las mejores pizzas que podrás encontrar!</h5>
      </div>
      <div className="row">
        {pizzadata}
      </div>

    </div>
  );
}
