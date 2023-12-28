import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTES } from '@routing/routes';
import { getHref } from '@utils/get-href';

const UserNoteActionMap = {
  login: { label: 'Login', href: ROUTES.login },
  register: { label: 'Register', href: ROUTES.registration },
};

type UserNoteProps = {
  text: string;
  action: 'login' | 'register';
};

export const UserNote: React.FC<UserNoteProps> = ({ text, action }) => (
  <p className='text-center'>
    {text}
    <Link to={getHref(UserNoteActionMap[action].href)}>
      <Button className='!px-1' size='small' type='link'>
        {UserNoteActionMap[action].label}
      </Button>
    </Link>
  </p>
);
