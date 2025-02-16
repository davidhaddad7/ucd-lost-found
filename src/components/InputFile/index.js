import React, { Component } from 'react';
import { Label } from '..';
import './styles.css';

class InputFile extends Component {

  constructor(props) {
    super(props);

    this.inputFileRef = React.createRef();
    this.inputFile = (
      <input
        ref={this.inputFileRef}
        onChange={this.onFileChange}
        className="input-file-btn-not-displayed"
        type="file"
      />);
  }

  onFileChange = (e) => {
    e.preventDefault();
    const newFile = this.inputFileRef.current.files[0];
    if (newFile) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", (event) => {
        const res = event.target.result.split("base64,")[1];
        // Send only base64 data to the parent
        this.props.onNewFile(res);
      });
      fileReader.readAsDataURL(newFile);
    }
  }

  onClick = (e) => {
    e.preventDefault();
    this.inputFileRef.current.click();
  }

  render() {
    return (
      <div className="input-file-container">
        <Label text={this.props.label} />
        {this.inputFile}
        <input
          className="input-file-btn"
          type="button"
          value="Choose File"
          onClick={this.onClick}
        />
      </div>
    )
  }
};

export { InputFile };
