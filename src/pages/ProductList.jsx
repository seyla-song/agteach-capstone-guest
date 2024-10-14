import { Box, Button, Container, Stack, Typography } from '@mui/material';

export const ProductList = () => {
  const products = [
    { id: 1, name: 'Grow lights - LED', price: 17 },
    { id: 2, name: 'Wildflower Seed Mix', price: 32 },
    { id: 3, name: 'Garden Fork V2', price: 12 },
  ];
  return (
    <Container>
      <Stack gap={2}>
        <Typography>Product List</Typography>
        {products.map((product) => (
          <Stack bgcolor='yellow' direction="row" gap={10}>
            <Stack width='100%'>
              <Typography>{product.name}</Typography>
              <Typography>{product.price}</Typography>
            </Stack>
            <Button variant="contained">Add to cart</Button>
          </Stack>
        ))}
        <Button variant="outlined">Clear Storage</Button>
      </Stack>
    </Container>
  );
};
