import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleMapKey } from '../../lib';

class Map extends Component {

  static zoom = 15;
  static defaultCoordinates = {
    lat: 38.5449065,
    lng: -121.7405167
  };

  render() {
    const coordinates = this.props.coordinates || Map.defaultCoordinates;

    return (
      <div style={{ width: '100%', height: '50vh' }}>
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
