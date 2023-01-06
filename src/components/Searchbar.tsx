import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface ISerchbarProps {
  onSubmit: (query: string) => void;
}

export const Searchbar: React.FC<ISerchbarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.currentTarget.value.toLowerCase());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedQuery: string = query.trim();
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
    <header className="sticky top-0 left-0 z-50 flex justify-center items-center min-h-min px-6 py-3 bg-sky-700 shadow-xl">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full bg-white rounded truncate max-w-lg"
      >
        <button
          type="submit"
          className=" flex justify-center items-center w-12 h-12 border-0 opacity-60 cursor-pointer outline-0 ease-out duration-200 hover:opacity-100"
        >
          <FaSearch className="w-5 h-5 fill-black" />
        </button>

        <input
          className="inline-block w-full text-xl outline-none px-1 placeholder:text-lg"
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
