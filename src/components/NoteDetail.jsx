import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
import { ArchiveBox, ClockClockwise, Trash } from '@phosphor-icons/react';

const NoteDetail = ({ id, title, createdAt, body, archived, onDelete, onArchive, onUnArchive }) => {
  return (
    <div className="detail-page">
      <h1 className="detail-page__title">{title}</h1>
      <div className="detail-page__createdAt">{showFormattedDate(createdAt)}</div>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        <div className="action">
          <div className="action">
            <Trash
              size={32}
              onClick={() => onDelete(id)}
            />
          </div>
        </div>
        <div className="action">
          {archived ? (
            <ClockClockwise
              size={32}
              onClick={() => onUnArchive(id)}
            />
          ) : (
            <ArchiveBox
              size={32}
              onClick={() => onArchive(id)}
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
