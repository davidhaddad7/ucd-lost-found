import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FoundItemScreen } from '../components';
import {  ThemeContext, CreateNewFoundItem } from '../lib';


class FoundItemScreenContainerClass extends Component {

  static contextType = ThemeContext;

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category:'',
      description:'',
      image: null
     };
  }

  navigateToLostItemMapScreen = (id) => {
    this.props.history.push(`/found-item-map/${id}`);
  }

  navigateToSearchScreen = () => {
    this.props.history.push('/found-items-search');
  }

  onTitleChange = (event) => {
    event.preventDefault();
    this.setState({title: event.target.value});
    console.log("New title: ", event.target.value);
  }

  onCategoryChange = (event) => {
    event.preventDefault();
    this.setState({category: event.target.value});
    console.log("New category: ", event.target.value);

  }
  onDescriptionChange = (event) => {
    event.preventDefault();
    this.setState({description: event.target.value});
    console.log("New description: ",event.target.value);
  }

  onFileChange = (newImage) => {
    this.setState({
      image: newImage
    });
    console.log("New image: ", newImage);
  }


  createNewLostItemNavigateToNextScreen = async (event) => {
    event.preventDefault();
    try {
      const newItemId = await CreateNewFoundItem(this.state);
      this.navigateToLostItemMapScreen(newItemId);
    }
    catch(e) {
      alert("Failed to store a new found item and navigate to the next screen");
      console.error(e);
    }
  }

  render() {
    return (
      <FoundItemScreen
        title={this.state.title}
        onTitleChange={this.onTitleChange}
        category={this.state.category}
        onCategoryChange={this.onCategoryChange}
        description={this.state.description}
        onDescriptionChange={this.onDescriptionChange}
        onNewFileChange={this.onFileChange}
        navigateToSearchScreen={this.navigateToSearchScreen}
        createNewLostItemNavigateToNextScreen={this.createNewLostItemNavigateToNextScreen}
        setBgColor={this.context.changeThemeColor}
      />
    );
  }
}

export const FoundItemScreenContainer = withRouter(FoundItemScreenContainerClass);
