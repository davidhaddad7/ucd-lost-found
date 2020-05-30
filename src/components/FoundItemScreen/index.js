import React, { Component } from 'react';
import { PageHeader, Card, InputField, Button, InputFile, COLORS } from '..';
import './styles.css';

class FoundItemScreen extends Component {

  render() {
    return (
      <div>
        <PageHeader text="Input the found item" />
        <main>
          <Card>
            <InputField label="Title" />
            <InputField label="Category" />
            <InputField label="Description" height="20vh" />
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
        </main>
      </div>
    );
  }
}

export { FoundItemScreen };
