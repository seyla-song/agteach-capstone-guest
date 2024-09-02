import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

export const ProductCarousel = ({ products }) => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Container>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, idx) => (
          <Box key={idx} sx={{ padding: '10px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Box p>
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{ width: '100%', borderRadius: '10px' }}
                />
                <Typography>{product.name}</Typography>
                <Typography>{product.price}</Typography>
              </Box>
            </motion.div>
          </Box>
        ))}
      </Slider>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrev}
          sx={{ marginRight: '10px' }}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Container>
  );
};
