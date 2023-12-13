import { Link } from 'react-router-dom';
import { Plus } from '@phosphor-icons/react';
import NotesList from '../components/NotesList';
import { getActiveNotes } from '../utils/local-data';

const HomePage = () => {
  const notes = getActiveNotes();

  if (!notes.length) {
    return (
      <div className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </div>
    );
  }

  return (
    <>
      <NotesList data={notes} />
      <div className="homepage__action">
        <Link
          to="/new"
          className="action"
        >
          <Plus size={32} />
        </Link>
      </div>
    </>
  );
};

export default HomePage;
