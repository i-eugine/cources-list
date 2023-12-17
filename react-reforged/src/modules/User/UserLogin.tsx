import { Button } from 'antd';

import { UserLoginForm } from './components/UserLoginForm';
import { UserPage } from './components/UserPage';

export const Login = () => {
  return (
    <UserPage title='Login'>
      <UserLoginForm onSubmit={() => {}}>
        <p className='text-center'>
          If you don't have an account you may{' '}
          <Button size='small' type='link'>
            Register
          </Button>
        </p>
      </UserLoginForm>
    </UserPage>
  );
};
