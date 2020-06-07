import React, { Component, useState, useContext } from 'react';
import { LostItemBoardScreen } from '../components';
import { ThemeContext } from '../lib';
import {
  useLocation
} from "react-router-dom";
import moment  from 'moment';

const MOCKED_DATA = {
  searchText: "May 10th - May 17th, Phones, Quad",
  itemsData: [
    {
      id:1,
      category:"headphones",
      date:"May 11th 4:00pm",
      name:"Beats Headphones",
      description:"I was studying in the library and forgot them on the table in the basement",
      location: "Shields Library",
      image:null
    },
    {
      id:2,
      category:"bag",
      date:"May 12th 4:00pm",
      name:"Beats bag",
      description:"I was studying in the library and forgot them on the table in the basement",
      location: "Shields Library",//"Quad main campus",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/440px-Bucephala-albeola-010.jpg"
    },
    {
      id:3,
      category:"glasses",
      date:"May 13th 4:00pm",
      name:"Beats glasses",
      description:"I was studying in the library and forgot them on the table in the basement",
      location: "dairy rd",
      image:null
    },
    {
      id:4,
      category:"eyes",
      date:"May 14th 4:00pm",
      name:"Beats eyes",
      description:"I was studying in the library and forgot them on the table in the basement",
      location: "Kemper Hall",
      image:null
    },
    {
      id:5,
      category:"soap",
      date:"May 15th 4:00pm",
      name:"Beats soap",
      description:"I was studying in the library and forgot them on the table in the basement",
      location: "Arboretum",
      image:null
    }
  ]
}


// class LostItemBoardContainer extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       searchText: MOCKED_DATA.searchText,
//       itemsData: MOCKED_DATA.itemsData
//     }
//   }

//   render() {
//     return (
//       <LostItemBoardScreen
//         setBgColor={this.context.changeThemeColor}
//         searchText={this.state.searchText}
//         itemsData={this.state.itemsData}
//       />
//     );
//   }
// }

// LostItemBoardContainer.contextType = ThemeContext;

// export { LostItemBoardContainer };

// let query = new URLSearchParams(useLocation().search);
function formatSearchDate(queryParameter,queryParameterValue){
  let formattedDate = moment(queryParameterValue).format('MMM Do');
  console.log(formattedDate);
  if(formattedDate === "Invalid date")
    return '';
  else
    return formattedDate;
}

function parseQuery(query) {
  const queryArray = ["startdate", "enddate","category","location"];
  let queryObject = { 
     startdate:'',
     enddate:'',
     category:'',
     location:''
  };
  // let searchTextQuery =[];
  for (let i = 0; i < queryArray.length; i++) {
    let queryParameterValue = query.get(queryArray[i]);

    if (queryParameterValue){
      if (queryArray[i] ===  "startdate" ){
       let startdate = formatSearchDate(queryArray[i],queryParameterValue);
       if (startdate)
        queryObject["startdate"] = startdate;
      }
      else if (queryArray[i] ===  "enddate")
      {
        let enddate = formatSearchDate(queryArray[i],queryParameterValue);
        if (enddate)
          queryObject["enddate"] = enddate;
      }
      else if (queryArray[i] ===  "category")
        queryObject["category"] = queryParameterValue;
      else
        queryObject["location"]= queryParameterValue;
    }
  }

  let stringSearch = "";
  // both start and enddate
  if (queryObject["startdate"] &&queryObject["enddate"]){
    stringSearch += queryObject["startdate"] + ' - ' + queryObject["enddate"];
  }
  // only startdate
  else  if (queryObject["startdate"] && !queryObject["enddate"]){
    stringSearch += queryObject["startdate"] + " - Today";
  }
  // only enddate
  else if (!queryObject["startdate"] && queryObject["enddate"]){
    stringSearch += 'Before: ' + queryObject["enddate"];
  }

  // if either startdate or enddate are there
  if (queryObject["startdate"] || queryObject["enddate"]){
    if (queryObject["category"]) 
      stringSearch += ", " + queryObject["category"];
    if (queryObject["location"])
      stringSearch += ", " + queryObject["location"];
  }
  // if neither startdate or enddate are there
  else if (!queryObject["startdate"] && !queryObject["enddate"]){
    if (queryObject["category"]) 
    stringSearch += queryObject["category"];
    // category and location
    if (queryObject["location"] && queryObject["category"])
      stringSearch += ", " + queryObject["location"];
    // only location 
    else if (queryObject["location"] && !queryObject["category"])
    stringSearch += queryObject["location"];
  }
  console.log(stringSearch);
  return(stringSearch);

} 

function LostItemBoardContainer() {

  const context = useContext(ThemeContext);
  const query = new URLSearchParams(useLocation().search);

  // const [searchText, setSearchText] = useState(MOCKED_DATA.searchText);
  const [itemsData, setItemsData] = useState(MOCKED_DATA.itemsData);

  let searchText = parseQuery(query);

  return (
    <LostItemBoardScreen
      setBgColor={context.changeThemeColor}
      searchText={searchText}
      itemsData={itemsData}
    />
  )

}

export { LostItemBoardContainer };
