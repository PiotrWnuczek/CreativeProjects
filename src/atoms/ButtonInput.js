import React from 'react';
import { FormControl, OutlinedInput, IconButton } from '@mui/material';

const ButtonInput = ({ name, icon, ...props }) => (
  <FormControl fullWidth color='secondary'>
    <OutlinedInput {...props}
      sx={{ mt: 2, mb: 2 }}
      placeholder={name}
      name={name}
      endAdornment={
        <IconButton size='small' type='submit'>
          {icon}
        </IconButton>
      }
    />
  </FormControl>
);

export default ButtonInput;
