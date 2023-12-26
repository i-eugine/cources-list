import { useNavigate } from 'react-router';

import { useWithLoading } from '@common/hooks/useWithLoading';
import { MESSAGE_KEYS, withMessage } from '@common/modules/message';
import { AuthService } from '@common/services';
import { ROUTES } from '@routing/routes';
import { setUser } from '@store/signals';
import { TokenManager } from '@store/token-manager';
import { getHref } from '@utils/get-href';

import { UserLoginForm } from './components/UserLoginForm';
import { UserNote } from './components/UserNote';
import { UserPage } from './components/UserPage';

export const UserLogin = () => {
  const [isLoading, withLoading] = useWithLoading();
  const navigate = useNavigate();

  return (
    <UserPage title='Login'>
      <UserLoginForm
        isLoading={isLoading}
        onSubmit={async (data) => {
          const resp = await withMessage(
            MESSAGE_KEYS.USER_LOGIN,
            withLoading(AuthService.login(data))
          );

          TokenManager.setToken(resp.data.result);
          setUser(resp.data.user);
          navigate(getHref(ROUTES.courses));
        }}
      >
        <UserNote action='register' text="If you don't have an account you may" />
      </UserLoginForm>
    </UserPage>
  );
};
