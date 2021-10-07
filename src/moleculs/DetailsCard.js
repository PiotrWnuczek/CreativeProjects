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
              setEdit={setEdit}
              value={details.title}
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
              setEdit={setEdit}
              value={details.category}
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
        >
          {details.description}
          <IconButton onClick={() => console.log('update')}>
            <Edit />
          </IconButton>
        </Typography>
      </CardContent>
    </Card>
  )
};

export default DetailsCard;
