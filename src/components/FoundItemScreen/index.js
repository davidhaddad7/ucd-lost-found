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


class FoundItemScreen extends Component {

  constructor(props) {
    super(props);
    props.setBgColor(Colors.lightOrange);

    this.state = {
                  title: '',
                  category:'',
                  description:''
                 };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
    console.log("title: ",this.state.title);
  }
  handleCategoryChange(event) {
    this.setState({category: event.target.value});
    console.log("category: ",this.state.category);

  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
    console.log("description: ",this.state.description);
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

              {/* Title */}
              <InputField label="Title" type="text" value={this.state.title} onChange={this.handleTitleChange} />

              {/* Category */}
              <InputField label="Category" type="text" value={this.state.category} onChange={this.handleCategoryChange}/>

              {/* Description */}
              <InputTextArea label="Description" type="text" value={this.state.description} onChange={this.handleDescriptionChange} />

              {/* Image */}
              <InputFile label="Attach a photo (optional)" />
              <div className="found-item-screen-line-aligned-right">
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

export { FoundItemScreen };
