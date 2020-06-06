import React, { Component } from 'react';
import { Card, OpaqueButton } from '..';
import "./styles.css";

class BoardItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
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
    const { itemData, bgColor } = this.props;
    const { name: headerText } = itemData;

    return (
      <div className="board-item-card" key={itemData.id}>
        <Card bgColor={bgColor}>
          <div className="board-item-header-container">
            <h3 className="board-item-header">
              {headerText}
            </h3>
            <div className="board-item-header-btn">
              <OpaqueButton
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

//
// Header,
//
//
//
//
//
//     this.state = { searchText, itemsData };
//     for (let itemData of this.state.itemsData) {
//       itemData.isCollapsed = true;
//     }
//
//   renderImg(itemData) {
//     if (!itemData.image)
//       return null;
//
//     return (
//         <div>
//
//         </div>
//     );
//   }
//
//   renderItemDetails(itemData) {
//     const isElapsed = this.state.elapsed[itemData.id];
//
//     return (
//       <BoardItemDetail
//         category={itemData.category}
//         location={itemData.location}
//         date={itemData.date}
//         description={itemData.itemDescription}
//       />
//     );
//   }
//
//   renderItem(itemData) {
//     const isElapsed = this.state.elapsed[itemData.id];
//
//     if (!isElapsed)
//       return null;
//
//     return (
//       <div className = "item-main-content-container">
//         {this.renderImg(itemData)}
//         {this.renderItemDetails(itemData)}
//       </div>
//     );
//   }
//
//   onHeaderBtnClick(id)
//   {
//
//   }



































// import React, { Component } from 'react';
// import './styles.css';
// import { OpaqueButton } from '..';
// import { Colors } from '../../lib';
//
//
// export const BoardItemHeader = (props) => {
//   const { isExpanded, onClick, data } = props;
//   const { headerText } = data;
//
//   return (
//
//   );
// }
//
// //
// // class BoardItemHeader extends Component
// // {
// //   constructor(props) {
// //     super(props);
// //
// //     // this.id = props.data.id;
// //   }
// //
// //
// //
// //   render() {
// //     // const { , textColor, onHeaderBtnClick } = this.props;
// //
// //     // const { isCollapsed, name, onHeaderBtnClick } = props.data;
// //
// //     return (
// //       <div className="board-item-header-container">
// //         <h3 className="board-item-header">
// //         {name}
// //         </h3>
// //         <div className="board-item-header-btn">
// //           <OpaqueButton
// //             text={isCollapsed ? "More" : "Less"}
// //             onClick={onHeaderBtnClick}
// //             bgColor={Colors.lightBlue}
// //             textColor={Colors.darkBlue}
// //           />
// //         </div>
// //       </div>
// //     );
// //   }
// //
// // }
// //
// // export { BoardItemHeader };
















//
//
//
//
//
// import React from 'react';
// import './styles.css';
//
// export const BoardItemDetail= (props) => {
//   const {category,location, date, description} = props;
//
//   return (
//     <div className = "BoardItemDetail-main-container">
//       <div className = "BoardItemDetail-inner-container">
//         <ul className = "board-item-detail-title">
//           <li>Category</li>
//           <li>Location</li>
//           <li>Date</li>
//         </ul>
//         <ul className = "board-item-detail">
//           <li>{category}</li>
//           <li>{location}</li>
//           <li>{date}</li>
//         </ul>
//       </div>
//       <div className = "BoardItemDescription-container" >
//         {description}
//       </div>
//     </div>
//
//   );
// }
//










/* .BoardItemDetail-main-container {
  font-size: 0.8em;
  line-height: 1.3em;
}

.BoardItemDetail-inner-container {
  display: flex;
  flex-direction: row;
  margin-bottom: .5em;
  line-height: 1.4em;
  color: var(--black);
}

.board-item-detail-title {
  font-weight: bold;
}

.board-item-detail{
  margin-left: .5em;
  list-style-type:none;
} */
