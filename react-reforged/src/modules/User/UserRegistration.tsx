import { useNavigate } from 'react-router';

import { useWithLoading } from '@common/hooks/useWithLoading';
import { MESSAGE_KEYS, withMessage } from '@common/modules/message';
import { AuthService } from '@common/services';
import { ROUTES } from '@routing/routes';
import { getHref } from '@utils/get-href';

import { UserLoginForm } from './components/UserLoginForm';
import { UserNote } from './components/UserNote';
import { UserPage } from './components/UserPage';

// TODO: add abort controller to cancel request on unmount
export const UserRegistration = () => {
  const [isLoading, withLoading] = useWithLoading();
  const navigate = useNavigate();
  return (
    <UserPage title='Registration'>
      <UserLoginForm
        isLoading={isLoading}
        withName
        onSubmit={async (data) => {
          await withMessage(MESSAGE_KEYS.USER_REGISTER, withLoading(AuthService.register(data)));
          navigate(getHref(ROUTES.login));
        }}
      >
        <UserNote action='login' text='If you have an account you may' />
      </UserLoginForm>
    </UserPage>
  );
};
