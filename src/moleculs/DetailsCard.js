import React, { useState } from 'react';
import { Typography, Card, IconButton } from '@mui/material';
import { CardHeader, CardContent } from '@mui/material';
import { Edit } from '@mui/icons-material';
import DetailsEdit from 'moleculs/DetailsEdit';

const DetailsCard = ({ details, id }) => {
  const [edit, setEdit] = useState(false);

  return (
    <Card elevation={1}>
      <CardHeader
        title={
          <>{edit === 'title' ?
            <DetailsEdit
              name='title'
              setEdit={setEdit}
              value={{ title: details.title }}
              type={details.type}
              id={id}
            /> :
            <div>
              {details.title}
              <IconButton onClick={() => setEdit('title')}>
                <Edit />
              </IconButton>
            </div>
          }</>
        }
        subheader={
          <>{edit === 'category' ?
            <DetailsEdit
              name='category'
              setEdit={setEdit}
              value={{ category: details.category }}
              type={details.type}
              id={id}
            /> :
            <div>
              {details.category}
              <IconButton onClick={() => setEdit('category')}>
                <Edit />
              </IconButton>
            </div>
          }</>
        }
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='div'
        >
          {edit === 'description' ?
            <DetailsEdit
              name='description'
              setEdit={setEdit}
              value={{ description: details.description }}
              type={details.type}
              id={id}
            /> :
            <div>
              {details.description}
              <IconButton onClick={() => setEdit('description')}>
                <Edit />
              </IconButton>
            </div>
          }
        </Typography>
      </CardContent>
    </Card>
  )
};

export default DetailsCard;
