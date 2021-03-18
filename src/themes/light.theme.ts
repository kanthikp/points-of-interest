import Colors from './colors';
import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    primary: {
      main: Colors.LIGHT_PRIMARY_MAIN
    },
    secondary: {
      main: Colors.LIGHT_SECONDARY_MAIN
    },
    text: {
      primary: Colors.LIGHT_FONT_PRIMARY,
      secondary: Colors.LIGHT_FONT_SECONDARY
    },
    error: {
      main: '#d0021b'
    }
  },
  typography: {
    fontFamily: 'sans-serif'
  }
});
