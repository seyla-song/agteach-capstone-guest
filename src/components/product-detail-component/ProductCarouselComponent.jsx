// import classes from './ProductCarouselComponent.module.css'
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import growLight1 from "../../assets/ProductDetail/growlight1.png";
import growLight2 from "../../assets/ProductDetail/growlight2.png";
import growLight3 from "../../assets/ProductDetail/growlight3.png";
import growLight4 from "../../assets/ProductDetail/growlight4.png";
import growLight5 from "../../assets/ProductDetail/growlight5.png";

const IMAGE = [growLight1, growLight2, growLight3, growLight4, growLight5];

const carouselStyle = {
  ".carousel": {
    textAlign: "center",
    padding: 0,
    margin: 0,
  },
  ".carousel .control-arrow": {
    color: "primary.main",
  },
  ".carousel .thumb": {
    padding: 0,
    color: "primary.main",
  },
  ".carousel .thumb.selected": {
    border: 2,
    borderColor: "dark.200",
  },
  ".carousel .control-prev.control-arrow, .carousel .control-next.control-arrow":
    {
      color: "primary.main",
    },
};

/**
 * Renders a product carousel component.
 *
 * @return {JSX.Element} The rendered product carousel component.
 */

export default function ProductCarouselComponent() {
  return (
    <Box sx={carouselStyle}>
      <Carousel>
        {IMAGE.map((data, index) => (
          <div key={index}>
            <img src={data} alt="product images" />
          </div>
        ))}
      </Carousel>
    </Box>
  );
}
