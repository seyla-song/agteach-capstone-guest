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

/**
 * ProfilePhoto component is a reusable component
 * that renders a container with a Stack of several components:
 *  - Profile photo with a preview
 *  - Add/Change Image functionality with a file input and an upload button
 *
 * It also handles the state of the above components and their corresponding actions
 *
 * @returns {JSX.Element} A JSX element that renders a container
 *   with a Stack of several components.
 */
function ProfilePhoto() {
  const [profileImage, setProfileImage] = useState(GuestProfileImg);
  const { data, refetch } = useGetUserInfoQuery();
  const [updateInfo] = useUpdateInfoMutation();

  // Load image from localStorage when the component mounts
  useEffect(() => {
    if (data) {
      const customerData = data.data.customer;
      console.log("customerData", customerData, data);
      const { imageUrl } = customerData;
      if (imageUrl) {
        setProfileImage(imageUrl);
      }
    }
  }, [data]);

  // Function to handle image upload
  const handleImageUpload = async (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append("photo", file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result;
        setProfileImage(base64String); // convert the image to base64 string encoder
        localStorage.setItem("profileImage", base64String); // Save to localStorage
      };
      reader.readAsDataURL(file); // Convert image to Base64
    }

    try {
      await updateInfo(formData).unwrap();
      console.log("Success:", formData);
      refetch();
      // window.location.reload()
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

//   if (file) {
//     const reader = new FileReader();
//     reader.onloadend = async () => {
//       const base64String = reader.result;
//       setProfileImage(base64String); // Preview logic here

//       try {
//         await updateInfo(formData).unwrap();
//         // Invalidate tags here to trigger refetch
//         refetch(); // This will refetch the user info
//       } catch (error) {
//         console.error("Error submitting form:", error);
//       }
//     };
//     reader.readAsDataURL(file);
//   }
// };

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
            name="myfile"
            onChange={handleImageUpload}
            sx={{ flexGrow: 1, width: "auto" }}
          />
          <Button variant="contained" sx={{ px: 10, py: 2 }}>
            Upload
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default ProfilePhoto;
