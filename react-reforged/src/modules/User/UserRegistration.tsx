import { UserLoginForm } from './components/UserLoginForm';
import { UserPage } from './components/UserPage';

export const Registration = () => {
  return (
    <UserPage title='Registration'>
      <UserLoginForm onSubmit={() => {}}>
        <p className='text-center'>
          If you have an account you may <a href='/login'>Login</a>
        </p>
      </UserLoginForm>
    </UserPage>
  );
};
