import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

RHFTextField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  InputLabelProps: PropTypes.object,
};

export default function RHFTextField({ name, onChange, InputLabelProps, ...other }) {
  const { control } = useFormContext();

  useEffect(() => {
    const element = document.querySelector(`input[name="${name}"]`);
    if (element) {
      element.focus();
    }
  }, [name]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          onChange={(e) => {
            field.onChange(e.target.value);
            onChange && onChange(e);
          }}
          value={field.value || ''}  // Use value as a controlled input or an empty string
          error={!!error}
          helperText={error?.message}
          InputLabelProps={{ ...field.fieldState?.error?.message ? { shrink: true } : {}, ...InputLabelProps }}
          {...other}
        />
      )}
    />
  );
}
