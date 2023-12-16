import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { showFormattedDate } from '../utils';
import { ArchiveBox, Trash, UploadSimple } from '@phosphor-icons/react';
import Swal from 'sweetalert2';

const NoteDetail = ({ id, title, createdAt, body, archived, onDelete, onArchive, onUnArchive }) => {
  const handleDelete = () => {
    Swal.fire({
      title: 'Apakah kamu yakin?',
      text: 'Catatan ini akan dihapus permanen',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);

        Swal.fire('Dihapus!', 'Catatan berhasil dihapus.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Batal', 'Catatan aman :)', 'info');
      }
    });
  };

  const handleArchive = () => {
    Swal.fire({
      title: 'Sukses',
      text: 'Catatan berhasil diarsipkan.',
      icon: 'success',
    });
    onArchive(id);
  };

  const handleUnArchive = () => {
    Swal.fire({
      title: 'Sukses',
      text: 'Catatan berhasil dipulihkan.',
      icon: 'success',
    });
    onUnArchive(id);
  };

  return (
    <div className="detail-page">
      <h1 className="detail-page__title">{title}</h1>
      <div className="detail-page__createdAt">{showFormattedDate(createdAt)}</div>
      <div className="detail-page__body">{parse(body)}</div>
      <div className="detail-page__action">
        <div className="action">
          <div className="action">
            <Trash
              size={32}
              onClick={() => handleDelete(id)}
            />
          </div>
        </div>
        <div className="action">
          {archived ? (
            <UploadSimple
              size={32}
              onClick={() => handleUnArchive(id)}
            />
          ) : (
            <ArchiveBox
              size={32}
              onClick={() => handleArchive(id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

NoteDetail.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  archived: PropTypes.bool,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onUnArchive: PropTypes.func,
};

export default NoteDetail;
