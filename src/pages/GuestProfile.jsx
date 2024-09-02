import ProfilePhoto from '../components/ProfilePhoto.jsx';
import BasicInfo from '../components/BasicInfo.jsx';
import AccountSecurity from '../components/AccountSecurity.jsx';
import ChangePassword from '../components/ChangePassword.jsx';


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

            <hr className="sep-line" />

            <BasicInfo onSave={handleSaveBasicInfo} />

            <hr className="sec-sep-line" />

            <AccountSecurity onSave={handleSaveAccountSecurity} />

            <hr className="third-sep-line" />

            <ChangePassword onSave={handleSavePassword} />
        </> 
    );
}
