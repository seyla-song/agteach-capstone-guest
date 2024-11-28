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
import InstructorProfileImg from "../../assets/InstructorProfile/instructor-profile.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const [t] = useTranslation('global');

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
        setSnackbarMessage(`${t('instructorProfile.copied')} ${text}`);
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
    <Grid container sx={{ pt: { xs: 5, md: 10 }}} >
      <Grid item xs={12} pb="10px">
        <Link>
          <Button
            sx={{ px: 2, borderRadius: 50 }}
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate(-1)}
          >
            <Typography variant=" bsr">{t('instructorProfile.back')}</Typography>
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
          <Typography variant="h4">{t('instructorProfile.instructor')}</Typography>
          <Typography 
            sx={{ typography: { xs: 'h3', md: 'h2' } }}
          >
            {firstName} {lastName}
          </Typography>
          <Typography variant="blgsm" sx={{ mt: 3, mb: 2 }}>
            {t('instructorProfile.aboutMe')}
          </Typography>
          <Typography variant="bsr">{bio || 'No biography.'}</Typography>

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
                  {t('instructorProfile.close')}
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
