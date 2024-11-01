// import classes from './ProductCarouselComponent.module.css'
import { Box, IconButton } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



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
      <Carousel
        showArrows={true}
        showStatus={false}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
      >
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

const carouselStyle = {
  '.carousel': {
    textAlign: 'center',
    padding: 0,
    margin: 0,
  },
  '.carousel .control-arrow': {
    opacity: 1, // Ensure arrow visibility
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
      opacity: 1, // Override default hover behavior
      visibility: 'visible',
    },
};

const renderArrowPrev = (onClickHandler, hasPrev, label) =>
  hasPrev && (
    <IconButton
      onClick={onClickHandler}
      title={label}
      sx={{ ...arrowStyle, left: 15 }}
    >
      <ArrowBackIosNewIcon fontSize="small" />
    </IconButton>
  );

const renderArrowNext = (onClickHandler, hasNext, label) =>
  hasNext && (
    <IconButton
      onClick={onClickHandler}
      title={label}
      sx={{ ...arrowStyle, right: 15 }}
    >
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  );
const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
  padding: '0.5rem',
  border: 'none',
  fontSize: '2rem',
  color: 'white',
  cursor: 'pointer',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',

  // Hover effect for subtle change
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};