import React, { useState } from "react";
import LogoLink from "../components/LoginSignup/LogoLink";
import FormInput from "../components/LoginSignup/FormInput";
import { useForm } from "react-hook-form";
import {useSelector} from "react-redux"
import { useAddPersonalInfoMutation } from "../services/api/authSlice";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  TextField,
  Autocomplete,
} from "@mui/material";
import { CustomAlert } from "../components/CustomAlert";

export default function PersonalInfoForm() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [addPerosnalInfo] = useAddPersonalInfoMutation();
  const {dob, username} = useSelector((state) => state.dob.value);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await addPerosnalInfo({ ...data, dateOfBirth: dob, username }).unwrap();
      console.log("Success:", response);
      if (response.status === "success") {
        setSnackbarSeverity('success');
        setSnackbarMessage('Personal information added successfully');
      } else {
        setSnackbarSeverity('error');
        setSnackbarMessage('Something went wrong. Please try again.');
      }
      setSnackbarOpen(true);
      navigate("/auth/signup/verification");
    } catch (error) {
      console.error("Error:", error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Something went wrong. Please try again.');
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Container maxWidth={false} sx={{ maxWidth: "700px" }}>
        <CustomAlert />
        <Stack paddingTop={{ xs: 8, md: 10 }} alignItems="center" spacing={4}>
          {/* Logo */}
          <LogoLink />

          <Typography variant="h2" textAlign="center">
            Additional Information
          </Typography>

          <Stack
            spacing={2}
            component="form"
            width={"100%"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={4}>
              {/* Personal Information */}
              <Stack spacing={2}>
                <Typography variant="blgsm">Name & Address</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <FormInput
                    label="First Name"
                    placeholder="e.g. Jane"
                    {...register("firstName", {
                      required: "First name is required",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "First name can only contain letters",
                      }
                    })}
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                  />
                  <FormInput
                    label="Last Name"
                    placeholder="e.g. Smith"
                    {...register("lastName", {
                      required: "Last name is required",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Last name can only contain letters",
                      }
                    })}
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                  />
                </Box>
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
                      {...register("city", {
                        required: "City is required",
                      })}
                    />
                  )}
                />
                <FormInput
                  label="Address"
                  placeholder="e.g. 1234 Main St"
                  {...register("address", {
                    required: "Address is required",
                  })}
                  error={!!errors.address}
                  helperText={errors?.address?.message}
                />
              </Stack>

              {/* Contact Information */}
              <Stack spacing={2}>
                <Typography variant="blgsm">Contact Information</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <FormInput
                    label="Phone number"
                    placeholder="e.g. +855 123456789"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+\d{1,3}\s*\d{1,4}(\s*\d{1,4}){1,4}$/,
                        message: "Please enter a valid phone number",
                      }
                    })}
                    error={!!errors.phone}
                    helperText={errors?.phone?.message}
                  />
                </Box>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} display={"flex"} justifyContent="end" >
              {/* <Link to="/guest-profile"> */}
              <Button
                variant="outlined"
                sx={{ padding: { xs: "8px 20px", md: "8px 35px" } }}
              >
                Skip
              </Button>
              {/* </Link> */}

              {/* <Link to="/guest-profile"> */}
              <Button
                type="submit"
                variant="contained"
                sx={{ padding: { xs: "8px 20px", md: "8px 35px" } }}
              >
                Submit
              </Button>
              {/* </Link> */}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

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
