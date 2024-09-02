import { Box, Stack, Typography } from '@mui/material';

export const CustomCard = ({ dataObj, variant }) => {
  const cardVariant = () => {
    switch (variant) {
      case 'product':
        return (
          <Box pr>
            <Box
              width="100%"
              component="img"
              src={dataObj.image}
              alt={dataObj.name}
            />
            <Stack p>
              <Typography variant="bmdmd">{dataObj.name}</Typography>
              <Typography variant="bsr">{dataObj.price}</Typography>
            </Stack>
          </Box>
        );
      default:
        return (
          <Box pr>
            <Box
              width="100%"
              component="img"
              src={dataObj.image}
              alt={dataObj.name}
            />
            <Stack p>
              <Typography variant="bmdmd">{dataObj.name}</Typography>
              <Typography variant="bsr">{dataObj.instructor}</Typography>
            </Stack>
          </Box>
        );
    }
  };
  return cardVariant();
};
