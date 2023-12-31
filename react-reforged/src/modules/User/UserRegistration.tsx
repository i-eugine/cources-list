import { useNavigate } from 'react-router';

import { AppHelmet } from '@components';
import { useWithLoading } from '@hooks/useWithLoading';
import { ROUTES } from '@routing/routes';
import { AuthService } from '@services';
import { getHref } from '@utils/get-href';

import { UserLoginForm } from './components/UserLoginForm';
import { UserNote } from './components/UserNote';
import { UserPage } from './components/UserPage';

export const UserRegistration: React.FC = () => {
  const [isLoading, withLoading] = useWithLoading();
  const navigate = useNavigate();
  return (
    <UserPage title='Registration'>
      <AppHelmet description='Register to Courses App' title='Registration' />

      <UserLoginForm
        isLoading={isLoading}
        withName
        onSubmit={async (data) => {
          await withLoading(AuthService.register(data));
          navigate(getHref(ROUTES.login));
        }}
      >
        <UserNote action='login' text='If you have an account you may' />
      </UserLoginForm>
    </UserPage>
  );
};
