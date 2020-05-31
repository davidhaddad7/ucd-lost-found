import React from 'react';
import './styles.css';

export const FakeSearchField = (props) => {
  return (
    <div className="fake-search-field-container">
      <input
        className="fake-search-field-btn"
        type="button"
        onClick={props.onClick}
      />
    </div>
  )
}
