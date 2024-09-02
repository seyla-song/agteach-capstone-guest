import React from "react";
import Button from "./Button";
import Input from "./Input";

const AccountSecurity = ({ onSave }) => (
    <div className="guest-section">
        <div className="acc-info">
            <h2>Account Security</h2>

            <div className="acc-subtext-input">
                <Input type="text" id="fname" name="fname" value="johndoe@gmail.com" />
                <Button className="subtext-input" onClick={onSave}>Save</Button>
            </div>
        </div>
    </div>

);
export default AccountSecurity;