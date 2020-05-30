import React from 'react';
import './styles.css';
import { COLORS } from '..';

export const Card = (props) => {

  const bgColor = props.bgColor || COLORS.white;

  return (
    <div
      className="card"
      style={{ backgroundColor: bgColor }}
    >
      {props.children}
    </div>
  )
}
