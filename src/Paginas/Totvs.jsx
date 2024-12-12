import React from "react";
import Empresa from "../Componentes/Empresas";
const img1="./totvs.png"
const img2="https://thelogisticsworld.com/wp-content/uploads/2022/02/fachada-de-oficinas-de-totvs.jpg"
const img3="https://classic.exame.com/wp-content/uploads/2020/01/totvs_seneca_173.jpg?quality=70&strip=info&w=1024"
const img4="https://www.itsitio.com/wp-content/uploads/2018/03/Jorge-Fernando-Bay%C3%AD-TOTVS-390x220.jpg"
const h1="Totvs fue fundada en 1983 en São Paulo, Brasil, por Laércio Cosentino con el objetivo de ofrecer soluciones tecnológicas para la gestión empresarial. Inicialmente, la compañía se especializó en desarrollar software de gestión (ERP) para pequeñas y medianas empresas, un mercado que estaba poco cubierto en Brasil en ese momento. A medida que la demanda de software de gestión aumentaba, Totvs se expandió rápidamente, posicionándose como un líder en soluciones de ERP en América Latina. En 2006, la empresa realizó su oferta pública inicial (IPO) en la Bolsa de Valores de São Paulo, lo que le permitió financiar su expansión y continuar su crecimiento en el mercado."
const h2="A lo largo de los años, Totvs amplió su portafolio con productos orientados a diversos sectores industriales, como manufactura, salud, retail y servicios financieros. En 2008, adquirió la compañía Microsiga, un importante jugador en el mercado de software ERP en Brasil, lo que le permitió consolidar su liderazgo. Totvs también comenzó a expandirse internacionalmente, estableciendo operaciones en otros países de América Latina y en algunos mercados globales. A lo largo de su evolución, la empresa no solo se enfocó en el software ERP, sino que también comenzó a ofrecer soluciones en la nube, big data y análisis de datos."
const a1="Hoy en día, Totvs es una de las principales proveedoras de software de gestión empresarial en América Latina, con una oferta que abarca desde ERP hasta soluciones de recursos humanos, finanzas, logística y experiencia de cliente. La empresa sigue dominando el mercado brasileño, pero también ha ampliado su presencia en otros países de América Latina, incluyendo México, Argentina y Chile. Totvs ha continuado su proceso de digitalización, adoptando tecnologías emergentes como inteligencia artificial, automatización y big data para mejorar sus soluciones y ayudar a las empresas en su transformación digital."
const a2="La compañía también ha intensificado su enfoque en la nube, ofreciendo soluciones SaaS (Software como Servicio) que permiten a las empresas gestionar sus operaciones de manera más flexible y escalable. Con su plataforma de gestión en la nube y sus innovaciones tecnológicas, Totvs está posicionada como un actor clave en la digitalización de pymes y grandes empresas en la región. Además, la empresa sigue invirtiendo en investigación y desarrollo, y mantiene un enfoque estratégico en la expansión internacional y en la incorporación de soluciones tecnológicas avanzadas para satisfacer las necesidades de sus clientes en un mercado cada vez más competitivo."
function Totvs(props){
    return(
        <div>
        <Empresa titulo="Totvs" img1={img1} img3={img3} img4={img4} h1={h1}  h2={h2}img2={img2} a1={a1} a2={a2}/>
        </div>
    );
}
export default Totvs;