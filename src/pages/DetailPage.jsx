import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/api';
import Loader from '../components/Loader';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNote(id)
      .then(({ data }) => {
        setNote(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const onDelete = async (id) => {
    await deleteNote(id);

    navigate('/');
  };

  const onArchive = async (id) => {
    await archiveNote(id);

    navigate('/');
  };

  const onUnArchive = async (id) => {
    await unarchiveNote(id);

    navigate('/archive');
  };

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <NoteDetail
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnArchive={onUnArchive}
        />
      )}
    </section>
  );
}

export default DetailPage;
