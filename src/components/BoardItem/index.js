import React, { Component } from 'react';
import { Card, Button } from '..';
import "./styles.css";
import { Colors } from '../../lib';

class BoardItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };

    this.buttonStyle = {
      color: Colors.darkBlue,
      fontWeight: "bold",
      padding: 0
    };

    this.cardStyle = {
      backgroundColor: props.bgColor
    }
  }

  toggleExpanded = () => {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  renderItemImg() {
    const { itemData } = this.props;

    if (!itemData.image) {
      return null;
    }

    return (
      <div>
        <img
          className="board-item-image"
          src={itemData.image}
          alt="<Item Image>"
        />
      </div>
    )
  }

  renderItemDescription() {
    console.log(this.props.itemData);

    const { category, location, date, description } = this.props.itemData;

    return (
      <div class="item-details-description-container">
        <ul>
          <li>
            <div className="board-item-label">
              Category
            </div>
            <div className="board-item-label-details">
            {category}
            </div>
          </li>
          <li>
            <div className="board-item-label">
              Location
            </div>
            <div className="board-item-label-details">
            {location}
            </div>
          </li>
          <li>
            <div className="board-item-label">
              Date
            </div>
            <div className="board-item-label-details">
            {date}
            </div>
          </li>
        </ul>
        <div class="board-item-description">
          {description}
        </div>
      </div>
    );
  }

  renderItemDetails() {
    if (!this.state.isExpanded) {
      return null;
    }

    return (
      <div className="board-item-details-container">
        {this.renderItemImg()}
        {this.renderItemDescription()}
      </div>
    )
  }


  render() {
    const { name: headerText, id } = this.props.itemData;

    return (
      <div className="board-item-card" key={id}>
        <Card style={this.cardStyle}>
          <div className="board-item-header-container">
            <h3 className="board-item-header">
              {headerText}
            </h3>
            <div className="board-item-header-btn">
              <Button
                size="medium"
                style={this.buttonStyle}
                text={this.state.isExpanded ? "Less": "More"}
                onClick={this.toggleExpanded}
              />
            </div>
          </div>
          {this.renderItemDetails()}
        </Card>
      </div>
    );
  }
}

export { BoardItem };
