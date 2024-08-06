import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TabManager from './components/TabManager';
import useThemeMode from './useThemeMode';

const App = () => {
  const isDarkMode = useThemeMode();

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: isDarkMode ? '#121212' : '#f4f6f8',
      },
    },
    typography: {
      h1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <h1>Tab Manager</h1>
        <TabManager />
      </Container>
    </ThemeProvider>
  );
};

export default App;
