import { Input } from 'antd';

export const SearchBar = () => {
  return (
    <div className='flex-auto lg:flex-none lg:w-1/3'>
      <Input placeholder='Enter course to search' allowClear />
    </div>
  );
};
