import React from "react";
import OffC from "./Offcanva";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const pC="En esta página web utilizamos cookies para mejorar tu experiencia de navegación. Las cookies son pequeños archivos de texto que se almacenan en tu navegador y nos permiten recordar tus preferencias y personalizar el contenido.";
const pC1="Utilizamos cookies tanto propias como de terceros con diferentes finalidades, como por ejemplo para analizar el tráfico de nuestra web, ofrecerte publicidad personalizada o permitirte compartir contenido en redes sociales.";
const pC2="Puedes obtener más información sobre las cookies que utilizamos y cómo configurarlas en nuestra sección de Configuración de Cookies.";
const cC1="Puedes configurar o deshabilitar las cookies en cualquier momento a través de la configuración de tu navegador. Sin embargo, ten en cuenta que al deshabilitar algunas cookies puede afectar a la funcionalidad de nuestra web.";
const cC2="Para obtener más información sobre cómo configurar las cookies en los navegadores más comunes, puedes consultar la ayuda de tu navegador.";
const pP1="Respetamos tu privacidad y nos comprometemos a proteger tus datos personales. En esta política de privacidad te explicamos cómo recopilamos, utilizamos y protegemos la información que nos proporcionas al utilizar nuestra web.";
const pP2="";
const pP3="";
const tT1="Al utilizar nuestra web, aceptas los siguientes términos y condiciones de uso. Estos términos establecen las reglas y normas que rigen el uso de nuestra web y los servicios que ofrecemos.";
const tT2="";
const tT3="";
function Pie(){
    return (
        <div className="pie">
            <nav className="varios">
                <Link><OffC titulo="Política de Cookies" texto={pC} texto1={pC1} texto2={pC2} /></Link>
                <Link> <OffC titulo="Configuracion de cookies" texto={cC1} texto1={cC2} texto2=""/></Link>
                <Link><OffC titulo="Política de privacidad" texto={pP1} texto1={pP2} texto2={pP3}/> </Link>
                <Link><OffC titulo="Términos y condiciones de uso" texto={tT1} texto1={tT2} texto2={tT3}/> </Link>

            </nav>
            <div className="redes">
                <h3>SIGUENOS EN</h3>
                <div className="imgredes">
                <Link to="https://www.facebook.com">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png" width="100" className='logo'roundedCircle />
                </Link>
                <Link to="https://x.com/?lang=es">
                <Image src="https://resizer.glanacion.com/resizer/v2/elon-musk-cambio-el-logo-de-WHTIWEV47VHEHDV4QYC6PRXVBE.jpg?auth=29e4042f48af310deb7e46ab9afc31d8ef98589c3c1c1c29d6be7ce335477df1&width=768&quality=70&smart=false" width="120" height="110" className='logo'roundedCircle />
                </Link>
                <Link to="https://www.instagram.com">
                <Image src="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338429_640.png" width="110" height="110" className='logo'roundedCircle />
                </Link>
                <Link to="https://www.tiktok.com/es/">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png" width="100" className='logo'roundedCircle />
                </Link>
                <Link to="https://www.youtube.com">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" width="100" className='logo'rounded />
                </Link>
                    
                    
                </div>
            </div>
            <div className="creditos">
            © Diciembre 2024 <br />
            Pagina hecha por Eliseo Condori <br />
            Derechos reservados
            </div>
        </div>
    );
}
export default Pie;