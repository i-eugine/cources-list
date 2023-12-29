import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

import { useWithLoading } from '@hooks/useWithLoading';
import { ROUTES } from '@routing/routes';
import { AuthService } from '@services';
import { TokenManager } from '@store/token-manager';
import { userStore } from '@store/user.store';
import { getHref } from '@utils/get-href';

import { UserLoginForm } from './components/UserLoginForm';
import { UserNote } from './components/UserNote';
import { UserPage } from './components/UserPage';

export const UserLogin = observer(function UserLogin() {
  const [isLoading, withLoading] = useWithLoading();
  const navigate = useNavigate();

  return (
    <UserPage title='Login'>
      <UserLoginForm
        isLoading={isLoading}
        onSubmit={async (data) => {
          const resp = await withLoading(AuthService.login(data));

          TokenManager.setToken(resp.data.result);
          navigate(getHref(ROUTES.courses));
          userStore.setUser(resp.data.user);
        }}
      >
        <UserNote action='register' text="If you don't have an account you may" />
      </UserLoginForm>
    </UserPage>
  );
});
