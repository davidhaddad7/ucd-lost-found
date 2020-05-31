import React from 'react';
import './styles.css';
import { AppRouter } from '../../containers';

export const App  = (props) => {
  return (
    <div id="globalContainer">
      <div id="innerGlobalContainer">
        <AppRouter />
      </div>
    </div>
  );
};
