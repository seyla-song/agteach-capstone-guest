// CustomModal.js
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({
  open,
  onClose,
  title,
  description,
  children,
  showButton = false,
  buttonText = 'Open Modal',
}) {
  return (
    <div>
      {showButton && <Button onClick={onClose}>{buttonText}</Button>}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          {title && (
            <Typography id="modal-title" variant="h6" component="h2">
              {title}
            </Typography>
          )}
          {description && (
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {description}
            </Typography>
          )}
          {children}
        </Box>
      </Modal>
    </div>
  );
}
