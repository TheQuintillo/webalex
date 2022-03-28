import React from 'react'
import img1 from '../public/img/galeria/1.png'
import img2 from '../public/img/galeria/2.png'
import img3 from '../public/img/galeria/3.png'
import img4 from '../public/img/galeria/4.png'
import img5 from '../public/img/galeria/5.png'
import img6 from '../public/img/galeria/6.png'
import img7 from '../public/img/galeria/7.png'
import img8 from '../public/img/galeria/8.png'
import img9 from '../public/img/galeria/9.png'

function Galeria() {
  return (
    <div className='galeria_contenedo'>
        <div className='imagen'><img src={img1} /></div>
        <div className='imagen'><img src={img2} /></div>
        <div className='imagen'><img src={img3} /></div>
        <div className='imagen'><img src={img4} /></div>
        <div className='imagen'><img src={img5} /></div>
        <div className='imagen'><img src={img6} /></div>
        <div className='imagen'><img src={img7} /></div>
        <div className='imagen'><img src={img8} /></div>
        <div className='imagen'><img src={img9} /></div>
    </div>
  )
}

export default Galeria