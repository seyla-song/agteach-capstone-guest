import React, { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const handleNext = () => {
    setDirection(1); // Set direction to right
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setDirection(-1); // Set direction to left
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden' }}>
      <motion.div
        key={currentIndex}
        custom={direction}
        variants={carouselVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        {products.map((product, index) => (
          <motion.div
            key={currentIndex}
            style={{
              minWidth: '300px',
              margin: '0 10px',
              display: index === currentIndex ? 'block' : 'none',
              flexShrink: 0,
            }}
            custom={direction}
          >
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowBackIos />
      </Button>
      <Button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowForwardIos />
      </Button>
    </div>
  );
};

export default ProductCarousel;
