import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

import { useWithLoading } from '@hooks/useWithLoading';
import { ROUTES } from '@routing/routes';
import { userStore } from '@store/user.store';
import { getHref } from '@utils/get-href';

import { UserLoginForm } from './components/UserLoginForm';
import { UserNote } from './components/UserNote';
import { UserPage } from './components/UserPage';

export const UserLogin = observer(function UserLogin() {
  const { login } = userStore;
  const [isLoading, withLoading] = useWithLoading();
  const navigate = useNavigate();

  return (
    <UserPage title='Login'>
      <UserLoginForm
        isLoading={isLoading}
        onSubmit={async (data) => {
          await withLoading(login(data));
          navigate(getHref(ROUTES.courses));
        }}
      >
        <UserNote action='register' text="If you don't have an account you may" />
      </UserLoginForm>
    </UserPage>
  );
});
