import React, { Component } from 'react';
import { FoundItemScreen } from '../components';
import { Colors, ThemeContext, CreateNewFoundItem } from '../lib';
import axios from 'axios';

async function navigateToNextScreen() {
  // how to do it in router??
  //send us to next page
}

// createNewFountItem(){

// }


class FoundItemScreenContainer extends Component {
  render() {
    return (
      <FoundItemScreen
        createNewItem={CreateNewFoundItem}
        navigate={navigateToNextScreen}
        setBgColor={this.context.changeThemeColor}
      />
    );
  }
}

FoundItemScreenContainer.contextType = ThemeContext;

export { FoundItemScreenContainer };
