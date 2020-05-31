import React, { Component } from 'react';
import { Header, Card, OpaqueButton, SearchLine,BoardItemHeader,BoardItemDetail} from '..'
import { Colors } from '../../lib'


function generate_img(image){
  if (image){
    return ( 
      <div className = "board-item-image">
        <img src = {image} alt= {image}></img>
      </div>
    );
  }
  else 
    return null;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listCards = numbers.map((number) =>
    <div className = "found-item-card-container" key={number.id.toString()}>
      {/* <Card  bgColor={Colors.lightBlue}>
        <BoardItemHeader text={number.itemName} textColor={Colors.darkBlue}/>
          <OpaqueButton
            text="More"
            onClick={() => console.log("Clicked more")}
            bgColor={Colors.lightBlue}
            textColor={Colors.darkBlue}
          />
        
      </Card> */}
      <Card  bgColor={Colors.lightBlue}>
        <BoardItemHeader text={number.itemName} textColor={Colors.darkBlue}/>

        <div className = "board-item-container">
          {generate_img(number.image) ? generate_img(number.image):null}
          <BoardItemDetail category={number.category} location={number.location} date={number.date} description = {number.itemDescription}/>
        </div>
        <div className="line-aligned-right">
          <OpaqueButton
            text="More"
            onClick={() => console.log("Clicked more")}
            bgColor={Colors.lightBlue}
            textColor={Colors.darkBlue}
          />
        </div>
      </Card>
    </div>
  );
  return (
    <ul>{listCards}</ul>
  );
}

const numbers = [
  {"id":1,"category":"headphones", "date":"May 11th 4:00pm","itemName":"Beats Headphones", "itemDescription":"I was studying in the library and forgot them on the table in the basement", "location": "Shields Library","image":"dicks"},
  {"id":2,"category":"bag", "date":"May 12th 4:00pm","itemName":"Beats bag", "itemDescription":"I was studying in the library and forgot them on the table in the basement", "location": "Quad main campus", "image":"dicks2"},
  {"id":3,"category":"glasses", "date":"May 13th 4:00pm","itemName":"Beats glasses", "itemDescription":"I was studying in the library and forgot them on the table in the basement", "location": "dairy rd","image":"dicks3"},
  {"id":4,"category":"eyes", "date":"May 14th 4:00pm","itemName":"Beats eyes", "itemDescription":"I was studying in the library and forgot them on the table in the basement", "location": "Kemper Hall","image":""},
  {"id":5,"category":"soap", "date":"May 15th 4:00pm","itemName":"Beats soap", "itemDescription":"I was studying in the library and forgot them on the table in the basement", "location": "Arboretum", "image":"https://ibb.co/k43G5vk"}
];
class FoundItemBoardScreen extends Component {

  render() {
    return (
      <section>
        <Header text="Showing results for" />

        {/* Search Takes in Date, Category and Location*/}
        <SearchLine text = "May 10th - May 17th, Phones, Quad" />
        
        <NumberList numbers={numbers} />
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


