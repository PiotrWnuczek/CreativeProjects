import React from 'react';
import { FormControl, MenuItem } from '@mui/material';
import { Select, InputLabel } from '@mui/material';

const SelectInput = ({ name, items, ...props }) => (

  <FormControl fullWidth>
    <InputLabel color='secondary'>{name}</InputLabel>
    <Select {...props}
      color='secondary'
      label={name}
      name={name}
      required
    >
      {items.map(item =>
        <MenuItem value={item}>{item}</MenuItem>
      )}
    </Select>
  </FormControl>
);

export default SelectInput;
