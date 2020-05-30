import React from 'react';
import './styles.css';

export const InputFile = (props) => {
  return (
    <div className="input-file-container">
      <div className="input-file-label" >{props.label}</div>
      <input
        className="input-file-btn"
        type="button"
        value="Choose File"
        onClick={() => console.log("Choose File Button")}
      />
    </div>
  )
}
