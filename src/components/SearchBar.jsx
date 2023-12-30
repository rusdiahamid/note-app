import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, onSearch }) => {
  const onSearchChange = (event) => {
    const searchQuery = event.target.value;
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func,
};

export default SearchBar;
