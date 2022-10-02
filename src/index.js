import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';
import store from './app/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#28f6f3',
    },
    secondary: {
      light: '#0066ff',
      main: '#bf0bcc',
      contrastText: '#ffcc00',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
);
