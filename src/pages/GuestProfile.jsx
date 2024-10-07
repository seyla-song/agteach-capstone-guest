import ProfilePhoto from "../components/GuestProfile/ProfilePhoto.jsx";
import BasicInfo from "../components/GuestProfile/BasicInfo.jsx";
import AccountSecurity from "../components/GuestProfile/AccountSecurity.jsx";
import ChangePassword from "../components/GuestProfile/ChangePassword.jsx";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

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
  return (
    <>
      <Container
        maxWidth="1420px"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack maxWidth="1420px" width="100%" sx={{ m: 5, mx: 0 }}>
          <ProfilePhoto />

          <Divider sx={{ m: 5, mx: 0 }} />

          <BasicInfo />

          <Divider sx={{ m: 5, mx: 0 }} />

          <AccountSecurity />

          <Divider sx={{ m: 5, mx: 0 }} />

          <ChangePassword />
        </Stack>
      </Container>
    </>
  );
}
