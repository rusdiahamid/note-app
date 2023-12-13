import NotesList from '../components/NotesList';
import { getArchivedNotes } from '../utils/local-data';

const ArchivePage = () => {
  const archivedNotes = getArchivedNotes();

  if (!archivedNotes.length) {
    return (
      <div className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </div>
    );
  }

  return <NotesList data={archivedNotes} />;
};

export default ArchivePage;
