import { Stack, Typography } from '@mui/material';
import { CourseAccordionComponent } from '../../../components/CourseAccordionComponent';
export const CourseVideoSidebar = ({ data }) => {
  return (
    <Stack
      sx={{
        width: '400px',
        height: '100vh',
        bgcolor: 'grey.100',
        position: 'sticky',
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
