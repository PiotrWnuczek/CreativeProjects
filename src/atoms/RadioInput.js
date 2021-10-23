import React from 'react';
import { Radio, RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';

const RadioInput = ({ name, items, ...props }) => (
  <RadioGroup {...props}
    sx={{ mb: 2 }}
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
);

export default RadioInput;
