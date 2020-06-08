import React, { Component } from 'react';
import { Button } from '..';
import './styles.css';
import { Colors } from '../../lib';
import {
  Header,
  Card,
  FakeSearchField,
  DatePicker,
  TimePicker,
  Label
} from '..';
import { SearchFieldMapContainer } from '../../containers';


export const FoundItemMapScreen = (props) => {

  const {
    onAddressChange,
    onDateChange,
    onTimeChange,
    date,
    time,
    address,
    navigateToLostItemsBoardScreen,
    setBgColor,
    navigateToSearchScreen
  } = props;

  const submitButtonStyle = {
    backgroundColor: Colors.darkOrange,
    color: Colors.white
  }

  setBgColor(Colors.lightOrange);



  return (
      <main>
        <section>
          <Header text="Input the found item" />
          <Card>
            <Label text="Date & Time" />
            <div className="date-time-container">
              <DatePicker
                value={date}
                onChange={onDateChange}
              />
              <TimePicker
                value={time}
                onChange={onTimeChange}
              />
            </div>
            <SearchFieldMapContainer
              onAddressChange={onAddressChange}
              address={address}
            />
            <div className="found-item-map-screen-line-aligned-right">
              <Button
                text="Submit"
                onClick={navigateToLostItemsBoardScreen}
                style={submitButtonStyle}
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
}
