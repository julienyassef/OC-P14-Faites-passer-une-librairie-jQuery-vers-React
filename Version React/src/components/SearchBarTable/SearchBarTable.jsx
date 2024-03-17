//scss
import './SearchBarTable.scss'

const SearchBarTable = ({ onSearch }) => {
    return (
        <div className='wrapperSearchBarTable'>
            <span className='wrapperSearchBarTable__text'>Search:</span>
            <input
              type="text"
              placeholder=" "
              onChange={(e) => onSearch(e.target.value)}
              className="search-bar"
            />
        </div>
    );
  };

  export default SearchBarTable