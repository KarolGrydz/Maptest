const theme = {
  palette: {
    primary: {
      light: '#7d8172',
      main: '#515547',
      dark: '#292c20',
      contrastText: '#fff',
    },
    secondary: {
      light: '#dae954',
      main: '#a6b71b',
      dark: '#738700',
      contrastText: '#000',
    },
  },
  typography: {
    h1: {
      fontSize: '6rem',
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '3rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
  },
};

theme.overrides = {
};

export default theme;
