import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { NavBar } from '../components';
import {
  FoundItemScreenContainer,
  FoundItemBoardContainer,
  LostItemScreenContainer,
  LostItemBoardContainer,
  FoundItemMapScreenContainer,
  HomeScreenContainer
} from '.';


function Dummy() {
  return <h2>Dummy</h2>;
}

export const AppRouter = () => {
  return (
    <Router>
      <NavBar logoRoutePath="/" />
      <Route exact path="/" component={HomeScreenContainer} />
      <Route exact path="/found-item" component={FoundItemScreenContainer} />
      <Route exact path="/found-item-map/:id" component={FoundItemMapScreenContainer} />
      <Route exact path="/found-items-board" component={FoundItemBoardContainer} />
      <Route exact path="/found-items-search" component={Dummy} />
      <Route exact path="/lost-item" component={LostItemScreenContainer} />
      <Route exact path="/lost-item-map/:id" component={Dummy} />
      <Route exact path="/lost-items-board" component={LostItemBoardContainer} />
      <Route exact path="/lost-items-search" component={Dummy} />
    </Router>
  );
}
