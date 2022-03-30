import React from 'react';
import bio from '../public/img/bio.png';




function Biografia() {
  return (
    <div className='main_contenedor'>
      <h1>BIOGRAFÍA</h1>
        <div className='biografia'>
            <div className='bio_titulo'>
            <h6>ALEJANDRO MIRÓN</h6>
            </div>
            <div className='bio_nac'>
              <h5>Nacimiento: 11/11/11</h5>
              <h5>Andalucía, Jaén</h5>
              <h6>Fotógrafo desde 2014</h6>
            </div>  
        </div>
        <div className='bio_texto'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi ea saepe quaerat eos veniam cumque odio sapiente expedita suscipit fuga dolor nihil, pariatur temporibus distinctio corrupti quo magni! Quasi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi ea saepe quaerat eos veniam cumque odio sapiente expedita suscipit fuga dolor nihil, pariatur temporibus distinctio corrupti quo magni! Quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi ea saepe quaerat eos veniam cumque odio sapiente expedita suscipit fuga dolor nihil, pariatur temporibus distinctio corrupti quo magni! Quasi.
            </p>
        </div>
        <div className='biografia_imagen'>
            <img src={bio} />
        </div>
    </div>
  )
}

export default Biografia