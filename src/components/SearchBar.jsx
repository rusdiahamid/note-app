import PropTypes from 'prop-types';

import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    const searchQuery = event.target.value;
    this.props.onSearch(searchQuery);
  }

  render() {
    return (
      <div className="search-bar">
        <h2>Catatan {this.props.page}</h2>
        <input
          type="search"
          placeholder="Cari berdasarkan judul..."
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  page: PropTypes.string.isRequired,
  onSearch: PropTypes.func,
};

export default SearchBar;
