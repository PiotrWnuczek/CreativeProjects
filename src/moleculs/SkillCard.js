import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateSkill, removeSkill } from 'logic/skillActions';
import { Typography, Card, IconButton } from '@mui/material';
import { CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue, orange, indigo } from '@mui/material/colors';
import { Edit, Delete } from '@mui/icons-material';
import { Formik } from 'formik';
import ButtonInput from 'atoms/ButtonInput';

const SkillCard = ({ skill, updateSkill, removeSkill }) => {
  const [edit, setEdit] = useState(false);

  const colors = [red, green, blue, orange, indigo];
  const number = skill.title.charCodeAt(0) % 5
  let avatarColor = colors[number][700];

  return (
    <Card elevation={1}>
      <CardHeader
        title={skill.title}
        avatar={
          <Avatar sx={{ backgroundColor: avatarColor }}>
            {skill.title[0].toUpperCase()}
          </Avatar>
        }
        action={<>
          <IconButton onClick={() => setEdit(true)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => removeSkill(skill.id)}>
            <Delete />
          </IconButton>
        </>}
      />
      <CardContent>
        {!edit && <Typography
          variant='body2'
          color='textSecondary'
        >
          {skill.description}
        </Typography>}
        {edit && <Formik
          initialValues={{
            description: skill.description,
          }}
          onSubmit={(values) => {
            updateSkill(values, skill.id);
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
                value={values.description}
                name='description'
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
  updateSkill: (data, id) => dispatch(updateSkill(data, id)),
  removeSkill: (id) => dispatch(removeSkill(id)),
});

export default connect(null, mapDispatchToProps)
  (SkillCard);
