import React from 'react';
import './styles.css';
import { Colors } from '../../lib';

export const Card = (props) => {

  const bgColor = props.bgColor || Colors.white;

  return (
    <div
      className="card"
      style={{ backgroundColor: bgColor }}
    >
      {props.children}
    </div>
  )
}
