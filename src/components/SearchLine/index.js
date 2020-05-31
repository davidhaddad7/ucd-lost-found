import React from 'react';
import './styles.css';
import { Button } from '..';
import { Colors } from '../../lib';


export const SearchLine = (props) => {
  const { text, textColor, onClick, bgColor } = props;
  return (
    <div className="searchline-container">
      <div className = "date-cat-loc-search">
        {text}
      </div>
      <div className = "search-button">
        
        <Button
                text="Edit Search"
                onClick={() => console.log("Edit Search")}
                bgColor={Colors.medBlue}
                textColor={Colors.white}
        />
      </div>
    </div>
  )
}
