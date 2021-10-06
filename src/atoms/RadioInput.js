import React from 'react';
import { FormControl, Radio, RadioGroup } from '@mui/material';
import { FormLabel, FormControlLabel } from '@mui/material';

const RadioInput = ({ name, items, ...props }) => (
  <FormControl sx={{ mt: 2, mb: 2, display: 'block' }}>
    <FormLabel color='secondary'>{name}</FormLabel>
    <RadioGroup {...props}
      name={name}
    >
      {items.map(item =>
        <FormControlLabel
          control={<Radio color='secondary' />}
          label={item}
          value={item}
          key={item}
        />
      )}
    </RadioGroup>
  </FormControl>
);

export default RadioInput;
