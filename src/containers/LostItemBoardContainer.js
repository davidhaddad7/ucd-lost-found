import React, { Component, useState, useContext, useEffect } from 'react';
import { LostItemBoardScreen } from '../components';
import { ThemeContext , GetItemsData} from '../lib';
import { useLocation } from "react-router-dom";
import { parseQuery }  from "../lib";

function LostItemBoardContainer() {

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
    <LostItemBoardScreen
      setBgColor={context.changeThemeColor}
      searchText={searchText}
      itemsData={itemsData}
    />
  )

}

export { LostItemBoardContainer };
