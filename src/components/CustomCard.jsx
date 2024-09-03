import { Box, Stack, Typography } from '@mui/material';

/**
 * CustomCard component is a reusable component
 * that renders a card with a image, title and a subtitle.
 *
 * @param {{ dataObj: Object, variant: string }} props
 *   - dataObj is an object that contains image, name, price and instructor
 *   - variant is a string that can be one of 'product' or 'default'
 *
 * @returns {JSX.Element} A JSX element that renders a card
 */
export const CustomCard = ({ dataObj, variant }) => {
  /**
   * Returns a JSX element based on the variant prop
   * that renders a card with a image, title and a subtitle.
   *
   * @returns {JSX.Element} A JSX element that renders a card
   */
  const cardVariant = () => {
    switch (variant) {
      case 'product':
        return <ProductCard dataObj={dataObj} />;
      default:
        return <CourseCard dataObj={dataObj} />;
    }
  };
  return cardVariant();
};

  /**
   * ProductCard component is a reusable component
   * that renders a card with a image, title and a subtitle.
   *
   * @param {{ dataObj: Object }} props
   *   - dataObj is an object that contains image, name, price and instructor
   *
   * @returns {JSX.Element} A JSX element that renders a card
   */
const ProductCard = ({ dataObj }) => {
  return (
    <Box pr>
      <Box
        width="100%"
        component="img"
        src={dataObj.image}
        alt={dataObj.name}
      />
      <Stack p>
        <Typography variant="bmdmd">{dataObj.name}</Typography>
        <Typography variant="bsr">{dataObj.price}</Typography>
      </Stack>
    </Box>
  );
};

  /**
   * CourseCard component is a reusable component
   * that renders a card with a image, title and a subtitle.
   *
   * @param {{ dataObj: Object }} props
   *   - dataObj is an object that contains image, name, price and instructor
   *
   * @returns {JSX.Element} A JSX element that renders a card
   */
const CourseCard = ({ dataObj }) => {
  return (
    <Box pr>
      <Box
        width="100%"
        component="img"
        src={dataObj.image}
        alt={dataObj.name}
      />
      <Stack p>
        <Typography variant="bmdmd">{dataObj.name}</Typography>
        <Typography variant="bsr">{dataObj.instructor}</Typography>
      </Stack>
    </Box>
  );
};
