import { Typography, Container, Stack, Alert, Chip, Box } from '@mui/material';
import theme from '../theme/theme';
import { ImageScan } from '../components/AgAi/ImageScan';
import ExpandableText from '../components/ExpandableText';

function AgAiPage() {
  const zipUrl = `${process.env.PUBLIC_URL}/files/test_images.zip`; // Path to your ZIP file
  const zipName = 'test_images.zip'; // Name the ZIP file for download
  return (
    <Container>
      <Stack  gap={5} my={10}>
        <Stack>
          <Typography variant="h3">
            <Chip label="BETA" color="secondary" />
            {` `}
            Plant Disease Detection
          </Typography>
          <Typography variant="bxsmd">
            Find out the problem, symptom, and cure of the plant.
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
        <Alert severity="info">
          <Typography>Note:</Typography>
          <Typography variant="bxsr">
            - These are our test images, which were not exposed to the model
            during training. Use them to see the model in action:{` `}
            <a href={zipUrl} download={zipName}>
              Download
            </a>
            <Box component="br" /> - AgAI can make mistakes. This machine
            learning model works with a limited dataset, and the constrained
            diversity of images from the PlantVillage dataset means it lacks
            generalization. Consequently, the model can only predict 38 classes
            of plants, distinguishing between healthy and diseased plants as
            follows:
            <ExpandableText
              initialLength={10}
              text="Apple Apple
            scab, Apple Black rot, Apple Cedar apple rust, Apple healthy,
            Blueberry healthy, Cherry (including sour) Powdery mildew, Cherry
            (including sour) healthy, Corn (maize) Cercospora leaf spot Gray
            leaf spot, Corn (maize) Common rust, Corn (maize) Northern Leaf
            Blight, Corn (maize) healthy, Grape Black rot, Grape Esca (Black
            Measles), Grape Leaf blight (Isariopsis Leaf Spot), Grape healthy,
            Orange Haunglongbing (Citrus greening), Peach Bacterial spot, Peach
            healthy, Pepper, bell Bacterial spot, Pepper, bell healthy, Potato
            Early blight, Potato Late blight, Potato healthy, Raspberry healthy,
            Soybean healthy, Squash Powdery mildew, Strawberry Leaf scorch,
            Strawberry healthy, Tomato Bacterial spot, Tomato Early Blight,
            Tomato Late blight, Tomato Leaf Mold, Tomato Septoria leaf spot,
            Tomato Spider mites Two-spotted spider mite, Tomato Target Spot,
            Tomato Tomato Yellow Leaf Curl Virus, Tomato Tomato mosaic virus,
            Tomato healthy"
            />
          </Typography>
        </Alert>
      </Stack>
    </Container>
  );
}

export default AgAiPage;
