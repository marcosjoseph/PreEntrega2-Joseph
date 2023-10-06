import "./DetalleProducto.css";

function DetalleProducto ({id, categoria, nombre, descripcion, precio, stock}) {
    return (
        <div id="detalleProducto">
            <h2>{categoria}</h2>
            <h3>{nombre}</h3>
            <p>Descripción: {descripcion}</p>
            <p>Precio: ${precio}</p>
            <p>Stock Disponible: {stock}</p>
        </div>
    )
}

export default DetalleProducto;