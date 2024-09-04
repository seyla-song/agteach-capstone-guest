import { Stack, Avatar, Typography, Button, Grid, Link, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InstructorProfileImg from "../../assets/InstructorProfile/instructorprofile.jpg";

/**
 * ProfilePage is a component that renders an instructor's profile page.
 *
 * It displays the instructor's profile image, name, and bio, as well as their
 * contact information and a copy-to-clipboard button. When the button is
 * clicked, the contact information is copied to the clipboard and a success
 * message is displayed at the bottom of the page for 3 seconds.
 *
 * @returns {JSX.Element} The ProfilePage component.
 */
function ProfilePage() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");



  /**
   * Copies the given text to the user's clipboard.
   *
   * @param {string} text The text to copy.
   *
   * @returns {Promise<void>} A promise that resolves when the copy is complete.
   */
  const handleCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setSnackbarMessage(`Copied: ${text}`);
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  /**
   * Closes the snackbar.
   */
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid container pt={10}>
      <Grid item xs={12} pb="10px">
        <Link>
          <Button
            sx={{ px: 2, borderRadius: 50 }}
            startIcon={<ArrowBackIosIcon />}
          >
            <Typography variant=" bsr">Back</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
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
      </Grid>
      <Grid item xs={12} md={8}>
        <Stack sx={{ pt: 2, ml: 1 }} disableGutters>
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

          <Grid container sx={{ py: 2, gap: 2 }} direction="row">
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
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              message={snackbarMessage}
              action={
                <Button color="inherit" onClick={handleCloseSnackbar}>
                  Close
                </Button>
              }
            >
              <Alert onClose={handleCloseSnackbar} severity="success">
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ProfilePage;
