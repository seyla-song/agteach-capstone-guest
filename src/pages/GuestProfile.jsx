import ProfilePhoto from "../components/ProfilePhoto.jsx";
import BasicInfo from "../components/BasicInfo.jsx";
import AccountSecurity from "../components/AccountSecurity.jsx";
import ChangePassword from "../components/ChangePassword.jsx";
import Divider from "@mui/material/Divider";

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
      <ProfilePhoto onUpload={handleUpload} />

      <Divider sx={{ m: 5, mx: 0 }} />

      <BasicInfo onSave={handleSaveBasicInfo} />

      <Divider sx={{ m: 5, mx: 0 }} />

      <AccountSecurity onSave={handleSaveAccountSecurity} />

      <Divider sx={{ m: 5, mx: 0 }} />

      <ChangePassword onSave={handleSavePassword} />
    </>
  );
}
