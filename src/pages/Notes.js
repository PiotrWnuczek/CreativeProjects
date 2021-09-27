import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import Note from 'blocks/Note';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []);

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    setNotes(notes.filter(note => note.id !== id))
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map(note =>
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <Note note={note} handleDelete={handleDelete} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
};

export default Notes;
