import React from "react";
import Empresa from "../Componentes/Empresas";
const img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVlAVAbrZBMqM0wnZnU0VNvQmyOme02csyA&s"
const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4gmB8ndfDqDhItGzDCTVVnF8tHGT5-Nt9A&s"
const img3="https://statics.globant.com/production/public/styles/news_details/public/2024-06/global%20gut-2.jpg?itok=IHrGRy6Z"
const img4="https://statics.globant.com/more/RELEASE-celebrate-20years-es-v1.0.0/statics/GL_20years-OG.png"
const h1="Globant fue fundada en 2003 en Buenos Aires, Argentina, por Martín Migoya, Guibert Englebienne, Néstor Nocetti y Juan Aníbal Figueroa, con el objetivo de crear una empresa de desarrollo de software que pudiera competir a nivel global. Inicialmente, la compañía se centró en brindar soluciones tecnológicas a empresas en América Latina, pero pronto expandió su alcance hacia mercados internacionales. En 2007, Globant ganó reconocimiento global al convertirse en un proveedor de servicios tecnológicos para grandes corporaciones como Google, LinkedIn y EA Games. Su enfoque en la innovación y el uso de tecnologías emergentes le permitió diferenciarse en un mercado competitivo."
const h2="En 2014, Globant se hizo pública en la Bolsa de Nueva York, lo que marcó un hito en su expansión. A lo largo de los años, la empresa ha crecido significativamente, consolidándose como una de las principales compañías de servicios de TI y consultoría digital en América Latina. Globant ha sido pionera en la adopción de metodologías ágiles y en la incorporación de tecnologías como inteligencia artificial, blockchain y la nube para ayudar a sus clientes en la transformación digital."
const a1="Actualmente, Globant es un líder global en el desarrollo de soluciones digitales, trabajando con grandes empresas de diversas industrias, desde banca hasta entretenimiento. Su portafolio incluye servicios de transformación digital, desarrollo de software, diseño de experiencia de usuario y automatización, con un enfoque especial en la integración de inteligencia artificial y nuevas tecnologías. La empresa sigue expandiendo su presencia global, con oficinas en más de 18 países, y es conocida por su modelo de agile development que combina tecnología con creatividad."
const a2="Además de su continuo crecimiento en consultoría digital, Globant ha avanzado hacia la innovación en áreas como la inteligencia artificial generativa y el metaverso. La compañía continúa atrayendo talento global, con una cultura organizacional que destaca por su énfasis en la innovación, el trabajo remoto y la diversidad. Aunque enfrenta competencia de grandes jugadores en el sector de TI, Globant ha logrado posicionarse como un referente en soluciones de tecnología avanzadas, especialmente en mercados como Estados Unidos y Europa."
function Globant(props){
    return(
        <div>
        <Empresa titulo="Globant" img1={img1} h1={h1} img3={img3} img4={img4}  h2={h2}img2={img2} a1={a1} a2={a2}/>
        </div>
    );
}
export default Globant;