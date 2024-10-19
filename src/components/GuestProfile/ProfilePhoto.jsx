import { useState, useEffect } from "react";
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
  const [profileImage, setProfileImage] = useState();
  const { data} = useGetUserInfoQuery();
  const [updateInfo, { isLoading}] = useUpdateInfoMutation();

  // Alert state
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error");

  let customerData = {};
  // if (data) {
  //   customerData = data.data.customer;
  // }
  // setProfileImage(customerData.imageUrl);
  console.log("customerDataaaaa", customerData.imageUrl);

  useEffect(() => {
    // const storedImage = localStorage.getItem("profileImage");
    // if (storedImage) {
    //   setProfileImage(storedImage);
    // }
    if (data) {
      customerData = data.data.customer;
      setProfileImage(customerData.imageUrl);
    }
  }, [data]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setProfileImage(URL.createObjectURL(file));

    if (file) {
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
      ];
      if (!validImageTypes.includes(file.type)) {
        setAlertMessage(
          "Please select a valid image file (JPEG, PNG, JPG)."
        );
        setAlertSeverity("error");
        setAlertOpen(true);
        return;
      }
      const formData = new FormData();
      formData.append("photo", file);
      try {
        const response = await updateInfo(formData).unwrap();
        console.log("Success:", formData);
        // if (response) {
          window.location.reload();
        // }
      } catch (error) {
        setAlertMessage('Error submitting form. Please try again.');
        setAlertSeverity("error");
        setAlertOpen(true);
      }

      // const reader = new FileReader();
      // reader.onloadend = async () => {
      //   // const base64String = reader.result;
      //   // setProfileImage(base64String);
      //   // localStorage.setItem("profileImage", base64String);

      //   const formData = new FormData();
      //   formData.append("photo", file);

      //   try {
      //     await updateInfo(formData).unwrap();
      //     // window.location.reload();
      //   } catch (error) {
      //     console.error("Error submitting form:", error);
      //   }
      // };
      // reader.readAsDataURL(file);
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
            // src={customerData.imageUrl}
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
          {isLoading ? "Uploading..." : "Upload"}
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
}

export default ProfilePhoto;
