import React from 'react'
import '../styles/Cabecera.css'
function Cabecera(props) {
    const titulo = 'Agenda/Topic'
    const numero = '1'
    const id = 'SAAS-0000'
    const theme = 'cards' + props.theme
  return (
    <div className={theme}>
        <div className='numerito'>{numero} 
        </div>
        <div className='agenda'>{titulo} 
        </div>
        <div className='id'>{id} 
        </div>
        <div className='vector'> 
        </div>
    </div>
    )
}

export {Cabecera}