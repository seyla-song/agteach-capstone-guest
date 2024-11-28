import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useResendVerifyCodeMutation } from "../../services/api/authApi";

import { useState } from "react";
import { CustomAlert } from "../CustomAlert";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const ResendCodeButton = ({ email, timeoutRef }) => {
  const [open, setOpen] = useState(true);

  const [resendVerifyCode, { isLoading, isError, isSuccess, error }] =
    useResendVerifyCodeMutation();

  const [t] = useTranslation("global");

  const handleResend = () => {
    resendVerifyCode(email);
  };

  const { isAuthenticated: isLogin, isVerified } = useSelector(
    (state) => state.auth
  );

  const handleOnClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen(true);
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  return (
    <Box onClick={handleOnClick}>
      <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center" }}>
        <Typography variant="bssm" color="dark.300">{t("verification.didntReceiveTheCode")}</Typography>
        <Button
          sx={{
            textTransform: "none",
            color: "purple.main",
            paddingY: 0,
            typography: "bssm",
          }}
          linkButton={true}
          onClick={handleResend}
          disabled={isLoading}
          variant="text"
        >
          {isLoading
            ? "Requesting..."
            : isLogin && !isVerified
              ? t("verification.requestCode")
              : t("verification.resendCode")}
        </Button>
      </Stack>
      {isSuccess && (
        <CustomAlert
          label={t("verification.codeSentSuccessfullyPleaseCheckYourEmail")}
          open={open}
          onClose={() => setOpen(false)}
          severity="success"
        />
      )}
      {isError && (
        <CustomAlert
          label={t("verification.pleaseWait", { time: Math.floor(error.data.remainingCooldown / 1000) })}
          open={open}
          onClose={() => setOpen(false)}
          severity="error"
        />
      )}
    </Box>
  );
};

export default ResendCodeButton;
