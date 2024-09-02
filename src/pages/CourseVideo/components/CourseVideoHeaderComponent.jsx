import { Button, Stack, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const CourseVideoHeaderComponent = ({ title }) => {
  return (
    <Stack
      p={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      bgcolor='primary.main'
    >
      <Stack color='common.white' direction="row" alignItems="center" gap={3}>
        <Button  variant="teritary" startIcon={<ChevronLeftIcon />}>
          <Typography variant="bmdr"> Back</Typography>
        </Button>
        <Typography>|</Typography>
        <Typography variant="bmdr">{title}</Typography>
      </Stack>
      <Stack bgcolor='secondary.main' px={3} py={1} borderRadius='10px'>
        <Typography variant='blgsm'>50%</Typography>
      </Stack>
    </Stack>
  );
};
