import React from 'react';
import './styles.css';

export const BoardItemHeader = (props) => {
  const { text, textColor} = props;

  return (
    <div>
      <h3 className="board-item-header">
        {props.text}
      </h3>
      {props.children}
    </div>
  );
}
