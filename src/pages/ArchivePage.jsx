import React from 'react';
import NotesList from '../components/NotesList';
import { getArchivedNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      searchQuery: '',
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(searchQuery) {
    this.setState({ searchQuery });
  }

  render() {
    return (
      <>
        <SearchBar
          page="Arsip"
          onSearch={this.onSearch}
        />
        <NotesList
          notes={this.state.notes}
          searchQuery={this.state.searchQuery}
        />
      </>
    );
  }
}

export default ArchivePage;
