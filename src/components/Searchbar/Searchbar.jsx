import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// import {
//   Header,
//   SearchForm,
//   BtnSubmit,
//   InputForm,
//   ButtonIcon,
// } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = event =>
    setQuery(event.currentTarget.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedQuery = query.trim();
    if (normalizedQuery === '') {
      return toast.info('Insert correct request', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
    }

    onSubmit(normalizedQuery);
    setQuery('');
  };

  return (
    <header classNames="">
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <FaSearch />
        </button>

        <input
          type="text"
          name="query"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
};

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
