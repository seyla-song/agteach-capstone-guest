import { useState, useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion } from "framer-motion";
import CustomCard from "./CustomCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const CustomCarousel = ({ data, cardVariant }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4); // Default to showing 4 slides
  const [slidesToScroll, setSlidesToScroll] = useState(4); // Default scrolls by 4 slides

  const [sliderInstance, setSliderInstance] = useState(null);

  // Responsive breakpoints to adjust number of slides shown based on window width
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesToShow(4);
        setSlidesToScroll(4);
      } else if (width >= 600) {
        setSlidesToShow(3);
        setSlidesToScroll(3);
      } else if (width >= 480) {
        setSlidesToShow(2);
        setSlidesToScroll(2);
      } else {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      }
    };

    // Update the number of slides on window resize
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Keen-slider settings
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: {
      perView: slidesToShow, // Dynamic number of visible slides
      spacing: 10, // Add some space between slides
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // Update current slide on drag or button click
    },
    created(slider) {
      setLoaded(true);
      setSliderInstance(slider); // Set slider instance for external control
    },
  });

  // Slide forward/backward by the dynamically set number of slides
  const handleNext = () => {
    if (instanceRef.current) {
      const newIdx = Math.min(currentSlide + slidesToScroll, data.length - slidesToShow);
      instanceRef.current.moveToIdx(newIdx); // Move to the calculated index
      setCurrentSlide(newIdx); // Update current slide
    }
  };

  const handlePrev = () => {
    if (instanceRef.current) {
      const newIdx = Math.max(currentSlide - slidesToScroll, 0);
      instanceRef.current.moveToIdx(newIdx); // Move to the calculated index
      setCurrentSlide(newIdx); // Update current slide
    }
  };

  // Disable Prev button if on the first slide
  const isPrevDisabled = currentSlide === 0;

  // Disable Next button if on the last visible slide
  const isNextDisabled = instanceRef.current
    ? currentSlide + slidesToShow >= data.length
    : false;

  return (
    <Stack>
      <div ref={sliderRef} className="keen-slider">
        {data.map((product, idx) => (
          <Box key={idx} className="keen-slider__slide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <CustomCard dataObj={product} variant={cardVariant} />
            </motion.div>
          </Box>
        ))}
      </div>
      {loaded && (
        <Stack justifyContent="end" direction="row" spacing={2}>
          <Button
            size="medium"
            onClick={handlePrev}
            variant="contained"
            startIcon={<ChevronLeft />}
            disabled={isPrevDisabled} // Disable if on the first slide
          />
          <Button
            size="medium"
            onClick={handleNext}
            variant="contained"
            endIcon={<ChevronRight />}
            disabled={isNextDisabled} // Disable if on the last slide
          />
        </Stack>
      )}
    </Stack>
  );
};
