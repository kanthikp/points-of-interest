import Colors from './colors';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();

export default createMuiTheme({
  palette: {
    primary: {
      main: Colors.DARK_PRIMARY_MAIN
    },
    secondary: {
      main: Colors.DARK_SECONDARY_MAIN
    },
    text: {
      primary: Colors.DARK_FONT_PRIMARY,
      secondary: Colors.DARK_FONT_SECONDARY
    }
  },
  typography: {
    fontFamily: 'sans-serif'
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: `${Colors.DARK_BACKGROUND_PANEL}`,
        '&:focus': {
          borderColor: '#d0021b'
        }
      }
    },

    MuiContainer: {
      root: {
        backgroundColor: `${Colors.DARK_BACKGROUND}`
      }
    }
  }
});
