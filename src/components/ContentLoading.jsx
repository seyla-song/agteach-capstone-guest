import { CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const ContentLoading = () => {
  const [t] = useTranslation('global');
  return (
    <Stack
      height={'100vh'}
      justifyContent="center"
      direction="row"
      alignItems="center"
      gap={3}
    >
      <CircularProgress size={20} />
      <Typography>{t('contentLoading.justAMoment')}</Typography>
    </Stack>
  );
};
