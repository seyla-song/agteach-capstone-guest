import { Box, Stack, Typography } from '@mui/material';

export const SuggestProductCourse = () => {
  return (
    <Stack gap={5}>
      <Stack>
        <Typography>People also learn this course</Typography>
        <Box>Get Components from chitra</Box>
      </Stack>
      <Stack>
        <Typography>
          You might want to buy the product related to this course
        </Typography>
        <Box>Get Components from chitra</Box>
      </Stack>
    </Stack>
  );
};
