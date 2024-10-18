import { CircularProgress, Stack, Typography } from '@mui/material';

export const ItemsLoading = ({ title }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <CircularProgress size={10} />
      <Typography variant="bxsr">Getting {title} items...</Typography>
    </Stack>
  );
};
