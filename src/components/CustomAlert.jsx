import { Alert, IconButton, Snackbar, Typography } from '@mui/material';
import Close from '@mui/icons-material/Close';

/**
 * CustomAlert component
 * @description A component that renders a snackbar with a filled error Alert and a close button.
 * The snackbar is placed at the top right of the screen and will automatically close after 4 seconds.
 * The `label` prop is the text to be displayed in the Alert.
 * The `open` prop is a boolean that determines if the snackbar is open or not.
 * The `onClose` prop is a function that is called when the close button is clicked or the snackbar is automatically closed after 4 seconds.
 * @param {string} label - The text to be displayed in the Alert
 * @param {boolean} open - Whether or not the snackbar is open
 * @param {function} onClose - Function to be called when the close button is clicked or the snackbar is automatically closed after 4 seconds
 * @returns {ReactElement} A JSX element representing a snackbar with a filled error Alert and a close button
 */
export const CustomAlert = ({ label, open, onClose }) => {
  return (
    <Snackbar
      // Auto hide duration is 4 seconds
      open={open}
      autoHideDuration={4000}
      // Place the snackbar at the top right of the screen
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={onClose}
    >
      <Alert
        // Make the alert have a filled style
        variant="filled"
        // Make the alert red
        severity="error"
        // Set the width of the alert to 500px
        width={500}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <Close />
          </IconButton>
        }
      >
        <Typography variant="bsr">{label}</Typography>
      </Alert>
    </Snackbar>
  );
};
