import PropTypes from 'prop-types';
import { Form } from './SearchForm.styled';

const SearchForm = ({ onSubmit, children }) => {
  event.preventDefault();
  const searchForm = event.currentTarget;

  searchForm.reset();
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
