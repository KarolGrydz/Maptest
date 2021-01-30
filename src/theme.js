const theme = {
  palette: {
    primary: {
      light: '#b28e67',
      main: '#81613c',
      dark: '#523714',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d7aa79',
      main: '#a47b4c',
      dark: '#734f22',
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

theme.overrides = {};

export default theme;
