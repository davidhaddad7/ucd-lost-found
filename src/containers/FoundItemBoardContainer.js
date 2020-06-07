import React, { Component } from 'react';
import { FoundItemBoardScreen } from '../components';
import { ThemeContext } from '../lib';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";





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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
class FoundItemBoardContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: MOCKED_DATA.searchText,
      itemsData: MOCKED_DATA.itemsData
    }
  }
    
  render() {
    let query = useQuery();
    return (
      <FoundItemBoardScreen
        setBgColor={this.context.changeThemeColor}
        searchText={this.state.searchText}
        itemsData={this.state.itemsData}
      />

      <queryTitle title={query.get("title")}/> 
      // description={query.get("description")}
      // id={query.get("description")}
      // category={query.get("description")}
      // date={query.get("date")}
      // ></queryTitle>
    );
  }
}



FoundItemBoardContainer.contextType = ThemeContext;

export { FoundItemBoardContainer };

// const queryArray = ["title" , "category","description","date","id"];
function queryTitle({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}
