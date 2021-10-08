import React from 'react';
import { FormControl, OutlinedInput, IconButton } from '@mui/material';
import { Done } from '@mui/icons-material';

const ButtonInput = ({ name, ...props }) => (
  <FormControl fullWidth color='secondary'>
    <OutlinedInput {...props}
      sx={{ mt: 2, mb: 2 }}
      name={name}
      endAdornment={
        <IconButton type='submit'>
          <Done />
        </IconButton>
      }
    />
  </FormControl>
);

export default ButtonInput;
