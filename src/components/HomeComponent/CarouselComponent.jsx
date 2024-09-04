import { Box, Typography } from "@mui/material";
import { CustomCarousel } from "../CustomCarousel";
import { products, courses } from "../../utils/carouselDummy";

export default function CarouselComponent({ data, cardVariant, children }) {
  const carouselData = data === "products" ? products : courses;

  return (
    <Box sx={{ p: { xs: "10px", md: 0 } }}>
      <Typography
        sx={{
          typography: { xs: "blgsm", sm: "h4" },
          mb: { xs: "15px", md: "30px" },
        }}
      >
        {children}
      </Typography>
      <CustomCarousel data={carouselData} cardVariant={cardVariant} />
    </Box>
  );
}