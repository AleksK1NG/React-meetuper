import React from 'react';
import TextField from '@material-ui/core/TextField';

export const TextFieldAdapter = ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}) => {
  return (
    <TextField
      {...rest}
      name={name}
      helperText={meta.touched ? meta.error : undefined}
      error={meta.error && meta.touched}
      InputProps={restInput}
      // inputProps={rest}
      onChange={onChange}
      value={value}
      fullWidth
    />
  );
};
/*
 * Final Form TextFieldAdapter helper https://codesandbox.io/s/50xx8p4y24
 * */
