import React from 'react';
import { Colors } from '../lib';

export const ThemeContext = React.createContext({
  themeColor: Colors.white,
  changeThemeColor: () => {}
});
