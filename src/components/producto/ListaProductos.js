import Producto from "./Producto";

function ListaProductos ({productos}) {
    return (
        <div>
            {productos.map(prod => <Producto key={prod.id} {...prod}/> )}
        </div>
    )
}

export default ListaProductos;