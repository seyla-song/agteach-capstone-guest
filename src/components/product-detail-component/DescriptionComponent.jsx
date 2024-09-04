import { Box } from "@mui/material";
import ExpandableText from "../ExpandableText";
import { description } from "../../utils/carouselDummy";

export default function DescriptionComponent() {
  return (
    <Box>
      <ExpandableText text={description} initialLength={300} />
    </Box>
  );
}
