import React from 'react';
import './styles.css';

export const Header = (props) => {
  return <h2
    className="header"
  >
  {props.text}
  </h2>
}
