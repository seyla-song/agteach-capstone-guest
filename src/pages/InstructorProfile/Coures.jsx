import {
  Stack,
  Typography,
  Container,
  Grid,
  Button,
  useMediaQuery,
} from "@mui/material";
import { CustomCard } from "../../components/CustomCard";
import Img1 from "../../assets/InstructorProfile/Rectangle 1.png";
import Img2 from "../../assets/InstructorProfile/Rectangle 2.png";
import Img3 from "../../assets/InstructorProfile/Rectangle 3.png";
import Img4 from "../../assets/InstructorProfile/Rectangle 4.png";
import Img5 from "../../assets/InstructorProfile/Rectangle 5.png";
import Img6 from "../../assets/InstructorProfile/Rectangle 6.png";
import Img7 from "../../assets/InstructorProfile/Rectangle 7.png";
import Img8 from "../../assets/InstructorProfile/Rectangle 8.png";
import Img9 from "../../assets/InstructorProfile/Rectangle 9.png";
import Img10 from "../../assets/InstructorProfile/Rectangle 10.png";

function Courses() {
  // Check for breakpoints
  const desktop = useMediaQuery("(min-width:1420px)");
  const tablet = useMediaQuery("(min-width:1000px)");
  // const mobile = useMediaQuery('(min-width:390px)')

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

  return (
    <Stack>
      <Stack>
        <Typography variant="h4">Emily Greene courses</Typography>
        <Typography variant="bsr">Found (15) Courses</Typography>

        <Container sx={{ mt: 2 }} disableGutters>
          <Grid container spacing={2}>
            {checkScreen().map((item, idx) => (
              <Grid
                item
                xs={12 / itemsPerRow()} // Responsive columns
                key={idx}
              >
                <CustomCard dataObj={item} variant="course" />
              </Grid>
            ))}
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

export default Courses;

const products = [
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img1,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img2,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img3,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img4,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img5,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img6,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img7,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img8,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img9,
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    price: "30$",
    image: Img10,
  },
];
