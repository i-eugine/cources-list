import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthService, inject } from '@api';
import { PageCentered, LoginForm, NavigationLink } from '@components';
import { ROUTES } from '@routing';
import { Heading3 } from '@styles/typography';

export const Registration = () => {
  const navigate = useNavigate();

  // todo action router dom
  const handleFormSubmit = async (data) => {
    const auth = inject(AuthService);
    await auth.register(data);
    navigate(`/${ROUTES.login}`);
  };

  return (
    <PageCentered>
      <Heading3 $marginBottom={'xl'}>Registration</Heading3>

      <LoginForm onFormSubmit={handleFormSubmit}>
        <p>
          If you have an account you may <NavigationLink to={ROUTES.login}>Login</NavigationLink>
        </p>
      </LoginForm>
    </PageCentered>
  );
};
