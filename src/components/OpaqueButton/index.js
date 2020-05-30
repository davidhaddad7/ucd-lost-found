import React from 'react';
import './styles.css';

export const OpaqueButton = (props) => {
  const { text, textColor, onClick, bgColor } = props;

  return (
    <input
      type="button"
      value={text}
      className="btn-style-opaque"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    />
  );
}

