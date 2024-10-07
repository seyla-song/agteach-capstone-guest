// // ProfileImageContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ProfileImageContext = createContext();

// export const useProfileImage = () => {
//   return useContext(ProfileImageContext);
// };

// export const ProfileImageProvider = ({ children }) => {
//   const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);

//   const updateProfileImage = (newImage) => {
//     setProfileImage(newImage);
//     localStorage.setItem("profileImage", newImage);
//   };

//   return (
//     <ProfileImageContext.Provider value={{ profileImage, updateProfileImage }}>
//       {children}
//     </ProfileImageContext.Provider>
//   );
// };

// ProfileImageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProfileImageContext = createContext();

export const useProfileImage = () => {
  const context = useContext(ProfileImageContext);
  if (!context) {
    throw new Error('useProfileImage must be used within a ProfileImageProvider');
  }
  return context;
};

export const ProfileImageProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);

  const updateProfileImage = (newImage) => {
    setProfileImage(newImage);
    localStorage.setItem("profileImage", newImage);
  };

  // Optional: Load image from localStorage when the provider mounts
  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  return (
    <ProfileImageContext.Provider value={{ profileImage, updateProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};
