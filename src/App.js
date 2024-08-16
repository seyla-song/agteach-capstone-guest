import React from 'react';
import './App.css';
import { Button, Typography, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';

function App() {
  return (
  <ThemeProvider theme={theme}>
      <Typography variant='h1' color='primary' >Hi there</Typography>
      <Button variant='outlined' color='secondary'>Click Me</Button>
    </ThemeProvider>
  )
}

export default App;


