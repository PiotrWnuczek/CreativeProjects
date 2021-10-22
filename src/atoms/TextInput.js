import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ name, ...props }) => (
  <TextField {...props}
    sx={{ mb: 2 }}
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
