import foto1 from "./img/MesaLapachoyHierro.png";
import foto2 from "./img/EscritorioPinoTeayHierro.png";
import foto3 from "./img/EspejoQuebracho.png";


const listaProductos = [
    {
    "id": "1",
    "categoria": "Mesas",
    "foto": foto1,
    "nombre": "Mesa Juana",
    "descripcion": "Hecha en Lapacho y Hierro.",
    "precio": 101,
    "stock":1
    },
    {
    "id": "2",
    "categoria": "Escritorios",
    "foto": foto2,
    "nombre": "Escritorio Tea",
    "descripcion": "Pino Tea reciclada & hierro",
    "precio": 102,
    "stock":2
    },
    {
    "id": "3",
    "categoria": "Espejos",
    "foto": foto3,
    "nombre": "Espejo Quebacho",
    "descripcion": "Quebracho Colorado",
    "precio": 103,
    "stock":3
    }
]

export default listaProductos;

export const getProductos = () => {
    return new Promise ((resolve)=> {
        setTimeout ( ()=> {
            resolve(listaProductos)
        }, 1000);
    })
    }

export const getProductosById = (idProducto) => {
    return new Promise((resolve) => {
        setTimeout ( ()=> {
            resolve(listaProductos.find(producto => producto.id === idProducto ))}, 1000);

        })
}


export const getProductosByCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout ( ()=> {
            resolve(listaProductos.find(producto => producto.categoria === categoria ))}, 1000);

        })
}