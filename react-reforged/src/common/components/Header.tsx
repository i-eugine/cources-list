import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router';

import { ROUTES } from '@routing/routes';
import { user } from '@store/signals';
import { getHref } from '@utils/get-href';

import { Logo } from './Logo';

export const Header = () => {
  const navigate = useNavigate();
  console.log(user.value);
  return (
    <Layout.Header className='flex justify-between bg-white px-5 sm:px-10'>
      <Logo />
      {user.value && (
        <div>
          {user.value.name || user.value.email}
          <Button
            className='ml-2'
            onClick={() => {
              localStorage.removeItem('token');
              navigate(getHref(ROUTES.login));
            }}
          >
            LOGOUT
          </Button>
        </div>
      )}{' '}
    </Layout.Header>
  );
};
