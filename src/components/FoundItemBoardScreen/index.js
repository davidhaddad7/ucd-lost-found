import React, { Component } from 'react';
import { PageHeader, Card, Button, OpaqueButton, SearchLine,BoardItemHeader,BoardItemDetail,BoardItemDescription} from '..'

class FoundItemBoardScreen extends Component {

  render() {
    return (
      <section>
        <PageHeader text="Showing results for" />

        {/* Searcg Takes in Date, Category and Location*/}
        <SearchLine text="May 10th - May 17th,Phones, Squad" />
        <Card bgColor={COLORS.medBlue}>
          <BoardItemHeader text="..." />
          {/* Condensed Card */}
          <OpaqueButton value = "More"/>

          {/* Expanded Card- if expanded*/}
            <ul>
              <BoardItemDetail header="Category" value="Headphones" />
              <BoardItemDetail header="Location" value="Shield Library" />
              <BoardItemDetail header="Date" value="May 12th 4:00pm" />
            </ul>
            <div className = "" > </div>
            <BoardItemDescription />
            <OpaqueButton value = "More"/>

        </Card>
      </section>
    )
  }
}

export { FoundItemScreen };







// function generateCards() {
//   for (item in list_of_dicts) {
//     if (image is present) {
//       <Card bgColor={COLORS.medBlue}>
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
//       <Card bgColor={COLORS.medBlue}>
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


