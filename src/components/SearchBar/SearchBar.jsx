import SearchForm from './SearchForm';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { ButtonIcon } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => (
  <>
    <SearchForm onSubmit={onSubmit}>
      <SearchInput />
      <ButtonIcon type="submit" aria-label="search button">
        <BsSearch />
      </ButtonIcon>
    </SearchForm>
  </>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
