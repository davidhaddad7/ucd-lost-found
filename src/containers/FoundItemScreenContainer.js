import React, { Component } from 'react';
import { FoundItemScreen } from '../components';
import { Colors, ThemeContext } from '../lib';
import axios from 'axios';

async function onNextButton() {
  try {
    const token = await axios.post('/post-found-item', {
      newFoundItem:'found item beats'
    })
  } catch (err) {
    throw new Error('Unable to make post new found item')
  }
  //send us to next page
}

// createNewFountItem(){

// }


class FoundItemScreenContainer extends Component {
  render() {
    return <FoundItemScreen setBgColor={this.context.changeThemeColor} />;
  }
}

FoundItemScreenContainer.contextType = ThemeContext;

export { FoundItemScreenContainer };
