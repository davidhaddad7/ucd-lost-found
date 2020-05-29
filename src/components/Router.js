import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';


function Dummy() {
  return <h2>Dummy</h2>;
}

function MyRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Dummy />
        </Route>
        <Route path="/home">
          <Dummy />
        </Route>
        <Route path="/found-item">
          <Dummy />
        </Route>
        <Route path="/found-item-map">
          <Dummy />
        </Route>
        <Route path="/found-items-board">
          <Dummy />
        </Route>
        <Route path="/found-items-search">
          <Dummy />
        </Route>
        <Route path="/lost-item">
          <Dummy />
        </Route>
        <Route path="/lost-item-map">
          <Dummy />
        </Route>
        <Route path="/lost-items-board">
          <Dummy />
        </Route>
        <Route path="/lost-items-search">
          <Dummy />
        </Route>
      </Switch>
    </Router>
  );
}

export default MyRouter;
