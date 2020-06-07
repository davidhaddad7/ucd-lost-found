import React, { Component } from 'react';
import './styles.css';
import { Colors } from '../../lib';
import {
  Header,
  Card,
  InputField,
  FakeSearchField,
  InputTextArea,
  Button,
  InputFile,
  Map
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
              <InputField label="Location" />
              <Map />
            </Card>
          </section>
        </main>
    );
  }
}

export { FoundItemMapScreen };
