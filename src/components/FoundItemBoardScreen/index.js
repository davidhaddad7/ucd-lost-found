import React, { Component } from 'react';
import { PageHeader, Card, OpaqueButton, SearchLine,BoardItemHeader,BoardItemDetail,BoardItemDescription, COLORS} from '..'

class FoundItemBoardScreen extends Component {

  render() {
    return (
      <section>
        <PageHeader text="Showing results for" />

        {/* Search Takes in Date, Category and Location*/}
        <SearchLine text = "May 10th - May 17th, Phones, Quad" />
        
        <Card  bgColor={COLORS.lightBlue}>
          <BoardItemHeader text="Lost Airpods" textColor={COLORS.darkBlue}/>
          {/* Condensed Card */}
          {/* Expanded Card- if expanded*/}
          <ul>
            <BoardItemDetail header="Category &nbsp;" value="Headphones" />
            <BoardItemDetail header="Location &nbsp;" value="Shield Library" />
            <BoardItemDetail header="Date &nbsp;" value="May 12th 4:00pm" />
          </ul>

          <BoardItemDescription text="I was studying in the library and forgot them on the tabke in the basement" textColor={COLORS.darkBlue}
           />

          <div className="line-aligned-right">
          <OpaqueButton
              text="More"
              onClick={() => console.log("Clicked more")}
              bgColor={COLORS.lightBlue}
              textColor={COLORS.darkBlue}
            />
            
          </div>

        </Card>
      </section>
    )
  }
}

export { FoundItemBoardScreen };







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


