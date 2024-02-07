import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

        <h1>Apartments Sei La</h1>
        <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
        </NavLink>      
        </nav>
    )
}

export default Navbar;

