import React, { ChangeEvent } from 'react';
import { DebouncedFunc } from 'lodash';

interface ISearchBar {
  handleSearch: DebouncedFunc<(e: ChangeEvent<HTMLInputElement>) => void>;
}

function SearchBar({ handleSearch }: ISearchBar) {
  return (
    <div className=" flex justify-center items-center h-16 md:w-full  ">
      <label className=" flex gap-2 justify-center  w-full  ">
        <span className=" text-crimson font-oswald text-xl"> Search:</span>
        <input
          placeholder="Write here"
          onChange={(e) => {
            handleSearch(e);
          }}
          className="md:w-3/6 border-b-fire border-2 outline-none font-lato"
        />{' '}
      </label>
    </div>
  );
}

export default SearchBar;
