import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green} from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Bookman, URW Bookman L, serif',
  },
});

theme = responsiveFontSizes(theme);

export default theme;