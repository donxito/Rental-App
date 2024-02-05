import logo from "../img/logo.png"

function Navbar() {
    return (
        <nav className="navbar">
        <h1>Apartamentos Beira-Mar</h1>
        <img className="logo" src={logo}></img>

        </nav>
    )
}

export default Navbar;