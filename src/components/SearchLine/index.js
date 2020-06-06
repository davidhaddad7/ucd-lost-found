import React from 'react';
import './styles.css';
import { Colors } from '../../lib';
import { Button } from '..';

const buttonStyle = {
  backgroundColor: Colors.medBlue,
  color: Colors.white
};

export const SearchLine = (props) => {
  const { text, textColor, onClick, bgColor } = props;

  return (
    <div className="searchline-container">
      <div className = "date-cat-loc-search">
        {text}
      </div>
      <div className = "search-button">
        <Button
          size="small"
          text="Edit Search"
          onClick={() => console.log("Edit Search")}
          style={buttonStyle}
        />
      </div>
    </div>
  );
}
