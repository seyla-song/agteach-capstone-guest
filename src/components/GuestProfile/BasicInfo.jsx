import React, { useEffect, useState } from "react";
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
import { useGetUserInfoQuery, useUpdateInfoMutation } from "../../services/api/userApi";// Import the isLogin query


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
      phone: "",
      city: "",
      address: "",
    },
  });

  const { data , isLoading } = useGetUserInfoQuery();
  const [updateInfo, { isLoading: isLoadingInfo }] = useUpdateInfoMutation();
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    if (data) {
      const customerData = data.data.customer
      console.log("customerData", customerData);
      
      const { firstName, lastName, phone, location_id, address, dataOfBirth } = customerData;
      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("phone", phone || "");
      setValue("city", location_id || "");
      setValue("address", address || "");
      setSelectedCity(city.find((c) => c.label === location_id) || null); // Set city autocomplete
    }
  }, [data, setValue]);

  const onSubmit = async (formData) => {
    const { firstName, lastName, phone, city, address } = formData;

    const updatedData = {
      firstName,
      lastName,
      phone,
      location_id: city, // Make sure this matches your API's expected field
      address,
    };

    console.log("Form Data Submitted:", updatedData);
    try {
      await updateInfo(updatedData).unwrap();
      console.log("Success:", updatedData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isLoading) return <Stack justifyContent={"center"} alignItems={"center"}>Loading...</Stack>;

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]+$/; // Only digits
    if (!value) return true; // Allow empty input if not required
    if (value.length > 15) return "Phone number cannot exceed 15 digits";
    return phonePattern.test(value) || "Please enter a valid phone number";
  };

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Basic Information</Typography>
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
          {errors.firstName && <FormHelperText>{errors.firstName.message}</FormHelperText>}
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
          {errors.lastName && <FormHelperText>{errors.lastName.message}</FormHelperText>}
        </FormControl>

        <Autocomplete
          id="city-select"
          fullWidth
          options={city}
          getOptionLabel={(option) => option.label}
          value={selectedCity}
          onChange={(e, newValue) => {
            setSelectedCity(newValue);
            setValue("city", newValue?.label || "");
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="City"
              error={!!errors.city}
              helperText={errors?.city?.message}
            />
          )}
        />

        <FormControl variant="outlined" error={!!errors.address}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <OutlinedInput
            id="address"
            label="Address"
            placeholder="N. 61Eo, Street 166"
            {...register("address", {
              required: "Address is required",
              pattern: {
                value: /^[A-Za-z\s,]+$/,
                message: "Enter a valid address",
              },
            })}
          />
          {errors.address && <FormHelperText>{errors.address.message}</FormHelperText>}
        </FormControl>

        <FormControl variant="outlined" error={!!errors.phone}>
          <InputLabel htmlFor="phone-number">Phone Number</InputLabel>
          <OutlinedInput
            id="phone-number"
            label="Phone Number"
            placeholder="e.g. 1234567890"
            {...register("phone", {
              required: "Phone number is required",
              validate: validatePhone,
            })}
          />
          {errors.phone && <FormHelperText>{errors.phone.message}</FormHelperText>}
        </FormControl>
      </Stack>

      <Box sx={{ width: "100%", boxSizing: "border-box" }}>
        <Stack sx={{ m: 2, justifyContent: "flex-end" }} direction="row" spacing={2}>
          <Button variant="contained" sx={{ px: 10, py: 2 }} disabled={isLoadingInfo} onClick={handleSubmit(onSubmit)}>
            {isLoadingInfo ? "Saving..." : "Save"}
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

