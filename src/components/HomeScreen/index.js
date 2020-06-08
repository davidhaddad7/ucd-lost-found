import React from 'react';
import { Header, Button } from '..';
import { Colors } from '../../lib';
import './styles.css';

export const HomeScreen = (props) => {

  console.log(props);
  const {
    navigateToNewFoundItemScreen,
    navigateToNewLostItemScreen,
    setBgColor
  } = props;

  setBgColor(Colors.lightBlue);

  const finderBtnStyle = {
    backgroundColor: Colors.darkOrange,
    color: Colors.white
  };

  const seekerBtnStyle = {
    backgroundColor: Colors.medBlue,
    color: Colors.white
  };

  return (
    <div class="home-container">
      <section>
        <Header text="Did you find something?"/>
        <Button
          text="I'm a finder"
          size="big"
          style={finderBtnStyle}
          onClick={navigateToNewFoundItemScreen}
        />
      </section>
      <section>
        <Header text="Or are you looking for something?"/>
        <Button
          text="I'm a seeker"
          size="big"
          style={seekerBtnStyle}
          onClick={navigateToNewLostItemScreen}
        />
      </section>
    </div>
  );
}
