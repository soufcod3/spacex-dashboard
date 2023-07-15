import React from 'react'
import spaceXLogo from '../assets/spacex-logo.png'

export const Navbar = () => {
  return <nav className='py-3'>
    <div className="credit position-absolute">
      <img src={spaceXLogo} alt="Logo de Space X" style={{ width: '8rem' }} className='mb-1'/>
      <p>présenté par</p>
      <small>SOUFIANE AÏT OUARRAOU</small>
    </div>
    <div className="navigation">
      <div className="nav-item"></div>
      <div className="nav-item"></div>
      <div className="nav-item"></div>
    </div>
  </nav>
}