import React, { Component } from 'react';
import { FoundItemMapScreen } from '../components';
import { Colors, ThemeContext } from '../lib';

class FoundItemMapScreenContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      creationDate: new Date(),
      creationTime: new Date()
    }
  }

  onCreationDateChange = (newDate) => {
    this.setState({ creationDate: newDate })
  }

  onCreationTimeChange = (newTime) => {
    this.setState({ creationTime: newTime })
  }

  render() {
    return (
      <FoundItemMapScreen
        date={this.state.creationDate}
        time={this.state.creationTime}
        onDateChange={this.onCreationDateChange}
        onTimeChange={this.onCreationTimeChange}
        setBgColor={this.context.changeThemeColor}
      />
    );
  }
}

FoundItemMapScreenContainer.contextType = ThemeContext;

export { FoundItemMapScreenContainer };
