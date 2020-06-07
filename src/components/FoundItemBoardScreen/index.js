import React, { Component } from 'react';
import { BoardItem, Header, SearchLine } from '..';
import { Colors } from '../../lib';


export const FoundItemBoardScreen = (props) => {

  const { setBgColor,  searchText, itemsData } = props;

  props.setBgColor(Colors.white);

  return (
    <section>
      <Header text="Showing results for" />
      <SearchLine text={searchText} />
      {
        itemsData.map(item => (
          <BoardItem
            key={item.id}
            bgColor={Colors.lightOrange}
            itemData={item}
          />
        ))
      }
    </section>
  );
}
