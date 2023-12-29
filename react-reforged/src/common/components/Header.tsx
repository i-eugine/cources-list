import { Button, Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import { ROUTES } from '@routing/routes';
import { userStore } from '@store/user.store';
import { getHref } from '@utils/get-href';

import { Logo } from './Logo';

export const Header = observer(function Header() {
  // const { isLarge } = useBreakpoints();

  const { user, logoutUser } = userStore;
  return (
    <Layout.Header className='flex justify-between bg-white px-5 sm:px-10'>
      <Logo />
      {user && (
        <div>
          {user.name || user.email}
          <Link to={getHref(ROUTES.login)}>
            <Button className='ml-2' onClick={logoutUser}>
              LOGOUT
            </Button>
          </Link>
        </div>
      )}{' '}
    </Layout.Header>
  );
});
