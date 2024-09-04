import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import puSok from "../../assets/ProductDetail/pu-sok.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const SELLER_DATA = {
  shop: "Pu Sok Farm",
  location: "Kep, Kampot, Cambodia",
  image: puSok,
};

/**
 * SellerComponent renders a component that displays seller information
 * @function
 * @returns {React.ReactElement} A JSX element that renders a seller component
 */
export default function SellerComponent() {
  const [wishlist, setWishlist] = useState(false);

  /**
   * A React component that displays seller information and allows users to add or remove the seller from their wishlist.
   *
   * @return {JSX.Element} The JSX element representing the seller component
   */
  const handleWishlistButton = () => {
    setWishlist((wishlist) => !wishlist);
  };
  return (
    <Stack spacing={1.5}>
      <Divider />
      <Box
        sx={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
      >
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
      <Divider />

    </Stack>
  );
}
