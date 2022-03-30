import React from 'react';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import img7 from '../img/7.png';
import img8 from '../img/8.png';
import img9 from '../img/9.png';

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