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

  const { data: oneData, isLoading } = useGetUserInfoQuery();
  const [updateInfo, { isLoading: isLoadingInfo }] = useUpdateInfoMutation();
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    if (oneData) {
      const customerData = oneData.data.customers[0]
      const { firstName, lastName, phone, location_id, address } = customerData;
      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("phone", phone || "");
      setValue("city", location_id || "");
      setValue("address", address || "");
      setSelectedCity(city.find((c) => c.label === location_id) || null); // Set city autocomplete
    }
  }, [oneData, setValue]);

  const onSubmit = async (formData) => {
    console.log("Form Data Submitted:", formData);
    try {
      await updateInfo(formData).unwrap();
      console.log("Success:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isLoading) return <Stack justifyContent={"center"} alignItems={"center"}>Loading...</Stack>;

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
            placeholder="e.g. 123-456-7890"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9-\s]+$/,
                message: "Phone number must be a valid format",
              },
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

