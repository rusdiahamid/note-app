import PropTypes from 'prop-types';
import { FloppyDisk } from '@phosphor-icons/react';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';
import { noteInput } from '../utils/content';

const NoteInput = ({ addNote }) => {
  const [title, onTitleChange] = useInput('');
  const [body, setBody] = useState('');
  const { locale } = useContext(LocaleContext);

  const onInput = (event) => {
    setBody(event.target.innerText);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    addNote({
      title,
      body,
    });

    Swal.fire({
      title: noteInput[locale].title,
      text: noteInput[locale].text,
      icon: 'success',
    });
  };

  return (
    <>
      <div className="add-new-page__input">
        <form onSubmit={onSubmit}>
          <input
            className="add-new-page__input__title"
            placeholder={noteInput[locale].titlePlaceholder}
            value={title}
            onChange={onTitleChange}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder={noteInput[locale].bodyPlaceholder}
            contentEditable
            onInput={onInput}
          ></div>
          <div className="add-new-page__action">
            <button
              type="submit"
              className="action"
            >
              <FloppyDisk size={32} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
