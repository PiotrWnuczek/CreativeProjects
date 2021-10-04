import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ name, ...props }) => (
  <TextField {...props}
    sx={{ mt: 2, mb: 2, display: 'block' }}
    placeholder={name}
    label={name}
    name={name}
    variant='outlined'
    color='secondary'
    fullWidth
    required
  />
);

export default TextInput;
