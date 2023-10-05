import Producto from "./Producto";
import "./ListaProductos.css";

function ListaProductos ({productos}) {

    return (
        <div id="listaProductos">
            {productos.map(prod => <Producto key={prod.id} {...prod}/> )}
        </div>
    )
}

export default ListaProductos;