import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearCart } from '../features/cart/cartSlice';

export const ProductList = () => {
  const products = [
    { id: 1, name: 'Grow lights - LED', price: 17 },
    { id: 2, name: 'Wildflower Seed Mix', price: 32 },
    { id: 3, name: 'Garden Fork V2', price: 12 },
  ];

  const dispatch = useDispatch();


  const handleAddToCart = (productId) => {
    try {
      dispatch(addItem({ productId }));
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
        <Divider/>
        <Button onClick={handleClearCart} variant="outlined">
          Clear Storage
        </Button>
        <Divider/>
        <Typography>Number of Items: </Typography>
        <Divider/>
      </Stack>
    </Container>
  );
};
