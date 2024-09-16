import React from "react";
import LogoLink from "../components/LoginSignup/LogoLink";
import FormInput from "../components/LoginSignup/FormInput";
import { Form, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useForm } from "react-hook-form";

export default function PersonalInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
    } catch (error) {}
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
                      required: "First name is required",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Please enter a valid first name",
                      },
                    })}
                  />
                  <FormInput
                    label="Last Name"
                    placeholder="e.g. Smith"
                    {...register("lastName")}
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
                />
              </Stack>

              {/* Contact Information */}
              <Stack spacing={2}>
                <Typography variant="blgsm">Contact Information</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <FormInput
                    label="Phone number"
                    placeholder="e.g. +855 123 456 789"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+855\d{9}$/,
                        message: "Please enter a valid phone number",
                      }
                    })}
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
