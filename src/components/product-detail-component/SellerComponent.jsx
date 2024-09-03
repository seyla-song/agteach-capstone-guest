import { Avatar, Box, Stack, Typography } from "@mui/material";
import puSok from "../../assets/ProductDetail/pu-sok.png";
import addToWishlist from "../../assets/ProductDetail/add-to-wishlist.png";

const SELLER_DATA = {
  shop: "Pu Sok Farm",
  location: "Kep, Kampot, Cambodia",
  image: puSok,
};

export default function SellerComponent() {
  return (
    <Box sx={{ display: "flex", gap: "20px", justifyContent: 'space-between' }}>
      <Stack direction="row" alignItems="center">
        <Avatar src={SELLER_DATA.image} />
        <Stack direction="column" sx={{ marginLeft: 2 }}>
          <Typography variant="bmdsm">{SELLER_DATA.shop}</Typography>
          <Typography variant="bxsr" color="dark.200">
            {SELLER_DATA.location}
          </Typography>
        </Stack>
      </Stack>

      <Box component="img" src={addToWishlist} />
    </Box>
  );
}
