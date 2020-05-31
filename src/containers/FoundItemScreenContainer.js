import React, { Component } from 'react';
import { FoundItemScreen } from '../components';
import { Colors, ThemeContext } from '../lib';

class FoundItemScreenContainer extends Component {
  render() {
    return <FoundItemScreen setBgColor={this.context.changeThemeColor} />;
  }
}

FoundItemScreenContainer.contextType = ThemeContext;

export { FoundItemScreenContainer };
