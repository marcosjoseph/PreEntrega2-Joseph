import "./DetalleProducto.css";

function DetalleProducto ({id, categoria,foto, nombre, descripcion, precio, stock}) {

    return (
        <div id="detalleProducto">
            <h2>{categoria}</h2>
            <img src={foto} className="fotoProducto"/>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <p>Stock Disponible: {stock}</p>
        </div>
    )
}

export default DetalleProducto;