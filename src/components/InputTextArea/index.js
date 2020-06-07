import React from 'react';
import './styles.css';

export const InputTextArea = (props) => {

  const { onChange, label } = props;

  return (
    <div className="input-textarea-container">
      <div className="input-textarea-label" >{label}</div>
      <textarea
        onChange={onChange}
        className="input-textarea" />
    </div>
  )
}
