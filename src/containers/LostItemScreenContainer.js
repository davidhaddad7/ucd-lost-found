import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LostItemScreen } from '../components';
import { Colors, ThemeContext, CreateNewLostItem } from '../lib';
import axios from 'axios';

class LostItemScreenContainerClass extends Component {

  navigateToNextScreen = (id) => {
    alert(id);
    this.props.history.push(`/lost-item-map/${id}`);
  }

  navigateToSearchScreen = () => {
    this.props.history.push('/lost-items-search');
  }
  render() {
    return(
      <LostItemScreen
      createNewItem={CreateNewLostItem}
      navigateToNextScreen={this.navigateToNextScreen}
      navigateToSearchScreen={this.navigateToSearchScreen}
      setBgColor={this.context.changeThemeColor}
      />
    );
  }
}

LostItemScreenContainerClass.contextType = ThemeContext;

export const LostItemScreenContainer = withRouter(LostItemScreenContainerClass);
