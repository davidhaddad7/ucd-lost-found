import React from 'react';
import './styles.css';

export const InputField = (props) => {
  const height = props.height || 'auto';

  return (
    <div className="input-field-container">
      <div className="input-field-label" >{props.label}</div>
      <input className="input-field" type='text' style={{ height}} />
    </div>
  )
}
