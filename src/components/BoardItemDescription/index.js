import React from 'react';
import './styles.css';

export const BoardItemDescription= (props) => {
  const {text,textColor} = props;

  return (
    <div className = "BoardItemDescription-container" style={{color: textColor }}>
      {text}
    </div>
  );
}

