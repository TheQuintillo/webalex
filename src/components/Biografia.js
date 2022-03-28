import React from 'react'
import bio from '../public/img/bio.png'


function Biografia() {
  return (
    <div className='main_contenedor'>
        <div className='biografia'>
            <h1>BIOGRAFÍA</h1>
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