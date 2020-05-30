import React from 'react';

export const BoardItemHeader = (props) => {
  const { text, textColor} = props;

  return <h3 className = "board-item-header" style={{color: textColor }}>
    {props.text}</h3>;
}


export const Button = (props) => {
  const { text, textColor, onClick, bgColor } = props;

  return (
    <input
      type="button"
      value={text}
      className="btn-style"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    />
  );
}
