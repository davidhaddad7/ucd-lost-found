import React, { Component } from 'react';
import './styles.css';
import {
  Header,
  Card,
  InputField,
  FakeSearchField,
  InputTextArea,
  Button,
  InputFile,
  COLORS
} from '..';


class FoundItemScreen extends Component {

  render() {
    return (
        <main>
          <section>
            <Header text="Input the found item" />
            <Card>
              <InputField label="Title" />
              <InputField label="Category" />
              <InputTextArea label="Description" />
              <InputFile label="Attach a photo (optional)" />
              <div className="line-aligned-right">
                <Button
                  text="Next"
                  onClick={() => console.log("Clicked")}
                  bgColor={COLORS.darkOrange}
                  textColor={COLORS.white}
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

export { FoundItemScreen };
