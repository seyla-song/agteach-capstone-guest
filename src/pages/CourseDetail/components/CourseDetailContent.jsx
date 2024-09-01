import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CourseDetailContent = () => {
  return (
    <Grid item xs={12}>
      <Stack gap={2} py={10}>
        <Stack>
          <Typography variant="h4">Course Content</Typography>
          <Typography variant="bxsr">
            20 sections • 60 videos • 30h total length
          </Typography>
        </Stack>
        <Stack>
          {courses.map((course) => (
            <Accordion
              key={course.title}
              sx={{ backgroundColor: 'grey.200', py: 2, boxShadow: 'none' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="bmdsm">{course.title}</Typography> (
                {course.duration})
              </AccordionSummary>
              {course.topics.map((topic) => (
                <AccordionDetails
                  key={topic.title}
                  sx={{ backgroundColor: 'white', px: 5 }}
                >
                  <Stack direction="row" justifyContent="space-between" py={2}>
                    <Typography>{topic.title}</Typography>
                    <Typography>{topic.duration}</Typography>
                  </Stack>
                  <Divider />
                </AccordionDetails>
              ))}
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </Grid>
  );
};

const courses = [
  {
    title: 'Introduction to Indoor Gardening',
    duration: '35min',
    topics: [
      { title: 'Overview of indoor gardening', duration: '10min' },
      { title: 'Benefits and Challenges', duration: '15min' },
      { title: 'Course Objectives and Structure', duration: '10min' },
    ],
  },
  {
    title: 'Setting Up Your Hydroponic System',
    duration: '35min',
    topics: [
      { title: 'Overview of hydroponic systems', duration: '10min' },
      { title: 'Setting Up Equipment', duration: '15min' },
      { title: 'System Maintenance', duration: '10min' },
    ],
  },
  {
    title: 'Understanding Nutrients',
    duration: '35min',
    topics: [
      { title: 'Essential Nutrients', duration: '15min' },
      { title: 'Nutrient Solutions', duration: '10min' },
      { title: 'Common Deficiencies', duration: '10min' },
    ],
  },
  {
    title: 'Plant Selection and Preparation',
    duration: '35min',
    topics: [
      { title: 'Choosing the Right Plants', duration: '15min' },
      { title: 'Preparing Seeds and Seedlings', duration: '10min' },
      { title: 'Soil and Growing Mediums', duration: '10min' },
    ],
  },
  {
    title: 'Lighting for Indoor Plants',
    duration: '35min',
    topics: [
      { title: 'Types of Grow Lights', duration: '15min' },
      { title: 'Light Duration and Intensity', duration: '10min' },
      { title: 'Positioning Lights', duration: '10min' },
    ],
  },
  {
    title: 'Temperature and Humidity Control',
    duration: '35min',
    topics: [
      { title: 'Optimal Temperature Ranges', duration: '10min' },
      { title: 'Humidity Requirements', duration: '10min' },
      { title: 'Monitoring and Adjusting Conditions', duration: '15min' },
    ],
  },
  {
    title: 'Water Management',
    duration: '35min',
    topics: [
      { title: 'Watering Techniques', duration: '15min' },
      { title: 'Water Quality and pH Levels', duration: '10min' },
      { title: 'Irrigation Systems', duration: '10min' },
    ],
  },
  {
    title: 'Pest and Disease Management Part I',
    duration: '35min',
    topics: [
      { title: 'Identifying Common Pests', duration: '10min' },
      { title: 'Preventive Measures', duration: '15min' },
      { title: 'Treatment Options', duration: '10min' },
    ],
  },
  {
    title: 'Pest and Disease Management Part II',
    duration: '35min',
    topics: [
      { title: 'Identifying Common Diseases', duration: '10min' },
      { title: 'Disease Prevention Strategies', duration: '15min' },
      { title: 'Advanced Treatment Methods', duration: '10min' },
    ],
  },
];
