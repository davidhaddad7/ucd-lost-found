import React, { Component } from 'react';
import { LoginScreen } from '../components/LoginScreen';
import { Colors, ThemeContext } from '../lib';

class LoginScreenContainer extends Component {
  render() {
    return <LoginScreen setBgColor={this.context.changeThemeColor} />;
  }
}

LoginScreenContainer.contextType = ThemeContext;

export { LoginScreenContainer };
