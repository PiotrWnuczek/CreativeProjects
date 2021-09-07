import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Create = () => (
  <Container>
    <Typography
      variant='h6'
      component='h2'
      color='textSecondary'
      gutterBottom
    >
      Create a New Note
    </Typography>
    <Button
      type='submit'
      variant='contained'
      color='secondary'
      endIcon={<KeyboardArrowRightIcon />}
    >
      Submit
    </Button>
  </Container>
);

export default Create;
