import { NavLink } from "react-router-dom";

export default function Navigation() {
    const setActiveClass = ({ isActive }) => (isActive ? "active text-white ms-3" : "text-white ms3");
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <ul className="nav navbar-nav  px-5">
                    <li>
                    <NavLink className={ setActiveClass } to="/">
                    <h2>Pizzeria Mamma Mia!</h2>
                    </NavLink>
                    </li>
                    
                </ul>
                <ul className="navbar-nav mx-auto navbar-right">
                <li>
                    <NavLink className={ setActiveClass} to="/Carrito">
                    <h3>Carrito</h3>
                    </NavLink>
                    </li>
                </ul>

            
        </nav>

    )
}