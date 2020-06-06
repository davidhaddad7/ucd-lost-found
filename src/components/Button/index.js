import React from 'react';
import './styles.css';

const defaultStyle = {};

export const Button = (props) => {
  const { text, onClick } = props;
  const size = props.size || "medium"; // medium size
  const style = props.style || defaultStyle;

  const classes = `btn btn-size-${size}`;

  return (
    <input
      type="button"
      value={text}
      className={classes}
      style={style}
      onClick={onClick}
    />
  );
}
