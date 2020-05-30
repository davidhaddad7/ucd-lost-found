import React from 'react';
import './styles.css';
import {Button,COLORS} from '..'


export const SearchLine = (props) => {
  const { text, textColor, onClick, bgColor } = props;
  return (
    <div className="searchline-container">
      <div className = "your-little-bitch">
        {text}
      </div>
      <div className = "search-button">
        <Button
                text="Edit Search"
                onClick={() => console.log("Edit Search")}
                bgColor={COLORS.medBlue}
                textColor={COLORS.white}
        />
      </div>
    </div>
  )
}
