import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FoundItemScreen } from '../components';
import {  ThemeContext, CreateNewFoundItem } from '../lib';


class FoundItemScreenContainerClass extends Component {

  navigateToNextScreen = (id) => {
    alert(id);
    this.props.history.push(`/found-item-map/${id}`);
  }

  navigateToSearchScreen = () => {
    this.props.history.push('/found-items-search');
  }

  render() {
    return (
      <FoundItemScreen
        createNewItem={CreateNewFoundItem}
        navigateToNextScreen={this.navigateToNextScreen}
        navigateToSearchScreen={this.navigateToSearchScreen}
        setBgColor={this.context.changeThemeColor}
      />
    );
  }
}

FoundItemScreenContainerClass.contextType = ThemeContext;

export const FoundItemScreenContainer = withRouter(FoundItemScreenContainerClass);
