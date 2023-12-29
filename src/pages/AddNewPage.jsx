import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/api';

const AddNewPage = () => {
  const navigate = useNavigate();

  const onAddNote = async (note) => {
    await addNote(note);
    navigate('/');
  };

  return <NoteInput addNote={onAddNote} />;
};

export default AddNewPage;
