import React, { useState } from 'react';

import { getDataBySearch } from '@/utils/apiDataUtil';

const SearchBar = () => {
  const [value, setValue] = useState('');

  function handleInput(value: string): void {
    setValue(value);
  }
  function handleClear(e: any): void {
    e.preventDefault();
    setValue('');
  }

  const handleSearch = async (e: any): Promise<void> => {
    e.preventDefault();

    if (/.{3}/.test(value)) {
      const data = await getDataBySearch(value);
    }

    setValue('');
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={value}
          placeholder="Aumeister"
          className="search__input"
          onChange={(e) => handleInput(e.target.value)}
        />
        <div className="buttons">
          <button
            type="submit"
            className="search-button"
            onClick={(e) => handleSearch(e)}
          >
            <img src="img/search.svg" className="search__icon" alt="" />
          </button>
          <button
            type="clear"
            className="clear-button"
            onClick={(e) => handleClear(e)}
          >
            <div>
              <img src="img/x.svg" alt="" />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
