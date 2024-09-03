import { Typography, Button, Container, Stack } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import theme from '../theme/theme';
import { DiseaseInfoComponent } from '../components/AgAi/DiseaseInfoComponent';
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
          <DiseaseInfoComponent />
        </Stack>
      </Stack>
    </Container>
  );
}

export default AgAiPage;

const plantDiseaseInfo = {
  plant: 'Brandywine Tomato',
  problem: {
    title: 'Problem',
    description: 'Late Blight (Phytophthora infestans)',
  },
  symptoms: {
    title: 'Symptoms',
    details: [
      'Irregular, water-soaked spots on leaves and stems that turn brown and necrotic.',
      'Fruits may develop dark, sunken lesions.',
    ],
  },
  cureManagement: {
    title: 'Cure/Management',
    recommendations: [
      'Resistant Varieties: Use late blight-resistant varieties if available.',
      'Fungicides: Apply metalaxyl or mefenoxam-based fungicides as a preventative measure.',
      'Cultural Control: Remove and destroy infected plants and maintain good air circulation. Avoid overhead watering.',
    ],
  },
};
