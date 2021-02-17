import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#0077b5',
    },
    secondary: {
      main: '#72B357',
      contrastText: '#fff',
    },
  },
});
