import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import Note from 'blocks/Note';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    setNotes(notes.filter(note => note.id !== id))
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {notes.map(note => (
          <div key={note.id}>
            <Note note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
};

export default Notes;
