import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleMapUrlKey } from '../../lib';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'red',
    padding: '5px 5px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
  </div>
);

class Map extends Component {

  constructor(props)
  {
    super(props);
  }


  render() {
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GoogleMapUrlKey }}
          defaultCenter={{
            lat: 38.538602,
            lng: -121.752963
          }}
          defaultZoom={10}
          onClick={({ x, y, lat, lng, event }) => { console.log( x, y, lat, lng, event); }}
        >
          <AnyReactComponent text='TEXT' />
        </GoogleMapReact>
      </div>
    )
  }
}


export { Map };
