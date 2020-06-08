import React, { Component } from 'react';
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


class FoundItemMapScreen extends Component {

  constructor(props) {
    super(props);
    props.setBgColor(Colors.lightOrange);
  }

  buttonStyle = {
    backgroundColor: Colors.darkOrange,
    color: Colors.white
  }

  render() {
    const { onDateChange, onTimeChange, date, time } = this.props;

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
              <SearchFieldMapContainer />
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

export { FoundItemMapScreen };
