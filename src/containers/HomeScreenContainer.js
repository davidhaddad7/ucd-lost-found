import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { HomeScreen } from '../components';
import {  ThemeContext } from '../lib';


class HomeScreenClass extends Component {

  static contextType = ThemeContext;

  navigateToNewFoundItemScreen = (id) => {
    this.props.history.push("/found-item");
  }

  navigateToNewLostItemScreen = () => {
    this.props.history.push("/lost-item");
  }

  render() {
    return (
      <HomeScreen
        navigateToNewFoundItemScreen={this.navigateToNewFoundItemScreen}
        navigateToNewLostItemScreen={this.navigateToNewLostItemScreen}
        setBgColor={this.context.changeThemeColor}
      />
    );
  }
}

export const HomeScreenContainer = withRouter(HomeScreenClass);
