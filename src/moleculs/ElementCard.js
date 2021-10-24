import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateElement, removeElement } from 'logic/elementActions';
import { Typography, Card, IconButton } from '@mui/material';
import { CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue, orange, indigo } from '@mui/material/colors';
import { Edit, Download, Delete } from '@mui/icons-material';
import { Formik } from 'formik';
import ButtonInput from 'atoms/ButtonInput';
import fileDownload from 'js-file-download';
import axios from 'axios';

const ElementCard = ({ element, projectid, updateElement, removeElement }) => {
  const [edit, setEdit] = useState(false);

  const colors = [red, green, blue, orange, indigo];
  const number = element.item.charCodeAt(0) % 5;
  let avatarColor = colors[number][700];

  return (
    <Card elevation={1}>
      <CardHeader
        title={element.item}
        avatar={
          <Avatar sx={{ backgroundColor: avatarColor }}>
            {element.item[0].toUpperCase()}
          </Avatar>
        }
        action={<>
          {element.item === 'file' && <IconButton onClick={() => {
            axios.get(element.url, { responseType: 'blob' })
              .then(res => fileDownload(res.data, 'file.txt'))
          }}>
            <Download />
          </IconButton>}
          <IconButton onClick={() => setEdit(true)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => {
            removeElement({ type: element.type }, projectid, element.id);
          }}>
            <Delete />
          </IconButton>
        </>}
      />
      <CardContent>
        {!edit && <Typography
          variant='body2'
          color='textSecondary'
        >
          {element.content}
        </Typography>}
        {edit && <Formik
          initialValues={{
            content: element.content,
          }}
          onSubmit={(values) => {
            updateElement({ type: element.type, ...values }, projectid, element.id);
            setEdit(false);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              autoComplete='off'
            >
              <ButtonInput
                onChange={handleChange}
                value={values.content}
                name='content'
                type='text'
                rows={5}
                multiline
              />
            </form>
          )}
        </Formik>}
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
