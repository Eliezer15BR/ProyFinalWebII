import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from "./Paginas/PaginasN/Inicio";
import Historia from "./Paginas/PaginasN/Historia";
import Microsoft from "./Paginas/Microsoft";
import Google from "./Paginas/Google";
import Ibm from "./Paginas/Ibm";
import Oracle from "./Paginas/Oracle";
import Adobe from "./Paginas/Adobe";
import Globant from "./Paginas/Globant";
import Totvs from "./Paginas/Totvs";
import Navegador from "./Componentes/NavBar";
import Pie from "./Componentes/Footer";
import './Principal.css'

function Principal(){
    return (
        <Router>
            <div className="padre">
            <header>
                <Navegador ></Navegador>
            </header>
            <div className="contenedor">
                <div className="cuerpo">
                <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/about" element={<Historia />} />
                <Route path="/microsoft" element={<Microsoft />} />
                <Route path="/google" element={<Google />} />
                <Route path="/ibm" element={<Ibm />} />
                <Route path="/oracle" element={<Oracle />} />
                <Route path="/adobe" element={<Adobe />} />
                <Route path="/globant" element={<Globant />} />
                <Route path="/totvs" element={<Totvs />} />
                </Routes>
                </div>
                
            <Pie/>
            </div>
        </div>
        </Router>
        
    );
}
export default Principal;