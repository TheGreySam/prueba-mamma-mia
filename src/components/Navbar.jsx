import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <h2>Pizzeria Mamma Mia!</h2>
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>
                    <Link to="/Carrito" className="text-white ms-3 text-decoration-none">
                    Carrito
                    </Link>

                </ul>

            </div>
        </nav>

    )
}