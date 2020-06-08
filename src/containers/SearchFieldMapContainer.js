import React, { Component } from 'react';
import { SearchFieldMap } from '../components';

import {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';


class SearchFieldMapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      permanentAddress: "",
      tmpAddress: "",
      coordinates: null,
      suggestions: null
    };
  }

  onTmpAddressChange = (tmpAddress) => {
    this.setState({ tmpAddress, suggestions: null, permanentAddress: "" });
  }

  onPermanentAddressSelect = async (permanentAddress) => {
    try {
      const results = await geocodeByAddress(permanentAddress);
      const coordinates = await getLatLng(results[0]);
      this.setState({
        permanentAddress,
        coordinates,
        tmpAddress: permanentAddress,
        suggestions: null
      });
    }
    catch(e) {
      alert(`Failed to get coordinates for the address: ${permanentAddress}`);
      console.error(
        `Failed to get coordinates for the address: ${permanentAddress}`, e);
      this.setState ({
        permanentAddress: "",
        tmpAddress: "",
        coordinates: null,
        suggestions: null
      });
    }
  }

  onMapLocationSelect = async ({ lat, lng }) => {
    const latLng = `${lat}   ${lng}`;

    try {
      const results = await geocodeByAddress(latLng);
      const newSuggestions =
        results.map(({formatted_address: addr}) => addr).slice(0, 5);
      const formattedSuggestions = newSuggestions.map(txt => ({description: txt}));

      this.setState({
        tmpAddress: "",
        suggestions: formattedSuggestions
      })
    }
    catch(e) {
      alert("Failed to generate suggestions on map click");
      console.error("Failed to generate suggestions on map click", e);
      this.setState ({
        permanentAddress: "",
        tmpAddress: "",
        coordinates: null,
        suggestions: null
      });
    }
  }

  render() {
    return (
      <SearchFieldMap
        suggestions={this.state.suggestions}
        searchFieldValue={this.state.tmpAddress}
        coordinates={this.state.coordinates}
        onSearchFieldValueChange={this.onTmpAddressChange}
        onSuggestionSelect={this.onPermanentAddressSelect}
        onMapClick={this.onMapLocationSelect}
      />
    )
  }
}

export { SearchFieldMapContainer };
