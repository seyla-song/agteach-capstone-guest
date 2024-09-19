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
import LoadingButton from '@mui/lab/LoadingButton';
import { useIsLoginQuery } from "../../services/api/authSlice"; // Import the isLogin query

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

  const { data, error, isLoading } = useIsLoginQuery();

  useEffect(() => {
    if (data) {
      const { email } = data.data.data.customer;
      console.log(data.data.data.customer);
      setValue("email", email || "");
    }
  }, [data, setValue]);

  const onSubmit = async (formData) => {
    console.log("Form Data Submitted:", formData);
    try {
      console.log("Success:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isLoading) return <LoadingButton>Loading...</LoadingButton>;
  if (error) return <LoadingButton>Error: {error.message}</LoadingButton>;

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
