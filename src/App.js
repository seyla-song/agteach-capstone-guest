

// import logo from './logo.svg';
// import './App.css';
// import { colorPalette } from './theme/Color.js'
// import { Button, Typography, Box } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// function App() {
//   const theme = colorPalette();
//   return (
//     <ThemeProvider theme={theme}>
//     <Box sx={{ bgcolor: theme => theme.palette.blue.main, p: 2 }}>
//         <Typography variant="h6" color="textPrimary">
//             Color Theme!
//         </Typography>
//     </Box>
//         <Button
//         color= 'grey'
//         variant='contained'
//         >clickMe</Button>
//     </ThemeProvider>
    
//   );
//  }

// export default App;

////////////////////////////////////////

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { colorPalette } from './theme/Color.js';
// import TypographyTheme from './theme/Typography'; // Import your typography theme
// import { Button, Typography, Box } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// function App() {
//   // Create the color theme
//   const colorTheme = colorPalette();

//   // Combine the color theme with the typography theme
//   const theme = createTheme({
//     ...colorTheme,
//     typography: TypographyTheme, // Add the typography theme here
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ bgcolor: theme => theme.palette.blue.main, p: 2 }}>
//         <Typography variant="h6" color="textPrimary">
//           Color Theme!
//         </Typography>
//       </Box>
//       <Button color='grey' variant='contained'>
//         clickMe
//       </Button>
//     </ThemeProvider>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import { Button, Typography, Box } from '@mui/material';
import theme from './theme/theme.js';
import { ThemeProvider } from '@emotion/react';

// import UsingColorObject from './theme/example.js';

function App() {
  return (
  <ThemeProvider theme={theme}>
      <Typography variant='h1' color='primary' >Hi there</Typography>
      <Button variant='outlined' color='secondary'>Click Me</Button>
    </ThemeProvider>
  )
}

export default App;


