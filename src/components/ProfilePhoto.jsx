import { Button, OutlinedInput, Stack, Typography } from "@mui/material";

const ProfilePhoto = ({ onUpload }) => (
    <Stack>
        <Typography variant="h2" >Photo</Typography>
        <Typography variant="bssm" >Add a nice photo of yourself for your profile</Typography>

        {/* <img src={GuestProfileImg} alt="Profile Pic" /> */}

        {/* <p>Image Preview</p> */}




        {/* <h2>Add / Change Image</h2> */}

        {/* <Input type="file" id="myfile" name="myfile" /> */}
        <Button variant="contained">Upload</Button>
        
    </Stack>



             
  
);
export default ProfilePhoto;