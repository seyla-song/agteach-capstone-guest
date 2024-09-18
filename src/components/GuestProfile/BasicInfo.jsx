import React, { useState } from "react";
import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Autocomplete,
  TextField,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";

/**
 * BasicInfo component renders a basic information form with fields
 * for the user's first name, last name, and phone number.
 *
 * The component uses the `Stack` component to stack the form fields
 * vertically and the `OutlinedInput` component to render the input
 * fields. The component also renders a save button at the bottom of
 * the form using the `Button` component.
 *
 * @returns {React.ReactElement} The BasicInfo component.
 */
function BasicInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isError },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      city: "",
      address: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // const response = await addPerosnalInfo({
      //   ...data,
      // }).unwrap();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Basics Information</Typography>
        <FormControl variant="outlined" error={!!errors.firstName}>
          <InputLabel htmlFor="first-name">First Name</InputLabel>
          <OutlinedInput
            id="first-name"
            label="First Name"
            placeholder="e.g. Jane"
            errors={errors}
            {...register("firstName", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "First name can only contain letters",
              },
            })}
          />
          {errors.firstName && (
            <FormHelperText>{errors.firstName.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl variant="outlined" error={!!errors.lastName}>
          <InputLabel htmlFor="last-name">Last Name</InputLabel>
          <OutlinedInput
            id="last-name"
            label="Last Name"
            placeholder="e.g. Smith"
            {...register("lastName", {
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name can only contain letters",
              },
            })}
          />
          {errors.lastName && (
            <FormHelperText>{errors.lastName.message}</FormHelperText>
          )}
        </FormControl>
        <Autocomplete
          id="country-select-demo"
          fullWidth
          options={city}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              label="City"
              slotProps={{
                htmlInput: {
                  ...params.inputProps,
                },
              }}
              {...register("city", { required: "City is required" })}
              error={!!errors.city}
              helperText={errors?.city?.message}
            />
          )}
        />
        {/* Address Field */}
        <FormControl variant="outlined" error={!!errors.address}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <OutlinedInput
            id="address"
            label="Address"
            placeholder="N. 61Eo, Street 16612256"
            {...register("address", {
              required: "Address is required",
              pattern: {
                value: /^[A-Za-z\s,]+$/, // Adjusted pattern to allow spaces and commas
                message: "Enter a valid address",
              },
            })}
          />
          {errors.address && (
            <FormHelperText>{errors.address.message}</FormHelperText>
          )}
        </FormControl>
        {/* Phone Number Field */}
        <FormControl variant="outlined" error={!!errors.phoneNumber}>
          <InputLabel htmlFor="phone-number">Phone Number</InputLabel>
          <OutlinedInput
            id="phone-number"
            label="Phone Number"
            placeholder="e.g. 123-456-7890"
            {...register("phoneNumber", {
              // Corrected key to match
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/, // Adjusted pattern to allow numbers and a valid range
                message: "Phone number must be between 10 and 15 digits",
              },
            })}
          />
          {errors.phoneNumber && (
            <FormHelperText>{errors.phoneNumber.message}</FormHelperText>
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

export default BasicInfo;

const city = [
  { label: "Phnom Penh" },
  { label: "Siem Reap" },
  { label: "Battambang" },
  { label: "Sihanoukville" },
  { label: "Kampot" },
  { label: "Kratie" },
  { label: "Pursat" },
  { label: "Koh Kong" },
];
