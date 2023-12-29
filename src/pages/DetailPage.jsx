import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, unarchiveNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/api';

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

  return <section>{loading ? <p>Loading...</p> : <NoteDetail {...note} />}</section>;
}

// export class DetailPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       note: getNote(props.id),
//     };
//   }

//   onDelete = (id) => {
//     deleteNote(id);

//     this.props.navigate('/');
//   };

//   onArchive = (id) => {
//     archiveNote(id);

//     this.props.navigate('/');
//   };

//   onUnArchive = (id) => {
//     unarchiveNote(id);

//     this.props.navigate('/archive');
//   };

//   render() {
//     if (this.state.note === null) {
//       return <p>Note tidak ditemukan!</p>;
//     }
//     return (
//       <>
//         <NoteDetail
//           {...this.state.note}
//           onDelete={this.onDelete}
//           onArchive={this.onArchive}
//           onUnArchive={this.onUnArchive}
//         />
//       </>
//     );
//   }
// }

DetailPage.propTypes = {
  id: PropTypes.string,
  navigate: PropTypes.func,
};

export default DetailPage;
