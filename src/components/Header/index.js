import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import Logo from '../../assets/Logo.png'

export const Header  = (props) => {
  return (
    <header>
      <Link to={props.logoRoutePath}>
        <img id="logo" alt="logo" src={Logo}></img>
      </Link>
    </header>
  );
};
