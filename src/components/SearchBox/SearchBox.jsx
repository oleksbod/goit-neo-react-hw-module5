import { useState } from 'react';
import css from './SearchBox.module.css';

export const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState('');

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        className={css.searchBtn}
        onClick={() => {
          onSearch(value);
          setValue('');
        }}>
        Search
      </button>
    </div>
  );
};
