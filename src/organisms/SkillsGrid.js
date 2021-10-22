import React from 'react';
import { Box } from '@mui/material';
import Masonry from 'react-masonry-css';
import SkillCard from 'moleculs/SkillCard';

const breakpoints = { default: 3, 1100: 2, 700: 1 };

const SkillsGrid = ({ skills }) => (
  <Box sx={{ mt: 4 }}>
    <Masonry
      breakpointCols={breakpoints}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {skills && skills.map(skill =>
        <SkillCard
          key={skill.id}
          skill={skill}
        />
      )}
    </Masonry>
  </Box>
);

export default SkillsGrid;
