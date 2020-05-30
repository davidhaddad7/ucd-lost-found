import React, { Component } from 'react';
import { PageHeader, Card, InputField } from '..'

class FoundItemScreen extends Component {

  render() {
    return (
      <section>
        <PageHeader text="Input the found item" />
        <Card>
          <InputField label="Title" />
          <InputField label="Category" />
        </Card>
      </section>
    )
  }
}

export { FoundItemScreen };
