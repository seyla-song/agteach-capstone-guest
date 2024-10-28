import React, { forwardRef } from "react";
import TextInput from "./TextInputComponent";
import DateInput from "./DateInputComponent";

export const FormInput = forwardRef((props, ref) => {
  const { isDate } = props;

  return isDate ? <DateInput {...props} /> : <TextInput ref={ref} {...props} />;
});

