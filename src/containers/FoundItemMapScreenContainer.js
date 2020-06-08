import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FoundItemMapScreen } from '../components';
import { Colors, ThemeContext } from '../lib';

class FoundItemMapScreenContainerClass extends Component {

  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      creationDate: new Date(),
      creationTime: new Date(),
      address: null
    }
  }

  onCreationDateChange = (newDate) => {
    this.setState({ creationDate: newDate })
  }

  onCreationTimeChange = (newTime) => {
    this.setState({ creationTime: newTime })
  }

  onAddressChange = (newAddress) => {
    this.setState({ address: newAddress });
  }

  navigateToSearchScreen = () => {
    this.props.history.push('/found-items-search');
  }

  navigateToLostItemsBoardScreen = () => {
    this.props.history.push(`/lost-items-board`);
  }

  render() {
    return (
      <FoundItemMapScreen
        date={this.state.creationDate}
        time={this.state.creationTime}
        address={this.state.address}
        onDateChange={this.onCreationDateChange}
        onTimeChange={this.onCreationTimeChange}
        onAddressChange={this.onAddressChange}
        setBgColor={this.context.changeThemeColor}
        navigateToLostItemsBoardScreen={this.navigateToLostItemsBoardScreen}
        navigateToSearchScreen={this.navigateToSearchScreen}
      />
    );
  }
}

export const FoundItemMapScreenContainer = withRouter(FoundItemMapScreenContainerClass);
