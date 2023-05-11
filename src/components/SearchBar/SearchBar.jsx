import SearchForm from './SearchForm';
import { useState } from 'react';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { ButtonIcon } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const searchForm = event.currentTarget;
    searchForm.reset();
    onSubmit(query);
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} onChange={handleChange}>
        <SearchInput onChange={handleChange} />
        <ButtonIcon type="submit" aria-label="search button">
          <BsSearch />
        </ButtonIcon>
      </SearchForm>
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
