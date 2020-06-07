import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { InputField } from '..';
import './styles.css';

export const SearchField = (props) => {

  const {
    searchFieldValue,
    onSearchFieldValueChange,
    onSuggestionSelect,
    suggestions: mapSuggs
  } = props;

  const renderSuggestions = (suggs, getSuggPrps) => {
    const suggestions = mapSuggs || suggs;

    return suggestions.map(curSugg => {
      const suggItemProps = { ...getSuggPrps(curSugg, {
        className: "suggestion-item"
      }) };
      return (
        <div {...suggItemProps}>
          {curSugg.description}
        </div>
      )
    });
  }

  const renderSearch = (args) => {
    const {
      getInputProps,
      suggestions : suggs,
      getSuggestionItemProps: getSuggPrps,
      loading
    } = args;

    const searchFieldProps = {
      ...getInputProps({
        placeholder: 'Input Address or Select Place on the Map'
      })
    };

    return (
      <div>
        <InputField label="Location" inputFieldProps={searchFieldProps} />
        <div className="suggestion-outer-container">
          <div className="suggestion-inner-container">
            {loading ? <div>Loading...</div>: renderSuggestions(suggs, getSuggPrps)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
    <PlacesAutocomplete
      value={searchFieldValue}
      onChange={onSearchFieldValueChange}
      onSelect={onSuggestionSelect}
    >
    {renderSearch}
    </PlacesAutocomplete>
    </div>
  )
}
