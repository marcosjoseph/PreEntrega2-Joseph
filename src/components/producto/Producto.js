import {Link} from "react-router-dom";


function Producto ({id, categoria, nombre, descripcion, precio, stock}) {
    return (
        <div>
            <h3>{nombre}</h3>
            <button><Link to={`/producto/${id}`}>Ver más Información</Link></button>
        </div>
    )
}

export default Producto;