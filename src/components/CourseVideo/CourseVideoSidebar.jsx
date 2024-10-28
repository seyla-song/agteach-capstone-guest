import { Stack, Typography } from '@mui/material';
import { CourseAccordionComponent } from '../../components/CourseAccordionComponent';
/**
 * A component that renders the sidebar of the course video page.
 *
 * It displays a course content header, followed by the course outline in an
 * accordion.
 *
 * @param {object} data The data for the course outline.
 * @returns {React.ReactElement} The course video sidebar component.
 */
export const CourseVideoSidebar = ({ data }) => {
  return (
    <Stack
      position={{ xs: 'block', md: 'sticky' }}
      height={{ xs: 'fit-content', md: '100vh' }}
      borderLeft={{ xs: 'none', md: '1px solid #000000' }}
      sx={{
        bgcolor: 'grey.100',
        top: 0,
        overflowY: 'auto',
      }}
    >
      <Stack p={2} bgcolor="primary.main" color="common.white">
        <Typography variant="blgsm">Course Content</Typography>
      </Stack>
      <CourseAccordionComponent data={data} />
    </Stack>
  );
};
