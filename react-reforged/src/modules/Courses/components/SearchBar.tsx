import { Input } from 'antd';
import debounce from 'lodash.debounce';
import { ChangeEvent } from 'react';

import { useSearch } from '@modules/Courses/hooks/useSearch.hook';

export const SearchBar: React.FC = () => {
  const [_, setSearch] = useSearch();
  return (
    <div className='flex-auto lg:flex-none lg:w-1/3'>
      <Input
        placeholder='Enter course to search'
        allowClear
        onChange={debounce((e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), 300)}
      />
    </div>
  );
};
