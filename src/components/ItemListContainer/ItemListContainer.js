import "./ItemListContainer.css";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import ListaProductos from "../producto/ListaProductos";
import {getProductosByCategoria, getProductos} from "../../arrayProductos";


function ItemListContainer ({greeting}) {

    const [producto, setProducto] = useState([]);
    const {idCategoria} = useParams();

    useEffect( ()=> {
        const funcionAsincronica = idCategoria ? getProductosByCategoria : getProductos

        funcionAsincronica(idCategoria)
        .then(response => {
            setProducto(response);})
        
        .catch(error => {
            console.error(error)})
        }, [idCategoria])

    return (

        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <div className="listaProductos">
                <ListaProductos  productos={producto}/>
            </div>
        </div>

    )
};

export default ItemListContainer;