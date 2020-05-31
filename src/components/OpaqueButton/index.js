import React from 'react';
import './styles.css';

export const OpaqueButton = (props) => {
  const { text, textColor, onClick, bgColor } = props;

  return (
    <div className="opaque-btn-container">
      <input
        type="button"
        value={text}
        className="btn-style-opaque"
        onClick={onClick}
      />
    </div>
  );
}
