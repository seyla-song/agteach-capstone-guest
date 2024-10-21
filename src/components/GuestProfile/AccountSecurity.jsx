import React, { useEffect } from "react";
import { Stack, Typography, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useGetUserInfoQuery } from "../../services/api/userApi"; 

/**
 * @function AccountSecurity
 * @description This component renders a form to input an email and a button to save the input.
 * @returns {JSX.Element} A JSX element that renders the form and button.
 */

export const AccountSecurity = () => {
  const { setValue, watch } = useForm();

  const { data, isLoading } = useGetUserInfoQuery();

  useEffect(() => {
    if (data) {
      const customerData = data.data.customer;
      const { email } = customerData;
      console.log(customerData);
      setValue("email", email || "");
    }
  }, [data, setValue]);

  if (isLoading)
    return (
      <Stack justifyContent={"center"} alignItems={"center"}>
        Loading...
      </Stack>
    );

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Account Security</Typography>
        <TextField
          label="Email"
          disabled
          placeholder="e.g. janeagteach@gmail.com"
          value={watch("email")}
        />
      </Stack>
    </>
  );
}

