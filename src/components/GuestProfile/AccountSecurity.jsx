import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useGetOneUserQuery } from "../../services/api/userApi"; // Import the isLogin query

/**
 * @function AccountSecurity
 * @description This component renders a form to input an email and a button to save the input.
 * @returns {JSX.Element} A JSX element that renders the form and button.
 */
function AccountSecurity() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { data, isLoading } = useGetOneUserQuery();
  
  useEffect(() => {
    if (data) {
      console.log(data)
      const customerData = data.data.customers
      const { email } = customerData;
      console.log(customerData);
      setValue("email", email || "");
    }
  }, [data, setValue]);

  if (isLoading) return <Stack justifyContent={"center"} alignItems={"center"}>Loading...</Stack>;

  const onSubmit = async (formData) => {
    console.log("Form Data Submitted:", formData);
    try {
      console.log("Success:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Account Security</Typography>
        <FormControl variant="outlined" error={!!errors.email}>
          <InputLabel htmlFor="account-security">Email</InputLabel>
          <OutlinedInput
            id="account-security"
            label="Email"
            placeholder="e.g. janeagteach@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            })}
            // Automatically fills the input with the current email value from react-hook-form
            value={watch("email")}
          />
          {errors.email && (
            <FormHelperText>{errors.email.message}</FormHelperText>
          )}
        </FormControl>
      </Stack>

      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Stack
          sx={{ m: 2, justifyContent: "flex-end" }}
          direction="row"
          spacing={2}
        >
          <Button
            variant="contained"
            sx={{ px: 10, py: 2 }}
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default AccountSecurity;
