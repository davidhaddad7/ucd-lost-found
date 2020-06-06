import React, { Component } from 'react';
import { BoardItem, Header, SearchLine } from '..';
import { Colors } from '../../lib';
import "./styles.css";

class FoundItemBoardScreen extends Component {

  constructor(props) {
    super(props);
    props.setBgColor(Colors.white);
    const { searchText, itemsData } = this.props;
    this.state = { searchText, itemsData };
  }

  renderBoardItems() {
    return this.state.itemsData.map(item => (
      <BoardItem key={item.id} bgColor={Colors.lightBlue} itemData={item} />
    ));
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
