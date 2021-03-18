import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import LightTheme from './themes/light.theme';
import Darktheme from './themes/dark.theme';

import Main from './components/Main';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={Darktheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
