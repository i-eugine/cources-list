import { Input } from 'antd';
import debounce from 'lodash.debounce';
import { FC } from 'react';

import { useSearch } from '@modules/Courses/hooks/useSearch.hook';

export const SearchBar: FC = () => {
  const [_, setSearch] = useSearch();
  return (
    <div className='flex-auto lg:flex-none lg:w-1/3'>
      <Input
        placeholder='Enter course to search'
        allowClear
        onChange={debounce((e) => setSearch(e.target.value), 300)}
      />
    </div>
  );
};
