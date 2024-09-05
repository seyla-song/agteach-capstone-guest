import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <Typography variant="h4">Your Cart</Typography>
      <Typography variant="body1">Please review your cart before payment</Typography>
      <Box
        sx={{
          height: 200,
          width: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="https://via.placeholder.com/200" alt="cart" />
      </Box>
      <Link to='/payment'>Pay</Link>
    </>
  );
}

export default CartPage;
