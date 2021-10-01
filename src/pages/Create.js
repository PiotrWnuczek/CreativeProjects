import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography, Button, Radio, RadioGroup } from '@mui/material';
import { FormControl, FormLabel, FormControlLabel, TextField } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

const Create = () => {
  const classes = useStyles();
  const history = useHistory();

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
      fetch('http://localhost:8000/tasks', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, details, category }),
      }).then(history.push('/'))
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
        Create a New Task
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
          color='secondary'
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
          className={classes.field}
          label='Details'
          variant='outlined'
          color='secondary'
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
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
};

export default Create;
