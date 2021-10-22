import React from 'react';
import { FormControl, MenuItem } from '@mui/material';
import { Select, InputLabel } from '@mui/material';

const SelectInput = ({ name, items, ...props }) => (

  <FormControl fullWidth>
    <InputLabel color='secondary'>{name}</InputLabel>
    <Select {...props}
      sx={{ mb: 2 }}
      label={name}
      name={name}
      color='secondary'
    >
      {items.map(item =>
        <MenuItem
          value={item}
          key={item}
        >
          {item}
        </MenuItem>
      )}
    </Select>
  </FormControl>
);

export default SelectInput;
