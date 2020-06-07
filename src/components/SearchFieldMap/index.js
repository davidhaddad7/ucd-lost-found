import React, { Component } from 'react';
import { SearchField, Map } from '..';


export const SearchFieldMap = (props) => {
  const {
    suggestions,
    searchFieldValue,
    coordinates,
    onSearchFieldValueChange,
    onSuggestionSelect,
    onMapClick
  } = props;


  return (
    <div>
      <SearchField
        suggestions={suggestions}
        searchFieldValue={searchFieldValue}
        onSearchFieldValueChange={onSearchFieldValueChange}
        onSuggestionSelect={onSuggestionSelect}
      />
      <Map
        onMapClick={onMapClick}
        coordinates={coordinates}
      />
    </div>
  )
}
