import React from 'react';
import { connect } from 'react-redux';
import { create } from 'logic/projectActions';
import { Container, Typography, Button, Radio, RadioGroup } from '@mui/material';
import { FormControl, FormLabel, FormControlLabel, TextField } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Formik } from 'formik';

const CreateProjects = ({ create, history }) => (
  <Container>
    <Typography
      variant='h6'
      component='h2'
      color='textSecondary'
      gutterBottom
    >
      Create Project
    </Typography>
    <Formik
      initialValues={{
        title: '',
        description: '',
        category: 'work',
        type: 'personal',
      }}
      onSubmit={(values, { resetForm }) => {
        create({ ...values });
        resetForm();
        history.push('/');
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <TextField
            sx={{ mt: 2, mb: 2, display: 'block' }}
            onChange={handleChange}
            value={values.title}
            label='Title'
            type='text'
            name='title'
            placeholder='title'
            variant='outlined'
            color='secondary'
            fullWidth
            required
          />
          <TextField
            sx={{ mt: 2, mb: 2, display: 'block' }}
            onChange={handleChange}
            value={values.description}
            label='Description'
            type='text'
            name='description'
            placeholder='description'
            variant='outlined'
            color='secondary'
            rows={7}
            multiline
            fullWidth
            required
          />
          <FormControl sx={{ mt: 2, mb: 2, display: 'block' }}>
            <FormLabel color='secondary'>Category</FormLabel>
            <RadioGroup
              onChange={handleChange}
              value={values.category}
              name='category'
            >
              <FormControlLabel
                control={<Radio color='secondary' />}
                value='work'
                label='work'
              />
              <FormControlLabel
                control={<Radio color='secondary' />}
                value='life'
                label='life'
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ mt: 2, mb: 2, display: 'block' }}>
            <FormLabel color='secondary'>Type</FormLabel>
            <RadioGroup
              onChange={handleChange}
              value={values.type}
              name='type'
            >
              <FormControlLabel
                control={<Radio color='secondary' />}
                value='personal'
                label='personal'
              />
              <FormControlLabel
                control={<Radio color='secondary' />}
                value='social'
                label='social'
              />
            </RadioGroup>
          </FormControl>
          <Button
            type='submit'
            color='secondary'
            variant='contained'
            endIcon={<KeyboardArrowRight />}
          >
            Create Project
          </Button>
        </form>
      )}
    </Formik>
  </Container>
);

const mapDispatchToProps = (dispatch) => ({
  create: (data) => dispatch(create(data)),
});

export default connect(null, mapDispatchToProps)
  (CreateProjects);
