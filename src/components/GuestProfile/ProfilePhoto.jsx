import { useState, useEffect } from "react";
import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import { useUpdateInfoMutation } from "../../services/api/userApi";
import { CustomAlert } from "../../components/CustomAlert";
import ProfilePlaceholder from "../../assets/profile-placeholder.png";
import { useTranslation } from "react-i18next";

export const ProfilePhoto = ({ userData }) => {
  const [t] = useTranslation("global");
  const [profileImage, setProfileImage] = useState();
  const [imageFile, setImageFile] = useState(null);
  const [updateInfo, { isLoading }] = useUpdateInfoMutation();

  // Alert state
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error");

  useEffect(() => {
    if (userData) {
      setProfileImage(
        userData?.customer?.imageUrl + `?${new Date().getTime()}`
      );
    }
  }, [userData]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validImageTypes.includes(file.type)) {
        setAlertMessage(t('guestProfile.invalidFileMessage',{file:'(JPEG, PNG, JPG)'}));
        setAlertSeverity("error");
        setAlertOpen(true);
        return;
      }
      setProfileImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSendUpdateImage = async () => {
    try {
      const formData = new FormData();
      formData.append("photo", imageFile);
      await updateInfo(formData);
      setAlertMessage(t('guestProfile.profileImageUpdated'));
      setAlertSeverity("success");
      setAlertOpen(true);
    } catch (error) {
      setAlertMessage(t('guestProfile.errorProfileImageUpdated'));
      setAlertSeverity("error");
      setAlertOpen(true);
    }
  };

  // Handle alert close
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Stack sx={{ m: 2 }}>
        <Typography variant="h2">{t("guestProfile.photoSection")}</Typography>
        <Typography variant="bssm">{t("guestProfile.description")}</Typography>
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
            src={profileImage || ProfilePlaceholder}
            alt="Profile Pic"
            sx={{ width: 300, height: 300, border: "15px solid lightgrey" }}
          />
          <Typography variant="bmdsm" textAlign="center" margin="10px">
            {t("guestProfile.imagePreview")}
          </Typography>
        </Stack>
      </Box>

      <Stack sx={{ m: 2, mb: 0 }}>
        <Typography variant="h4">{t("guestProfile.imageName")}</Typography>
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
          <Button
            variant="contained"
            sx={{ px: 10, py: 2 }}
            onClick={handleSendUpdateImage}
            disabled={!imageFile || isLoading}
          >
            {isLoading
              ? t("guestProfile.uploading")
              : t("guestProfile.imageButton")}
          </Button>
        </Stack>
      </Box>

      {/* Custom Alert Component */}
      <CustomAlert
        sx={{ mt: 2 }}
        label={alertMessage}
        open={alertOpen}
        onClose={handleAlertClose}
        severity={alertSeverity}
      />
    </>
  );
};
