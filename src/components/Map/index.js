import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleMapKey } from '../../lib';
import './styles.css';

class Map extends Component {

  static zoom = 15;
  static defaultCoordinates = {
    lat: 38.5449065,
    lng: -121.7405167
  };

  render() {
    const coordinates = this.props.coordinates || Map.defaultCoordinates;

    return (
      <div className="map-container">
        <GoogleMapReact
          onClick={this.props.onMapClick}
          bootstrapURLKeys={{ key: GoogleMapKey }}
          center={coordinates}
          defaultZoom={Map.zoom}
        >
        </GoogleMapReact>
      </div>
    )
  }
}

export { Map };
