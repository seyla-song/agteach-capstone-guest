import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddPersonalInfoMutation } from "../services/api/authApi";
import { useGetLocationsQuery } from "../services/api/locationApi";

import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  TextField,
  Autocomplete,
} from "@mui/material";

import { LogoLink, FormInput, CustomAlert } from "../components/index";
import { useTranslation } from "react-i18next";

export default function PersonalInfoForm() {
  const [skip, setSkip] = useState(false);
  const dob = localStorage.getItem("dob");
  const { email } = useSelector((state) => state.user);
  const [snackbar, setSnackbar] = useState({
    message: "",
    open: false,
    severity: "",
  });
  const [cities, setCities] = useState([]);
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
  const { data } = useGetLocationsQuery();
  const [t] = useTranslation("global");
  const [addPerosnalInfo, { isLoading }] = useAddPersonalInfoMutation();

  const onSubmit = async (data) => {
    const { city: selectedCity } = data;

    cities.forEach((city) => {
      if (city.name === selectedCity) {
        data.locationId = city.locationId;
      }
    });

    try {
      await addPerosnalInfo({
        ...data,
        dateOfBirth: dob,
        email,
      }).unwrap();
      localStorage.setItem("signupStage", "verification");
      setSnackbar({
        open: true,
        message: "Personal information added successfully",
        severity: "success",
      });
      navigate("/auth/signup/verification");
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.data.message,
        severity: "error",
      });
    }
  };

  useEffect(() => {
    if (data) {
      setCities(data.data);
    }
  }, [data]);

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]+$/; // Only digits
    if (!value.startsWith("0")) return t("additionalInfo.phoneNumberMustStartWith0");
    if (!phonePattern.test(value)) return t("pleaseEnterAValidPhoneNumber");
    if (value.length > 15) return t("additionalInfo.phoneNumberCannotExceed15Digits");
    if (value?.length < 8)
      return t("additionalInfo.aValidPhoneNumberShouldContainsAtleast8Digits");;
  };

  return (
    <Box>
      <Container maxWidth={false} sx={{ maxWidth: "700px" }}>
        <CustomAlert
          label={snackbar.message}
          open={snackbar.open}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
        />
        <Stack paddingTop={{ xs: 8, md: 10 }} alignItems="center" spacing={4}>
          {/* Logo */}
          <LogoLink />

          <Typography variant="h2" textAlign="center">
            {t("additionalInfo.additionalInformation")}
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
                <Typography variant="blgsm">
                  {t("additionalInfo.nameAddress")}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <FormInput
                    label={t("additionalInfo.firstName")}
                    placeholder="e.g. Jane"
                    {...register("firstName", {
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: t(
                          "additionalInfo.firstNameCanOnlyContainLetters"
                        ),
                      },
                      maxLength: {
                        value: 25,
                        message: t("additionalInfo.firstNameCannotBeMoreThan25Characters"),
                      },
                      validate: (value) => {
                        if (!value) return true;
                        if (value.length < 2)
                          return t(
                            "additionalInfo.firstNameMustBeAtLeast2Characters"
                          );
                        if (value.length > 25)
                          return t("additionalInfo.firstNameCannotBeMoreThan25Characters");
                      },
                    })}
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                  />
                  <FormInput
                    label={t("additionalInfo.lastName")}
                    placeholder="e.g. Smith"
                    {...register("lastName", {
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: t(
                          "additionalInfo.lastNameCanOnlyContainLetters"
                        ),
                      },
                      maxLength: {
                        value: 25,
                        message: t("additionalInfo.lastNameCannotBeMoreThan25Characters"),
                      },

                      validate: (value) => {
                        if (!value) return true;
                        if (value.length < 2)
                          return t(
                            "additionalInfo.lastNameMustBeAtLeast2Characters"
                          );
                        if (value.length > 25)
                          return "Last name must be at most 25 characters";
                      },
                    })}
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                  />
                </Box>
                <Autocomplete
                  fullWidth
                  options={cities}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t("additionalInfo.city")}
                      slotProps={{
                        htmlInput: {
                          ...params.inputProps,
                        },
                      }}
                      {...register("city", {
                        validate: (value) => {
                          if (!value.length) {
                            return true;
                          }
                          return (
                            cities.some((city) => city.name === value) ||
                            "Please provide a valid city"
                          );
                        },
                      })}
                      error={!!errors.city}
                      helperText={errors.city?.message}
                    />
                  )}
                />
                <FormInput
                  label={t("additionalInfo.address")}
                  placeholder="e.g. 1234 Main St"
                  {...register("address", {
                    validate: (value) => {
                      if (!value) return true;
                      if (value.length < 2)
                        return t("additionalInfo.addressMustBeAtLeast2Characters");
                      if (value.length > 100)
                        return "Address must be at most 100 characters";
                    },
                  })}
                  error={!!errors.address}
                  helperText={errors?.address?.message}
                />
              </Stack>

              {/* Contact Information */}
              <Stack spacing={2}>
                <Typography variant="blgsm">
                  {t("additionalInfo.contactInformation")}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <FormInput
                    label={t("additionalInfo.phone")}
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
                onClick={() => setSkip(true)}
                variant="outlined"
                sx={{ padding: { xs: "8px 20px", md: "8px 35px" } }}
                disabled={isLoading}
              >
                {t("additionalInfo.skip")}
              </Button>

              <Button
                type="submit"
                onClick={() => setSkip(false)}
                variant="contained"
                sx={{ padding: { xs: "8px 20px", md: "8px 35px" } }}
                disabled={isLoading}
              >
                {isLoading && !skip
                  ? t("additionalInfo.submit") + "..."
                  : t("additionalInfo.submit")}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
