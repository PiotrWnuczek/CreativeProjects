import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateElement, removeElement } from 'actions/elementActions';
import { Typography, Card, IconButton, Button } from '@mui/material';
import { CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue, orange, indigo } from '@mui/material/colors';
import { Download, CheckCircleOutline } from '@mui/icons-material';
import { Edit, Done } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';
import fileDownload from 'js-file-download';
import axios from 'axios';

const ElementCard = ({ element, projectid, updateElement, removeElement }) => {
  const [edit, setEdit] = useState(false);
  const colors = [red, green, blue, orange, indigo];
  const number = element.title.charCodeAt(0) % 5;
  let avatarColor = colors[number][700];

  return (
    <Card elevation={1}>
      <CardHeader
        title={element.title}
        avatar={
          <Avatar sx={{ backgroundColor: avatarColor }}>
            {element.title[0].toUpperCase()}
          </Avatar>
        }
        action={<>
          {element.url && <IconButton
            onClick={() => {
              axios.get(element.url, { responseType: 'blob' })
                .then(res => fileDownload(res.data, 'file.txt'))
            }}
          >
            <Download />
          </IconButton>}
          {element.task && <IconButton>
            <CheckCircleOutline />
          </IconButton>}
          {!edit && <IconButton
            onClick={() => setEdit(true)}
          >
            <Edit />
          </IconButton>}
          {edit && <IconButton
            type='submit'
            form='edit'
          >
            <Done />
          </IconButton>}
        </>}
      />
      <CardContent>
        {!edit && <Typography
          variant='body2'
          color='textSecondary'
        >
          {element.description}
        </Typography>}
        {edit && <Formik
          initialValues={{
            description: element.description,
          }}
          onSubmit={(values) => {
            updateElement({ type: element.type, ...values }, projectid, element.id);
            setEdit(false);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form
              id='edit'
              onSubmit={handleSubmit}
              autoComplete='off'
            >
              <TextInput
                onChange={handleChange}
                value={values.description}
                name='description'
                type='text'
                rows={5}
                multiline
              />
            </form>
          )}
        </Formik>}
        {edit && <Button
          color='secondary'
          size='small'
          onClick={() => {
            removeElement({ type: element.type }, projectid, element.id);
          }}
        >
          Delete Element
        </Button>}
      </CardContent>
    </Card>
  )
};

const mapDispatchToProps = (dispatch) => ({
  updateElement: (data, projectid, id) => dispatch(updateElement(data, projectid, id)),
  removeElement: (data, projectid, id) => dispatch(removeElement(data, projectid, id)),
});

export default connect(null, mapDispatchToProps)
  (ElementCard);
