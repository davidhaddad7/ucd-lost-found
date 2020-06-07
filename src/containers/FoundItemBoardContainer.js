import React, { Component, useState, useContext } from 'react';
import { FoundItemBoardScreen } from '../components';
import { ThemeContext , GetItemsData} from '../lib';
import {
  useLocation
} from "react-router-dom";
import {parseQuery}  from "./QueryHelpers";

let isInitialized = false;


function FoundItemBoardContainer() {

  const context = useContext(ThemeContext);
  const query = new URLSearchParams(useLocation().search);

  const [itemsData, setItemsData] = useState([]);
  let searchText = parseQuery(query);

  // get IDs
  let queryIDList = query.get("ids");

  GetItemsData(queryIDList)
    .then((retrievedData)=> {

      if (!isInitialized) {
        isInitialized = true;
        setItemsData(retrievedData)
        console.log(retrievedData);
      }
      
    })
    .catch((e) => {
      // handle promises
      alert("query ID List problem");
    });

// alt to constructor using hooks

  // letparseIdQuery(query);

  // console.log(itemsData);

  return (
    <FoundItemBoardScreen
      setBgColor={context.changeThemeColor}
      searchText={searchText}
      itemsData={itemsData}
    />
  )

}

export { FoundItemBoardContainer };

