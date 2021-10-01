import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography, Button, Radio, RadioGroup } from '@mui/material';
import { FormControl, FormLabel, FormControlLabel, TextField } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';

const Create = () => {
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
          sx={{ mt: 2, mb: 2, display: 'block' }}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          label='Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
        />
        <TextField
          sx={{ mt: 2, mb: 2, display: 'block' }}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
          label='Details'
          variant='outlined'
          color='secondary'
          rows={4}
          multiline
          fullWidth
          required
        />
        <FormControl sx={{ mt: 2, mb: 2, display: 'block' }}>
          <FormLabel color='secondary'>Task Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <FormControlLabel
              control={<Radio color='secondary' />}
              value='money'
              label='money'
            />
            <FormControlLabel
              control={<Radio color='secondary' />}
              value='todos'
              label='todos'
            />
            <FormControlLabel
              control={<Radio color='secondary' />}
              value='work'
              label='work'
            />
            <FormControlLabel
              control={<Radio color='secondary' />}
              value='reminders'
              label='reminders'
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
