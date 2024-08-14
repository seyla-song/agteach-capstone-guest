import React from "react";
import GuestProfileImg from '../assets/profile-pic.jpg';

export default function GuestProfile() {
    return (
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
                <p>Add / Change Image</p>
                <div className="subtext-input">
                    <input type="file" id="myfile" name="myfile" />
                    <button>Upload I mage</button>
                </div>

                <hr class="sep-line"/>

                <div className="guest-section">
                    <div className="basic-info">
                        <h2>Basics Information</h2>

                        <div className="basic-subtext-input">
                            <input type="text" id="fname" name="fname" value="John" />
                            <input type="text" id="fname" name="fname" value="Doe" />
                            <input type="text" id="fname" name="fname" value="012 897 456" />
                            <button>Save</button>
                         </div>
                    </div>
                </div>

                {/* <hr class="sep-line"/> */}

            </div>


        </div>

        
    );
}