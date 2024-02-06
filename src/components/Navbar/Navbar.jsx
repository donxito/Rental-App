import logo from "../../img/logo.png";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

        <h1>Apartamentos Sei La</h1>
        <img className="logo" src={logo}></img>

        </nav>
    )
}

export default Navbar;

