import React from 'react';
import Masonry from 'react-masonry-css';
import ElementCard from 'moleculs/ElementCard';

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const DetailsGrid = ({ elements }) => (
  <Masonry
    breakpointCols={breakpoints}
    className='my-masonry-grid'
    columnClassName='my-masonry-grid_column'
  >
    {elements && elements.map(element =>
      <ElementCard
        key={element.id}
        element={element}
      />
    )}
  </Masonry>
);

export default DetailsGrid;
