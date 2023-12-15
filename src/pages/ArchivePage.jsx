import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
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

  return (
    <>
      <SearchBar page="Arsip" />
      <NotesList data={archivedNotes} />
    </>
  );
};

export default ArchivePage;
