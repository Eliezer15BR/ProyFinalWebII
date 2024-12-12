import React from "react";
import Empresa from "../Componentes/Empresas";
const img1="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png?20220104162604"
const img2="data:image/jpeg;base64,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"
const img3="https://www.newageworks.com/products/ibm/ibm1.JPG"
const img4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfp_nzt2oDnjzSwF3QGzJmreGFiYIplZKgRw&s"
const h1="IBM, o International Business Machines, fue fundada en 1911 como Computing-Tabulating-Recording Company (CTR) a partir de la fusión de varias pequeñas empresas. En 1924, pasó a llamarse IBM, y rápidamente se consolidó como líder en la fabricación de maquinaria de oficina, como las primeras máquinas de escribir y los tabuladores electromecánicos. En la década de 1950, IBM se aventuró en la informática con el lanzamiento de sus primeros computadores electrónicos, lo que marcó el comienzo de su transición hacia la industria tecnológica. En 1964, presentó la serie de computadoras IBM 360, una de las primeras familias de sistemas informáticos modulares, que revolucionó la informática empresarial."
const h2="A lo largo del siglo XX, IBM se diversificó hacia áreas como la investigación en inteligencia artificial (IA), la consultoría tecnológica y el software. Sin embargo, en las décadas de 1980 y 1990 enfrentó dificultades debido a la competencia de empresas más ágiles en el sector de los microprocesadores y las computadoras personales. Para adaptarse, IBM comenzó a transformarse en una empresa de servicios y soluciones tecnológicas, centrada en la venta de software, consultoría y servicios en la nube. La venta de su división de computadoras personales a Lenovo en 2005 fue un paso clave en este proceso."
const a1="En la actualidad, IBM sigue siendo un líder en la tecnología empresarial, destacándose en áreas como la inteligencia artificial, la computación cuántica, la nube híbrida y la blockchain. Su plataforma de nube híbrida, IBM Cloud, es una de las principales alternativas a Amazon Web Services (AWS) y Microsoft Azure. Además, IBM ha hecho avances significativos en la investigación y desarrollo de computadoras cuánticas, buscando posicionarse como un referente en esta emergente tecnología. Su división de inteligencia artificial, encabezada por Watson, continúa ofreciendo soluciones a empresas en sectores como la salud, la educación y las finanzas."
const a2="A pesar de su continuo liderazgo en el sector empresarial, IBM enfrenta la competencia feroz de gigantes tecnológicos como Amazon, Microsoft y Google, que dominan el mercado de la nube y los servicios de IA. Sin embargo, IBM sigue siendo un actor clave en la transformación digital de empresas globales, con un enfoque renovado en la sostenibilidad y la innovación. Su cambio hacia servicios más especializados, como la asesoría en la implementación de soluciones de IA y la consultoría tecnológica, refleja su intento de adaptarse a las demandas de un mercado empresarial cada vez más centrado en la digitalización y la automatización."
function Ibm(props){
    return(
        <div>
        <Empresa titulo="IBM"img1={img1} h1={h1} img3={img3} img4={img4}  h2={h2}img2={img2} a1={a1} a2={a2}/>
        </div>
    );
}
export default Ibm;