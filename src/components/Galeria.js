import React from 'react';
import img1 from '../assets/img/1.png';
import img2 from '../assets/img/2.png';
import img3 from '../assets/img/3.png';
import img4 from '../assets/img/4.png';
import img5 from '../assets/img/5.png';
import img6 from '../assets/img/6.png';
import img7 from '../assets/img/7.png';
import img8 from '../assets/img/8.png';
import img9 from '../assets/img/9.png';

function Galeria() {
  return (
    <div className='galeria_contenedo'>
        <div className='imagen'><img src={img1} alt="My Awesome Image1" /></div>
        <div className='imagen'><img src={img2} alt="My Awesome Image232" /></div>
        <div className='imagen'><img src={img3} alt="My Awesome Image23" /></div>
        <div className='imagen'><img src={img4} alt="My Awesome Image54" /></div>
        <div className='imagen'><img src={img5} alt="My Awesome Image54" /></div>
        <div className='imagen'><img src={img6} alt="My Awesome Image84" /></div>
        <div className='imagen'><img src={img7} alt="My Awesome Image84" /></div>
        <div className='imagen'><img src={img8} alt="My Awesome Imag448e" /></div>
        <div className='imagen'><img src={img9} alt="My Awesome Imag41e" /></div>
    </div>
  )
}

export default Galeria