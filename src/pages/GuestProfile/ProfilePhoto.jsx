import GuestProfileImg from "../../assets/profile-pic.jpg";
import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";

function ProfilePhoto() {
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
          padding: '30px',
          boxSizing: "border-box",
        }}
      >
        <Stack>
          <Avatar
            src={GuestProfileImg}
            alt="Profile Pic"
            sx={{ width: 300, height: 300, border: "15px solid lightgrey"}}
            // border-color='grey.500 10px'
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
