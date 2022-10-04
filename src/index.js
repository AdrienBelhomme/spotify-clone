import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';
import store from './app/store';
import ToggleColorProvider from './components/utils/ToggleColorMode';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#28f6f3',
//     },
//     secondary: {
//       light: '#0066ff',
//       main: '#bf0bcc',
//       contrastText: '#ffcc00',
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ToggleColorProvider>
      <App />
    </ToggleColorProvider>
  </Provider>,
);
