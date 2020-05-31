import React from 'react';
import './styles.css';

export const InputTextArea = (props) => {

  return (
    <div className="input-textarea-container">
      <div className="input-textarea-label" >{props.label}</div>
      <textarea
        className="input-textarea" />
    </div>
  )
}
