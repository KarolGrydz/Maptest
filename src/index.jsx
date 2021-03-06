import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { CssBaseline } from '@material-ui/core';
import theme from './theme';
import App from './App';
import './App.css';

ReactDOM.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={createMuiTheme(theme)}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
