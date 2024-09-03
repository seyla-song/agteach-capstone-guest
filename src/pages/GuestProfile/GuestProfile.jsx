import ProfilePhoto from "./ProfilePhoto.jsx";
import BasicInfo from "./BasicInfo.jsx";
import AccountSecurity from "./AccountSecurity.jsx";
import ChangePassword from "./ChangePassword.jsx";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";

export default function GuestProfile() {
  const handleUpload = () => {
    // Handle image upload
  };

  const handleSaveBasicInfo = () => {
    // Handle saving basic info
  };

  const handleSaveAccountSecurity = () => {
    // Handle saving account security
  };

  const handleSavePassword = () => {
    // Handle saving password
  };

  return (
    <>
      <Stack sx={{ m: 5, mx: 0 }}> 
        <ProfilePhoto onUpload={handleUpload} />

        <Divider sx={{ m: 5, mx: 0 }}/>

        <BasicInfo onSave={handleSaveBasicInfo} />

        <Divider sx={{ m: 5, mx: 0 }}/>

        <AccountSecurity onSave={handleSaveAccountSecurity} />

        <Divider sx={{ m: 5, mx: 0 }}/>

        <ChangePassword onSave={handleSavePassword} />
      </Stack>
    </>
  );
}
