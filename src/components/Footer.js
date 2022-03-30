import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer_contenedor'>
        <div className='social'>
        <h1>CONTACTA</h1>
        </div>
        <div className='contacta'>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=+34671267550"><FontAwesomeIcon icon={faWhatsapp} className="icon_contacto" />CONTACTA POR WHATSAPP</a>
          <a target="_blank" href="https://www.instagram.com/elojodemorfeo" ><FontAwesomeIcon icon={faInstagram} className="icon_contacto" />elojodemorfeo</a>
          <a target="_blank" href="tel:671267550"><FontAwesomeIcon icon={faPhone} className="icon_contacto" />LLAMAR</a>
        </div>
        <p>Todos los derechos reservados Alejandro Mirón.</p>
    </div>
  )
}

export default Footer