import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useNavigate } from "react-router";

/**
 * SellerComponent renders a component that displays seller information
 * @function
 * @returns {React.ReactElement} A JSX element that renders a seller component
 */
export default function SellerComponent({ seller }) {
  const [wishlist, setWishlist] = useState(false);
  const navigate = useNavigate();

  const goToInstructorProfile = (id) => navigate(`/instructor-profile/${id}`);

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
          <Avatar sx={{cursor: 'pointer'}} src={seller.image_url} onClick={() => goToInstructorProfile(seller.instructorId)}/>
          <Stack direction="column" sx={{ marginLeft: 2 }}>
            <Typography sx={{cursor: 'pointer'}} variant="bmdsm" onClick={() => goToInstructorProfile(seller.instructorId)}>{seller.firstName + " " + seller.lastName}</Typography>
            <Typography variant="bxsr" color="dark.200">
              {/* will fix later */}
              {'Kep, Kampot, Cambodia'}
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
