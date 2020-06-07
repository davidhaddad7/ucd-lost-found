import React, { Component } from 'react';
import {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { SearchField, Map } from '..';


class SearchFieldMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      permanentAddress: "",
      tmpAddressValue: "",
      coordinates: null,
      suggestions: null
    };
  }

  // updateCoordinates = ({lat, lng}) => {
  //   console.log("~~~~~~~~~", lat, " ", lng);
  //   this.setState({
  //     coordinates: { lat, lng }
  //   })
  // }
  //
  // updateLocation = (entry) => {
  //   if (this.updatingAddress) {
  //     return;
  //   }
  //
  //   geocodeByAddress(entry)
  //     .then(results => {
  //       console.log(results);
  //     })
  //     .then(() => {
  //       console.log("tada");
  //     })
  // }
  //
  // onMapClick = ({ lat, lng }) => {
  //   const latLng = `${lat} ${lng}`;
  //
  //   geocodeByAddress(latLng)
  //     .then(results => {
  //
  //     })
  // }




  onTmpAddressValueChange = (tmpAddress) => {
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
        tmpAddressValue: "",
        coordinates: null,
        suggestions: null
      });
    }
  }

  onMapClick = async ({ lat, lng }) => {
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
        tmpAddressValue: "",
        coordinates: null,
        suggestions: null
      });
    }
  }

  render() {
    const { searchField, map } = this.props;
    return (
      <div>
        <SearchField
          suggestions={this.state.suggestions}
          tmpAddressValue={this.state.tmpAddress}
          onTmpAddressValueChange={this.onTmpAddressValueChange}
          onPermanentAddressSelect={this.onPermanentAddressSelect}
        />
        <Map
          onMapClick={this.onMapClick}
          coordinates={this.state.coordinates}
        />
      </div>
    )
  }
}

export { SearchFieldMap };
