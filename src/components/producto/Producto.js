import {Link} from "react-router-dom";
import "./Producto.css";


function Producto ({id, foto, nombre}) {
    return (
        <div id="producto">
            <h3>{nombre}</h3>
            <img src={foto} className="fotoProducto"/>
            <button><Link to={`/producto/${id}`}>Ver más Información</Link></button>
        </div>
    )
}

export default Producto;