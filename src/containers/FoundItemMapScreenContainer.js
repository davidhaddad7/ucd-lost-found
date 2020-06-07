import React, { Component } from 'react';
import { FoundItemMapScreen } from '../components';
import { Colors, ThemeContext } from '../lib';

class FoundItemMapScreenContainer extends Component {
  render() {
    return <FoundItemMapScreen setBgColor={this.context.changeThemeColor} />;
  }
}

FoundItemMapScreenContainer.contextType = ThemeContext;

export { FoundItemMapScreenContainer };
