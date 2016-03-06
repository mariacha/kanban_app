import React from 'react';
import Note from './Note.jsx';

export default ({notes, onCake}) => {
  return (
    <ul>{notes.map(note =>
        <li key={note.id}>
          <Note
            task={note.task}
            onCake={onCake.bind(null, note.id)} />
        </li>
    )}</ul>
  );
}
