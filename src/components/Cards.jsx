import React from 'react'
import '../styles/Cards.css'
import { Cabecera } from './Cabecera'
import { PiePagina } from './PiePagina'
function Cards() {
  return (
  <div className='card'>
  <Cabecera></Cabecera>
  <PiePagina></PiePagina>
  </div>
  
  )
}

export {Cards}