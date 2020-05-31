import React from 'react';
import './styles.css';

export const Button = (props) => {
  const { text, textColor, onClick, bgColor } = props;
  const size = props.size || "medium"; // medium size
  const classes = `btn btn-size-${size}`;

  return (
    <input
      type="button"
      value={text}
      className={classes}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    />
  );
}
