import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PageCentered, LoginForm, NavigationLink } from '@components';
import { ILoginRequest } from '@models';
import { ROUTES } from '@routing';
import { useAppDispatch } from '@store/hooks';
import { loginUser } from '@store/slices/user.slice';
import { Heading3 } from '@styles/typography';

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // todo action router dom
  const handleFormSubmit = async (data: ILoginRequest) => {
    await dispatch(loginUser(data));
    navigate(`/${ROUTES.courses}`);
  };

  return (
    <PageCentered>
      <Heading3 $marginBottom={'xl'}>Login</Heading3>

      <LoginForm withName={false} onFormSubmit={handleFormSubmit}>
        <p>
          If you have an account you may{' '}
          <NavigationLink to={ROUTES.registration}>Register</NavigationLink>
        </p>
      </LoginForm>
    </PageCentered>
  );
};
