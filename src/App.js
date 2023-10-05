import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ContenedorDetalleProductos from "./components/producto/ContenedorDetalleProducto";
import Nosotros from "./pages/Nosotros";
import NuestrosTrabajos from "./pages/NuestrosTrabajos";
import EnStock from "./pages/EnStock";
import Presupuesta from "./pages/Presupuesta";
import Calculadora from "./pages/Calculadora";
import Error from "./pages/Error";




function App () {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/producto/:idProducto" element={<ContenedorDetalleProductos/>}/>
                        <Route path="nosotros" element={<Nosotros/>}/>
                        <Route path="nuestrosTrabajos" element={<NuestrosTrabajos/>}/>
                        <Route path="enStock" element={<EnStock/>}/>
                        <Route path="presupuesta" element={<Presupuesta/>}/>
                        <Route path="calculadora" element={<Calculadora/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>            
            </BrowserRouter>
        </div>
    )
};

export default App;