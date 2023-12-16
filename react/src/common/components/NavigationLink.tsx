import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavigationLink = ({ to, children }) => (
  <StyledLink to={`/${to}`}>{children}</StyledLink>
);
