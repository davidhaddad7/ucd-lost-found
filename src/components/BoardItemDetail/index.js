import React from 'react';
import './styles.css';

export const BoardItemDetail= (props) => {
  const {category,location, date, description} = props;

  return (
    <div className = "BoardItemDetail-main-container">
      <div className = "BoardItemDetail-inner-container">
        <ul className = "board-item-detail-title">
          <li>Category</li>
          <li>Location</li>
          <li>Date</li>
        </ul>
        <ul className = "board-item-detail">
          <li>{category}</li>
          <li>{location}</li>
          <li>{date}</li>
        </ul>
      </div>
      <div className = "BoardItemDescription-container" >
        {description}
      </div>
    </div>

  );
}

