import React, { Component } from 'react';
import ReactDatePicker from "react-datepicker";
import './styles.css';
import "react-datepicker/dist/react-datepicker.css";

class DatePicker extends Component {

  render() {
    const { value, onChange } = this.props;

    return (
      <ReactDatePicker
        className="date-picker-input"
        selected={value}
        onChange={onChange}
      />
    );
  }
}

export { DatePicker };
