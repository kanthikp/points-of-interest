import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import LightTheme from './themes/light.theme';
import DarkTheme from './themes/dark.theme';

import Main from './components/Main';
import { FormControlLabel, Switch } from '@material-ui/core';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      {/* <FormControlLabel
        control={<Switch checked={isDark} onChange={() => setIsDark(!isDark)} aria-label="login switch" />}
        label={isDark ? 'Dark' : 'Light'}
      /> */}

      <MuiThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <Main />
      </MuiThemeProvider>
    </>
  );
}

export default App;
