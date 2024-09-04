import { Button, Stack, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

/**
 * A component that renders a course video header.
 *
 * @param {string} title The title of the course video.
 * @returns {React.ReactElement} A `Stack` component with the course video header.
 */
export const CourseVideoHeaderComponent = ({ title }) => {
  return (
    <Stack
      p={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      bgcolor='primary.dark'
    >
      <Stack color='common.white' direction="row" alignItems="center" gap={3}>
        <Button  variant="teritary" startIcon={<ChevronLeftIcon />}>
          <Typography variant="bmdr"> Back</Typography>
        </Button>
        <Typography>|</Typography>
        <Typography variant="bmdr">{title}</Typography>
      </Stack>
      {/* Progress bar of course video */}
      <Stack bgcolor='secondary.main' px={3} py={1} borderRadius='10px'>
        <Typography variant='blgsm'>50%</Typography>
      </Stack>
    </Stack>
  );
};
