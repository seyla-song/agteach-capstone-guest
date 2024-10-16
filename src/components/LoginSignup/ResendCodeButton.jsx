// components/ResendCodeButton.js

import React from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useResendVerifyCodeMutation } from "../../services/api/authApi";

import { useState } from "react";
import { CustomAlert } from "../CustomAlert";

const ResendCodeButton = ({ email }) => {
  const [open, setOpen] = useState(true);

  const [resendVerifyCode, { isLoading, isError, isSuccess, error }] =
    useResendVerifyCodeMutation();

  const handleResend = () => {
    resendVerifyCode(email);
  };

  const handleOnClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  return (
    <Box onClick={handleOnClick}>
      <Button
        fullWidth
        onClick={handleResend}
        disabled={isLoading}
        variant="contained"
        color="secondary"
      >
        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          "Resend"
        )}
      </Button>
      {isSuccess && (
        <CustomAlert
          label="Code sent successfully , Please Check your email!"
          open={open}
          onClose={() => setOpen(false)}
          severity="success"
        />
      )}
      {isError && (
        <CustomAlert
          label={`Please please wait ${Math.floor(error.data.remainingCooldown / 1000)}s to resend the code again.`}
          open={open}
          onClose={() => setOpen(false)}
          severity="error"
        />
      )}
    </Box>
  );
};

export default ResendCodeButton;
