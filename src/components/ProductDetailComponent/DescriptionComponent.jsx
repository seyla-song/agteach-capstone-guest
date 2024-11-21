import { Box } from '@mui/material';
import ExpandableText from '../ExpandableText';

/**
 * A React component that displays a product description.
 *
 * @return {React.ReactElement} A JSX element containing the product description
 */
export const DescriptionComponent = ({ description }) => {
  return (
    <Box>
      <ExpandableText text={description} initialLength={300} />
    </Box>
  );
};
