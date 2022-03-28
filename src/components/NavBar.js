import React from 'react';

export default function NavBar() {
  return (
    <div className='nav_contenedor'>
        <div className='nav_logo'>
            <h1 className='nombre'>ALEJANDRO MIRÓN</h1>
            <h4 className='subnombre'>FOTOGRAFÍA</h4>
        </div>
        <div className='nav_menu'>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Biografía</a></li>
                <li><a href="">Galería</a></li>
                <li><a href="">Redes Sociales</a></li>
                <li><a href="">Contacta</a></li>
            </ul>
        </div>
    </div>
  )
}
