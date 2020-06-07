import React from 'react';
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
      <div className="input-field-label" >{label}</div>
      <input {...allInputProps} />
    </div>
  )
}
