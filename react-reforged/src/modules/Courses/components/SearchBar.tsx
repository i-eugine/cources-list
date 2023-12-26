import { Input, Tooltip } from 'antd';

export const SearchBar = () => {
  return (
    <div className='flex-auto lg:flex-none lg:w-1/3'>
      <Tooltip title='Search courses'>
        <Input placeholder='Enter course to search' allowClear />
      </Tooltip>
    </div>
  );
};
