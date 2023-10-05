
function DetalleProducto ({id, categoria, nombre, descripcion, precio, stock}) {
    return (
        <div>
            <h2>{categoria}</h2>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <p>{stock}</p>
        </div>
    )
}

export default DetalleProducto;