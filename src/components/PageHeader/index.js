import React from 'react';
import './styles.css';

export const PageHeader = (props) => {
  return <h2
    className="page-header"
  >
  {props.text}
  </h2>
}
