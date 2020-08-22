import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const { blueGrey: baseThemeColor } = colors;

const theme = createMuiTheme({
  palette: {
    background: {
      dark: baseThemeColor[50],
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      primary: baseThemeColor[900],
      secondary: baseThemeColor[500]
    }
  },
  shadows,
  typography
});

export default theme;
