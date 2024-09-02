import React from "react";
import Button from "./Button";
import Input from "./Input";

const ChangePassword =({ onSave }) => (
    <div className="password-subtext-input">
    <Input type="password" id="currentPassword" name="currentPassword" placeholder="Enter Current Password" />
    <Input type="password" id="newPassword" name="newPassword" placeholder="Enter New Password" />
    <Input type="password" id="retypePassword" name="retypePassword" placeholder="Re-type Password" />
    <Button className="subtext-input" onClick={onSave}>Save</Button>
</div>
);
export default ChangePassword;