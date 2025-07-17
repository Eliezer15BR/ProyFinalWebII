import React from "react";
import Empresa from "../Componentes/Empresas";
const img1="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png?20160213081640"
const img2="https://www.iebschool.com/blog/wp-content/uploads/2022/04/16431218995176.jpg"
const img3="https://www.cyberclick.es/hs-fs/hubfs/blog/aplicaciones-de-google.png?width=700&name=aplicaciones-de-google.png"
const img4="https://i.blogs.es/b23be2/google/450_1000.webp"
const h1="Google fue fundada en 1998 por Larry Page y Sergey Brin, dos estudiantes de la Universidad de Stanford. Su proyecto inicial consistió en un motor de búsqueda que utilizaba un algoritmo innovador llamado PageRank, que clasificaba las páginas web según la relevancia de sus enlaces. El éxito de este motor de búsqueda fue inmediato, ya que ofrecía resultados más precisos y rápidos que sus competidores. En 2004, Google se hizo público y comenzó a diversificar sus servicios, incorporando herramientas como Gmail, Google Maps y el sistema operativo Android."
const h2="A lo largo de los años, Google continuó expandiéndose mediante adquisiciones estratégicas, como la compra de YouTube en 2006 y de Motorola Mobility en 2012. Esta expansión consolidó a Google no solo como un líder en la búsqueda en línea, sino también como un actor clave en la tecnología móvil, la publicidad digital y el video en streaming. En 2015, Google se reorganizó bajo una nueva empresa matriz llamada Alphabet Inc., lo que le permitió centrarse en una variedad más amplia de proyectos, como la inteligencia artificial, la computación cuántica y la investigación en vehículos autónomos."
const a1="Hoy en día, Google sigue siendo el motor de búsqueda más utilizado del mundo, con una participación de mercado que supera el 90%. Su dominio en la publicidad digital a través de plataformas como Google Ads y YouTube le permite generar miles de millones de dólares anualmente. Además, la empresa continúa innovando en productos de hardware, como los smartphones Pixel y dispositivos como Google Nest, además de impulsar el desarrollo de la inteligencia artificial con herramientas como Google Assistant y Bard."
const a2="A pesar de su éxito, Google enfrenta desafíos significativos relacionados con la privacidad de los datos y las regulaciones gubernamentales en diversas partes del mundo. La compañía ha sido objeto de investigaciones antimonopolio, principalmente en Europa y los Estados Unidos, debido a su poder en el mercado y sus prácticas de competencia. Sin embargo, sigue siendo una de las empresas más influyentes del planeta, con planes para liderar áreas emergentes como la computación cuántica y la sostenibilidad."
function Google(props){
    return(
        <div>
        <Empresa titulo="Google" img1={img1} img3={img3} img4={img4} h1={h1}  h2={h2}img2={img2} a1={a1} a2={a2} />
        </div>
    );
}
export default Google;