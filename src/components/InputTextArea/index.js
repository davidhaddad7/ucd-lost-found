import React from 'react';
import './styles.css';
import { Label } from '..';

export const InputTextArea = (props) => {

  const { label, onChange } = props;

  return (
    <div className="input-textarea-container">
      <Label text={label} />
      <textarea
        onChange={onChange}
        className="input-textarea"
      />
    </div>
  )
}
