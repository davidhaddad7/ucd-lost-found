import React, { Component } from 'react';
import ReactDatePicker from "react-datepicker";
import './styles.css';
import "react-datepicker/dist/react-datepicker.css";

class TimePicker extends Component {

  render() {
    const { value, onChange } = this.props;

    return (
      <ReactDatePicker
        className="time-picker-input"
        selected={value}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    );
  }
}

export { TimePicker };
