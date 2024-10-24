import {
  Stack,
  Avatar,
  Typography,
  Button,
  Grid,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InstructorProfileImg from "../../assets/InstructorProfile/instructorprofile.jpg";
import { useNavigate } from "react-router-dom";
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
export const ProfilePage = ({ instructorData }) => {
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
  const navigate = useNavigate();

  const { firstName, lastName, phone, email, imageUrl, bio } = instructorData;

  return (
    <Grid container pt={10}>
      <Grid item xs={12} pb="10px">
        <Link>
          <Button
            sx={{ px: 2, borderRadius: 50 }}
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate(-1)}
          >
            <Typography variant=" bsr">Back</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Instructor Profile Image"
          src={imageUrl || InstructorProfileImg}
          sx={{
            width: 300,
            height: 300,
            m: 1,
            border: "15px solid lightgrey",
          }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Stack sx={{ pt: 2, ml: 1 }}>
          <Typography variant="h4">Instructor</Typography>
          <Typography variant="h2">
            {firstName} {lastName}
          </Typography>
          <Typography variant="blgsm" sx={{ mt: 3, mb: 2 }}>
            About Me
          </Typography>
          <Typography variant="bsr">{bio || "Intructor Bio"}</Typography>

          <Grid container sx={{ py: 2, gap: 2 }} direction="row">
            <Button
              variant="outlined"
              sx={{ px: 4, py: 2, borderRadius: 50 }}
              startIcon={<EmailOutlinedIcon />}
              onClick={() => handleCopyToClipboard(email)}
            >
              <Typography variant="bxsmd">{email}</Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{ px: 4, py: 2, borderRadius: 50 }}
              startIcon={<LocalPhoneOutlinedIcon />}
              onClick={() => handleCopyToClipboard(phone)}
            >
              <Typography variant="bxsmd">{phone}</Typography>
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
};
