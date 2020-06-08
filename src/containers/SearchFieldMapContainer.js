import React, { Component } from 'react';
import { SearchFieldMap } from '../components';

import {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';


// expects this.props.onAddressChange, address
class SearchFieldMapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tmpAddress: "",
      coordinates: null,
      suggestions: null
    };
  }

  onTmpAddressChange = (tmpAddress) => {
    this.props.onAddressChange("");
    this.setState({ tmpAddress, suggestions: null});
  }

  onPermanentAddressSelect = async (permanentAddress) => {
    try {
      const results = await geocodeByAddress(permanentAddress);
      const coordinates = await getLatLng(results[0]);
      this.props.onAddressChange(permanentAddress);
      this.setState({
        coordinates,
        tmpAddress: permanentAddress,
        suggestions: null
      });
    }
    catch(e) {
      alert(`Failed to get coordinates for the address: ${permanentAddress}`);
      console.error(
        `Failed to get coordinates for the address: ${permanentAddress}`, e);
      this.onAddressChange("");
      this.setState ({
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
      this.onAddressChange("");
      this.setState ({
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
        onSuggestionSelect={this.onAddressChange}
        onMapClick={this.onMapLocationSelect}
      />
    )
  }
}

export { SearchFieldMapContainer };
