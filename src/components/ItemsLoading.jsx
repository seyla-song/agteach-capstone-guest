import { CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const ItemsLoading = ({ title }) => {
  const [t] = useTranslation('global');
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <CircularProgress size={10} />
      <Typography variant="bxsr">{t("contentLoading.gettingContent", { title })}</Typography>
    </Stack>
  );
};
