import { useState } from 'react';
import css from './SearchBox.module.css';
import { useSearchParams } from 'react-router-dom';

export const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextParams = value !== '' ? { name: value } : {};
    setSearchParams(nextParams);
    setValue('');
  };

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};
