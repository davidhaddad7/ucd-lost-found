import React, { Component } from 'react';
import { BoardItem, Header, SearchLine } from '..';
import { Colors } from '../../lib';

class LostItemBoardScreen extends Component {

  constructor(props) {
    super(props);
    props.setBgColor(Colors.white);
    const { searchText, itemsData } = this.props;
    this.state = { searchText, itemsData };
  }

  renderBoardItems() {
    return this.state.itemsData.map(item => (
      <BoardItem
        key={item.id}
        bgColor={Colors.lightBlue}
        itemData={item}
      />
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

export { LostItemBoardScreen };
