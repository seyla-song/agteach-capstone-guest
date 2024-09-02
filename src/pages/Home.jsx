import { ProductCarousel } from './ProductCarousel';
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <Container
        maxWidth="sm"
        style={{ textAlign: 'center', marginTop: '50px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Hello World!
          </Typography>
        </motion.div>
      </Container>
      <ProductCarousel products={products} />
    </>
  );
}

const products = [
  { name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
  { name: 'Product 2', price: '$15', image: 'https://via.placeholder.com/150' },
  { name: 'Product 3', price: '$20', image: 'https://via.placeholder.com/150' },
  { name: 'Product 4', price: '$25', image: 'https://via.placeholder.com/150' },
  { name: 'Product 5', price: '$30', image: 'https://via.placeholder.com/150' },
  { name: 'Product 6', price: '$35', image: 'https://via.placeholder.com/150' },
  { name: 'Product 7', price: '$40', image: 'https://via.placeholder.com/150' },
  { name: 'Product 8', price: '$45', image: 'https://via.placeholder.com/150' },
];

export default HomePage;
