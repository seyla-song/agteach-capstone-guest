import { Box, Stack, Typography } from "@mui/material";
import { CustomCarousel } from "../CustomCarousel";
import { products, courses } from "../../utils/carouselDummy";

export default function CarouselComponent({ data, cardVariant, children }) {
  const dataType = () => {
    if (data === "products") {
      return products;
    } else {
      return courses;
    }
  };

  return (
    <Box sx={{p: {xs: '10px', md: 0}}}>
      <Typography sx={{ typography: { xs: "blgsm", sm: 'h4' }, mb: {xs: '15px', md: '30px'} }}>
        {children}
      </Typography>
      <CustomCarousel data={dataType()} cardVariant={cardVariant} />
    </Box>
  );
}
