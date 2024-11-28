import React, { useEffect } from "react";
import {
  Stack,
  Typography,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

/**
 * @function AccountSecurity
 * @description This component renders a form to input an email and a button to save the input.
 * @returns {JSX.Element} A JSX element that renders the form and button.
 */

export const AccountSecurity = ({ userData }) => {
  const { setValue, register } = useForm();
  const [t] = useTranslation("global");

  useEffect(() => {
    if (userData && userData.customer) {
      const customerData = userData.customer;
      const { email } = customerData;
      setValue("email", email || "");
    }
  }, [userData, setValue]);

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">
          {t("guestProfile.accountSecuritySection")}
        </Typography>
        <FormControl>
          <InputLabel htmlFor="email">
            {t("guestProfile.emailLabel")}
          </InputLabel>
          <OutlinedInput
            id="email"
            label={t("guestProfile.emailLabel")}
            disabled
            placeholder="e.g. janeagteach@gmail.com"
            {...register("email", {})}
          />
        </FormControl>
      </Stack>
    </>
  );
};
