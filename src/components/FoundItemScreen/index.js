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


export const FoundItemScreen = (props) => {

  const {
    title,
    onTitleChange,
    category,
    onCategoryChange,
    description,
    onDescriptionChange,
    onNewFileChange,
    navigateToSearchScreen,
    createNewLostItemNavigateToNextScreen,
    setBgColor
  } = props;


  setBgColor(Colors.lightOrange);

  const nextButtonStyle = {
    backgroundColor: Colors.darkOrange,
    color: Colors.white
  }

  return (
    <main>
      <section>
        <Header text="Input the found item" />
        <Card>
          <InputField
            type="text" label="Title"
            value={title} onChange={onTitleChange}
          />
          <InputField
            label="Category" type="text"
            value={category} onChange={onCategoryChange}
          />
          <InputTextArea
            label="Description" type="text"
            value={description}
            onChange={onDescriptionChange}
          />
          <InputFile
            onNewFile={onNewFileChange}
            label="Attach a photo (optional)"
          />
          <div className="found-item-screen-line-aligned-right">
            <Button
              text="Next"
              onClick={createNewLostItemNavigateToNextScreen}
              style={nextButtonStyle}
            />
          </div>
        </Card>
      </section>
      <section>
        <Header text="Or search for existing requests" />
        <FakeSearchField onClick={navigateToSearchScreen} />
      </section>
    </main>
  );
};
