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
  InputFile
} from '..';


class LostItemScreen extends Component {

  constructor(props) {
    super(props);
    props.setBgColor(Colors.lightBlue);
  }

  buttonStyle = {
    backgroundColor: Colors.darkOrange,
    color: Colors.white
  }

  render() {
    return (
        <main>
          <section>
            <Header text="Input the lost item" />
            <Card>
              <InputField label="Title" />
              <InputField label="Category" />
              <InputTextArea label="Description" />
              <InputFile label="Attach a photo (optional)" />
              <div className="lost-items-line-aligned-right">
                <Button
                  text="Next"
                  onClick={() => console.log("Clicked")}
                  style={this.buttonStyle}
                />
              </div>
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

export { LostItemScreen };
