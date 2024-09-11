import { Box, Typography, Button } from "@mui/material";
import FormInput from "../components/LoginSignup/FormInput";
import { useForm } from "react-hook-form";

export default function VerificationPage() {
    const { register, handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <Box>
      <Typography>Enter your code</Typography>
      <Typography>
        We have sent you a verification code to your email
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Code" type="text" {...register("code")} />
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  );
}
