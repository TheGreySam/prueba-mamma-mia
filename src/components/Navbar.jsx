import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
    const setActiveClass = ({ isActive }) => (isActive ? "active text-white pizzatext" : "text-white ms3");
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <ul className="nav navbar-nav mx-2">
                    <li>
                    <NavLink className={ setActiveClass } to="/">
                    <h2>Pizzeria Mamma Mia!</h2>
                    </NavLink>
                    </li>
                    
                </ul>
                <ul className="navbar-nav mx-auto navbar-right mx-2">
                <li>
                    <NavLink className={ setActiveClass} to="/Carrito">
                    <h3>Carrito</h3>
                    </NavLink>
                    </li>
                </ul>

            
        </nav>

    )
}
export default Navbar;