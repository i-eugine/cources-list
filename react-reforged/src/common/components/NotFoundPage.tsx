import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Result
      extra={
        <Link to='/'>
          <Button type='primary'>Back Home</Button>
        </Link>
      }
      status='404'
      subTitle='Sorry, the page you visited does not exist.'
      title='404'
    />
  );
};
