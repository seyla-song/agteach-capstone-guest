import React, { useEffect } from "react";
import {
  Box,
  Button,
  OutlinedInput,
  Typography,
  FormControl,
  InputLabel,
  Autocomplete,
  TextField,
  FormHelperText,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useIsLoginQuery } from "../../services/api/authSlice"; // Import the isLogin query

function BasicInfo() {
  const {
    register,
    handleSubmit,
    setValue, // Allows you to set form values
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      city: "",
      address: "",
    },
  });

  // Fetch user information using getMe (isLogin) query
  const { data, error, isLoading } = useIsLoginQuery();

  // Populate form fields with user data once loaded
  // console.log(data && data.data.data);
  if (data) {
    const { first_name, last_name, phone, location_id, address } = data.data.data.customer;
    console.log(data.data.data.customer);
    console.log(data.data.data.customer.first_name);
    
    setValue("firstName", first_name || "");
    setValue("lastName", last_name || "");
    setValue("phoneNumber", phone || "");
    setValue("city", location_id || "");
    setValue("address", address || "");
  }
  // useEffect(() => {
  //   console.log(data);
  //   if (data) {
  //     setValue("firstName", data.firstName || "");
  //     setValue("lastName", data.lastName || "");
  //     setValue("phoneNumber", data.phoneNumber || "");
  //     setValue("city", data.city || "");
  //     setValue("address", data.address || "");
  //   }
  // }, [data, setValue]);

  const onSubmit = async (formData) => {
    console.log("Form Data Submitted:", formData);
    try {
      // Send formData to the API or perform other actions
      console.log("Success:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // if (isLoading) return <Typography>Loading...</Typography>; // Handle loading state
  // if (error) return <Typography>Error: {error.message}</Typography>; // Handle error state

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
          id="city-select"
          fullWidth
          options={city}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              label="City"
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

// Sample cities for Autocomplete
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
