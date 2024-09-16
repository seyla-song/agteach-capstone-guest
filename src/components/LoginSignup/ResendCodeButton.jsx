// components/ResendCodeButton.js

import React from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useResendVerifyCodeMutation } from "../../services/api/authSlice";

const ResendCodeButton = ({ email }) => {
  const [resendVerifyCode, { isLoading, isError, isSuccess, error }] =
    useResendVerifyCodeMutation();

  const handleResend = () => {
    resendVerifyCode(email);
  };

  return (
    <div>
      <Button onClick={handleResend} disabled={isLoading}>
        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          "Resend Verification Code"
        )}
      </Button>
      {isSuccess && (
        <Typography color="success">Code sent successfully!</Typography>
      )}
      {isError && (
        <Typography color="error">
          {error?.data?.message || "An error occurred"}
        </Typography>
      )}
    </div>
  );
};

export default ResendCodeButton;
