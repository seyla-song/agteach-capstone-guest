import logo from './logo.svg';
import './App.css';
import { colorPalette } from './theme/Color.js'
import { Button, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = colorPalette();
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ bgcolor: theme => theme.palette.blue.main, p: 2 }}>
        <Typography variant="h6" color="textPrimary">
            Color Theme!
        </Typography>
    </Box>
        <Button
        color= 'grey'
        variant='contained'
        >clickMe</Button>
    </ThemeProvider>



  );
}

export default App;
