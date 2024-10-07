import { Box, Typography } from "@mui/material";

const TITLE_DATA = {
  product: "Grow Lights - LED or fluorescent grow lights",
  price: "$10.00",
};

const typographyStyle = { typography: { xs: "blgsm", md: "h3" } };

/**
 * A reusable React component that displays the title and price of a product.
 *
 * @return {JSX.Element} A JSX element that renders the title and price of a product.
 */

export default function TitleComponent({ title, price }) {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography sx={typographyStyle}>{TITLE_DATA.product}</Typography>
      <Typography sx={typographyStyle}>{TITLE_DATA.price}</Typography>
    </Box>
  );
}
