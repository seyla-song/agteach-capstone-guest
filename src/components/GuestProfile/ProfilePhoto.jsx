import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  Typography,
  Avatar,
} from '@mui/material';
import {
  useUpdateInfoMutation,
} from '../../services/api/userApi';
import { CustomAlert } from '../../components/CustomAlert';

export const ProfilePhoto = ({ userData }) => {
  const [profileImage, setProfileImage] = useState();
  const [imageFile, setImageFile] = useState(null);
  const [updateInfo, { isLoading }] = useUpdateInfoMutation();
  

  // Alert state
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('error');

  useEffect(() => {
    if (userData) {
      setProfileImage(userData?.customer?.imageUrl);
    }
  }, [userData]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validImageTypes.includes(file.type)) {
        setAlertMessage('Please select a valid image file (JPEG, PNG, JPG).');
        setAlertSeverity('error');
        setAlertOpen(true);
        return;
      }
      setProfileImage(URL.createObjectURL(file));
      setImageFile(file);
    };
    
  };

  const handleSendUpdateImage = async () => {
    try {
      const formData = new FormData();
      formData.append('photo', imageFile);
      await updateInfo(formData);
      window.location.reload();
    } catch (error) {
      setAlertMessage('Error submitting form. Please try again.');
      setAlertSeverity('error');
      setAlertOpen(true);
    }
  }

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: 'grey.100',
          padding: '30px',
          boxSizing: 'border-box',
        }}
      >
        <Stack>
          <Avatar
            // src={customerData.imageUrl}
            src={profileImage}
            alt="Profile Pic"
            sx={{ width: 300, height: 300, border: '15px solid lightgrey' }}
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
          display: 'inline-block',
          width: '100%',
          boxSizing: 'border-box',
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
            sx={{ flexGrow: 1, width: 'auto' }}
          />
          <Button variant="contained" sx={{ px: 10, py: 2 }} onClick={handleSendUpdateImage}>
            {isLoading ? 'Uploading...' : 'Upload'}
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

