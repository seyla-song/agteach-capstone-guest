import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import { Container } from "@mui/material";
import { useGetUserInfoQuery } from "../services/api/userApi";

import {
  ProfilePhoto,
  BasicInfo,
  AccountSecurity,
  ChangePassword,
} from "../components/index.js";
import { useEffect, useState } from "react";
import { ContentLoading } from "../components/index.js";
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
  const [userData, setUserData] = useState({});
  const { data, isLoading, isError, error } = useGetUserInfoQuery();

  useEffect(() => {
    if (data) {
      setUserData(data.data);
      console.log(data);
    }
  }, [data, setUserData]);

  if (isLoading) return <ContentLoading />;
  if (isError) return <div>Error: {error}</div>;

  return (
    <>
      <Container
        maxWidth="1420px"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack maxWidth="1420px" width="100%" sx={{ m: 5, mx: 0 }}>
          <ProfilePhoto userData={userData} />

          <Divider sx={{ m: 5, mx: 0 }} />

          <BasicInfo userData={userData} />

          <Divider sx={{ m: 5, mx: 0 }} />

          <AccountSecurity userData={userData} />

          <Divider sx={{ m: 5, mx: 0 }} />

          <ChangePassword />
        </Stack>
      </Container>
    </>
  );
}
