import CarruselEmpresa from "./CarruselEmpresa";
import './Empresas.css'
function Empresa(props){
    return(
        <div className="Empresa">
            <div className="titulo">
                <h1>{props.titulo}</h1>
            </div>
            <div className="imagen1">
            <img src={props.img1} alt="" />
            </div>
            <div className="historia">
            <p>{props.h1}</p>
            <p>{props.h2}</p>
            </div>
            <div className="actualidad">
            <p>{props.a1}</p>
            <p>{props.a2}</p>
            </div>
            <div className="imagen2">
                <CarruselEmpresa img2={props.img2} img3={props.img3} img4={props.img4}/>
            </div>
        </div>
    );
}
export default Empresa;