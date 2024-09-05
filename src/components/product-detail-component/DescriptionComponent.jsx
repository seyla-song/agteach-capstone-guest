import { Box } from "@mui/material";
import ExpandableText from "../ExpandableText";
import { description } from "../../utils/carouselDummy";

/**
 * A React component that displays a product description.
 *
 * @return {React.ReactElement} A JSX element containing the product description
 */
export default function DescriptionComponent() {
  return (
    <Box>
      <ExpandableText text={description} initialLength={300} />
    </Box>
  );
}
