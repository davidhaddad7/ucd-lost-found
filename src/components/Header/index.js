import React from 'react';
import './styles.css'
import Logo from '../../assets/Logo.png'

export const Header  = (props) => {
  return (
    <header>
      <img id="logo" alt="logo" src={Logo}></img>
    </header>
  )
}
