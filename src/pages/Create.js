import React, { useState } from 'react';
import { makeStyles, Container } from '@material-ui/core';
import { FormControl, FormLabel, FormControlLabel } from '@material-ui/core';
import { TextField, Typography, Button, Radio, RadioGroup } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

const Create = () => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === '') {
      setTitleError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details, category);
    }
  };

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
      <form
        onSubmit={handleSubmit}
        autoComplete='off'
        noValidate
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          className={classes.field}
          label='Title'
          variant='outlined'
          color='primary'
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
          className={classes.field}
          label='Details'
          variant='outlined'
          color='primary'
          rows={4}
          multiline
          fullWidth
          required
        />
        <FormControl className={classes.field}>
          <FormLabel>Form Label</FormLabel>
          <RadioGroup
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <FormControlLabel
              control={<Radio />}
              value='money'
              label='money'
            />
            <FormControlLabel
              control={<Radio />}
              value='todos'
              label='todos'
            />
            <FormControlLabel
              control={<Radio />}
              value='reminders'
              label='reminders'
            />
            <FormControlLabel
              control={<Radio />}
              value='work'
              label='work'
            />
          </RadioGroup>
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
};

export default Create;
