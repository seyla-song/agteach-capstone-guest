import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandableText from '../ExpandableText';

/**
 * A component that renders a course about section.
 *
 * It displays a heading, "Indoor Gardening and Hydroponics", and an expandable text
 * component with a description of the course, and a link to the instructor.
 *
 * @returns {React.ReactElement} The course about component.
 */
export const CourseAboutComponent = () => {
  return (
    <Stack gap>
      <Typography variant="h3">Indoor Gardening and Hydroponics</Typography>
      <ExpandableText text="Explore the diverse world of hydroponics through a comprehensive and hands-on approach. Dive into various types of hydroponic setups, from nutrient film technique (NFT) and deep water culture (DWC) to drip systems and aeroponics. Gain a thorough understanding of nutrient solutions, including the essential components for optimal plant growth and how to formulate and adjust them based on plant needs. Learn about advanced lighting techniques and technologies, such as LED grow lights and their impact on plant development. Acquire practical skills in plant care and maintenance, addressing common challenges and troubleshooting methods. Apply your knowledge in hands-on projects where you will design, build, and customize your own personal hydroponic garden, allowing you to create an efficient and productive growing environment tailored to your specific needs." />
      <Typography variant="bxsr">
        Created by: <Link> Emily Greene</Link>
      </Typography>
    </Stack>
  );
};
