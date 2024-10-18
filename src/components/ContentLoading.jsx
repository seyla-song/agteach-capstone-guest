import { CircularProgress, Stack, Typography } from '@mui/material';

export const ContentLoading = () => {
  return (
    <Stack
      height={'100vh'}
      justifyContent="center"
      direction="row"
      alignItems="center"
      gap={3}
    >
      <CircularProgress size={20} />
      <Typography>Just a moment</Typography>
    </Stack>
  );
};
