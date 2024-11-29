import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  OutlinedInput,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
  Stack,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useUpdateInfoMutation } from "../../services/api/userApi"; // Import the isLogin query
import { CustomAlert } from "../CustomAlert";
import { useTranslation } from "react-i18next";

export const BasicInfo = ({ userData, cities }) => {
  const [t] = useTranslation("global");
  const {
    control,
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
  const [updateInfo, { isLoading: isLoadingInfo, isError, error, isSuccess }] =
    useUpdateInfoMutation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (userData && userData.customer) {
      const customerData = userData?.customer;
      const { firstName, lastName, phone, location, address } = customerData;
      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("phone", phone || "");
      setValue("city", location?.name || "");
      setValue("address", address || "");
    }
  }, [userData, setValue, cities]);

  const onSubmit = async (formData) => {
    const { city: selectedCity } = formData;

    cities?.forEach((city) => {
      if (city?.name === selectedCity) {
        formData.locationId = city?.locationId;
      }
    });

    await updateInfo(formData);
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]+$/; // Only digits
    if (!phonePattern.test(value)) return t("guestProfile.phoneNumberValid");
    if (!value.startsWith("0")) return t("guestProfile.phoneNumberStart");
    if (value.length > 15) return t("guestProfile.phoneNumberMax");
    if (value?.length < 8) return t("guestProfile.phoneNumberMin");
  };

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">
          {t("guestProfile.basicInfoSection")}
        </Typography>
        <CustomAlert
          label={
            isError
              ? error?.data?.message
              : isSuccess
                ? t("guestProfile.successfullyUpdated")
                : t("guestProfile.errorUpdated")
          }
          severity={isError ? "error" : "success"}
          open={open}
          onClose={() => setOpen(false)}
        />
        <FormControl variant="outlined" error={!!errors?.firstName}>
          <InputLabel htmlFor="first-name">
            {t("guestProfile.firstNameLabel")}
          </InputLabel>
          <OutlinedInput
            id="first-name"
            label={t("guestProfile.firstNameLabel")}
            placeholder={t("guestProfile.firstNamePlaceholder")}
            {...register("firstName", {
              required: t("guestProfile.firstNameRequired"),
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: t("guestProfile.firstNameOnlyLetters"),
              },
              validate: (value) => {
                if (value.length < 2) return t("guestProfile.firstNameMin");
                if (value.length > 25) return t("guestProfile.firstNameMax");
              },
            })}
          />
          {errors.firstName && (
            <FormHelperText>{errors?.firstName?.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl variant="outlined" error={!!errors?.lastName}>
          <InputLabel htmlFor="last-name">
            {t("guestProfile.lastNameLabel")}
          </InputLabel>
          <OutlinedInput
            id="last-name"
            label={t("guestProfile.lastNameLabel")}
            placeholder={t("guestProfile.lastNamePlaceholder")}
            {...register("lastName", {
              required: t("guestProfile.lastNameRequired"),
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: t("guestProfile.lastNameOnlyLetters"),
              },
              validate: (value) => {
                if (value.length < 2) return t("guestProfile.lastNameMin");
                if (value.length > 25) return t("guestProfile.lastNameMax");
              },
            })}
          />
          {errors.lastName && (
            <FormHelperText>{errors?.lastName?.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth error={!!errors?.city}>
          <InputLabel htmlFor="city">{t("guestProfile.cityLabel")}</InputLabel>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            rules={{
              validate: (value) =>
                value
                  ? cities.some((city) => city.name === value) ||
                    "Please provide a valid city"
                  : "Please select a city",
            }}
            render={({ field }) => (
              <Select {...field} label="City">
                {cities.map((city) => (
                  <MenuItem key={city.name} value={city.name}>
                    {city.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />

          <FormHelperText>{errors?.city?.message}</FormHelperText>
        </FormControl>

        <FormControl variant="outlined" error={!!errors?.address}>
          <InputLabel htmlFor="address">
            {t("guestProfile.addressLabel")}
          </InputLabel>
          <OutlinedInput
            id="address"
            label={t("guestProfile.addressLabel")}
            placeholder={t("guestProfile.addressPlaceholder")}
            {...register("address", {
              required: t("guestProfile.addressRequired"),
              validate: (value) => {
                if (value.length > 100) return t("guestProfile.addressMax");
              },
            })}
          />
          {errors?.address && (
            <FormHelperText>{errors?.address?.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl variant="outlined" error={!!errors?.phone}>
          <InputLabel htmlFor="phone-number">
            {t("guestProfile.phoneNumberLabel")}
          </InputLabel>
          <OutlinedInput
            id="phone-number"
            label={t("guestProfile.phoneNumberLabel")}
            placeholder={t("guestProfile.phoneNumberPlaceholder")}
            {...register("phone", {
              required: t("guestProfile.phoneNumberRequired"),
              validate: validatePhone,
            })}
          />
          {errors.phone && (
            <FormHelperText>{errors?.phone?.message}</FormHelperText>
          )}
        </FormControl>
      </Stack>

      <Box sx={{ width: "100%", boxSizing: "border-box" }}>
        <Stack
          sx={{ m: 2, justifyContent: "flex-end" }}
          direction="row"
          spacing={2}
        >
          <Button
            variant="contained"
            sx={{ px: 10, py: 2 }}
            disabled={isLoadingInfo}
            onClick={handleSubmit(onSubmit)}
          >
            {isLoadingInfo
              ? t("guestProfile.saving")
              : t("guestProfile.saveButton")}
          </Button>
        </Stack>
      </Box>
    </>
  );
};
