import React, { useState } from "react";
import LogoLink from "../components/LoginSignup/LogoLink";
import FormInput from "../components/LoginSignup/FormInput";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAddPersonalInfoMutation } from "../services/api/authApi";
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

export default function PersonalInfoForm() {
  const { dob } = useSelector((state) => state.user);
  const { email } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      imageUrl: "https://placehold.co/600x400/png",
    },
  });
  const navigate = useNavigate();
  const [addPerosnalInfo, { isLoading }] = useAddPersonalInfoMutation();

  const onSubmit = async (data) => {
    try {
      await addPerosnalInfo({
        ...data,
        dateOfBirth: dob,
        email,
      }).unwrap();
      navigate("/auth/signup/verification");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]+$/; // Only digits
    if (!value) return true; // Allow empty input if not required
    if (value.length > 15) return "Phone number cannot exceed 15 digits";
    return phonePattern.test(value) || "Please enter a valid phone number";
  };

  return (
    <Box>
      <Container maxWidth={false} sx={{ maxWidth: "700px" }}>
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
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "First name can only contain letters",
                      },
                    })}
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                  />
                  <FormInput
                    label="Last Name"
                    placeholder="e.g. Smith"
                    {...register("lastName", {
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Last name can only contain letters",
                      },
                    })}
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                  />
                </Box>
                <Autocomplete
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
                      {...register("city", {})}
                    />
                  )}
                />
                <FormInput
                  label="Address"
                  placeholder="e.g. 1234 Main St"
                  {...register("address", {})}
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
                    placeholder="e.g. 0123456789"
                    {...register("phone", {
                      validate: validatePhone,
                    })}
                    error={!!errors.phone}
                    helperText={errors?.phone?.message}
                  />
                </Box>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              display={"flex"}
              justifyContent="end"
            >
              <Button
                type="submit"
                variant="outlined"
                sx={{ padding: { xs: "8px 20px", md: "8px 35px" } }}
              >
                Skip
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{ padding: { xs: "8px 20px", md: "8px 35px" } }}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
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
