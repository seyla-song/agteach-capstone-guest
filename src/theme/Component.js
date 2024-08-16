import { textTransform } from '@mui/system';
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
