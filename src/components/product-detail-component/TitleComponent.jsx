import { Box, Typography } from "@mui/material";

const TITLE_DATA = {
  product: "Grow Lights - LED or fluorescent grow lights",
  price: "$10.00",
};

const typographyStyle = { typography: { xs: "blgsm", md: "h3" } };
export default function TitleComponent() {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography sx={typographyStyle}>{TITLE_DATA.product}</Typography>
      <Typography sx={typographyStyle}>{TITLE_DATA.price}</Typography>
    </Box>
  );
}
