import { CircularProgress, Stack, Typography } from '@mui/material';

export const ItemsLoading = () => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <CircularProgress size={10} />
      <Typography variant="bxsr">Getting purchased items...</Typography>
    </Stack>
  );
};
