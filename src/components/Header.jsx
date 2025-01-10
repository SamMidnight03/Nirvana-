import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <header>
      <Link id='Guitarra' to={'/'}></Link>
      <div id='Links'>
        <Link to={'/'} className='ruta' >Inicio</Link>
        <Link to={'/contactos'} className='ruta'>Contacto</Link>
      </div>
    </header>
  )
}