import { NavLink } from "react-router-dom";

export default function Navigation() {
    const setActiveClass = ({ isActive }) => (isActive ? "active text-white ms-3" : "text-white ms3");
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">

            <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <h2>Pizzeria Mamma Mia!</h2>
                    <NavLink className={ setActiveClass } to="/">
                        Home
                    </NavLink>
                    {" | "}
                    <NavLink className={ setActiveClass} to="/Carrito">
                    Carrito
                    </NavLink>

                </ul>

            </div>
        </nav>

    )
}