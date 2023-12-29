import PropTypes from 'prop-types';

const SearchBar = ({ page, onSearch }) => {
  const onSearchChange = (event) => {
    const searchQuery = event.target.value;
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <h2>Catatan {page}</h2>
      <input
        type="search"
        placeholder="Cari berdasarkan judul..."
        onChange={onSearchChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  page: PropTypes.string.isRequired,
  onSearch: PropTypes.func,
};

export default SearchBar;
