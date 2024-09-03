import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import puSok from "../../assets/ProductDetail/pu-sok.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const SELLER_DATA = {
  shop: "Pu Sok Farm",
  location: "Kep, Kampot, Cambodia",
  image: puSok,
};

export default function SellerComponent() {
  const [wishlist, setWishlist] = useState(false);

  const handleWishlistButton = () => {
    setWishlist((wishlist) => !wishlist);
  };
  return (
    <Box sx={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
      <Stack direction="row" alignItems="center">
        <Avatar src={SELLER_DATA.image} />
        <Stack direction="column" sx={{ marginLeft: 2 }}>
          <Typography variant="bmdsm">{SELLER_DATA.shop}</Typography>
          <Typography variant="bxsr" color="dark.200">
            {SELLER_DATA.location}
          </Typography>
        </Stack>
      </Stack>

      <IconButton onClick={handleWishlistButton}>
        {wishlist ? <FavoriteIcon color="red" /> : <FavoriteBorderIcon />}
      </IconButton>
    </Box>
  );
}
