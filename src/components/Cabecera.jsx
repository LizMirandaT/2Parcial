import React from 'react'
import '../styles/Cabecera.css'
import { PiePagina } from './PiePagina'
function Cabecera() {
    const titulo = 'Agenda/Topic'
    const numero = '1'
    const id = 'SAAS-0000'
  return (
    <div className='cabecera'>
        <div className='numerito'>{numero} 
        </div>
        <div className='agenda'>{titulo} 
        </div>
        <div className='id'>{id} 
        </div>
        <div className='vector'> 
        </div>
        <PiePagina></PiePagina>
    </div>
    )
}

export {Cabecera}