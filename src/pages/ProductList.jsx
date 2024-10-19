import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  clearCart,
  removeItemFromCart,
  updateItemQuantity,
} from '../features/cart/cartSlice';

export const ProductList = () => {
  const products = [
    { id: 1, name: 'Grow lights - LED', price: 17 },
    { id: 2, name: 'Wildflower Seed Mix', price: 32 },
    { id: 3, name: 'Garden Fork V2', price: 12 },
  ];

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    try {
      dispatch(addItemToCart({ productId }));
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };
  const handleClearCart = () => {
    try {
      dispatch(clearCart());
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  const handleIncreament = (productId, quantity) => {
    dispatch(updateItemQuantity({ productId, quantity: quantity + 1 }));
  };
  const handleDecreament = (productId, quantity) => {
    if (quantity > 1)
      dispatch(updateItemQuantity({ productId, quantity: quantity - 1 }));
  };

  const handleItemRemove = (productId) => {
    dispatch(removeItemFromCart({ productId }));
  };

  return (
    <Container>
      <Stack gap={2}>
        <Typography>Product List</Typography>
        {products.map((product) => (
          <Stack bgcolor="yellow" direction="row" gap={10}>
            <Stack width="100%">
              <Typography>{product.name}</Typography>
              <Typography>{product.price}</Typography>
            </Stack>
            <Button
              onClick={() => handleAddToCart(product.id)}
              variant="contained"
            >
              Add to cart
            </Button>
          </Stack>
        ))}
        <Divider />
        <Button onClick={handleClearCart} variant="outlined">
          Clear Storage
        </Button>
        <Divider />
        <Typography>Number of Items: {cart.total} </Typography>
        <Divider />
        <Typography>My Cart</Typography>
        {cart.items.map((item) => (
          <Box>
            <Typography>{item.productId}</Typography>
            <Typography>{item.quantity}</Typography>
            <Stack direction="row">
              <Button
                variant="outlined"
                onClick={() => handleDecreament(item.productId, item.quantity)}
              >
                -
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleIncreament(item.productId, item.quantity)}
              >
                +
              </Button>
            </Stack>
            <Button
              onClick={() => handleItemRemove(item.productId)}
              variant="outlined"
            >
              Remove
            </Button>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};
