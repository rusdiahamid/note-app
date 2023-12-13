import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <DetailPage
      id={id}
      navigate={navigate}
    />
  );
}

export class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  onDelete = (id) => {
    deleteNote(id);

    this.props.navigate('/');
  };

  onArchive = (id) => {
    archiveNote(id);

    this.props.navigate('/');
  };

  onUnArchive = (id) => {
    unarchiveNote(id);

    this.props.navigate('/');
  };

  render() {
    if (this.state.note === null) {
      return <p>Note tidak ditemukan!</p>;
    }
    return (
      <NoteDetail
        {...this.state.note}
        onDelete={this.onDelete}
        onArchive={this.onArchive}
        onUnArchive={this.onUnArchive}
      />
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string,
  navigate: PropTypes.func,
};

export default DetailPageWrapper;
