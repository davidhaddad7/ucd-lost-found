import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';





export const SearchField = (props) => {

  const {
    tmpAddressValue,
    onTmpAddressValueChange,
    onPermanentAddressSelect,
    suggestions: mapSuggs
  } = props;

  const renderSuggestions = (suggs, getSuggPrps) => {

    const suggestions = mapSuggs || suggs;

    return suggestions.map(curSugg => {

      const suggItemProps = { ...getSuggPrps(curSugg, {}) };
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
        placeholder: 'Input Address or Select Place on the Map',
        style: { width: '100%'}
      })
    };

    return (
      <div>
        <input {...searchFieldProps} />
        <div>
          {loading ? <div>Loading...</div>: renderSuggestions(suggs, getSuggPrps)}
        </div>
      </div>
    )
  }

  return (
    <div>
    <PlacesAutocomplete
      value={tmpAddressValue}
      onChange={onTmpAddressValueChange}
      onSelect={onPermanentAddressSelect}
    >
    {renderSearch}
    </PlacesAutocomplete>
    </div>
  )
}
