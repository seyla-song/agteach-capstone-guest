// const component = {
// }
// export default component

import { textTransform } from '@mui/system';

// import React from 'react';
// import { Typography, Button, Box } from '@mui/material';

// const CustomComponent = () => {
//   return (
//     <Box sx={{ padding: '20px', backgroundColor: 'grey.100' }}>
//       <Typography variant="h1" color="primary.main">
//         Welcome to My Custom Theme
//       </Typography>
//       <Typography variant="body1" color="secondary.main">
//         This is a body1 text styled with the custom theme.
//       </Typography>
//       <Button variant="contained" color="red.main">
//         Custom Button
//       </Button>
//     </Box>
//   );
// }

// export default CustomComponent;

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
    defaultProps: {
      disableRipple: true,
    },
  },
};

export default components;
