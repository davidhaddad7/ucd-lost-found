import React, { Component } from 'react';
import { LostItemScreen } from '../components';
import { ThemeContext } from '../lib';

class LostItemScreenContainer extends Component {
  render() {
    return <LostItemScreen setBgColor={this.context.changeThemeColor} />;
  }
}

LostItemScreenContainer.contextType = ThemeContext;

export { LostItemScreenContainer };
