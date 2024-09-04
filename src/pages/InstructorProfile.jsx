import {
  Stack,
  Avatar,
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import InstructorProfileImg from "../assets/InstructorProfile/instructorprofile.jpg";
import Img1 from "../assets/InstructorProfile/Rectangle 1.png";
import { CustomCard } from "../components/CustomCard";

export default function InstructorProfile() {
  return (
    <>
      <Container
        sx={{
          alignItems: "center",
        }}
      >
        <Container sx={{ mt: 5, mx: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Stack>
              <Avatar
                alt="Instructor Profile Image"
                src={InstructorProfileImg}
                sx={{
                  width: 300,
                  height: 300,
                  m: 1,
                  border: "15px solid lightgrey",
                }}
              />
            </Stack>
            <Stack>
              <Typography variant="h4" sx={{ ml: 2 }}>
                Instructor
              </Typography>
              <Typography variant="h2" sx={{ ml: 2 }}>
                Emily Greene
              </Typography>
              <Typography variant="blgsm" sx={{ ml: 2, mt: 3, mb: 2 }}>
                About Me
              </Typography>
              <Typography variant="bsr" sx={{ ml: 2 }}>
                I'm Emily Greene, I'm a developer with a passion for teaching.
                I'm the lead instructor at the London App Brewery, London's
                leading Programming Bootcamp. I've helped hundreds of thousands
                of students learn to code and change their lives by becoming a
                developer. I've been invited by companies such as Twitter,
                Facebook and Google to teach their employees. My first foray
                into programming was when I was just 12 years old, wanting to
                build my own Space Invader game. Since then, I've made hundred
                of websites, apps and games. But most importantly, I realised
                that my greatest passion is teaching. I spend most of my time
                researching how to make learning to code fun and make hard
                concepts easy to understand. I apply everything I discover into
                my bootcamp courses. In my courses, you'll find lots of geeky
                humour but also lots of explanations and animations to make sure
                everything is easy to understand. I'll be there for you every
                step of the way.
              </Typography>

              <Stack sx={{ m: 2 }} direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  sx={{ px: 4, py: 2, borderRadius: 50 }}
                  startIcon={<EmailOutlinedIcon />}
                >
                  emiylgreen@gmail.com
                </Button>
                <Button
                  variant="outlined"
                  sx={{ px: 4, py: 2, borderRadius: 50 }}
                  startIcon={<LocalPhoneOutlinedIcon />}
                >
                  012 254 987
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>

        <Divider sx={{ my: 6, }} />

        <Stack>
          <Typography variant="h4" sx={{ ml: 2 }}>
            Emily Greene courses
          </Typography>
          <Typography variant="bsr" sx={{ ml: 2 }}>
            Found (15) Courses
          </Typography>

          <Container disableGutters>
            <Grid container columns={15} >
              {products.map((item, idx) => (
                <Grid item xs={3} >
                  <CustomCard key={idx} dataObj={item} />
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

        <Stack>
          <Typography variant="h4" sx={{ ml: 2 }}>
            Emily Greene products
          </Typography>
          <Typography variant="bsr" sx={{ ml: 2 }}>
            Found (15) Courses
          </Typography>

          <Container sx={{ mt: 2 }}>
            <Grid container columns={15}>
              {products.map((item, idx) => (
                <Grid item xs={3}>
                  <CustomCard key={idx} dataObj={item} variant="product" />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Stack>

        <Stack sx={{ mt: 4, mb: 4, }}>
          <Button variant="outlined" sx={{ px: 4, py: 2 }}>
            View (5) more
          </Button>
        </Stack>

      </Container>
    </>
  );
}

const products = [
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
];
