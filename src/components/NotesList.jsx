import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

function NotesList({ data }) {
  return (
    <div className="notes-list">
      {data.map((note) => {
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
            <div className="note-item__createdAt">{showFormattedDate(note.createdAt)}</div>
            <div className="note-item__body">{parse(note.body)}</div>
          </div>
        );
      })}
    </div>
  );
}

NotesList.propTypes = {
  data: PropTypes.object,
};

export default NotesList;
