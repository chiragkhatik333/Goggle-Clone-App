import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../context/ResultContextProvider';
import { Links } from './Links';

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="md:w-150 sm:w-96 w-100 h-0 dark:bg-transparent border rounded-full shadow-sm outline-none p-6 text-black-700 hover:shadow-lg mb-4"
        placeholder="Search Google or type URL"
        onChange={(e) => setText(e.target.value)}

      />
      {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
      <Links />
    </div>
  );
};
