import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import DetalleProducto from "./DetalleProducto";
import getProductosById from "../../arrayProductos";

function ContenedorDetalleProductos () {
    
    const [producto, setProducto] = useState(null);
    const {idProducto} = useParams ();

    useEffect ( ()=> {
        getProductosById(idProducto)
        .then (response => {
            setProducto (response);
        })
        .catch(error=> {
            console.error(error);
        })
    },[idProducto])

    return (
        <div> <DetalleProducto {...producto}/></div>
    )}

    export default ContenedorDetalleProductos;
    