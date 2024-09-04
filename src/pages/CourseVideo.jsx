import { Stack } from '@mui/material';
import TimerIcon from '@mui/icons-material/TimerOutlined';
import {
  CourseVideoHeaderComponent,
  CourseVideoMainContent,
  CourseVideoSidebar,
} from '../components/CourseVideo/index';

/**
 * The course video page.
 *
 * This page will display the course video, together with the sidebar containing
 * the course details and the course outline.
 *
 * @returns {React.ReactElement} The course video page.
 */
function CourseVideoPage() {
  return (
    <Stack>
      {/* The course video header */}
      <CourseVideoHeaderComponent title={'Course Video'} />
      {/* The course video main content and sidebar */}
      <Stack direction="row">
        {/* The main content containing the video */}
        <CourseVideoMainContent data={highlights} />
        {/* The sidebar containing the course details and outline */}
        <CourseVideoSidebar data={courses} />
      </Stack>
    </Stack>
  );
}

export default CourseVideoPage;

const highlights = [
  {
    title: 'Sections',
    icons: <TimerIcon fontSize="small" />,
    value: 20,
  },
  {
    title: 'Hours',
    icons: <TimerIcon fontSize="small" />,
    value: 20,
  },
  {
    title: 'Vidoes',
    icons: <TimerIcon fontSize="small" />,
    value: 20,
  },
];

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
