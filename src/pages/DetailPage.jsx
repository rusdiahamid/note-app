import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/api';

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
        <p>Loading...</p>
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

DetailPage.propTypes = {
  id: PropTypes.string,
  navigate: PropTypes.func,
};

export default DetailPage;
