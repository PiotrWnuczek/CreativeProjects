import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container, Typography, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  btn: { fontSize: 20},
});

const Create = () => {
  const classes = useStyles();

  return (
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
        className={classes.btn}
        type='submit'
        variant='contained'
        color='secondary'
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  )
};

export default Create;
