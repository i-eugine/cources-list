import { Result, Button } from 'antd';

export const NotFoundPage = () => {
  return (
    <Result
      extra={
        <Button href='/' type='primary'>
          Back Home
        </Button>
      }
      status='404'
      subTitle='Sorry, the page you visited does not exist.'
      title='404'
    />
  );
};
