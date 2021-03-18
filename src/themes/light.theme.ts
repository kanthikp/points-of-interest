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
    }
  },
  typography: {
    fontFamily: 'sans-serif'
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: `${Colors.LIGHT_BACKGROUND_PANEL}`,
        '&:focus': {
          borderColor: '#d0021b'
        }
      }
    },

    MuiContainer: {
      root: {
        backgroundColor: `${Colors.LIGHT_BACKGROUND}`
      }
    }
  }
});
