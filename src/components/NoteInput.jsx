import React from 'react';
import PropTypes from 'prop-types';
import { FloppyDisk } from '@phosphor-icons/react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onInput(event) {
    this.setState(() => {
      return {
        body: event.target.innerText,
      };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
        <div className="add-new-page__input">
          <form onSubmit={this.onSubmit}>
            <input
              className="add-new-page__input__title"
              placeholder="Judul catatan"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
            <div
              className="add-new-page__input__body"
              data-placeholder="Tulis Catatan disini"
              contentEditable
              onInput={this.onInput}
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
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
