import React, { Component } from 'react';
import './styles.css';
import { Colors } from '../../lib';
import {
  Header,
  Card,
  FakeSearchField
} from '..';
import { SearchFieldMapContainer } from '../../containers';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class FoundItemMapScreen extends Component {

  constructor(props) {
    super(props);
    props.setBgColor(Colors.lightOrange);
    this.state = {
      Date: new Date(),
      hourDate: new Date(),
      location: null
    };
  }
 
  setDate = date => {
    this.setState({
      Date: date
    });
  };

  setHourDate = date => {
    this.setState({
      hourDate: date
    });
  };

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
              <div className = "date-container">
                <div className = "month-day-year-container">
                  <DatePicker 
                  selected={this.state.Date} 
                  onChange={date => this.setDate(date)} 
                  />
                </div>
                <div className = "hour-minute-container">
                  <DatePicker
                      selected={this.state.hourDate}
                      onChange={date => this.setHourDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                  />
                </div>
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
