import React from 'react';
import { Label } from '..';
import './styles.css';

export const InputField = (props) => {

  let { inputFieldProps, height, label } = props;

  inputFieldProps = inputFieldProps || {};
  height = height || 'auto';

  const allInputProps = {
    className: "input-field",
    style: {
      height
    },
    ...inputFieldProps
  };

  return (
    <div className="input-field-container">
      <Label text={label} />
      <input {...allInputProps} />
    </div>
  )
}
