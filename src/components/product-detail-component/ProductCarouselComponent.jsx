// import classes from './ProductCarouselComponent.module.css'
import { Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const carouselStyle = {
  '.carousel': {
    textAlign: 'center',
    padding: 0,
    margin: 0,
  },
  '.carousel .control-arrow': {
    color: 'primary.main',
  },
  '.carousel .thumb': {
    padding: 0,
    color: 'primary.main',
  },
  '.carousel .thumb.selected': {
    border: 2,
    borderColor: 'dark.200',
  },
  '.carousel .control-prev.control-arrow, .carousel .control-next.control-arrow':
    {
      color: 'primary.main',
    },
};

/**
 * Renders a product carousel component.
 *
 * @return {JSX.Element} The rendered product carousel component.
 */

export const ProductCarouselComponent = ({
  productImages,
  productThumbnail,
}) => {
  return (
    <Box sx={carouselStyle}>
      <Carousel>
        <div>
          <img src={productThumbnail} alt={`Product thumbnail`} />
        </div>
        {productImages?.map((image, index) => (
          <div key={index}>
            <img src={image.imageUrl} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};
