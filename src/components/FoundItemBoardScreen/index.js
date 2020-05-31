import React, { Component } from 'react';
import "./styles.css";
import { Header, Card, OpaqueButton, SearchLine,BoardItemHeader,BoardItemDetail} from '..';
import { Colors } from '../../lib'

class FoundItemBoardScreen extends Component {

  // @TODO: if we implement update/refresh functionaliity,
  // make sure state is synchronized
  constructor(props) {
    super(props);
    props.setBgColor(Colors.white);
    const { searchText, itemsData } = this.props;
    this.state = { searchText, itemsData };
    this.state.elapsed = {};
    for (const itemData of itemsData) {
      this.state.elapsed[itemData.id] = true;
    }
  }

  renderImg(itemData) {
    if (!itemData.image)
      return null;

    return (
        <div>
          <img className="board-item-image" src={itemData.image} alt={itemData.image} />
        </div>
    );
  }

  renderExpandButton(itemData) {
    const isElapsed = this.state.elapsed[itemData.id];

    return (
      <OpaqueButton
        text={isElapsed ? "Less" : "More"}
        onClick={() => console.log("Clicked more")}
        bgColor={Colors.lightBlue}
        textColor={Colors.darkBlue}
      />
    )
  }

  renderItemDetails(itemData) {
    const isElapsed = this.state.elapsed[itemData.id];

    return (
      <BoardItemDetail
        category={itemData.category}
        location={itemData.location}
        date={itemData.date}
        description={itemData.itemDescription}
      />
    );
  }

  renderItem(itemData) {
    const isElapsed = this.state.elapsed[itemData.id];

    if (!isElapsed)
      return null;

    return (
      <div className = "item-main-content-container">
        {this.renderImg(itemData)}
        {this.renderItemDetails(itemData)}
      </div>
    );
  }

  renderBoardItems() {
    const listCards = this.state.itemsData.map((itemData) => {
      const key = itemData.id.toString();

      return (
          <div className="item-card" key={key}>
            <Card bgColor={Colors.lightBlue}>
              <div className="item-card-inner-container">
                <BoardItemHeader text={itemData.itemName} textColor={Colors.darkBlue}>
                  {this.renderItem(itemData)}
                </BoardItemHeader>
                {this.renderExpandButton(itemData)}
              </div>
            </Card>
          </div>
      );
    });

    return listCards;
  }

  render() {
    return (
      <section>
        <Header text="Showing results for" />
        <SearchLine text={this.state.searchText} />
        {this.renderBoardItems()}
      </section>
    );
  }
}

export { FoundItemBoardScreen };












// function generateCards() {
//   for (item in list_of_dicts) {
//     if (image is present) {
//       <Card bgColor={Colors.medBlue}>
//         <BoardItemHeader text="..." />
//           <div className="board-card-inner-container">
//             <div>
//               <img s
//             </div>
//             <div>
//               <ul>
//                 <BoardItemDetail header="Category" value="Headphones" />
//                 <BoardItemDetail header=".." value=".." />
//                 <BoardItemDetail header=".." value=".." />
//               </ul>
//               <BoardItemDescription />
//             </div>
//           </div.

//       </Card>
//     } else {
//       <Card bgColor={Colors.medBlue}>
//         <BoardItemHeader text="..." />
//           <ul>
//             <BoardItemDetail header="Category" value="Headphones" />
//             <BoardItemDetail header=".." value=".." />
//             <BoardItemDetail header=".." value=".." />
//           </ul>
//           <BoardItemDescription />

//       </Card>
//     }
//   }
// }
