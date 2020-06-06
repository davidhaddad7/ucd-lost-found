import React from 'react';
import './styles.css';
import { Colors } from '../../lib';

const defaultStyle = {
  backgroundColor: Colors.white
};

export const Card = (props) => {

  const bgColor = props.bgColor || Colors.white;
  const style = props.style || defaultStyle;

  return (
    <div
      className="card"
      style={style}
    >
      {props.children}
    </div>
  )
}
