import React from 'react';
import { Box } from '@mui/material';
import Masonry from 'react-masonry-css';
import ElementCard from 'moleculs/ElementCard';

const breakpoints = { default: 2, 1100: 2, 700: 1 };

const ElementsGrid = ({ elements, projectid }) => (
  <Box sx={{ mt: 4 }}>
    <Masonry
      breakpointCols={breakpoints}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {elements && elements.map(element =>
        <ElementCard
          key={element.id}
          element={element}
          projectid={projectid}
        />
      )}
    </Masonry>
  </Box>
);

export default ElementsGrid;
