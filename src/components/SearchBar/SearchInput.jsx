import { Input } from './SearchInput.styled';

const SearchInput = ({ onChange }) => (
  <Input
    type="text"
    name="movieName"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    autoComplete="off"
    autoFocus
    placeholder="Search movie..."
    onChange={onChange}
  />
);

export default SearchInput;
