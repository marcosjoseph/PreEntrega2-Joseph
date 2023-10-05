import Carrito from "./img/carrito-de-compras.png";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div>
            <img src={Carrito} className="carrito"/>
            2
        </div>
    )
};

export default CartWidget;