import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { CustomCarousel } from './CustomCarousel';

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
      <CustomCarousel data={courses} />
      <CustomCarousel data={products} cardVariant="product" />
    </>
  );
}

export default HomePage;

const products = [
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$15',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$20',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$25',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$30',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 6',
    price: '$35',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 7',
    price: '$40',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 8',
    price: '$45',
    image: 'https://via.placeholder.com/150',
  },
];
const courses = [
  {
    name: 'Indoor Plant Propagation Techniques',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Vertical Gardening for Urban Spaces',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Organic Indoor Plant Care and Maintenance',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Advanced Indoor Plant Lighting Strategies',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 5',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 6',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 7',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 8',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
];
