// CustomModal.js
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 6,
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
        <Stack sx={style}>
          <Stack direction="column" alignItems="end">
            {children}
          </Stack>
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
        </Stack>
      </Modal>
    </div>
  );
}
