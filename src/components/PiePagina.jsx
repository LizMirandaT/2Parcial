import React from 'react'
import '../styles/PiePagina.css'
function PiePagina() {
    const description='Description of what is done here'
    const last = 'Last Updated'
    const fecha = '3/8/20'
  return (
    <div className='piedepagina'>
        <div className='description'>
            {description}
        </div>
        <div className='last'>
            {last}
        </div>
        <div className='date'>
            {fecha}
        </div>
    </div>
  )
}

export {PiePagina}