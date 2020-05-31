import React from 'react';
import './styles.css';
import { Colors } from '../../lib';
import { Button } from '..';


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
          bgColor={Colors.medBlue}
          textColor={Colors.white}
        />
      </div>
    </div>
  );
}
