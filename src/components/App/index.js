import React, { Component } from 'react';
import './styles.css';
import { Colors, ThemeContext } from '../../lib';
import { AppRouter } from '../../containers';
import { MapContainer } from '../GoogleMap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      themeColor: Colors.white,
      changeThemeColor: this.changeThemeColor.bind(this)
    }
  }
  changeThemeColor(newColor) {
    if (newColor !== this.state.themeColor)
      this.setState({ themeColor: newColor });
  }

  render() {

    return (
      <ThemeContext.Provider value={this.state}>
        <div
          id="globalContainer"
          style={{ backgroundColor: this.state.themeColor }}
        >
          <div>
            <MapContainer
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAbdkOabeaQhg_-ZrYUy9lbdEZrzmJpvM&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100px` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100px` }} />}
            />
          </div>

          <div id="innerGlobalContainer">
            <AppRouter />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export { App };
