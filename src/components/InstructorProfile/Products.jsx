import {
  Stack,
  Typography,
  Container,
  Grid,
  Button,
  useMediaQuery,
  Box,
  CircularProgress,
} from "@mui/material";
import CustomCard from "../../components/CustomCard";
import Img11 from "../../assets/InstructorProfile/Rectangle 11.png";
import Img12 from "../../assets/InstructorProfile/Rectangle 12.png";
import Img13 from "../../assets/InstructorProfile/Rectangle 13.png";
import Img14 from "../../assets/InstructorProfile/Rectangle 14.png";
import Img15 from "../../assets/InstructorProfile/Rectangle 15.png";
import Img16 from "../../assets/InstructorProfile/Rectangle 16.png";
import Img17 from "../../assets/InstructorProfile/Rectangle 17.png";
import Img18 from "../../assets/InstructorProfile/Rectangle 18.png";
import Img19 from "../../assets/InstructorProfile/Rectangle 19.png";
import Img20 from "../../assets/InstructorProfile/Rectangle 20.png";
import { useSearchProductQuery } from "../../services/api/productApi";

/**
 * A component that renders a responsive list of products, with a responsive
 * design that shows different numbers of items based on screen size.
 *
 * It uses the `useMediaQuery` hook from `@mui/material` to determine the
 * screen size and adjust the number of items accordingly.
 *
 * It renders a list of products with a title, a "View more" button, and a
 * responsive layout that shows different numbers of items per row based on
 * screen size.
 *
 * @returns {React.ReactElement} The component element.
 */
function Products() {
  const { data, isLoading } = useSearchProductQuery("");
  if (!isLoading) console.log("products", data);

  // Check for breakpoints
  const desktop = useMediaQuery("(min-width:1420px)");
  const tablet = useMediaQuery("(min-width:1000px)");
  // const mobile = useMediaQuery('(min-width:390px)')

  // if (!isLoading) return <></>;
  // Determine how many items to show based on screen size
  const checkScreen = () => {
    if (desktop) {
      return products.slice(0, 10); // Show up to 10 products on large screens
    } else if (tablet) {
      return products.slice(0, 8); // Show up to 8 products on tablet screens
    } else {
      return products.slice(0, 6); // Show up to 6 products on smaller screens
    }
  };

  // Determine the number of items per row based on screen size
  const itemsPerRow = () => {
    if (desktop) {
      return 5; // 5 items per row on large screens
    } else if (tablet) {
      return 4; // 4 items per row on tablet screens
    } else {
      return 3; // 3 items per row on smaller screens
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        Product Loading...
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Stack>
      <Stack>
        <Typography variant="h4">Emily Greene products</Typography>
        <Typography variant="bsr">Found (15) Courses</Typography>

        <Container sx={{ mt: 2 }} disableGutters>
          <Grid container spacing={2}>
            {data.data.map((item, idx) => (
              <Grid
                item
                // xs={12 / itemsPerRow()} // Responsive columns
                key={idx}
              >
                <CustomCard dataObj={item} variant="product" />
              </Grid>
            ))}

            {/*             
            {checkScreen().map((item, idx) => (
              <Grid
                item
                xs={12 / itemsPerRow()} // Responsive columns
                key={idx}
              >
                <CustomCard dataObj={item} variant="product" />
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </Stack>

      <Stack sx={{ mt: 4, mb: 4 }}>
        <Button variant="outlined" sx={{ px: 4, py: 2 }}>
          View (5) more
        </Button>
      </Stack>
    </Stack>
  );
}

export default Products;

const products = [
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img11,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img12,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img13,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img14,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img15,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img16,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img17,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img18,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img19,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    imageUrl: Img20,
  },
];
