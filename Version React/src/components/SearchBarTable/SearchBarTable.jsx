//scss
import './SearchBarTable.scss'

const SearchBarTable = ({ onSearch }) => {
    return (
        <>
            <span>Search:</span>
            <input
              type="text"
              placeholder=" "
              onChange={(e) => onSearch(e.target.value)}
              className="search-bar"
            />
        </>
    );
  };

  export default SearchBarTable