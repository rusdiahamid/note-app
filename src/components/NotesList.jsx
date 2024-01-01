import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
import Empty from './Empty';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

function NotesList({ notes, searchQuery }) {
  const { locale } = useContext(LocaleContext);

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()));
  if (!filteredNotes.length) {
    return <Empty />;
  }

  return (
    <div className="notes-list">
      {filteredNotes.map((note) => {
        return (
          <div
            className="note-item"
            key={note.id}
          >
            <Link
              to={`/note/${note.id}`}
              className="note-item__title"
            >
              {note.title}
            </Link>
            <div className="note-item__createdAt">{showFormattedDate(note.createdAt, locale)}</div>
            <div className="note-item__body">{parse(note.body)}</div>
          </div>
        );
      })}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array,
  searchQuery: PropTypes.string,
};

export default NotesList;
