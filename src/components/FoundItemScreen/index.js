import React, { Component } from 'react';
import { PageHeader, Card, InputField, Button, COLORS } from '..';
import './styles.css';

class FoundItemScreen extends Component {

  render() {
    return (
      <section>
        <PageHeader text="Input the found item" />
        <Card>
          <InputField label="Title" />
          <InputField label="Category" />
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
    )
  }
}

export { FoundItemScreen };
