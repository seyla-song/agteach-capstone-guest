import ProfilePhoto from "../components/GuestProfile/ProfilePhoto.jsx";
import BasicInfo from "../components/GuestProfile/BasicInfo.jsx";
import AccountSecurity from "../components/GuestProfile/AccountSecurity.jsx";
import ChangePassword from "../components/GuestProfile/ChangePassword.jsx";
import Divider from "@mui/material/Divider";
import { Container, Stack } from "@mui/material";

/**
 * GuestProfile component is a reusable component
 * that renders a container with a Stack of several components:
 *  - ProfilePhoto component
 *  - BasicInfo component
 *  - AccountSecurity component
 *  - ChangePassword component
 *
 * The component also handle the state of the above components
 * and their corresponding actions: handleUpload, handleSaveBasicInfo,
 * handleSaveAccountSecurity, handleSavePassword
 *
 * @returns {JSX.Element} A JSX element that renders a container
 *   with a Stack of several components.
 */
export default function GuestProfile() {
  /**
   * Handle image upload
   *
   * This function is called when the user uploads a new profile photo.
   * It is responsible for handling the image upload process.
   */
  const handleUpload = () => {
    // Handle image upload
  };


  /**
   * Handle saving basic info
   *
   * This function is called when the user saves the changes
   * made to their basic info. It is responsible for handling
   * the saving process.
   */
  const handleSaveBasicInfo = () => {
    // Handle saving basic info
  };


  /**
   * Handle saving account security
   *
   * This function is called when the user saves the changes
   * made to their account security. It is responsible for handling
   * the saving process.
   */
  const handleSaveAccountSecurity = () => {
    // Handle saving account security
  };

  /**
   * Handle saving password
   *
   * This function is called when the user saves the changes
   * made to their password. It is responsible for handling
   * the saving process.
   */
  const handleSavePassword = () => {
    // Handle saving password
  };

  return (
    <>
      <Container
        maxWidth="1420px"
        width="100%"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack maxWidth="1420px" width="100%" sx={{ m: 5, mx: 0 }}>
          <ProfilePhoto onUpload={handleUpload} />

          <Divider sx={{ m: 5, mx: 0 }} />

          <BasicInfo onSave={handleSaveBasicInfo} />

          <Divider sx={{ m: 5, mx: 0 }} /> 

          <AccountSecurity onSave={handleSaveAccountSecurity} />

          <Divider sx={{ m: 5, mx: 0 }} />

          <ChangePassword onSave={handleSavePassword} />
        </Stack>
      </Container>
    </>
  );
}
