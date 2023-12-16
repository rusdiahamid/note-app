import React from 'react';
import NotesList from '../components/NotesList';
import { getActiveNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import HomePageAction from '../components/HomePageAction';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
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
          page="Aktif"
          onSearch={this.onSearch}
        />
        <NotesList
          notes={this.state.notes}
          searchQuery={this.state.searchQuery}
        />
        <HomePageAction />
      </>
    );
  }
}

export default HomePage;
