import React, { useEffect } from "react";
import { Stack, Typography, OutlinedInput, InputLabel, FormControl } from "@mui/material";
import { useForm } from "react-hook-form"; 

/**
 * @function AccountSecurity
 * @description This component renders a form to input an email and a button to save the input.
 * @returns {JSX.Element} A JSX element that renders the form and button.
 */

export const AccountSecurity = ({userData}) => {
  const { setValue, register } = useForm();

  useEffect(() => {
    if (userData && userData.customer) {
      const customerData = userData.customer;
      const { email } = customerData;
      setValue("email", email || "");
    }
  }, [userData, setValue]);


  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Account Security</Typography>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            label="email"
            disabled
            placeholder="e.g. janeagteach@gmail.com"
            {...register("email", {})}
          />
        </FormControl>
      </Stack>
    </>
  );
}

