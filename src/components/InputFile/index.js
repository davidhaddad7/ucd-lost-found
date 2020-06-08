import React from 'react';
import { Label } from '..';
import './styles.css';

export const InputFile = (props) => {
  return (
    <div className="input-file-container">
      <Label text={props.label} />
      <input
        className="input-file-btn"
        type="button"
        value="Choose File"
        onClick={() => console.log("Choose File Button")}
      />
    </div>
  )
}
