import React from "react";
import GuestProfileImg from '../assets/profile-pic.jpg';
import Button from '../components/Button.jsx';

export default function GuestProfile() {
    const handleClick = () => {
        alert('Button clicked!');
      };

    return (
        <>
        <div className="guestprofile-uppertext">
            <h1>Photo</h1>
            <p>Add a nice Photo of yourself for your profile.</p>

            <div className="guestprofile-bg">
                <div className="guestprofile-img">
                    <img src={GuestProfileImg} alt="Profile Pic" />
                </div>
                <div className="img-text">
                    <p>Image Preview</p>
                </div>
            </div>

            <div className="guest-profile-subtext">
                <h2>Add / Change Image</h2>
                <div className="subtext-input">
                    <input type="file" id="myfile" name="myfile" />
                    {/* <button>Upload Image</button> */}
                    <Button className="subtext-input" onClick={handleClick}>Upload Image</Button>
                </div>

                <hr className="sep-line"/>

                <div className="guest-section">
                    <div className="basic-info">
                        <h2>Basics Information</h2>

                        <div className="basic-subtext-input">
                            <input type="text" id="fname" name="fname" value="John" />
                            <input type="text" id="fname" name="fname" value="Doe" />
                            <input type="text" id="fname" name="fname" value="012 897 456" />
                            <Button className="subtext-input" onClick={handleClick}>Save</Button>
                         </div>
                    </div>
                </div>
            </div>

            <hr className="sec-sep-line"/>

            <div className="guest-section">
                    <div className="acc-info">
                        <h2>Account Security</h2>

                        <div className="acc-subtext-input">
                            <input type="text" id="fname" name="fname" value="johndoe123@gmail.com"/>
                            <Button className="subtext-input" onClick={handleClick}>Save</Button>
                         </div>
                    </div>
            </div>

            <hr className="third-sep-line"/>


            <div className="password-subtext-input">
                <input type="password" id="currentPassword" name="currentPassword" placeholder="Enter Current Password" />
                <input type="password" id="newPassword" name="newPassword" placeholder="Enter New Password" />
                <input type="password" id="retypePassword" name="retypePassword" placeholder="Re-type Password" />
                <Button className="subtext-input" onClick={handleClick}>Save</Button>
            </div>

        </div>
        </>

    );
}
