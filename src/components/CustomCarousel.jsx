import { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Stack } from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import CustomCard from "./CustomCard";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const CustomCarousel = ({ data, cardVariant, slideToShow = 4, maxItemWidth = 300 }) => {
  const sliderRef = useRef();

  const forceResizeSlideSize = () => {
    const slides = document.getElementsByClassName('slick-slide');
    console.log(slides);
    setTimeout(() => {
      Array.from(slides).forEach((el) => {
        el.style.width = `${maxItemWidth}px`;
      });
    }, 100);
  };
  
  const adjustedSlidesToShow = Math.min(slideToShow, data.length);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: adjustedSlidesToShow,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, data.length),
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(2, data.length),
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(1, data.length),
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

  useEffect(() => {
    if (data?.length >= adjustedSlidesToShow) {
      forceResizeSlideSize();
    }
  }, [data, adjustedSlidesToShow, maxItemWidth]);

  return (
    <Stack>
      <Slider ref={sliderRef} {...settings}>
        {data.map((product, idx) => (
          <Box
            key={idx}
            sx={{
              maxWidth: `${maxItemWidth}px !important`, // Setting max width for each carousel item
              margin: '0 auto', // Center the items within each slide
            }}
          >
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
      <Stack justifyContent="end" direction="row" spacing={2}>
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
    </Stack>
  );
};
