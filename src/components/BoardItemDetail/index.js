import React from 'react';
import './styles.css';

export const BoardItemDetail= (props) => {
  const { header, value} = props;

  return (
    <div className = "BoardItemDetail-container">
      <span className="board-item-detail-bold"> {header}</span>
      <span className="board-item-detail">{value}</span>
    </div>
  );
}

