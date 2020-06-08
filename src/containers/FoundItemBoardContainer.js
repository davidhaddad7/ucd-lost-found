import React, { Component, useState, useContext, useEffect } from 'react';
import { FoundItemBoardScreen } from '../components';
import { ThemeContext , GetItemsData} from '../lib';
import { useLocation } from "react-router-dom";
import { parseQuery }  from "../lib";

function FoundItemBoardContainer() {

  const context = useContext(ThemeContext);
  const query = new URLSearchParams(useLocation().search);
  const queryIDList = query.get("ids");
  const searchText = parseQuery(query);

  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    GetItemsData(queryIDList)
      .then((data) => {
        console.log(data);
        setItemsData(data);
      })
  }, []);

  return (
    <FoundItemBoardScreen
      setBgColor={context.changeThemeColor}
      searchText={searchText}
      itemsData={itemsData}
    />
  )

}

export { FoundItemBoardContainer };
