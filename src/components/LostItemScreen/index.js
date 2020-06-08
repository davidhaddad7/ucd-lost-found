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

    this.state = {
      title: '',
      category:'',
      description:'',
      image: null
     };
  }

  buttonStyle = {
    backgroundColor: Colors.darkOrange,
    color: Colors.white
  }

  handleTitleChange = (event) => {
    event.preventDefault();
    this.setState({title: event.target.value});
    console.log("New title: ", event.target.value);
  }

  handleCategoryChange = (event) => {
    event.preventDefault();
    this.setState({category: event.target.value});
    console.log("New category: ", event.target.value);

  }
  handleDescriptionChange = (event) => {
    event.preventDefault();
    this.setState({description: event.target.value});
    console.log("New description: ",event.target.value);
  }

  handleImageChange = (newImage) => {
    this.setState({
      image: newImage
    });
    console.log("New image: ", newImage);
  }


  handleNextButtonClick = async (event) => {
    event.preventDefault();
    try {
      const newItemId = await this.props.createNewItem();
      this.props.navigateToNextScreen(newItemId);
    }
    catch(e) {
      alert("Failed to store a new found item and navigate to the next screen");
      console.error(e);
    }
  }

  render() {
    return (
        <main>
          <section>
            <Header text="Input the lost item" />
            <Card>
              <InputField
                type="text" label="Title"
                value={this.state.title} onChange={this.handleTitleChange}
              />
              <InputField
                type="text" label="Category"
                value={this.state.category} onChange={this.handleCategoryChange}
              />
              <InputTextArea
                type="text"
                label="Description"
                value={this.state.description} onChange={this.handleDescriptionChange}
              />
              <InputFile
                onNewFile={this.handleImageChange}
                label="Attach a photo (optional)"
              />

              <div className="lost-items-line-aligned-right">
                <Button
                  text="Next"
                  onClick={this.handleNextButtonClick}
                  style={this.buttonStyle}
                />
              </div>
            </Card>
          </section>
          <section>
            <Header text="Or search for existing requests" />
            <FakeSearchField onClick={this.props.navigateToSearchScreen} />
          </section>
        </main>
    );
  }
}

export { LostItemScreen };
