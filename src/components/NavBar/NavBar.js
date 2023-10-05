import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import Logo from "../img/LogoGroot.png";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <h1>Bienvenidos a Groot! Trabajamos la Madera</h1>
            <nav>
                <a href="https://www.instagram.com/groot.woodwork/" target="_blank"> <img src={Logo} className="logo"/> </a>
            
                <div id="menu-botones">
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="nosotros">Nosotros</Link></button>
                    <button><Link to="nuestrosTrabajos">Nuestros Trabajos</Link></button>
                    <button><Link to="enStock">En Stock</Link></button>
                    <button><Link to="presupuesta">Presupuestá</Link></button>
                    <button><Link to="calculadora">Calculadora</Link></button>
                </div>

                <CartWidget />
            </nav>
        </header>

    )

}

export default NavBar;