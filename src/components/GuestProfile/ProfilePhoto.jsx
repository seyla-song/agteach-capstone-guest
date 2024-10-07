import { useState, useEffect } from "react";
import GuestProfileImg from "../../assets/guest-profile.jpg";
import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import {
  useGetUserInfoQuery,
  useUpdateInfoMutation,
} from "../../services/api/userApi";
import { CustomAlert } from "../../components/CustomAlert";

function ProfilePhoto() {
  const [profileImage, setProfileImage] = useState(GuestProfileImg);
  const { refetch } = useGetUserInfoQuery();
  const [updateInfo] = useUpdateInfoMutation();

  // Alert state
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error");

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/bmp'];
      if (!validImageTypes.includes(file.type)) {
        setAlertMessage("Please upload a valid image file (JPEG, PNG, GIF, WEBP, BMP).");
        setAlertSeverity("error");
        setAlertOpen(true);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result;
        setProfileImage(base64String);
        localStorage.setItem("profileImage", base64String);

        const formData = new FormData();
        formData.append("photo", file);

        try {
          await updateInfo(formData).unwrap();
          window.location.reload();
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle alert close
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Stack sx={{ m: 2 }}>
        <Typography variant="h2">Photo</Typography>
        <Typography variant="bssm">
          Add a nice photo of yourself for your profile
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "grey.100",
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        <Stack>
          <Avatar
            src={profileImage}
            alt="Profile Pic"
            sx={{ width: 300, height: 300, border: "15px solid lightgrey" }}
          />
          <Typography variant="bmdsm" textAlign="center" margin="10px">
            Image Preview
          </Typography>
        </Stack>
      </Box>

      <Stack sx={{ m: 2, mb: 0 }}>
        <Typography variant="h4">Add/Change Image</Typography>
      </Stack>

      <Box
        sx={{
          display: "inline-block",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Stack sx={{ m: 2, gap: 2 }} direction="row">
          <OutlinedInput
            type="file"
            id="myfile"
            accept="image/*"
            name="myfile"
            hiddenLabel
            onChange={handleImageUpload}
            sx={{ flexGrow: 1, width: "auto" }}
          />
          <Button variant="contained" sx={{ px: 10, py: 2 }}>
            Upload
          </Button>
        </Stack>
      </Box>

      {/* Custom Alert Component */}
      <CustomAlert
      sx={{ m: 2 }}
        label={alertMessage}
        open={alertOpen}
        onClose={handleAlertClose}
        severity={alertSeverity}
      />
    </>
  );
}

export default ProfilePhoto;

