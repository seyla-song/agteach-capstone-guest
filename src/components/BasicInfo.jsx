// import React from "react";
// import Input from "./Input";
import { Button, OutlinedInput, Stack, Typography } from "@mui/material";

const BasicInfo = ({ onSave }) => (
  <Stack gap={2}>
    <Typography variant="h2" >Basics Information</Typography>
    <OutlinedInput placeholder="Enter your First Name" />
    <OutlinedInput placeholder="Enter your Last Name" />
    <OutlinedInput placeholder="Enter your Phone Number" />
    <Button variant="contained">Save</Button>
  </Stack>
);
export default BasicInfo;
