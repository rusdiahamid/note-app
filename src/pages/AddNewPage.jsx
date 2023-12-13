import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/local-data';

const AddNewPage = () => {
  const navigate = useNavigate();

  const onAddNote = (note) => {
    addNote(note);
    navigate('/');
  };

  return <NoteInput addNote={onAddNote} />;
};

export default AddNewPage;
