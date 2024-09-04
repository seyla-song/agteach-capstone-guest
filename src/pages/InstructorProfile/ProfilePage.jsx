import {
  Stack,
  Avatar,
  Box,
  Typography,
  Container,
  Button,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InstructorProfileImg from "../../assets/InstructorProfile/instructorprofile.jpg";

function ProfilePage() {
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <Container sx={{ mt: 5, px: { xs: 2, sm: 4, md: 4 }, maxWidth: "lg" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          boxSizing: "border-box",
          display: "flex",
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

        <Stack sx={{ ml: 1 }} disableGutters>
          <Typography variant="h4">Instructor</Typography>
          <Typography variant="h2">Emily Greene</Typography>
          <Typography variant="blgsm" sx={{ mt: 3, mb: 2 }}>
            About Me
          </Typography>
          <Typography variant="bsr">
            I'm Emily Greene, I'm a developer with a passion for teaching. I'm
            the lead instructor at the London App Brewery, London's leading
            Programming Bootcamp. I've helped hundreds of thousands of students
            learn to code and change their lives by becoming a developer. I've
            been invited by companies such as Twitter, Facebook and Google to
            teach their employees. My first foray into programming was when I
            was just 12 years old, wanting to build my own Space Invader game.
            Since then, I've made hundred of websites, apps and games. But most
            importantly, I realised that my greatest passion is teaching. I
            spend most of my time researching how to make learning to code fun
            and make hard concepts easy to understand. I apply everything I
            discover into my bootcamp courses. In my courses, you'll find lots
            of geeky humour but also lots of explanations and animations to make
            sure everything is easy to understand. I'll be there for you every
            step of the way.
          </Typography>

          <Stack sx={{ mt: 2, ml: 0.5 }} direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{ px: 4, py: 2, borderRadius: 50 }}
              startIcon={<EmailOutlinedIcon />}
              onClick={() => handleCopyToClipboard("emiylgreen@gmail.com")}
            >
              <Typography variant="bxsmd">emiylgreen@gmail.com</Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{ px: 4, py: 2, borderRadius: 50 }}
              startIcon={<LocalPhoneOutlinedIcon />}
              onClick={() => handleCopyToClipboard("012 456 789")}
            >
              <Typography variant="bxsmd">012 456 789</Typography>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default ProfilePage;
