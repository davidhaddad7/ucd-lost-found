import React, { Component } from 'react';
import './styles.css';
import { Colors, ThemeContext } from '../../lib';
import { AppRouter } from '../../containers';

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
          <div id="innerGlobalContainer">
            <AppRouter />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export { App };
