/* eslint-disable react/button-has-type */
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { getDataBySearch } from '@/utils/apiDataUtil';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const [data, setData] = useState([]);

  const router = useRouter();

  const handleInput = async (value: string): Promise<void> => {
    if (/.{4,}/.test(value)) {
      const result = await getDataBySearch(value);
      setData(result.results);
    } else {
      setData([]);
    }
    setValue(value);
  };
  function handleClear(e: any): void {
    e.preventDefault();
    setData([]);
    setValue('');
  }

  const handleSearch = (e: any) => {
    e.preventDefault();
    setValue('');
  };

  const handleClickOnDropDown = (e: any) => {
    const { id } = e;
    router.push({
      pathname: `http://localhost:3000/${id}`,
      query: { id },
    });
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
          <button className="clear-button" onClick={(e) => handleClear(e)}>
            <div>
              <img src="img/x.svg" alt="" />
            </div>
          </button>
        </div>
      </form>
      {data.length != 0 ? (
        <ul className="search__dropdown">
          {data.map((element) => {
            return (
              <li
                key={element.id}
                className="search__dropdown--element"
                onClick={() => handleClickOnDropDown(element)}
              >
                {element.title}
              </li>
            );
          })}
        </ul>
      ) : (
        ''
      )}

      <div />
    </div>
  );
};

export default SearchBar;
