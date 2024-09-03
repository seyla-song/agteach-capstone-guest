import { Typography, Button, Container, Stack } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import theme from '../theme/theme';
function AgAiPage() {
  return (
    <Container>
      <Stack gap={5} mt={10}>
        <Stack>
          <Typography variant="h3">
            Identify a plant disease with us{' '}
          </Typography>
          <Typography variant="bxsmd">
            Find out the problem, symptom, and cure
          </Typography>
        </Stack>
        <Stack
          border={`1px dotted ${theme.palette.grey[300]}`}
          alignItems="center"
          borderRadius={3}
          gap={3}
          p={5}
        >
          <Typography variant="bmdsm" color="initial">
            Search any plant with AgAI
          </Typography>
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
        </Stack>
      </Stack>
    </Container>
  );
}

export default AgAiPage;
