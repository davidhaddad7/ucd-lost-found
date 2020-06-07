import React, { Component } from 'react';
import './styles.css';
import { Colors } from '../../lib';
import {
  Header,
  Card,
  FakeSearchField,
  SearchFieldMap
} from '..';


class FoundItemMapScreen extends Component {

  constructor(props) {
    super(props);
    props.setBgColor(Colors.lightOrange);
  }

  buttonStyle = {
    backgroundColor: Colors.darkOrange,
    color: Colors.white
  }

  render() {
    return (
        <main>
          <section>
            <Header text="Input the found item" />
            <Card>
              <SearchFieldMap />
            </Card>
          </section>
          <section>
            <Header text="Or search for existing requests" />
            <FakeSearchField />
          </section>
        </main>
    );
  }
}

export { FoundItemMapScreen };
