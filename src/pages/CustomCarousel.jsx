import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { CustomCard } from './CustomCard';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export const CustomCarousel = ({ data, cardVariant }) => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
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
        {data.map((product, idx) => (
          <Box key={idx} sx={{ padding: '10px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <CustomCard dataObj={product} variant={cardVariant} />
            </motion.div>
          </Box>
        ))}
      </Slider>
      <Stack justifyContent="end" direction="row" gap>
        <Button
          size="medium"
          onClick={handlePrev}
          variant="contained"
          startIcon={<ChevronLeft />}
        />
        <Button
          size="medium"
          onClick={handleNext}
          variant="contained"
          endIcon={<ChevronRight />}
        />
      </Stack>
    </Container>
  );
};
