import { Typography, Container, Stack } from '@mui/material';
import theme from '../theme/theme';
import { ImageScan } from '../components/AgAi/ImageScan';

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
          <ImageScan />

        </Stack>
      </Stack>
    </Container>
  );
}

export default AgAiPage;
