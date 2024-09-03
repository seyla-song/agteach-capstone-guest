import { Button, Stack, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export const ImageScan = () => {
  return (
    <Stack
      bgcolor="grey.100"
      width="100%"
      py={5}
      gap={2}
      justifyContent="center"
      alignItems="center"
    >
      <ImageIcon sx={{ width: 200, height: 200 }} />
      <Typography variant="bsr" color="initial">
        Drag an image here or upload a file
      </Typography>
      <Button
        variant="contained"
        color="primary"
        endIcon={<FileUploadOutlinedIcon />}
      >
        Upload
      </Button>
    </Stack>
  );
};
